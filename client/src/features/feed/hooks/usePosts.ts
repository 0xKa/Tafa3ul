import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import type { PostsResponse } from "../types";

const fetchPosts = async (page: number = 1, pageSize: number = 10, search?: string): Promise<PostsResponse> => {
  try {
    const res = await api.get<PostsResponse>("/Posts", {
      params: { page, pageSize, search },
    });
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const usePosts = (pageSize: number = 10, search?: string) => {
  search = search?.trim();
  return useInfiniteQuery({
    queryKey: ["posts", pageSize, search],
    queryFn: ({ pageParam }) => fetchPosts(pageParam, pageSize, search),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    staleTime: 60000, // 1 minute
    placeholderData: keepPreviousData,
  });
};
