import { GoTools } from "react-icons/go";
import type { Skill } from "../types";
import { Badge } from "@/components/ui/badge";

interface SkillsListProps {
  skills: Skill[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  if (skills.length === 0) {
    return <p className="text-muted-foreground text-sm">No skills added yet.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge
          key={skill.id}
          variant="secondary"
          className="px-3 py-1 text-sm hover:scale-110 transition-transform hover:cursor-default"
        >
          <span className="mr-1 text-md">
            <GoTools />
          </span>
          {skill.skillName}
          <span className="ml-1 text-muted-foreground">
            ({skill.yearsOfExperience === 0 ? "<1y" : `${skill.yearsOfExperience}y`})
          </span>
        </Badge>
      ))}
    </div>
  );
};

export default SkillsList;
