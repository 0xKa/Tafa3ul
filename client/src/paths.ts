export const paths = {
  root: "/",

  public: {
    users: "/users",
    userProfile: (id: string) => `/users/${id}`,
    about: "/about",
  },

  auth: {
    login: "/login",
    register: "/register",
  },

  protected: {
    dashboard: "/dashboard",
    feed: "/feed",
    profile: "/profile",
    settings: "/settings",
  },

  dev: {
    test: "/test",
    error500: "/test/500",
    error403: "/test/403",
    error: "/test/error",
  },
} as const;
