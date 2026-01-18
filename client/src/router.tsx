import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./layout/auth/ProtectedRoute";
import PublicOnlyRoute from "./layout/auth/PublicOnlyRoute";
import RootLayout from "./layout/RootLayout";
import { AboutPage, DashboardPage, ErrorPage, LandingPage, LoginPage, ProfilePage, RegisterPage } from "./pages";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Public Routes
      { index: true, element: <LandingPage /> },
      { path: "about", element: <AboutPage /> },

      // Public-Only Routes
      {
        element: <PublicOnlyRoute />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },

      // Protected Routes
      {
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          { path: "profile", element: <ProfilePage /> },
          { path: "settings", element: <h1>SettingsPage</h1> },
        ],
      },

      // Error testing routes (dev only)
      {
        path: "test",
        children: [
          {
            path: "500",
            loader: () => {
              throw new Response("Internal Server Error", { status: 500 });
            },
            element: null,
          },
          {
            path: "403",
            loader: () => {
              throw new Response("Forbidden", { status: 403 });
            },
            element: null,
          },
          {
            path: "error",
            loader: () => {
              throw new Error("Something went wrong!");
            },
            element: null,
          },
        ],
      },
    ],
  },
]);
