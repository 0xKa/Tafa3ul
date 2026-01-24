import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import type { Profile } from "../types";

const fetchProfile = async (userId?: string): Promise<Profile> => {
  try {
    const res = await api.get<Profile>(`/Profile/${userId ? `user/${userId}` : "me"}`);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useProfile = (userId?: string) => {
  return useQuery({
    queryKey: ["profile", userId ?? "me"],
    queryFn: () => fetchProfile(userId),
    staleTime: 5000,
  });
};
