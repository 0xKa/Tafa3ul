import { useProfile } from "@/features/profile/hooks/useProfile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CustomSpinner } from "@/components/ui/spinner";
import { User, Mail, Calendar, RefreshCw } from "lucide-react";

const ProfilePage = () => {
  const { data: profile, isLoading, isError, error, refetch, isRefetching } = useProfile();

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>Failed to load profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{error?.message || "An unexpected error occurred"}</p>
            <Button onClick={() => refetch()} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={() => refetch()} disabled={isRefetching}>
              <RefreshCw className={`h-4 w-4 ${isRefetching ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Avatar Placeholder */}
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profile?.fullName || profile?.user.username}</h2>
              <p className="text-muted-foreground">{profile?.user.email}</p>
            </div>
          </div>

          <Separator />

          {/* Profile Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Account Details</h3>

            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Username</p>
                  <p className="font-medium">{profile?.user.username}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{profile?.user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-medium">
                    {profile?.createdAt
                      ? new Date(profile.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* User ID (for debugging/reference) */}
          <div className="text-xs text-muted-foreground">
            <span>User ID: </span>
            <code className="bg-muted px-1 py-0.5 rounded">{profile?.id}</code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
