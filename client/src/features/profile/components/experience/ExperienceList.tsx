import { Badge } from "@/components/ui/badge";
import { formatDateShort, sortByDate } from "@/lib/utils";
import { Building2 } from "lucide-react";
import type { Experience } from "../../types";

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList = ({ experiences }: ExperienceListProps) => {
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
        <div key={exp.id} className="p-4 rounded-lg border bg-card">
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
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
