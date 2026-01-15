export const USER_ROLES = {
  ADMIN: 0,
  USER: 1,
  GUEST: 2,
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
