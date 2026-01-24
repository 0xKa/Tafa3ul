import { CustomSpinner } from "@/components/ui/spinner";
import ProfilesGrid from "@/features/profile/components/ProfilesGird";
import { useProfiles } from "@/features/profile/hooks/useProfiles";
import ErrorState from "@/shared/components/ErrorState";
import { Users } from "lucide-react";
import { useState } from "react";

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const { data, isLoading, isError, error, refetch } = useProfiles(currentPage, pageSize);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <ErrorState description="Failed to load users" error={error} onRetry={refetch} />;
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const profiles = data?.data.sort((a, b) => a.firstName.localeCompare(b.firstName)) ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Users className="size-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">
            {data?.totalCount ? `${data.totalCount} users found` : "Discover people in our community"}
          </p>
        </div>
      </div>

      {profiles.length === 0 ? (
        <div className="text-center py-12">
          <Users className="size-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-muted-foreground">No users found</h2>
          <p className="text-muted-foreground mt-2">Be the first to create a profile!</p>
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
