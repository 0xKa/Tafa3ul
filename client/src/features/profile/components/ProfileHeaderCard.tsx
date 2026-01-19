import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, Link2, Mail, MapPin, Pencil, RefreshCw } from "lucide-react";
import type { Profile } from "../types";
import ProfilePicture from "./ProfilePicture";
import SocialLinks from "./SocialLinks";

interface ProfileHeaderProps {
  profile: Profile;
  isRefetching: boolean;
  onRefetch: () => void;
}

const ProfileHeaderCard = ({ profile, isRefetching, onRefetch }: ProfileHeaderProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <ProfilePicture
              imgUrl={`${import.meta.env.VITE_PROFILE_PIC_BASE_URL}/${profile.user.id}.webp`}
              fullName={profile?.fullName}
            />
            <div>
              <CardTitle className="text-2xl">{profile?.fullName || profile?.user.username}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Mail className="size-3" />
                {profile?.user.email}
              </CardDescription>
              {profile?.location && (
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="size-3" />
                  {profile.location}
                  {profile.country && `, ${profile.country}`}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => onRefetch()} disabled={isRefetching}>
              <RefreshCw className={`size-4 ${isRefetching ? "animate-spin" : ""}`} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                alert("Edit Profile feature is not implemented yet");
              }}
            >
              <Pencil className="size-4 mr-2" />
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
              <FileText className="size-4" />
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
