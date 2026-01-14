export const USER_ROLES = {
  ADMIN: 0,
  USER: 1,
  GUEST: 2,
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export type RegisterRequest = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
};

export type RegisterResponse = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: string;
};
