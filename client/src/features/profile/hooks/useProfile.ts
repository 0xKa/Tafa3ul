import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import type { Profile } from "../types";

const fetchProfile = async (username?: string): Promise<Profile> => {
  try {
    const res = await api.get<Profile>(`/Profile/${username ? `user/${username}` : "me"}`);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useProfile = (username?: string) => {
  return useQuery({
    queryKey: ["profile", username ?? "me"],
    queryFn: () => fetchProfile(username),
    staleTime: 5000,
  });
};
