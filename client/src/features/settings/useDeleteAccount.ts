import { api } from "@/services/api";
import { handleApiError } from "@/lib/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteAccount = async (): Promise<void> => {
  try {
    await api.delete("/Profile");
  } catch (error) {
    return handleApiError(error);
  }
};

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
