import { GoTools } from "react-icons/go";
import type { Skill } from "../types";
import { Badge } from "@/components/ui/badge";
import { CgRemoveR } from "react-icons/cg";
import { useDeleteSkill } from "../hooks/useDeleteSkill";

interface SkillsListProps {
  skills: Skill[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  const { mutate: deleteSkill } = useDeleteSkill();

  if (skills.length === 0) {
    return <p className="text-muted-foreground text-sm">No skills added yet.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(({ id, skillId, skillName, yearsOfExperience }) => (
        <Badge
          key={id}
          variant="secondary"
          className="flex items-center gap-1 px-3 py-1 text-sm hover:scale-110 transition-transform hover:cursor-default "
        >
          <span className="mr-1 text-md">
            <GoTools />
          </span>
          {skillName}
          <span className="ml-1 text-muted-foreground">
            ({yearsOfExperience === 0 ? "<1y" : `${yearsOfExperience}y`})
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteSkill({ skillId });
            }}
            className="ml-1 text-muted-foreground hover:text-destructive transition-colors"
            aria-label={`Remove ${skillName}`}
          >
            <CgRemoveR className="h-4 w-4" />
          </button>
        </Badge>
      ))}
    </div>
  );
};

export default SkillsList;
