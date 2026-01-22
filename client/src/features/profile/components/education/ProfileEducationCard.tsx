import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Education } from "../../types";
import AddEditEducationDialog from "./AddEditEducationDialog";
import EducationList from "./EducationList";

interface ProfileEducationCardProps {
  educations: Education[];
}
const ProfileEducationCard = ({ educations }: ProfileEducationCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Education</CardTitle>
          <CardDescription>Your educational background</CardDescription>
        </div>
        <AddEditEducationDialog />
      </CardHeader>
      <CardContent>
        <EducationList educations={educations} />
      </CardContent>
    </Card>
  );
};

export default ProfileEducationCard;
