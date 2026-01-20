import { z } from "zod";

const emptyToNull = z.literal("").transform(() => null);

export const optionalUrl = z.url("Please enter a valid URL").nullable().or(emptyToNull);

const optionalString = (maxLength: number, message: string) =>
  z.string().max(maxLength, message).nullable().or(emptyToNull);

export const editProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be 50 characters or less"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be 50 characters or less"),
  bio: optionalString(500, "Bio must be 500 characters or less"),
  company: optionalString(100, "Company must be 100 characters or less"),
  website: optionalUrl,
  country: optionalString(100, "Country must be 100 characters or less"),
  location: optionalString(100, "Location must be 100 characters or less"),
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
