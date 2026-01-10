import { Link, NavLink } from "react-router";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggleButton } from "@/components/theme/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/40">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* logo */}
        <div className="flex flex-1">
          <Link
            to="/"
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
                  isActive ? "text-primary" : "text-muted-foreground"
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
          <Link to="/login">
            <Button variant="outline" className="hidden lg:inline-flex">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="hidden lg:inline-flex">Sign Up</Button>
          </Link>

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
              <DropdownMenuItem asChild>
                <Link to="/register">Sign Up</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/login">Log In</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
