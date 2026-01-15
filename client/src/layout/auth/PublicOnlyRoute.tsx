import { Navigate, Outlet } from "react-router";
import { useIsAuthenticated, useIsHydrated } from "@/features/auth/authStore";

const PublicOnlyRoute = () => {
  const isAuthenticated = useIsAuthenticated();
  const isHydrated = useIsHydrated();

  // Show loading while Zustand loads from localStorage
  if (!isHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If user is already logged in, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // User is not authenticated -> render public content
  return <Outlet />;
};

export default PublicOnlyRoute;
