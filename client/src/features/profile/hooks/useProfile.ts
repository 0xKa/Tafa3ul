import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import type { Profile } from "../types";

const fetchProfile = async (): Promise<Profile> => {
  try {
    const res = await api.get<Profile>("/Profile/me");
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    staleTime: 5000,
  });
};
