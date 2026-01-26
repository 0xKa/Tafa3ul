import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomSpinner } from "@/components/ui/spinner";
import { useAuthStore } from "@/features/auth/authStore";
import CreatePostDialog from "@/features/feed/components/CreatePostDialog";
import PostsList from "@/features/feed/components/PostsList";
import { usePosts } from "@/features/feed/hooks/usePosts";
import ErrorState from "@/shared/components/ErrorState";
import SearchBar from "@/shared/components/SearchBar";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { ArrowUpDown, Menu, Newspaper, Search } from "lucide-react";
import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { GrNew } from "react-icons/gr";
import { IoTime } from "react-icons/io5";
import { LiaCommentDots } from "react-icons/lia";

type SortByOption = "newest" | "oldest" | "mostLiked" | "mostCommented";

const FeedPage = () => {
  const [sortBy, setSortBy] = useState<SortByOption>("newest");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated } = useAuthStore();

  const debouncedSearch = useDebounce(searchQuery, 400);

  const { data, isLoading, isError, error, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } = usePosts(
    10,
    debouncedSearch,
  );

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <ErrorState description="Failed to load posts" error={error} onRetry={refetch} />;
  }

  const posts = data?.pages.flatMap((page) => page.data) ?? [];
  const totalCount = data?.pages[0]?.totalCount ?? 0;

  const sortedPosts = [...posts].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case "mostLiked":
        return b.likesCount - a.likesCount;
      case "mostCommented":
        return b.commentsCount - a.commentsCount;
      case "newest":
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Newspaper className="size-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Feed</h1>
            <p className="text-muted-foreground">{totalCount ? `${totalCount} posts` : "See what's happening"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="hidden md:inline-flex"
          >
            <Search />
            Search
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowUpDown className="size-4" />
                Sort
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuRadioGroup value={sortBy} onValueChange={(value) => setSortBy(value as SortByOption)}>
                  <DropdownMenuRadioItem value="newest">
                    <GrNew />
                    Newest First
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="oldest">
                    <IoTime />
                    Oldest First
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="mostLiked">
                    <GoHeartFill />
                    Most Liked
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="mostCommented">
                    <LiaCommentDots />
                    Most Commented
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {isAuthenticated && (
            <div className="hidden md:block">
              <CreatePostDialog />
            </div>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Toggle actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onSelect={() => setIsSearchOpen((prev) => !prev)}>
                <Search className="size-4" />
                {isSearchOpen ? "Hide Search" : "Search"}
              </DropdownMenuItem>
              {isAuthenticated && <CreatePostDialog triggerInMenu />}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {isSearchOpen && (
        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search posts..."
            leadingIcon={<Search className="size-4" />}
            showClear
            onClear={() => setSearchQuery("")}
          />
        </div>
      )}

      {/* Posts */}
      <PostsList
        posts={sortedPosts}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
};

export default FeedPage;
