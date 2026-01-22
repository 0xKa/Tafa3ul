import { GraduationCap } from "lucide-react";
import type { Education } from "../../types";
import { Badge } from "@/components/ui/badge";
import { formatDateShort, sortByDate } from "@/lib/utils";

interface EducationListProps {
  educations: Education[];
}

const EducationList = ({ educations }: EducationListProps) => {
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
        <div key={edu.id} className="p-4 rounded-lg border bg-card">
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
        </div>
      ))}
    </div>
  );
};

export default EducationList;
