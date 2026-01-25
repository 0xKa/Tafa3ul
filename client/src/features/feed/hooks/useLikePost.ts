import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Post } from "../types";

const likePost = async (postId: string): Promise<Post> => {
  try {
    const res = await api.put<Post>(`/Posts/like/${postId}`);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

const unlikePost = async (postId: string): Promise<Post> => {
  try {
    const res = await api.put<Post>(`/Posts/unlike/${postId}`);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export const useUnlikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: unlikePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
