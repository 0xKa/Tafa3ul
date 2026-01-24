import { Navigate, Outlet, useLocation } from "react-router";
import { useIsAuthenticated, useIsHydrated } from "@/features/auth/authStore";
import { CustomSpinner } from "@/components/ui/spinner";
import { paths } from "@/paths";

const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();
  const isHydrated = useIsHydrated();
  const location = useLocation();

  // Show loading while Zustand loads from localStorage
  // This prevents flash of login page on refresh
  if (!isHydrated) {
    return <CustomSpinner />;
  }

  // If not authenticated, redirect to login
  // Store the attempted URL so we can redirect back after login
  if (!isAuthenticated) {
    return <Navigate to={paths.auth.login} state={{ from: location }} replace />;
  }

  // User is authenticated -> render the protected content
  return <Outlet />;
};

export default ProtectedRoute;
