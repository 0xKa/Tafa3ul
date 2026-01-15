import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./layout/auth/ProtectedRoute";
import PublicOnlyRoute from "./layout/auth/PublicOnlyRoute";
import RootLayout from "./layout/RootLayout";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Public Routes - Anyone can access
      { index: true, element: <LandingPage /> },
      { path: "about", element: <h1>AboutPage</h1> },

      // Public-Only Routes - Only non-authenticated users
      {
        element: <PublicOnlyRoute />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },

      // Protected Routes - Only authenticated users
      {
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          { path: "profile", element: <h1>ProfilePage</h1> },
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
