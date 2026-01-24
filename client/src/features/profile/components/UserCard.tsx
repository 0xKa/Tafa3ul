import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";
import { MapPin, Building2 } from "lucide-react";
import type { Profile } from "../types";
import { Link } from "react-router-dom";
import { paths } from "@/paths";

interface UserCardProps {
  profile: Profile;
}

const UserCard = ({ profile }: UserCardProps) => {
  const profilePicUrl = `${import.meta.env.VITE_PROFILE_PIC_BASE_URL}/${profile.userId}.webp`;

  return (
    <Link to={paths.public.userProfile(profile.user.username)}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full min-h-75">
        <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
          <Avatar className="size-20">
            <AvatarImage src={profilePicUrl} alt={profile.fullName} className="object-cover" />
            <AvatarFallback className="text-xl bg-primary/20 text-primary">
              {getInitials(profile.fullName || profile.user?.username || null, "U")}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-tight">
              {profile.fullName || profile.user?.username || "Anonymous"}
            </h3>
            {profile.user?.username && profile.fullName && (
              <p className="text-sm text-muted-foreground">@{profile.user.username}</p>
            )}
          </div>

          {(profile.company || profile.location) && (
            <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
              {profile.company && (
                <div className="flex items-center gap-1.5">
                  <Building2 className="size-3.5" />
                  <span className="truncate max-w-45">{profile.company}</span>
                </div>
              )}
              {profile.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  <span className="truncate max-w-45">{profile.location}</span>
                </div>
              )}
            </div>
          )}

          {profile.bio && <p className="text-sm text-muted-foreground line-clamp-2">{profile.bio}</p>}
        </CardContent>
      </Card>
    </Link>
  );
};

export default UserCard;
