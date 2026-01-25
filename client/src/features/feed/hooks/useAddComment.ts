import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { PostComment } from "../types";

interface AddCommentData {
  postId: string;
  content: string;
}

const addComment = async ({ postId, content }: AddCommentData): Promise<PostComment> => {
  try {
    const res = await api.post<PostComment>(`/Posts/comment/${postId}`, { content });
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};
export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
