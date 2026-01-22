import { Badge } from "@/components/ui/badge";
import { formatDateShort, sortByDate } from "@/lib/utils";
import { Building2 } from "lucide-react";
import { CgRemoveR } from "react-icons/cg";
import { toast } from "sonner";
import { useDeleteExperience } from "../../hooks/useDeleteExperience";
import type { Experience } from "../../types";

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList = ({ experiences }: ExperienceListProps) => {
  const { mutate: deleteExperience } = useDeleteExperience();

  if (experiences.length === 0) {
    return <p className="text-muted-foreground text-sm">No experience added yet.</p>;
  }

  const sortedExperiences = sortByDate(
    experiences,
    (e) => e.endDate,
    "desc",
    (e) => e.isCurrentlyWorkingHere,
  );

  return (
    <div className="space-y-4">
      {sortedExperiences.map((exp) => (
        <div key={exp.id} className="p-4 rounded-lg border bg-card relative">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold">{exp.jobTitle}</h4>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                {exp.company}
              </p>
            </div>
            {exp.isCurrentlyWorkingHere && (
              <Badge variant="default" className="text-xs">
                Current
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {formatDateShort(exp.startDate)} - {exp.isCurrentlyWorkingHere ? "Present" : formatDateShort(exp.endDate)}
          </p>
          {exp.description && <p className="text-sm mt-2">{exp.description}</p>}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteExperience(
                { experienceId: exp.id },
                {
                  onSuccess: () => {
                    toast.success("Experience has been removed from your profile.");
                  },
                  onError: () => {
                    toast.error("Failed to delete experience", { duration: 5000 });
                  },
                },
              );
            }}
            className="absolute bottom-2 right-2 text-muted-foreground hover:text-destructive transition-colors"
            aria-label={`Remove ${exp.jobTitle}`}
          >
            <CgRemoveR className="size-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
