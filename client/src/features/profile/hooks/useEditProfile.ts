import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { EditProfileFormData } from "../schemas/editProfileSchema";
import type { Profile } from "../types";

export type EditProfileRequest = {
  firstName: string;
  lastName: string;
  company: string | null;
  website: string | null;
  country: string | null;
  location: string | null;
  bio: string | null;
  social: {
    youTube: string | null;
    twitter: string | null;
    facebook: string | null;
    linkedIn: string | null;
    instagram: string | null;
    gitHub: string | null;
    tikTok: string | null;
  };
};

const editProfile = async (data: EditProfileFormData): Promise<Profile> => {
  try {
    const res = await api.post<Profile>("/Profile", data);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<Profile, Error, EditProfileFormData>({
    mutationFn: editProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
