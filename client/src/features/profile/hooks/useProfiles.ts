import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import type { Profile } from "../types";

interface ProfilesResponse {
  data: Profile[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

const fetchProfiles = async (page: number = 1, pageSize: number = 20, search?: string): Promise<ProfilesResponse> => {
  try {
    const res = await api.get<ProfilesResponse>("/Profile", {
      params: { page, pageSize, search },
    });
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useProfiles = (page: number = 1, pageSize: number = 20, search?: string) => {
  search = search?.trim();
  return useQuery({
    queryKey: ["profiles", page, pageSize, search],
    queryFn: () => fetchProfiles(page, pageSize, search),
    staleTime: 30000, // 30 seconds
    placeholderData: keepPreviousData,
  });
};
