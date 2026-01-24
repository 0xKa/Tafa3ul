import { Button } from "@/components/ui/button";
import { CustomSpinner } from "@/components/ui/spinner";
import CreatePostDialog from "@/features/feed/components/CreatePostDialog";
import PostCard from "@/features/feed/components/PostCard";
import { usePosts } from "@/features/feed/hooks/usePosts";
import ErrorState from "@/shared/components/ErrorState";
import { Loader2, Newspaper } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import { useAuthStore } from "@/features/auth/authStore";

const FeedPage = () => {
  const { isAuthenticated } = useAuthStore();
  const { data, isLoading, isError, error, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } = usePosts(10);

  const observerRef = useRef<IntersectionObserver | null>(null);
  // use callback to prevent recreating function on each render
  const loadMoreRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <ErrorState description="Failed to load posts" error={error} onRetry={refetch} />;
  }

  const posts = data?.pages.flatMap((page) => page.data) ?? [];
  const totalCount = data?.pages[0]?.totalCount ?? 0;

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
        {isAuthenticated && <CreatePostDialog />}
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <Newspaper className="size-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-muted-foreground">No posts yet</h2>
          <p className="text-muted-foreground mt-2">Be the first to share something!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          {/* Infinite scroll trigger */}
          <div ref={loadMoreRef} className="py-4 flex justify-center">
            {isFetchingNextPage && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="size-4 animate-spin" />
                <span>Loading more...</span>
              </div>
            )}
            {!hasNextPage && posts.length > 0 && (
              <p className="text-sm text-muted-foreground">You've reached the end</p>
            )}
          </div>

          {hasNextPage && !isFetchingNextPage && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => fetchNextPage()}>
                Load more
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedPage;
