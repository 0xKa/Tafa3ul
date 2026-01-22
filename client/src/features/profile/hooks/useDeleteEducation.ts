import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Profile } from "../types";

type DeleteEducationRequest = {
  educationId: string;
};

interface DeleteEducationContext {
  cachedProfile?: Profile;
}

const deleteEducation = async (data: DeleteEducationRequest): Promise<void> => {
  try {
    await api.delete(`/Profile/education/${data.educationId}`);
  } catch (error) {
    throw handleApiError(error);
  }
};

export const useDeleteEducation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, DeleteEducationRequest, DeleteEducationContext>({
    mutationFn: deleteEducation,

    onMutate: async (variables) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["profile"] });

      // Snapshot the previous value
      const cachedProfile = queryClient.getQueryData<Profile>(["profile"]);

      // Optimistically update
      queryClient.setQueryData<Profile>(["profile"], (old) => {
        if (!old?.educations) return old;

        return {
          ...old,
          educations: old.educations.filter((education) => education.id !== variables.educationId),
        };
      });

      return { cachedProfile };
    },

    onError: (error, _variables, context) => {
      if (context?.cachedProfile) {
        queryClient.setQueryData(["profile"], context.cachedProfile);
      }
      console.error("Failed to delete education:", error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
