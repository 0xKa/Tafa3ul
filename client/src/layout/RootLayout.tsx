import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = () => {
  const location = useLocation();

  const hideFooterPaths = ["/profile", "/dashboard"];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="relative flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {shouldHideFooter || <Footer />}
    </div>
  );
};

export default RootLayout;
