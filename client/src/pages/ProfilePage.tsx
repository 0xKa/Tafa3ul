import ErrorState from "@/shared/components/ErrorState";
import { CustomSpinner } from "@/components/ui/spinner";
import AccountInfoTab from "@/features/profile/components/AccountInfoTab";
import ProfileHeaderCard from "@/features/profile/components/ProfileHeaderCard";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useParams } from "react-router";

const ProfilePage = () => {
  const { username } = useParams();
  const { data: profile, isLoading, isError, error, refetch, isRefetching } = useProfile(username);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <ErrorState description="Failed to load profile" error={error} onRetry={refetch} />;
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 space-y-6">
      <ProfileHeaderCard
        profile={profile!}
        isRefetching={isRefetching}
        onRefetch={() => refetch()}
        editDisabled={!!username}
      />
      <AccountInfoTab profile={profile!} editDisabled={!!username} />
    </div>
  );
};

export default ProfilePage;
