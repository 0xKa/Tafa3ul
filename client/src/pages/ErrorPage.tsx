import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  const error = useRouteError();

  const getErrorMessages = () => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return {
          h1Message: "404",
          h2Message: "Page not found",
          pMessage:
            "Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.",
        };
      } else {
        return {
          h1Message: error.status.toString(),
          h2Message: error.statusText || "An error occurred",
          pMessage: "An unexpected error has occurred. Please try again later.",
        };
      }
    } else {
      return {
        h1Message: "Error",
        h2Message: "Something went wrong",
        pMessage: "An unexpected error has occurred. Please try again later.",
      };
    }
  };

  const { h1Message, h2Message, pMessage } = getErrorMessages();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">{h1Message}</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight">{h2Message}</h2>
        <p className="mt-4 text-muted-foreground">{pMessage}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
