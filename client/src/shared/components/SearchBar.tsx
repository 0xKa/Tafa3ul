import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import type { ReactNode } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  leadingIcon?: ReactNode;
  showClear?: boolean;
  onClear?: () => void;
  clearButtonAriaLabel?: string;
};

const SearchBar = ({
  value,
  onChange,
  placeholder,
  className,
  inputClassName,
  leadingIcon,
  showClear = false,
  onClear,
  clearButtonAriaLabel = "Clear search",
}: SearchBarProps) => {
  const shouldShowClear = showClear && value.trim().length > 0 && onClear;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex-1">
        {leadingIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{leadingIcon}</span>
        )}
        <Input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={cn(leadingIcon ? "pl-9" : "", inputClassName)}
        />
      </div>

      {shouldShowClear && (
        <Button
          onClick={onClear}
          className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm bg-primary hover:bg-primary/50"
          aria-label={clearButtonAriaLabel}
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
