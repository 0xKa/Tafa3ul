import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

interface ProfilePictureProps {
  imgUrl?: string;
  fullName?: string;
}

const ProfilePicture = ({ imgUrl, fullName }: ProfilePictureProps) => {
  return (
    <Avatar className="size-20">
      <AvatarImage src={imgUrl || undefined} alt="Profile Picture" />
      <AvatarFallback className="text-xl bg-primary/20 text-primary ">
        {getInitials(fullName ?? null, "User")}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfilePicture;
