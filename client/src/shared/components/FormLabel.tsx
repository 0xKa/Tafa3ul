import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormLabelProps {
  htmlFor: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}

const FormLabel = ({ htmlFor, label, error, className, required }: FormLabelProps) => {
  return (
    <Label htmlFor={htmlFor} className={cn("flex items-center gap-2", className)}>
      <span>{label}</span>
      {required && <span className="text-destructive -ml-1">*</span>}
      {error && <span className="text-xs text-destructive ml-auto">{error}</span>}
    </Label>
  );
};

export default FormLabel;
