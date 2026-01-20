import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Profile } from "../types";

type DeleteSkillRequest = {
  skillId: string;
};

interface DeleteSkillContext {
  cachedProfile?: Profile;
}

const deleteSkill = async (data: DeleteSkillRequest): Promise<void> => {
  try {
    await api.delete(`/Profile/skill/${data.skillId}`);
  } catch (error) {
    throw handleApiError(error);
  }
};

export const useDeleteSkill = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, DeleteSkillRequest, DeleteSkillContext>({
    mutationFn: deleteSkill,

    onMutate: async (variables) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["profile"] });

      // Snapshot the previous value
      const cachedProfile = queryClient.getQueryData<Profile>(["profile"]);

      // Optimistically update
      queryClient.setQueryData<Profile>(["profile"], (old) => {
        if (!old?.skills) return old;

        return {
          ...old,
          skills: old.skills.filter((skill) => skill.skillId !== variables.skillId),
        };
      });

      return { cachedProfile };
    },

    onError: (error, _variables, context) => {
      if (context?.cachedProfile) {
        queryClient.setQueryData(["profile"], context.cachedProfile);
      }
      console.error("Failed to delete skill:", error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
