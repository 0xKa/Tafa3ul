import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Profile } from "../types";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { User, Briefcase, GraduationCap, Mail, Globe, MapPin, Calendar } from "lucide-react";
import { FaTools } from "react-icons/fa";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import SkillsList from "./SkillsList";
import useCopyToClipboard from "@/shared/hooks/useCopyToClipboard";

interface AccountInfoTabProps {
  profile: Profile;
}
const AccountInfoTab = ({ profile }: AccountInfoTabProps) => {
  const { copyNotificationTimeout, copyToClipboard } = useCopyToClipboard(profile?.user.id!);

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
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <User className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Username</p>
                  <p className="font-medium">{profile?.user.username}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <Mail className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{profile?.user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <User className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">First Name</p>
                  <p className="font-medium">{profile?.firstName || "Not set"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <User className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Last Name</p>
                  <p className="font-medium">{profile?.lastName || "Not set"}</p>
                </div>
              </div>

              {profile?.country && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Globe className="size-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Country</p>
                    <p className="font-medium">{profile.country}</p>
                  </div>
                </div>
              )}

              {profile?.location && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <MapPin className="size-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{profile.location}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <Calendar className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-medium">{formatDate(profile?.createdAt ?? null)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <Calendar className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Last Updated</p>
                  <p className="font-medium">{formatDate(profile?.updatedAt ?? null)}</p>
                </div>
              </div>
            </div>
            <Separator />

            {/* for debugging */}
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <span>User ID: </span>
              <code
                className="bg-muted px-1 py-0.5 rounded hover:cursor-pointer hover:bg-muted/5"
                onClick={copyToClipboard}
              >
                {profile?.user.id}
              </code>
              {copyNotificationTimeout && (
                <span className="text-green-600 dark:text-green-600 animate-in fade-in duration-200">Copied!</span>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Skills</CardTitle>
            <CardDescription>Your professional skills and expertise</CardDescription>
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
