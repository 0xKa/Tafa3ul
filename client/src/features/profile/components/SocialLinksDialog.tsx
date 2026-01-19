import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTiktok, SiX, SiYoutube } from "react-icons/si";

import type { EditProfileFormData } from "../schemas/editProfileSchema";

interface SocialLinksDialogProps {
  register: UseFormRegister<EditProfileFormData>;
  errors: FieldErrors<EditProfileFormData>;
  disabled?: boolean;
}

const SocialLinksDialog = ({ register, errors, disabled }: SocialLinksDialogProps) => {
  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          Edit social links
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Social links</DialogTitle>
          <DialogDescription>
            Add links to your social profiles. Leave empty if you don't want to show it.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="twitter" className="flex items-center gap-2">
                <SiX className="size-4 text-muted-foreground" />
                Twitter / X
              </Label>
              <Input
                id="twitter"
                type="url"
                placeholder="https://twitter.com/username"
                disabled={disabled}
                {...register("social.twitter")}
              />
              {errors.social?.twitter && <p className="text-sm text-destructive">{errors.social.twitter.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="linkedIn" className="flex items-center gap-2">
                <SiLinkedin className="size-4 text-muted-foreground" />
                LinkedIn
              </Label>
              <Input
                id="linkedIn"
                type="url"
                placeholder="https://linkedin.com/in/username"
                disabled={disabled}
                {...register("social.linkedIn")}
              />
              {errors.social?.linkedIn && <p className="text-sm text-destructive">{errors.social.linkedIn.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="gitHub" className="flex items-center gap-2">
                <SiGithub className="size-4 text-muted-foreground" />
                GitHub
              </Label>
              <Input
                id="gitHub"
                type="url"
                placeholder="https://github.com/username"
                disabled={disabled}
                {...register("social.gitHub")}
              />
              {errors.social?.gitHub && <p className="text-sm text-destructive">{errors.social.gitHub.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="youTube" className="flex items-center gap-2">
                <SiYoutube className="size-4 text-muted-foreground" />
                YouTube
              </Label>
              <Input
                id="youTube"
                type="url"
                placeholder="https://youtube.com/@channel"
                disabled={disabled}
                {...register("social.youTube")}
              />
              {errors.social?.youTube && <p className="text-sm text-destructive">{errors.social.youTube.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="facebook" className="flex items-center gap-2">
                <SiFacebook className="size-4 text-muted-foreground" />
                Facebook
              </Label>
              <Input
                id="facebook"
                type="url"
                placeholder="https://facebook.com/username"
                disabled={disabled}
                {...register("social.facebook")}
              />
              {errors.social?.facebook && <p className="text-sm text-destructive">{errors.social.facebook.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="instagram" className="flex items-center gap-2">
                <SiInstagram className="size-4 text-muted-foreground" />
                Instagram
              </Label>
              <Input
                id="instagram"
                type="url"
                placeholder="https://instagram.com/username"
                disabled={disabled}
                {...register("social.instagram")}
              />
              {errors.social?.instagram && (
                <p className="text-sm text-destructive">{errors.social.instagram.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="tikTok" className="flex items-center gap-2">
                <SiTiktok className="size-4 text-muted-foreground" />
                TikTok
              </Label>
              <Input
                id="tikTok"
                type="url"
                placeholder="https://tiktok.com/@username"
                disabled={disabled}
                {...register("social.tikTok")}
              />
              {errors.social?.tikTok && <p className="text-sm text-destructive">{errors.social.tikTok.message}</p>}
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SocialLinksDialog;
