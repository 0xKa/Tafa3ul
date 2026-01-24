import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Education } from "../../types";
import AddEditEducationDialog from "./AddEditEducationDialog";
import EducationList from "./EducationList";

interface ProfileEducationCardProps {
  educations: Education[];
  editDisabled?: boolean;
}
const ProfileEducationCard = ({ educations, editDisabled }: ProfileEducationCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Education</CardTitle>
          <CardDescription>Your educational background</CardDescription>
        </div>
        {!editDisabled && <AddEditEducationDialog />}
      </CardHeader>
      <CardContent>
        <EducationList educations={educations} editDisabled={editDisabled} />
      </CardContent>
    </Card>
  );
};

export default ProfileEducationCard;
