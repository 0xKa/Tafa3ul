import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CustomSpinner } from "@/components/ui/spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsList from "@/features/profile/components/SkillsList";
import SocialLinks from "@/features/profile/components/SocialLinks";
import { useProfile } from "@/features/profile/hooks/useProfile";
import type { Education, Experience } from "@/features/profile/types";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { formatDate, formatDateShort, getInitials } from "@/lib/utils";
import {
  Briefcase,
  Building2,
  Calendar,
  FileText,
  Globe,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Pencil,
  RefreshCw,
  User,
} from "lucide-react";
import { FaTools } from "react-icons/fa";

// Experience Component
const ExperienceList = ({ experiences }: { experiences: Experience[] }) => {
  if (experiences.length === 0) {
    return <p className="text-muted-foreground text-sm">No experience added yet.</p>;
  }

  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div key={exp.id} className="p-4 rounded-lg border bg-card">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold">{exp.jobTitle}</h4>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                {exp.company}
              </p>
            </div>
            {exp.isCurrentlyWorkingHere && (
              <Badge variant="default" className="text-xs">
                Current
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {formatDateShort(exp.startDate)} - {exp.isCurrentlyWorkingHere ? "Present" : formatDateShort(exp.endDate)}
          </p>
          {exp.description && <p className="text-sm mt-2">{exp.description}</p>}
        </div>
      ))}
    </div>
  );
};

// Education Component
const EducationList = ({ educations }: { educations: Education[] }) => {
  if (educations.length === 0) {
    return <p className="text-muted-foreground text-sm">No education added yet.</p>;
  }

  return (
    <div className="space-y-4">
      {educations.map((edu) => (
        <div key={edu.id} className="p-4 rounded-lg border bg-card">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-sm text-muted-foreground">{edu.fieldOfStudy}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <GraduationCap className="h-3 w-3" />
                {edu.institution}
              </p>
            </div>
            {edu.isCurrentlyStudyingHere && (
              <Badge variant="default" className="text-xs">
                Current
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {formatDateShort(edu.startDate)} - {edu.isCurrentlyStudyingHere ? "Present" : formatDateShort(edu.endDate)}
          </p>
          {edu.description && <p className="text-sm mt-2">{edu.description}</p>}
        </div>
      ))}
    </div>
  );
};

const ProfilePage = () => {
  const { data: profile, isLoading, isError, error, refetch, isRefetching } = useProfile();
  const { copyNotificationTimeout, copyToClipboard } = useCopyToClipboard(profile?.user.id!);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>Failed to load profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{error?.message || "An unexpected error occurred"}</p>
            <Button onClick={() => refetch()} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container min-h-[calc(100vh-4rem)] mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-xl bg-primary/10 text-primary">
                    {getInitials(profile?.fullName ?? null, profile?.user.username ?? "")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">{profile?.fullName || profile?.user.username}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    {profile?.user.email}
                  </CardDescription>
                  {profile?.location && (
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {profile.location}
                      {profile.country && `, ${profile.country}`}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => refetch()} disabled={isRefetching}>
                  <RefreshCw className={`h-4 w-4 ${isRefetching ? "animate-spin" : ""}`} />
                </Button>
                <Button variant="outline" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Bio */}
            {profile?.bio && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <FileText className="h-4 w-4" />
                  About
                </div>
                <p className="text-muted-foreground">{profile.bio}</p>
              </div>
            )}

            {/* Company & Website */}
            {(profile?.company || profile?.website) && (
              <div className="flex flex-wrap gap-4">
                {profile.company && (
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span>{profile.company}</span>
                  </div>
                )}
                {profile.website && (
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Link2 className="h-4 w-4" />
                    {profile.website}
                  </a>
                )}
              </div>
            )}

            {/* Social Links */}
            {profile?.social && <SocialLinks social={profile.social} />}
          </CardContent>
        </Card>

        {/* Tabs for Details */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">
              <User className="h-4 w-4 mr-2" />
              About
            </TabsTrigger>
            <TabsTrigger value="skills">
              <FaTools className="h-4 w-4 mr-2" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience">
              <Briefcase className="h-4 w-4 mr-2" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="h-4 w-4 mr-2" />
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
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Username</p>
                      <p className="font-medium">{profile?.user.username}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{profile?.user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">First Name</p>
                      <p className="font-medium">{profile?.firstName || "Not set"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Last Name</p>
                      <p className="font-medium">{profile?.lastName || "Not set"}</p>
                    </div>
                  </div>

                  {profile?.country && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Country</p>
                        <p className="font-medium">{profile.country}</p>
                      </div>
                    </div>
                  )}

                  {profile?.location && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{profile.location}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-medium">{formatDate(profile?.createdAt ?? null)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
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
      </div>
    </div>
  );
};

export default ProfilePage;
