import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { Building2, Globe, MapPin, Pencil } from "lucide-react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTiktok, SiX, SiYoutube } from "react-icons/si";

import type { Profile } from "../types";

const optionalUrl = z.url("Please enter a valid URL").optional().or(z.literal(""));

const editProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be 50 characters or less"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be 50 characters or less"),
  bio: z.string().max(500, "Bio must be 500 characters or less").optional().or(z.literal("")),
  company: z.string().max(100, "Company must be 100 characters or less").optional().or(z.literal("")),
  website: optionalUrl,
  country: z.string().max(100, "Country must be 100 characters or less").optional().or(z.literal("")),
  location: z.string().max(100, "Location must be 100 characters or less").optional().or(z.literal("")),
  social: z.object({
    twitter: optionalUrl,
    linkedIn: optionalUrl,
    gitHub: optionalUrl,
    youTube: optionalUrl,
    facebook: optionalUrl,
    instagram: optionalUrl,
    tikTok: optionalUrl,
  }),
});

type EditProfileFormData = z.infer<typeof editProfileSchema>;

interface EditProfileDialogButtonProps {
  profile: Profile;
}

const EditProfileDialogButton = ({ profile }: EditProfileDialogButtonProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName: profile?.firstName ?? "",
      lastName: profile?.lastName ?? "",
      bio: profile?.bio ?? "",
      company: profile?.company ?? "",
      website: profile?.website ?? "",
      country: profile?.country ?? "",
      location: profile?.location ?? "",
      social: {
        twitter: profile?.social?.twitter ?? "",
        linkedIn: profile?.social?.linkedIn ?? "",
        gitHub: profile?.social?.gitHub ?? "",
        youTube: profile?.social?.youTube ?? "",
        facebook: profile?.social?.facebook ?? "",
        instagram: profile?.social?.instagram ?? "",
        tikTok: profile?.social?.tikTok ?? "",
      },
    },
  });

  const onSubmit = (data: EditProfileFormData) => {
    console.log("Form submitted:", data);
    // TODO: Add API call to update profile
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Pencil className="size-4 mr-2" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="sm:hidden">
          <Pencil className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Update your profile information. Click save when you're done.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" {...register("firstName")} />
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" {...register("lastName")} />
                  {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us a little about yourself..."
                  className="min-h-24 max-h-40 overflow-y-auto resize-none"
                  {...register("bio")}
                />
                {errors.bio && <p className="text-sm text-destructive">{errors.bio.message}</p>}
              </div>
            </div>

            {/* Work & Location Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground">Work & Location</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building2 className="size-4 text-muted-foreground" />
                    Company
                  </Label>
                  <Input id="company" placeholder="Acme Inc." {...register("company")} />
                  {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="website" className="flex items-center gap-2">
                    <Globe className="size-4 text-muted-foreground" />
                    Website
                  </Label>
                  <Input id="website" type="url" placeholder="https://example.com" {...register("website")} />
                  {errors.website && <p className="text-sm text-destructive">{errors.website.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="country" className="flex items-center gap-2">
                    <Globe className="size-4 text-muted-foreground" />
                    Country
                  </Label>
                  <Input id="country" placeholder="United States" {...register("country")} />
                  {errors.country && <p className="text-sm text-destructive">{errors.country.message}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="size-4 text-muted-foreground" />
                    City / Location
                  </Label>
                  <Input id="location" placeholder="San Francisco, CA" {...register("location")} />
                  {errors.location && <p className="text-sm text-destructive">{errors.location.message}</p>}
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Social Links</h3>
                  <p className="text-sm text-muted-foreground">Manage your social profiles in a separate dialog.</p>
                </div>

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
                        Add links to your social profiles. Leave empty if you don’t want to show it.
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
                            {...register("social.twitter")}
                          />
                          {errors.social?.twitter && (
                            <p className="text-sm text-destructive">{errors.social.twitter.message}</p>
                          )}
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
                            {...register("social.linkedIn")}
                          />
                          {errors.social?.linkedIn && (
                            <p className="text-sm text-destructive">{errors.social.linkedIn.message}</p>
                          )}
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
                            {...register("social.gitHub")}
                          />
                          {errors.social?.gitHub && (
                            <p className="text-sm text-destructive">{errors.social.gitHub.message}</p>
                          )}
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
                            {...register("social.youTube")}
                          />
                          {errors.social?.youTube && (
                            <p className="text-sm text-destructive">{errors.social.youTube.message}</p>
                          )}
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
                            {...register("social.facebook")}
                          />
                          {errors.social?.facebook && (
                            <p className="text-sm text-destructive">{errors.social.facebook.message}</p>
                          )}
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
                            {...register("social.tikTok")}
                          />
                          {errors.social?.tikTok && (
                            <p className="text-sm text-destructive">{errors.social.tikTok.message}</p>
                          )}
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
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialogButton;
