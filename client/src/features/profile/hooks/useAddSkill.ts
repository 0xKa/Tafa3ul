import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type AddSkillRequest = {
  skillName: string;
  yearsOfExperience: number | null;
};

type AddSkillResponse = {
  skillId: string;
  skillName: string;
  yearsOfExperience: number | null;
};

const addSkill = async (data: AddSkillRequest): Promise<AddSkillResponse> => {
  try {
    const res = await api.put<AddSkillResponse>("/Profile/skill", data);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useAddSkill = () => {
  const queryClient = useQueryClient();

  return useMutation<AddSkillResponse, Error, AddSkillRequest>({
    mutationFn: addSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
