import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deletePost = async (postId: string): Promise<void> => {
  try {
    await api.delete(`/Posts/${postId}`);
  } catch (error) {
    return handleApiError(error);
  }
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
