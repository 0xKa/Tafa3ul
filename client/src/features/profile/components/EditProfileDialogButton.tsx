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
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Globe, MapPin, Pencil } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useEditProfile } from "../hooks/useEditProfile";
import { editProfileSchema, type EditProfileFormData } from "../schemas/editProfileSchema";
import type { Profile } from "../types";
import CountriesCombobox from "./CountriesCombobox";
import SocialLinksDialog from "./SocialLinksDialog";
import { toast } from "sonner";

interface EditProfileDialogButtonProps {
  profile: Profile;
}

const EditProfileDialogButton = ({ profile }: EditProfileDialogButtonProps) => {
  const [open, setOpen] = useState(false);
  const editMutation = useEditProfile();

  const profileToDefaultValues = (p: Profile): EditProfileFormData => ({
    firstName: p?.firstName ?? "",
    lastName: p?.lastName ?? "",
    bio: p?.bio ?? "",
    company: p?.company ?? "",
    website: p?.website ?? "",
    country: p?.country ?? "",
    location: p?.location ?? "",
    social: {
      twitter: p?.social?.twitter ?? "",
      linkedIn: p?.social?.linkedIn ?? "",
      gitHub: p?.social?.gitHub ?? "",
      youTube: p?.social?.youTube ?? "",
      facebook: p?.social?.facebook ?? "",
      instagram: p?.social?.instagram ?? "",
      tikTok: p?.social?.tikTok ?? "",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: profileToDefaultValues(profile),
  });

  const onSubmit = async (data: EditProfileFormData) => {
    const updatedProfile = await editMutation.mutateAsync(data, {
      onSuccess: () => {
        toast.success("Profile has been updated successfully.");
      },
      onError: () => {
        toast.error("Failed to update profile");
      },
    });
    reset(profileToDefaultValues(updatedProfile));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
                  <Input id="firstName" placeholder="Reda" {...register("firstName")} />
                  <p className="text-sm text-destructive min-h-5">{errors.firstName?.message}</p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Hilal" {...register("lastName")} />
                  <p className="text-sm text-destructive min-h-5">{errors.lastName?.message}</p>
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
                <p className="text-sm text-destructive min-h-5">{errors.bio?.message}</p>
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
                  <p className="text-sm text-destructive min-h-5">{errors.company?.message}</p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="website" className="flex items-center gap-2">
                    <Globe className="size-4 text-muted-foreground" />
                    Website
                  </Label>
                  <Input id="website" type="url" placeholder="https://example.com" {...register("website")} />
                  <p className="text-sm text-destructive min-h-5">{errors.website?.message}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="country" className="flex items-center gap-2">
                    <Globe className="size-4 text-muted-foreground" />
                    Country
                  </Label>
                  <Controller
                    control={control}
                    name="country"
                    render={({ field }) => (
                      <CountriesCombobox
                        value={field.value ?? "Oman"}
                        onChange={field.onChange}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  <p className="text-sm text-destructive min-h-5">{errors.country?.message}</p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="size-4 text-muted-foreground" />
                    City / Location
                  </Label>
                  <Input id="location" placeholder="San Francisco, CA" {...register("location")} />
                  <p className="text-sm text-destructive min-h-5">{errors.location?.message}</p>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Social Links</h3>
                  {errors.social ? (
                    <p className="text-sm text-destructive min-h-5">
                      {errors.social && "Please fix errors in social links."}
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Click on "Edit social links" to manage your social media links.
                    </p>
                  )}
                </div>
                <SocialLinksDialog register={register} errors={errors} disabled={isSubmitting} />
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              className="mr-auto"
              type="button"
              variant="secondary"
              disabled={isSubmitting}
              onClick={() => reset(profileToDefaultValues(profile))}
            >
              Reset original values
            </Button>

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
