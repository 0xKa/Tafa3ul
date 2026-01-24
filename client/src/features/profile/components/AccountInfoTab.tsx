import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";
import { FaTools } from "react-icons/fa";
import type { Profile } from "../types";
import ProfileEducationCard from "./education/ProfileEducationCard";
import ProfileExperienceCard from "./experience/ProfileExperienceCard";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileSkillsCard from "./skills/ProfileSkillsCard";

interface AccountInfoTabProps {
  profile: Profile;
  editDisabled?: boolean;
}
const AccountInfoTab = ({ profile, editDisabled }: AccountInfoTabProps) => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="about">
          <User className="size-4 mr-2" />
          About
        </TabsTrigger>
        <TabsTrigger value="skills">
          <FaTools className="size-4 mr-2" />
          Skills
        </TabsTrigger>
        <TabsTrigger value="experience">
          <Briefcase className="size-4 mr-2" />
          Experience
        </TabsTrigger>
        <TabsTrigger value="education">
          <GraduationCap className="size-4 mr-2" />
          Education
        </TabsTrigger>
      </TabsList>

      <TabsContent value="about">
        <ProfileInfoCard profile={profile} />
      </TabsContent>

      <TabsContent value="skills">
        <ProfileSkillsCard skills={profile.skills} editDisabled={editDisabled} />
      </TabsContent>

      <TabsContent value="experience">
        <ProfileExperienceCard experiences={profile.experiences} editDisabled={editDisabled} />
      </TabsContent>

      <TabsContent value="education">
        <ProfileEducationCard educations={profile.educations} editDisabled={editDisabled} />
      </TabsContent>
    </Tabs>
  );
};

export default AccountInfoTab;
