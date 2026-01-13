import { useMutation } from "@tanstack/react-query";
import type { RegisterRequest, RegisterResponse } from "../types";
import axios from "axios";
import { api } from "@/services/api";
import type { ApiError } from "@/lib/api-error";

const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const res = await api.post<RegisterResponse>("/auth/register", data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError<ApiError>(error)) {
      const message = `${error.response?.data?.message ?? "An error occurred during registration"}`;
      throw new Error(message);
    }
    throw error;
  }
};

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: registerUser,

    // onError: (error, registerRequest) => {
    //   console.log("Registration failed for user:", registerRequest, "Error:", error.message);
    // },

    // onSuccess: (data) => {
    //   console.log("Registration successful:", data);
    // },
  });
};
