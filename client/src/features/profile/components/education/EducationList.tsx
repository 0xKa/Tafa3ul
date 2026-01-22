import { Badge } from "@/components/ui/badge";
import { formatDateShort, sortByDate } from "@/lib/utils";
import { GraduationCap } from "lucide-react";
import { CgRemoveR } from "react-icons/cg";
import { toast } from "sonner";
import { useDeleteEducation } from "../../hooks/useDeleteEducation";
import type { Education } from "../../types";

interface EducationListProps {
  educations: Education[];
}

const EducationList = ({ educations }: EducationListProps) => {
  const { mutate: deleteEducation } = useDeleteEducation();

  if (educations.length === 0) {
    return <p className="text-muted-foreground text-sm">No education added yet.</p>;
  }

  const sortedEducations = sortByDate(
    educations,
    (e) => e.endDate,
    "desc",
    (e) => e.isCurrentlyStudyingHere,
  );

  return (
    <div className="space-y-4">
      {sortedEducations.map((edu) => (
        <div key={edu.id} className="p-4 rounded-lg border bg-card relative">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-sm text-muted-foreground">{edu.fieldOfStudy}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <GraduationCap className="h-3 w-3" />
                {edu.institution}
              </p>
            </div>
            {edu.isCurrentlyStudyingHere && (
              <Badge variant="default" className="text-xs">
                Current
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {formatDateShort(edu.startDate)} - {edu.isCurrentlyStudyingHere ? "Present" : formatDateShort(edu.endDate)}
          </p>
          {edu.description && <p className="text-sm mt-2">{edu.description}</p>}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteEducation(
                { educationId: edu.id },
                {
                  onSuccess: () => {
                    toast.success("Education has been removed from your profile.");
                  },
                  onError: () => {
                    toast.error("Failed to delete education", { duration: 5000 });
                  },
                },
              );
            }}
            className="absolute bottom-2 right-2 text-muted-foreground hover:text-destructive transition-colors"
            aria-label={`Remove ${edu.degree}`}
          >
            <CgRemoveR className="size-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default EducationList;
