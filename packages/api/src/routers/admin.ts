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
    "/jobs",
    async ({ query }) => {
      const limit = query.limit || 10;
      const page = query.page || 1;
      const skip = (page - 1) * limit;

      const jobs = await schema.Job.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit);
      const totalCount = await schema.Job.countDocuments({});
      const totalPages = Math.ceil(totalCount / limit);

      const jobsWithMetadata = await Promise.all(
        jobs.map(async (j) => {
          const applicantCount = await schema.Applicant.countDocuments({ jobId: j._id });
          return {
            id: j._id.toString(),
            userId: j.userId,
            title: j.title,
            department: j.department,
            seniority: j.seniority,
            description: j.description,
            requiredSkills: j.requiredSkills,
            weightSkills: j.weightSkills,
            weightExperience: j.weightExperience,
            weightEducation: j.weightEducation,
            status: j.status,
            createdAt: j.createdAt,
            updatedAt: j.updatedAt,
            applicantCount,
          };
        }),
      );

      return {
        data: jobsWithMetadata,
        metadata: { totalCount, page, totalPages },
      };
    },
    {
      query: t.Object({
        limit: t.Optional(t.Numeric({ default: 10 })),
        page: t.Optional(t.Numeric({ default: 1 })),
      }),
      detail: { tags: ["Admin"], description: "Get paginated list of all platform jobs" },
    },
  )
  .get(
    "/activities",
    async ({ query }) => {
      const limit = query.limit || 20;
      const page = query.page || 1;
      const skip = (page - 1) * limit;

      const activities = await schema.Activity.find({})
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
      const totalCount = await schema.Activity.countDocuments({});
      const totalPages = Math.ceil(totalCount / limit);

      const activitiesWithUsers = await Promise.all(
        activities.map(async (a) => {
          const user = await schema.User.findById(a.userId);
          return {
            id: a._id.toString(),
            action: a.action,
            entityType: a.entityType,
            entityId: a.entityId,
            user: user?.name || "Unknown User",
            userEmail: user?.email || "Unknown Email",
            timestamp: a.createdAt.toISOString(),
          };
        }),
      );

      return {
        data: activitiesWithUsers,
        metadata: { totalCount, page, totalPages },
      };
    },
    {
      query: t.Object({
        limit: t.Optional(t.Numeric({ default: 20 })),
        page: t.Optional(t.Numeric({ default: 1 })),
      }),
      detail: { tags: ["Admin"], description: "Get paginated list of all system activities" },
    },
  )
  .get(
    "/stats",
    async () => {
      const [
        totalUsers,
        bannedUsers,
        totalJobs,
        openJobs,
        closedJobs,
        totalApplicants,
        screenedApplicants,
        recentActivities,
      ] = await Promise.all([
        schema.User.countDocuments({}),
        schema.User.countDocuments({ banned: true }),
        schema.Job.countDocuments({}),
        schema.Job.countDocuments({ status: "Open" }),
        schema.Job.countDocuments({ status: "Closed" }),
        schema.Applicant.countDocuments({}),
        schema.Applicant.countDocuments({ status: { $ne: "Pending_Screening" } }),
        schema.Activity.find({}).sort({ createdAt: -1 }).limit(5),
      ]);

      const activitiesWithUsers = await Promise.all(
        recentActivities.map(async (a) => {
          const user = await schema.User.findById(a.userId);
          return {
            id: a._id.toString(),
            action: a.action,
            entityType: a.entityType,
            user: user?.name || "Unknown User",
            timestamp: a.createdAt.toISOString(),
          };
        }),
      );

      return {
        users: { total: totalUsers, banned: bannedUsers, active: totalUsers - bannedUsers },
        jobs: { total: totalJobs, open: openJobs, closed: closedJobs },
        applicants: { total: totalApplicants, screened: screenedApplicants },
        recentActivity: activitiesWithUsers,
      };
    },
    {
      detail: { tags: ["Admin"], description: "Get comprehensive platform statistics" },
      response: t.Object({
        users: t.Object({ total: t.Number(), banned: t.Number(), active: t.Number() }),
        jobs: t.Object({ total: t.Number(), open: t.Number(), closed: t.Number() }),
        applicants: t.Object({ total: t.Number(), screened: t.Number() }),
        recentActivity: t.Array(
          t.Object({
            id: t.String(),
            action: t.String(),
            entityType: t.String(),
            user: t.String(),
            timestamp: t.String(),
          }),
        ),
      }),
    },
  );
