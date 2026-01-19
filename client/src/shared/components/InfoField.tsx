import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface InfoFieldProps {
  icon: LucideIcon | IconType;
  label: string;
  value: string;
}

const InfoField = ({ icon: Icon, label, value }: InfoFieldProps) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
      <Icon className="size-5 text-muted-foreground" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default InfoField;
