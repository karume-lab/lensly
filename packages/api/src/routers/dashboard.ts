import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";
import { ActivitySchema } from "./types";

export const dashboardRouter = new Elysia({ prefix: "/dashboard" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/metrics",
    async ({ user }) => {
      const activeJobs = await schema.Job.countDocuments({
        userId: user.id,
        status: { $ne: "Closed" },
      });
      const jobIds = await schema.Job.find({ userId: user.id }).distinct("_id");
      const applicants = await schema.Applicant.find({ jobId: { $in: jobIds } });
      const pendingReviews = applicants.filter((a) => a.status === "Applied").length;

      const results = await schema.ScreeningResult.find({ jobId: { $in: jobIds } });
      const avgScore =
        results.length > 0
          ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
          : 0;

      return {
        activeJobs: { value: activeJobs, trend: 0, label: "Active Jobs" },
        pendingReviews: { value: pendingReviews, trend: 0, label: "Pending Reviews" },
        avgMatchScore: { value: avgScore, trend: 0, label: "Avg Match Score" },
        timeSaved: {
          value: `${(activeJobs * 0.5).toFixed(1)}h`,
          trend: 0,
          label: "AI Time Saved Today",
        },
      };
    },
    {
      response: t.Object({
        activeJobs: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        pendingReviews: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        avgMatchScore: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        timeSaved: t.Object({ value: t.String(), trend: t.Number(), label: t.String() }),
      }),
    },
  )
  .get(
    "/activity",
    async ({ user }) => {
      const activities = await schema.Activity.find({ userId: user.id })
        .sort({ createdAt: -1 })
        .limit(10);
      return activities.map((a) => ({
        id: a._id.toString(),
        title: a.action,
        subtitle: `${a.entityType}: ${a.entityId}`,
        timestamp: (a.createdAt || new Date()).toLocaleString(),
        type: "user",
      }));
    },
    {
      response: t.Array(ActivitySchema),
    },
  );
