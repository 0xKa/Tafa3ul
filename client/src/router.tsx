import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>404, Not Found</h1>,
    children: [
      { index: true, element: <h1>LandingPage</h1> },
      { path: "about", element: <h1>AboutPage</h1> },
    ],
  },
]);
