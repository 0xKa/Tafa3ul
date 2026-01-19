import { z } from "zod";

export const optionalUrl = z.url("Please enter a valid URL").optional().or(z.literal(""));

export const editProfileSchema = z.object({
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

export type EditProfileFormData = z.infer<typeof editProfileSchema>;
