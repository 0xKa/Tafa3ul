import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Education } from "../types";
import EducationList from "./EducationList";

interface ProfileEducationCardProps {
  educations: Education[];
}
const ProfileEducationCard = ({ educations }: ProfileEducationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Education</CardTitle>
        <CardDescription>Your educational background</CardDescription>
      </CardHeader>
      <CardContent>
        <EducationList educations={educations} />
      </CardContent>
    </Card>
  );
};

export default ProfileEducationCard;
