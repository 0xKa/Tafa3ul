export type RegisterRequest = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: number;
};

export type RegisterResponse = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
};
