import { Outlet, useLocation } from "react-router";
import Footer from "../shared/components/Footer";
import Navbar from "../shared/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { paths } from "@/paths";

const RootLayout = () => {
  const location = useLocation();

  const showFooterPaths: string[] = [paths.root, ...Object.values(paths.public)];
  const shouldShowFooter = showFooterPaths.includes(location.pathname);

  return (
    <div className="relative flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Toaster position="top-center" duration={4000} />
        <Outlet />
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default RootLayout;
