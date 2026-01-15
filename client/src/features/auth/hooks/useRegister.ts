import { handleApiError } from "@/lib/error-handler";
import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import type { UserRole } from "../types";

type RegisterRequest = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
};

type RegisterResponse = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: string;
};

const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const res = await api.post<RegisterResponse>("/auth/register", data);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: registerUser,

    // onError: (error) => {
    //   console.log("Registration failed:", error.message);
    // },
    // onSuccess: (data) => {
    //   console.log("Registration successful:", data);
    // },
  });
};
