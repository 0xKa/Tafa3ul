import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomSpinner } from "@/components/ui/spinner";
import ProfilesGrid from "@/features/profile/components/ProfilesGird";
import { useProfiles } from "@/features/profile/hooks/useProfiles";
import ErrorState from "@/shared/components/ErrorState";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { Search, Users, X } from "lucide-react";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    setCurrentPage(1); // reset to first page on new search
  }, [debouncedSearch]);

  const { data, isLoading, isError, error, refetch } = useProfiles(currentPage, pageSize, debouncedSearch);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const profiles = data?.data ?? [];
  const totalPages = data?.totalPages ?? 0;

  if (isLoading) return <CustomSpinner />;

  if (isError) {
    return <ErrorState description="Failed to load users" error={error} onRetry={refetch} />;
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-5">
        <Users className="size-8 text-primary" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">
            {data?.totalCount ? `${data.totalCount} users found` : "Discover people in our community"}
          </p>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by username or name..."
            className="pl-9"
          />
        </div>

        {search.trim().length > 0 && (
          <Button
            onClick={() => setSearch("")}
            className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm bg-primary hover:bg-primary/50"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </Button>
        )}
      </div>

      {profiles.length === 0 ? (
        <div className="text-center py-12">
          <Users className="size-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-muted-foreground">No users found</h2>
          <p className="text-muted-foreground mt-2">Try a different search term.</p>
        </div>
      ) : (
        <ProfilesGrid
          profiles={profiles}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default UsersPage;
