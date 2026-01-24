import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/features/auth/authStore";
import LogoutButton from "@/features/auth/components/LogoutButton";

const DashboardPage = () => {
  const user = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Dashboard</CardTitle>
          <CardDescription>Welcome to your protected dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Display user info from Zustand store */}
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">User Information</h3>
            <p>
              <span className="text-muted-foreground">User ID:</span> {user?.id}
            </p>
            <p>
              <span className="text-muted-foreground">Username:</span> {user?.username}
            </p>
          </div>

          {/* Auth status indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Authenticated</span>
          </div>

          <LogoutButton variant="destructive" className="w-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
