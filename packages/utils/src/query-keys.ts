const authBase = ["auth"] as const;
const adminBase = ["admin"] as const;

export const QUERY_KEYS = {
  auth: {
    all: () => authBase,
    session: () => [...authBase, "session"] as const,
    user: (id: string) => [...authBase, "user", id] as const,
  },
  admin: {
    all: () => adminBase,
    users: {
      all: () => [...adminBase, "users"] as const,
      lists: () => [...adminBase, "users", "list"] as const,
      list: (page: number, limit: number, search?: string) =>
        [...adminBase, "users", "list", { page, limit, search }] as const,
      details: () => [...adminBase, "users", "detail"] as const,
      detail: (id: string) => [...adminBase, "users", "detail", id] as const,
      stats: () => [...adminBase, "users", "stats"] as const,
    },
    stats: () => [...adminBase, "stats"] as const,
  },
} as const;
