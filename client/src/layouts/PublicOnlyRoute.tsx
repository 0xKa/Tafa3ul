import { Navigate, Outlet } from "react-router";
import { useIsAuthenticated, useIsHydrated } from "@/features/auth/authStore";
import { CustomSpinner } from "@/components/ui/spinner";
import { paths } from "@/paths";

const PublicOnlyRoute = () => {
  const isAuthenticated = useIsAuthenticated();
  const isHydrated = useIsHydrated();

  // Show loading while Zustand loads from localStorage
  if (!isHydrated) {
    return <CustomSpinner />;
  }

  // If user is already logged in, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to={paths.protected.dashboard} replace />;
  }

  // User is not authenticated -> render public content
  return <Outlet />;
};

export default PublicOnlyRoute;
