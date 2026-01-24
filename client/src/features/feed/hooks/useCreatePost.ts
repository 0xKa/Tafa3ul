import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Post, CreatePostData } from "../types";

const createPost = async (data: CreatePostData): Promise<Post> => {
  try {
    const formData = new FormData();
    formData.append("content", data.content);

    if (data.image) {
      formData.append("image", data.image);
    }

    const res = await api.post<Post>("/Posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
