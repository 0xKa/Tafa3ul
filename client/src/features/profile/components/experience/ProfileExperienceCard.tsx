import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ExperienceList from "./ExperienceList";
import type { Experience } from "../../types";
import AddExperienceDialog from "./AddEditExperienceDialog";

interface ProfileExperienceCardProps {
  experiences: Experience[];
  editDisabled?: boolean;
}

const ProfileExperienceCard = ({ experiences, editDisabled }: ProfileExperienceCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Work Experience</CardTitle>
          <CardDescription>Your professional experience</CardDescription>
        </div>
        {!editDisabled && <AddExperienceDialog />}
      </CardHeader>
      <CardContent>
        <ExperienceList experiences={experiences} editDisabled={editDisabled} />
      </CardContent>
    </Card>
  );
};

export default ProfileExperienceCard;
