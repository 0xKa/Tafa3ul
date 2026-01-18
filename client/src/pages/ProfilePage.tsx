import ErrorState from "@/components/ErrorState";
import { CustomSpinner } from "@/components/ui/spinner";
import AccountInfoTab from "@/features/profile/components/AccountInfoTab";
import ProfileHeaderCard from "@/features/profile/components/ProfileHeaderCard";
import { useProfile } from "@/features/profile/hooks/useProfile";

const ProfilePage = () => {
  const { data: profile, isLoading, isError, error, refetch, isRefetching } = useProfile();

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <ErrorState description="Failed to load profile" error={error} onRetry={refetch} />;
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 space-y-6">
      <ProfileHeaderCard profile={profile!} isRefetching={isRefetching} onRefetch={() => refetch()} />
      <AccountInfoTab profile={profile!} />
    </div>
  );
};

export default ProfilePage;
