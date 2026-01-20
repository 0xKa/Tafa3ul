import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import AddSkillDialog from "./AddSkillDialog";
import SkillsList from "./SkillsList";
import type { Skill } from "../types";

interface ProfileSkillsCardProps {
  skills: Skill[];
  sortBy?: "name" | "experience";
}

const ProfileSkillsCard = ({ skills, sortBy = "experience" }: ProfileSkillsCardProps) => {
  const sortedSkills =
    sortBy === "experience"
      ? [...skills].sort((a, b) => (b.yearsOfExperience ?? 0) - (a.yearsOfExperience ?? 0))
      : [...skills].sort((a, b) => a.skillName.localeCompare(b.skillName));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Skills</CardTitle>
          <CardDescription>Your professional skills and expertise</CardDescription>
        </div>
        <AddSkillDialog />
      </CardHeader>
      <CardContent>
        <SkillsList skills={sortedSkills} />
      </CardContent>
    </Card>
  );
};

export default ProfileSkillsCard;
