import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";
import { ApplicantSchema, ScreeningResultSchema, StructuredDataSchema } from "./types";

export const applicantRouter = new Elysia({ prefix: "/applicants" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/job/:jobId",
    async ({ params: { jobId } }) => {
      const applicants = await schema.Applicant.find({ jobId }).sort({ createdAt: -1 });
      return applicants.map((a) => ({
        id: a._id.toString(),
        jobId: a.jobId.toString(),
        name: a.name,
        email: a.email,
        source: a.source,
        status: a.status,
        resumeUrl: a.resumeUrl,
        rawText: a.rawText,
        structuredData: a.structuredData,
        createdAt: a.createdAt,
        updatedAt: a.updatedAt,
      }));
    },
    {
      params: t.Object({ jobId: t.String() }),
      response: t.Array(ApplicantSchema),
    },
  )
  .get(
    "/job/:jobId/shortlist",
    async ({ params: { jobId } }) => {
      const results = await schema.ScreeningResult.find({ jobId }).sort({ overallScore: -1 });
      const populated = await Promise.all(
        results.map(async (r) => {
          const applicant = await schema.Applicant.findById(r.applicantId);
          return {
            id: r._id.toString(),
            applicantId: r.applicantId.toString(),
            jobId: r.jobId.toString(),
            overallScore: r.overallScore,
            skillScore: r.skillScore,
            experienceScore: r.experienceScore,
            educationScore: r.educationScore,
            relevanceScore: r.relevanceScore,
            strengths: r.strengths,
            gaps: r.gaps,
            aiRecommendation: r.aiRecommendation,
            aiReasoning: r.aiReasoning,
            processedAt: r.processedAt,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
            applicant: {
              name: applicant?.name || "Unknown",
              role: applicant?.structuredData?.experience?.[0]?.role || "N/A",
            },
          };
        }),
      );
      return populated;
    },
    {
      params: t.Object({ jobId: t.String() }),
      response: t.Array(
        t.Composite([
          ScreeningResultSchema,
          t.Object({
            applicant: t.Object({
              name: t.String(),
              role: t.String(),
            }),
          }),
        ]),
      ),
    },
  )
  .get(
    "/:id",
    async ({ params: { id } }) => {
      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });
      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: ApplicantSchema,
    },
  )
  .get(
    "/:id/deep-dive",
    async ({ params: { id } }) => {
      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });
      const screening = await schema.ScreeningResult.findOne({ applicantId: id });
      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
        screening: screening
          ? {
              id: screening._id.toString(),
              applicantId: screening.applicantId.toString(),
              jobId: screening.jobId.toString(),
              overallScore: screening.overallScore,
              skillScore: screening.skillScore,
              experienceScore: screening.experienceScore,
              educationScore: screening.educationScore,
              relevanceScore: screening.relevanceScore,
              strengths: screening.strengths,
              gaps: screening.gaps,
              aiRecommendation: screening.aiRecommendation,
              aiReasoning: screening.aiReasoning,
              processedAt: screening.processedAt,
              createdAt: screening.createdAt,
              updatedAt: screening.updatedAt,
            }
          : null,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: t.Composite([
        ApplicantSchema,
        t.Object({
          screening: t.Nullable(ScreeningResultSchema),
        }),
      ]),
    },
  )
  .patch(
    "/:id/status",
    async ({ params: { id }, body: { status } }) => {
      const applicant = await schema.Applicant.findByIdAndUpdate(
        id,
        { $set: { status } },
        { new: true },
      );
      if (!applicant) throw new Response("Applicant not found", { status: 404 });
      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({ status: t.String() }),
      response: ApplicantSchema,
    },
  )
  .post(
    "/upload",
    async ({ body: { jobId, file } }) => {
      const fileName = `${Date.now()}-${file.name}`;
      const path = `./uploads/${fileName}`;
      await Bun.write(path, file);

      const applicant = new schema.Applicant({
        jobId,
        name: file.name.replace(/\.[^/.]+$/, ""), // Use filename as name for now
        source: "External Upload",
        resumeUrl: path,
        status: "Applied",
      });
      await applicant.save();

      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
      };
    },
    {
      body: t.Object({
        jobId: t.String(),
        file: t.File(),
      }),
      response: ApplicantSchema,
    },
  )
  .post(
    "/upload-metadata",
    async ({ body }) => {
      const applicant = new schema.Applicant(body);
      await applicant.save();
      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
      };
    },
    {
      body: t.Object({
        jobId: t.String(),
        name: t.String(),
        email: t.Optional(t.String()),
        source: t.String(),
        resumeUrl: t.Optional(t.String()),
        rawText: t.Optional(t.String()),
        structuredData: t.Optional(StructuredDataSchema),
      }),
      response: ApplicantSchema,
    },
  )
  .post(
    "/:id/screen",
    async ({ params: { id } }) => {
      // Stubbed screening endpoint: wait 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });

      // Create a fake screening result
      const screeningResult = new schema.ScreeningResult({
        applicantId: applicant._id,
        jobId: applicant.jobId,
        overallScore: 85,
        skillScore: 90,
        experienceScore: 80,
        educationScore: 75,
        relevanceScore: 95,
        strengths: ["Strong technical background", "Relevant experience"],
        gaps: ["Needs more leadership experience"],
        aiRecommendation: "Strong Yes",
        aiReasoning:
          "Candidate demonstrates exceptional technical proficiency and alignment with core requirements.\n\nExperience with similar tech stacks suggests high ramp-up potential.",
      });
      await screeningResult.save();

      // Update applicant status
      applicant.status = "Shortlisted";
      await applicant.save();

      return {
        success: true,
        result: {
          id: screeningResult._id.toString(),
          applicantId: screeningResult.applicantId.toString(),
          jobId: screeningResult.jobId.toString(),
          overallScore: screeningResult.overallScore,
          skillScore: screeningResult.skillScore,
          experienceScore: screeningResult.experienceScore,
          educationScore: screeningResult.educationScore,
          relevanceScore: screeningResult.relevanceScore,
          strengths: screeningResult.strengths,
          gaps: screeningResult.gaps,
          aiRecommendation: screeningResult.aiRecommendation,
          aiReasoning: screeningResult.aiReasoning,
          processedAt: screeningResult.processedAt,
          createdAt: screeningResult.createdAt,
          updatedAt: screeningResult.updatedAt,
        },
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: t.Object({
        success: t.Boolean(),
        result: ScreeningResultSchema,
      }),
    },
  )
  .get(
    "/:id/screening-result",
    async ({ params: { id } }) => {
      const result = await schema.ScreeningResult.findOne({ applicantId: id });
      if (!result) throw new Response("Screening result not found", { status: 404 });
      return {
        id: result._id.toString(),
        applicantId: result.applicantId.toString(),
        jobId: result.jobId.toString(),
        overallScore: result.overallScore,
        skillScore: result.skillScore,
        experienceScore: result.experienceScore,
        educationScore: result.educationScore,
        relevanceScore: result.relevanceScore,
        strengths: result.strengths,
        gaps: result.gaps,
        aiRecommendation: result.aiRecommendation,
        aiReasoning: result.aiReasoning,
        processedAt: result.processedAt,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: ScreeningResultSchema,
    },
  );
