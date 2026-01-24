import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import type { PostsResponse } from "../types";

const fetchPosts = async (page: number = 1, pageSize: number = 10): Promise<PostsResponse> => {
  try {
    const res = await api.get<PostsResponse>("/Posts", {
      params: { page, pageSize },
    });
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const usePosts = (pageSize: number = 10) => {
  return useInfiniteQuery({
    queryKey: ["posts", pageSize],
    queryFn: ({ pageParam }) => fetchPosts(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    staleTime: 60000, // 1 minute
  });
};
