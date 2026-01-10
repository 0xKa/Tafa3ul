import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <h1>AboutPage</h1> },

      // error testing routes
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
