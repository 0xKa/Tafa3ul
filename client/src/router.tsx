import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <h1>LandingPage</h1> },
      { path: "about", element: <h1>AboutPage</h1> },
    ],
  },
]);
