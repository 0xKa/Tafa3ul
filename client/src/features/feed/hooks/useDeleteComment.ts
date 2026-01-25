import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteCommentData {
  postId: string;
  commentId: string;
}

const deleteComment = async ({ postId, commentId }: DeleteCommentData): Promise<void> => {
  try {
    await api.delete(`/Posts/comment/${postId}/${commentId}`);
  } catch (error) {
    return handleApiError(error);
  }
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
