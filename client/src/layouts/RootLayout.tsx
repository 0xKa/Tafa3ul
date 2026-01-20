import { Outlet, useLocation } from "react-router";
import Footer from "../shared/components/Footer";
import Navbar from "../shared/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const RootLayout = () => {
  const location = useLocation();

  const hideFooterPaths = ["/profile", "/dashboard"];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="relative flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Toaster position="top-center" duration={4000} />
        <Outlet />
      </main>
      {shouldHideFooter || <Footer />}
    </div>
  );
};

export default RootLayout;
