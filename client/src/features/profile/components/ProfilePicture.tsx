import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getInitials } from "@/lib/utils";
import { Pencil, RefreshCw } from "lucide-react";
import { useRef, useState, type ChangeEvent } from "react";
import { useUploadProfilePicture } from "../hooks/useUploadProfilePicture";

interface ProfilePictureProps {
  fullName: string;
  imgUrl?: string;
  size?: number;
  allowEdit?: boolean;
}

// technique used to force image refresh by appending a cache buster query param
const withCacheBuster = (url: string, value: number) => {
  if (!value) return url;
  return url.includes("?") ? `${url}&v=${value}` : `${url}?v=${value}`;
};

const ProfilePicture = ({ imgUrl, fullName, size = 20, allowEdit }: ProfilePictureProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [cacheBuster, setCacheBuster] = useState(0);
  const { mutateAsync: uploadAsync, isPending: isUploading } = useUploadProfilePicture();

  const onPickPicture = () => {
    fileInputRef.current?.click();
  };

  const onFileSelected = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      await uploadAsync(file);
      setCacheBuster(Date.now()); // Update cache buster to force image refresh
    } finally {
      e.target.value = "";
    }
  };

  return (
    <div className="relative inline-block">
      <Avatar className={`size-${size}`}>
        <AvatarImage
          src={imgUrl ? withCacheBuster(imgUrl, cacheBuster) : undefined}
          alt="Profile Picture"
          className="object-fill"
        />
        <AvatarFallback className="text-xl bg-primary/20 text-primary">{getInitials(fullName)}</AvatarFallback>
      </Avatar>

      {allowEdit && (
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={onFileSelected} />
      )}

      {allowEdit && (
        <Button
          type="button"
          variant="default"
          size="icon"
          className="absolute -bottom-1 -right-2 size-7 rounded-full shadow-sm bg-primary/30 hover:bg-primary/60 text-white/80"
          onClick={onPickPicture}
          disabled={isUploading}
          aria-label="Edit profile picture"
          title="Edit profile picture"
        >
          {isUploading ? <RefreshCw className="size-3.5 animate-spin" /> : <Pencil className="size-3.5" />}
        </Button>
      )}
    </div>
  );
};

export default ProfilePicture;
