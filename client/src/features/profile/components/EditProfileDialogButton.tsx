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
import { Controller, useForm } from "react-hook-form";
import { editProfileSchema, type EditProfileFormData } from "../schemas/editProfileSchema";
import type { Profile } from "../types";
import CountriesCombobox from "./CountriesCombobox";
import SocialLinksDialog from "./SocialLinksDialog";

interface EditProfileDialogButtonProps {
  profile: Profile;
}

const EditProfileDialogButton = ({ profile }: EditProfileDialogButtonProps) => {
  const {
    register,
    control,
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
    alert("Profile updated. Check console for submitted data.");
    console.log("Updated profile data:", data);
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
                  <Input id="firstName" placeholder="Reda" {...register("firstName")} />
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Hilal" {...register("lastName")} />
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
                <SocialLinksDialog register={register} errors={errors} disabled={isSubmitting} />
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2">
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
