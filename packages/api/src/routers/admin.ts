import { PaginatedUserResponseSchema, UserSchema } from "@repo/api/routers/types";
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";

export const adminRouter = new Elysia({ prefix: "/admin" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    if (session.user.role !== "admin") {
      throw new Response("Forbidden: Admin access required", { status: 403 });
    }
    return { user: session.user };
  })
  .get(
    "/users",
    async ({ query }) => {
      const limit = query.limit || 10;
      const page = query.page || 1;
      const skip = (page - 1) * limit;

      const filter: Record<string, unknown> = {};
      if (query.search) {
        filter.$or = [
          { name: { $regex: query.search, $options: "i" } },
          { email: { $regex: query.search, $options: "i" } },
        ];
      }

      const users = await schema.User.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);

      const totalCount = await schema.User.countDocuments(filter);
      const totalPages = Math.ceil(totalCount / limit);

      return {
        data: users.map((u) => ({
          id: u._id.toString(),
          name: u.name,
          email: u.email,
          emailVerified: u.emailVerified,
          image: u.image || null,
          role: u.role || null,
          banned: u.banned || false,
          banReason: u.banReason || null,
          banExpires: u.banExpires || null,
          createdAt: u.createdAt,
          updatedAt: u.updatedAt,
        })),
        metadata: { totalCount, page, totalPages },
      };
    },
    {
      query: t.Object({
        limit: t.Optional(t.Numeric({ default: 10 })),
        page: t.Optional(t.Numeric({ default: 1 })),
        search: t.Optional(t.String()),
      }),
      detail: { tags: ["Admin"], description: "Get paginated list of all users" },
      response: PaginatedUserResponseSchema,
    },
  )
  .post(
    "/users",
    async ({ body }) => {
      const { email, password, name, role } = body;

      const result = await auth.api.signUpEmail({
        body: { email, password, name },
        asResponse: false,
      });

      const user = await schema.User.findByIdAndUpdate(
        result.user.id,
        { $set: { role: role ?? "user" } },
        { new: true },
      );

      if (!user) throw new Response("Failed to retrieve created user", { status: 500 });

      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image || null,
        role: user.role || null,
        banned: user.banned || false,
        banReason: user.banReason || null,
        banExpires: user.banExpires || null,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        password: t.String(),
        role: t.Optional(t.Union([t.Literal("admin"), t.Literal("user")])),
      }),
      detail: { tags: ["Admin"], description: "Create a new user with a specific role" },
      response: UserSchema,
    },
  )
  .get(
    "/users/:id",
    async ({ params: { id } }) => {
      const user = await schema.User.findById(id);
      if (!user) throw new Response("User not found", { status: 404 });
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image || null,
        role: user.role || null,
        banned: user.banned || false,
        banReason: user.banReason || null,
        banExpires: user.banExpires || null,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      detail: { tags: ["Admin"], description: "Get a single user by ID" },
      response: UserSchema,
    },
  )
  .put(
    "/users/:id/role",
    async ({ params: { id }, body: { role } }) => {
      const updated = await schema.User.findByIdAndUpdate(id, { $set: { role } }, { new: true });
      if (!updated) throw new Response("User not found", { status: 404 });
      return {
        id: updated._id.toString(),
        name: updated.name,
        email: updated.email,
        emailVerified: updated.emailVerified,
        image: updated.image || null,
        role: updated.role || null,
        banned: updated.banned || false,
        banReason: updated.banReason || null,
        banExpires: updated.banExpires || null,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({ role: t.Union([t.Literal("admin"), t.Literal("user")]) }),
      detail: { tags: ["Admin"], description: "Update a user's role" },
      response: UserSchema,
    },
  )
  .delete(
    "/users/:id",
    async ({ params: { id } }) => {
      const existing = await schema.User.findById(id);
      if (!existing) throw new Response("User not found", { status: 404 });

      await auth.api.removeUser({ body: { userId: id } });
      return { success: true };
    },
    {
      params: t.Object({ id: t.String() }),
      detail: { tags: ["Admin"], description: "Delete a user" },
      response: t.Object({ success: t.Boolean() }),
    },
  )
  .get(
    "/stats",
    async () => {
      const total = await schema.User.countDocuments({});
      const bannedCount = await schema.User.countDocuments({ banned: true });

      return {
        users: { total, banned: bannedCount },
      };
    },
    {
      detail: { tags: ["Admin"], description: "Get administrative statistics" },
      response: t.Object({
        users: t.Object({ total: t.Number(), banned: t.Number() }),
      }),
    },
  );
