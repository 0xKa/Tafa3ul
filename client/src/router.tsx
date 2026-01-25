import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./layouts/ProtectedRoute";
import PublicOnlyRoute from "./layouts/PublicOnlyRoute";
import RootLayout from "./layouts/RootLayout";
import {
  AboutPage,
  DashboardPage,
  ErrorPage,
  FeedPage,
  LandingPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  SettingsPage,
  UsersPage,
} from "./pages";
import { paths } from "./paths";

export const router = createBrowserRouter([
  {
    path: paths.root,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Public Routes
      { index: true, element: <LandingPage /> },
      { path: paths.public.users, element: <UsersPage /> },
      { path: paths.public.userProfile(":username"), element: <ProfilePage /> },
      { path: paths.public.about, element: <AboutPage /> },

      // Public-Only Routes
      {
        element: <PublicOnlyRoute />,
        children: [
          { path: paths.auth.login, element: <LoginPage /> },
          { path: paths.auth.register, element: <RegisterPage /> },
        ],
      },

      // Protected Routes
      {
        element: <ProtectedRoute />,
        children: [
          { path: paths.protected.dashboard, element: <DashboardPage /> },
          { path: paths.protected.feed, element: <FeedPage /> },
          { path: paths.protected.profile, element: <ProfilePage /> },
          { path: paths.protected.settings, element: <SettingsPage /> },
        ],
      },

      // Error testing routes (dev only)
      {
        path: "test",
        children: [
          {
            path: paths.dev.error500,
            loader: () => {
              throw new Response("Internal Server Error", { status: 500 });
            },
            element: null,
          },
          {
            path: paths.dev.error403,
            loader: () => {
              throw new Response("Forbidden", { status: 403 });
            },
            element: null,
          },
          {
            path: paths.dev.error,
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
