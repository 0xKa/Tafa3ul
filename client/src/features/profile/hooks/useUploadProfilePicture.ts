import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UploadProfilePictureResponse = {
  savedImageUrl: string;
};

const uploadProfilePicture = async (file: File): Promise<UploadProfilePictureResponse> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await api.post<UploadProfilePictureResponse>("/Profile/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useUploadProfilePicture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadProfilePicture,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
