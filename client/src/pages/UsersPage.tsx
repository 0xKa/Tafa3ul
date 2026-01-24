import ErrorState from "@/shared/components/ErrorState";
import { CustomSpinner } from "@/components/ui/spinner";
import { useProfiles } from "@/features/profile/hooks/useProfiles";
import UserCard from "@/features/profile/components/UserCard";
import { Users } from "lucide-react";

const UsersPage = () => {
  const { data, isLoading, isError, error, refetch } = useProfiles();

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <ErrorState description="Failed to load users" error={error} onRetry={refetch} />;
  }

  const profiles = data?.data ?? [];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <UserCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
