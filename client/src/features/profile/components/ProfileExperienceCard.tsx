import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ExperienceList from "./ExperienceList";
import type { Experience } from "../types";

interface ProfileExperienceCardProps {
  experiences: Experience[];
}

const ProfileExperienceCard = ({ experiences }: ProfileExperienceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Work Experience</CardTitle>
        <CardDescription>Your professional experience</CardDescription>
      </CardHeader>
      <CardContent>
        <ExperienceList experiences={experiences} />
      </CardContent>
    </Card>
  );
};

export default ProfileExperienceCard;
