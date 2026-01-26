import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Profile } from "../types";

type DeleteExperienceRequest = {
  experienceId: string;
};

interface DeleteExperienceContext {
  cachedProfile?: Profile;
}

const deleteExperience = async (data: DeleteExperienceRequest): Promise<void> => {
  try {
    await api.delete(`/Profile/experience/${data.experienceId}`);
  } catch (error) {
    throw handleApiError(error);
  }
};

export const useDeleteExperience = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, DeleteExperienceRequest, DeleteExperienceContext>({
    mutationFn: deleteExperience,

    onMutate: async (variables) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["profile"] });

      // Snapshot the previous value
      const cachedProfile = queryClient.getQueryData<Profile>(["profile"]);

      // Optimistically update
      queryClient.setQueryData<Profile>(["profile"], (old) => {
        if (!old?.experiences) return old;

        return {
          ...old,
          experiences: old.experiences.filter((experience) => experience.id !== variables.experienceId),
        };
      });

      return { cachedProfile };
    },

    onError: (_error, _variables, context) => {
      if (context?.cachedProfile) {
        queryClient.setQueryData(["profile"], context.cachedProfile);
      }
      // console.error("Failed to delete experience:", error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
