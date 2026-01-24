import { Button } from "@/components/ui/button";
import { useLogout } from "../hooks/useLogout";
import { cn } from "@/lib/utils";
import { paths } from "@/paths";

interface LogoutButtonProps {
  className?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
}

const LogoutButton = ({ variant, className }: LogoutButtonProps) => {
  const { logout, isPending } = useLogout();
  return (
    <Button
      onClick={() => logout(paths.auth.login)}
      disabled={isPending}
      variant={variant || null}
      className={cn(className)}
    >
      {isPending ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default LogoutButton;
