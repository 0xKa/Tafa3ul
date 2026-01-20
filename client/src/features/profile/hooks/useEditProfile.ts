import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { EditProfileFormData } from "../schemas/editProfileSchema";
import type { Profile } from "../types";

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
