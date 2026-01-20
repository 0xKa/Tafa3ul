import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate, formatDateTime } from "@/lib/utils";
import CopyableLabel from "@/shared/components/CopyableLabel";
import InfoField from "@/shared/components/InfoField";
import { Separator } from "@radix-ui/react-separator";
import { Calendar, Globe, Mail, MapPin, User } from "lucide-react";
import { BsAt } from "react-icons/bs";
import type { Profile } from "../types";

interface ProfileInfoCardProps {
  profile: Profile;
}

const ProfileInfoCard = ({ profile }: ProfileInfoCardProps) => {
  return (
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
  );
};

export default ProfileInfoCard;
