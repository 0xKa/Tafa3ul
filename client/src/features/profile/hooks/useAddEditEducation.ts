import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type AddEditEducationRequest = {
  id: string | null;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string | null;
  description: string | null;
};

type AddEditEducationResponse = {
  id: string;
};

const addEditEducation = async (data: AddEditEducationRequest): Promise<AddEditEducationResponse> => {
  try {
    const res = await api.put<AddEditEducationResponse>("/Profile/education", data);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useAddEditEducation = () => {
  const queryClient = useQueryClient();

  return useMutation<AddEditEducationResponse, Error, AddEditEducationRequest>({
    mutationFn: addEditEducation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
