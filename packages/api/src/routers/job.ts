import type { UmuravaTalent } from "@repo/api/lib/ai";
import { JobSchema } from "@repo/api/routers/types";
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import umuravaTalentsData from "@repo/db/seed-data/umurava-talents.json";
import { Elysia, t } from "elysia";

export const jobRouter = new Elysia({ prefix: "/jobs" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/",
    async ({ user }) => {
      const jobs = await schema.Job.find({ userId: user.id }).sort({ createdAt: -1 });
      const jobsWithCounts = await Promise.all(
        jobs.map(async (job) => {
          const applicantCount = await schema.Applicant.countDocuments({ jobId: job._id });
          const screenedCount = await schema.Applicant.countDocuments({
            jobId: job._id,
            status: { $ne: "Pending_Screening" },
          });
          const results = await schema.ScreeningResult.find({ jobId: job._id });
          const avgScore =
            results.length > 0
              ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
              : 0;

          return {
            id: job._id.toString(),
            userId: job.userId,
            title: job.title,
            department: job.department,
            seniority: job.seniority,
            description: job.description,
            requiredSkills: job.requiredSkills,
            weightSkills: job.weightSkills,
            weightExperience: job.weightExperience,
            weightEducation: job.weightEducation,
            status: job.status,
            createdAt: job.createdAt,
            updatedAt: job.updatedAt,
            applicantCount,
            screenedCount,
            avgScore,
          };
        }),
      );
      return jobsWithCounts;
    },
    {
      response: t.Array(JobSchema),
    },
  )
  .get(
    "/history",
    async ({ user }) => {
      const jobs = await schema.Job.find({ userId: user.id, status: "Closed" }).sort({
        updatedAt: -1,
      });
      const history = await Promise.all(
        jobs.map(async (job) => {
          const candidates = await schema.Applicant.countDocuments({ jobId: job._id });
          const shortlisted = await schema.ScreeningResult.countDocuments({
            jobId: job._id,
            aiRecommendation: "Strong Yes",
          });
          const results = await schema.ScreeningResult.find({ jobId: job._id });
          const avgScore =
            results.length > 0
              ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
              : 0;

          return {
            id: job._id.toString(),
            jobTitle: job.title,
            date: (job.updatedAt || new Date()).toISOString().split("T")[0] ?? "",
            candidates,
            shortlisted,
            avgScore,
            timeSaved: `${(candidates * 0.5).toFixed(1)}h`,
          };
        }),
      );
      return history;
    },
    {
      response: t.Array(
        t.Object({
          id: t.String(),
          jobTitle: t.String(),
          date: t.String(),
          candidates: t.Number(),
          shortlisted: t.Number(),
          avgScore: t.Number(),
          timeSaved: t.String(),
        }),
      ),
    },
  )
  .get(
    "/history/stats",
    async ({ user }) => {
      const closedJobs = await schema.Job.find({ userId: user.id, status: "Closed" });
      const jobIds = closedJobs.map((j) => j._id);

      const totalCandidates = await schema.Applicant.countDocuments({ jobId: { $in: jobIds } });
      const results = await schema.ScreeningResult.find({ jobId: { $in: jobIds } });

      const avgScore =
        results.length > 0
          ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
          : 0;

      const totalTimeSaved = totalCandidates * 0.5; // 30 mins per candidate

      return {
        totalCandidates: { value: totalCandidates, trend: 12, label: "Total candidates processed" },
        timeSaved: {
          value: `${totalTimeSaved.toFixed(1)} hours`,
          trend: 0,
          label: "Cumulative efficiency saved",
        },
        avgMatchScore: { value: avgScore, trend: 0, label: "Average match precision" },
      };
    },
    {
      response: t.Object({
        totalCandidates: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        timeSaved: t.Object({ value: t.String(), trend: t.Number(), label: t.String() }),
        avgMatchScore: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
      }),
    },
  )
  .get(
    "/stats",
    async ({ user }) => {
      const activeJobs = await schema.Job.countDocuments({
        userId: user.id,
        status: { $ne: "Closed" },
      });
      const jobIds = await schema.Job.find({ userId: user.id }).distinct("_id");
      const applicants = await schema.Applicant.find({ jobId: { $in: jobIds } });
      const pendingReviews = applicants.filter((a) => a.status === "Pending_Screening").length;

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
    "/:id",
    async ({ params: { id }, user }) => {
      const job = await schema.Job.findOne({ _id: id, userId: user.id });
      if (!job) throw new Response("Job not found", { status: 404 });

      const applicantCount = await schema.Applicant.countDocuments({ jobId: job._id });
      const screenedCount = await schema.Applicant.countDocuments({
        jobId: job._id,
        status: { $ne: "Pending_Screening" },
      });

      const results = await schema.ScreeningResult.find({ jobId: job._id });
      const avgScore =
        results.length > 0
          ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
          : 0;

      return {
        ...job.toObject(),
        id: job._id.toString(),
        applicantCount,
        screenedCount,
        avgScore,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: JobSchema,
    },
  )
  .post(
    "/",
    async ({ body, user }) => {
      const job = new schema.Job({ ...body, userId: user.id });
      await job.save();

      // Seed candidates from Umurava Talent pool without using AI
      const allTalents = umuravaTalentsData as UmuravaTalent[];
      const jobSkills = job.requiredSkills.map((s) => s.toLowerCase());

      const scoredTalents = allTalents.map((t) => {
        let score = 0;
        t.skills?.forEach((s) => {
          if (jobSkills.includes(s.name.toLowerCase())) {
            score++;
          }
        });
        return { talent: t, score };
      });

      scoredTalents.sort((a, b) => b.score - a.score);
      const selectedTalents = scoredTalents
        .slice(0, Math.floor(Math.random() * 3) + 3)
        .map((st) => st.talent);

      await Promise.all(
        selectedTalents.map(async (talent) => {
          try {
            await schema.Applicant.create({
              jobId: job._id,
              name: `${talent.firstName} ${talent.lastName}`,
              email: talent.email,
              source: "Umurava Talent Pool",
              status: "Pending_Screening", // User must manually screen from profile detail
              structuredData: talent,
            });
          } catch (error) {
            console.error("Failed to add talent during job creation", error);
          }
        }),
      );
      await schema.Activity.create({
        userId: user.id,
        action: "JOB_CREATED",
        entityId: job._id.toString(),
        entityType: "job",
        metadata: { title: job.title },
      });

      return {
        id: job._id.toString(),
        userId: job.userId,
        title: job.title,
        department: job.department,
        seniority: job.seniority,
        description: job.description,
        requiredSkills: job.requiredSkills,
        weightSkills: job.weightSkills,
        weightExperience: job.weightExperience,
        weightEducation: job.weightEducation,
        status: job.status,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
      };
    },
    {
      body: t.Object({
        title: t.String(),
        department: t.String(),
        seniority: t.String(),
        description: t.String(),
        requiredSkills: t.Array(t.String()),
        weightSkills: t.Number(),
        weightExperience: t.Number(),
        weightEducation: t.Number(),
        status: t.Optional(t.String()),
      }),
      response: JobSchema,
    },
  )
  .patch(
    "/:id",
    async ({ params: { id }, body, user }) => {
      const job = await schema.Job.findOneAndUpdate(
        { _id: id, userId: user.id },
        { $set: body },
        { new: true },
      );
      if (!job) throw new Response("Job not found", { status: 404 });
      await schema.Activity.create({
        userId: user.id,
        action: "JOB_UPDATED",
        entityId: job._id.toString(),
        entityType: "job",
        metadata: { title: job.title, changes: body },
      });

      return {
        id: job._id.toString(),
        userId: job.userId,
        title: job.title,
        department: job.department,
        seniority: job.seniority,
        description: job.description,
        requiredSkills: job.requiredSkills,
        weightSkills: job.weightSkills,
        weightExperience: job.weightExperience,
        weightEducation: job.weightEducation,
        status: job.status,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Partial(
        t.Object({
          title: t.String(),
          department: t.String(),
          seniority: t.String(),
          description: t.String(),
          requiredSkills: t.Array(t.String()),
          weightSkills: t.Number(),
          weightExperience: t.Number(),
          weightEducation: t.Number(),
          status: t.String(),
        }),
      ),
      response: JobSchema,
    },
  )
  .delete(
    "/:id",
    async ({ params: { id }, user }) => {
      const result = await schema.Job.deleteOne({ _id: id, userId: user.id });
      if (result.deletedCount === 0) throw new Response("Job not found", { status: 404 });
      await schema.Activity.create({
        userId: user.id,
        action: "JOB_DELETED",
        entityId: id,
        entityType: "job",
      });

      return { success: true };
    },
    {
      params: t.Object({ id: t.String() }),
      response: t.Object({ success: t.Boolean() }),
    },
  );
