import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate, formatDateTime } from "@/lib/utils";
import CopyableLabel from "@/shared/components/CopyableLabel";
import { Separator } from "@radix-ui/react-separator";
import { Briefcase, Calendar, Globe, GraduationCap, Mail, MapPin, User } from "lucide-react";
import { FaTools } from "react-icons/fa";
import InfoField from "../../../shared/components/InfoField";
import type { Profile } from "../types";
import AddSkillDialog from "./AddSkillDialog";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import SkillsList from "./SkillsList";
import { BsAt } from "react-icons/bs";

interface AccountInfoTabProps {
  profile: Profile;
}
const AccountInfoTab = ({ profile }: AccountInfoTabProps) => {
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
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <InfoField icon={BsAt} label="Username" value={profile.user.username} />
              <InfoField icon={Mail} label="Email" value={profile.user.email} />
              <InfoField icon={User} label="First Name" value={profile.firstName} />
              <InfoField icon={User} label="Last Name" value={profile.lastName} />
              <InfoField icon={Globe} label="Country" value={profile.country || "Not set ❗"} />
              <InfoField icon={MapPin} label="Location" value={profile.location || "Not set ❗"} />
              <InfoField icon={Calendar} label="Member Since" value={formatDate(profile.createdAt ?? null)} />
              <InfoField icon={Calendar} label="Last Updated" value={formatDateTime(profile.updatedAt ?? null)} />
            </div>
            <Separator />

            {/* for debugging */}
            <CopyableLabel label="User ID" text={profile.user.id} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="skills">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Skills</CardTitle>
              <CardDescription>Your professional skills and expertise</CardDescription>
            </div>
            <AddSkillDialog />
          </CardHeader>
          <CardContent>
            <SkillsList skills={profile?.skills ?? []} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="experience">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Work Experience</CardTitle>
            <CardDescription>Your professional experience</CardDescription>
          </CardHeader>
          <CardContent>
            <ExperienceList experiences={profile?.experiences ?? []} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="education">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Education</CardTitle>
            <CardDescription>Your educational background</CardDescription>
          </CardHeader>
          <CardContent>
            <EducationList educations={profile?.educations ?? []} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AccountInfoTab;
