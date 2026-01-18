import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  description?: string;
  error?: Error | null;
  onRetry?: () => void;
  buttonText?: string;
}

const ErrorState = ({
  title = "Error",
  description = "Something went wrong",
  error,
  onRetry,
  buttonText = "Retry",
}: ErrorStateProps) => {
  return (
    <div className="container min-h-[calc(100vh-4rem)] mx-auto px-4 py-8 flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-destructive">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className="text-muted-foreground text-sm">{error.message || "An unexpected error occurred"}</p>}
          {onRetry && (
            <Button onClick={onRetry} variant="outline" className="w-full">
              <RefreshCw className="size-4 mr-2" />
              {buttonText}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorState;
