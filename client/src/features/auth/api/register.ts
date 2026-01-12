import { api } from "@/services/api";

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: number;
}

export const registerUser = async (data: RegisterRequest) => {
  const response = await api.post("/Auth/register", data);
  return response.data;
};
