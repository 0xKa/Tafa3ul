import { ModeToggleButton } from "@/components/theme/mode-toggle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsAuthenticated } from "@/features/auth/authStore";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { cn } from "@/lib/utils";
import { paths } from "@/paths";
import { LogOut, Menu, Sparkles, User, UserRound } from "lucide-react";
import { Link, NavLink } from "react-router";

const publicNavLinks = [
  { href: paths.root, label: "Home" },
  { href: paths.public.about, label: "About" },
];

const authenticatedNavLinks = [
  { href: paths.root, label: "Home" },
  { href: paths.protected.dashboard, label: "Dashboard" },
  { href: paths.protected.feed, label: "Feed" },
  { href: paths.protected.settings, label: "Settings" },
];

const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
  const { logout } = useLogout();
  const navLinks = isAuthenticated ? authenticatedNavLinks : publicNavLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/40">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* logo */}
        <div className="flex flex-1">
          <Link
            to={paths.root}
            className="flex items-center space-x-2"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Tafa3ul</span>
          </Link>
        </div>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center justify-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* right side actions */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggleButton />

          {isAuthenticated ? (
            <>
              <Link to={paths.protected.profile}>
                <Button variant="outline" className="hidden lg:inline-flex">
                  <User className="size-4" />
                </Button>
              </Link>
              <AlertDialog>
                <AlertDialogTrigger className="hidden lg:inline-flex" asChild>
                  <Button variant="ghost">
                    <LogOut className="size-4 mr-1" />
                    Log Out
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Any unsaved changes will be lost. You can log back in at any time.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <LogoutButton />
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ) : (
            <>
              <Link to={paths.auth.login}>
                <Button variant="outline" className="hidden lg:inline-flex">
                  Log In
                </Button>
              </Link>
              <Link to={paths.auth.register}>
                <Button className="hidden lg:inline-flex">Sign Up</Button>
              </Link>
            </>
          )}

          {/* mobile nav menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link to={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              {isAuthenticated ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to={paths.protected.profile}>
                      <UserRound className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logout()}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to={paths.auth.login}>Log In</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={paths.auth.register}>Sign Up</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
