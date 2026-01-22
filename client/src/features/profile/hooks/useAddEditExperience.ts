import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type AddEditExperienceRequest = {
  id: string | null;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string | null;
};

type AddEditExperienceResponse = {
  id: string;
};

const addEditExperience = async (data: AddEditExperienceRequest): Promise<AddEditExperienceResponse> => {
  try {
    const res = await api.put<AddEditExperienceResponse>("/Profile/experience", data);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useAddEditExperience = () => {
  const queryClient = useQueryClient();

  return useMutation<AddEditExperienceResponse, Error, AddEditExperienceRequest>({
    mutationFn: addEditExperience,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
