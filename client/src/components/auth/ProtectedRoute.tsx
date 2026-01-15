import { Navigate, Outlet, useLocation } from "react-router";
import { useIsAuthenticated, useIsHydrated } from "@/features/auth/authStore";

const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();
  const isHydrated = useIsHydrated();
  const location = useLocation();

  // Show loading while Zustand loads from localStorage
  // This prevents flash of login page on refresh
  if (!isHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  // Store the attempted URL so we can redirect back after login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User is authenticated -> render the protected content
  return <Outlet />;
};

export default ProtectedRoute;
