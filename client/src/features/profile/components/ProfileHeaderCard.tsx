import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, Link2, Mail, MapPin, RefreshCw } from "lucide-react";
import { BsAt } from "react-icons/bs";
import type { Profile } from "../types";
import EditProfileDialogButton from "./EditProfileDialogButton";
import ProfilePicture from "./ProfilePicture";
import SocialLinks from "./social/SocialLinks";
import { GetProfilePicUrl } from "@/lib/utils";

interface ProfileHeaderProps {
  profile: Profile;
  isRefetching: boolean;
  onRefetch: () => void;
  editDisabled?: boolean;
}

const ProfileHeaderCard = ({ profile, isRefetching, onRefetch, editDisabled }: ProfileHeaderProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <ProfilePicture
              imgUrl={GetProfilePicUrl(profile.userId)}
              fullName={profile?.fullName}
              allowEdit={!editDisabled}
            />
            <div>
              <CardTitle className="text-2xl">{profile?.fullName || profile?.user.username}</CardTitle>
              <div>
                <CardDescription className="text-muted-foreground flex items-center gap-1">
                  <BsAt className="size-3.5" />
                  {profile?.user.username}
                </CardDescription>
                <CardDescription className="text-muted-foreground flex items-center gap-1 mt-0.5">
                  <Mail className="size-3.5" />
                  {profile?.user.email}
                </CardDescription>
                {profile?.location && (
                  <CardDescription className="text-muted-foreground flex items-center gap-1 mt-0.5">
                    <MapPin className="size-3.5" />
                    {profile.location}
                  </CardDescription>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-2 self-start">
            <Button variant="ghost" size="icon" onClick={() => onRefetch()} disabled={isRefetching}>
              <RefreshCw className={`size-4 ${isRefetching ? "animate-spin" : ""}`} />
            </Button>
            {!editDisabled && <EditProfileDialogButton profile={profile} />}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Bio */}
        {profile?.bio && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FileText className="size-4" />
              Bio
            </div>
            <p className="indent-4 leading-7 text-muted-foreground">{profile.bio}</p>
          </div>
        )}

        {/* Company & Website */}
        {(profile?.company || profile?.website) && (
          <div className="flex flex-wrap gap-4">
            {profile.company && (
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="size-4 text-muted-foreground" />
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
                <Link2 className="size-4" />
                {profile.website}
              </a>
            )}
          </div>
        )}

        {/* Social Links */}
        {profile?.social && <SocialLinks social={profile.social} />}
      </CardContent>
    </Card>
  );
};

export default ProfileHeaderCard;
