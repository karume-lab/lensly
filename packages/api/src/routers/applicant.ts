import { aiService } from "@repo/api/lib/ai";
import { documentService } from "@repo/api/lib/document";
import { sendNotification } from "@repo/api/lib/notifications";
import {
  ApplicantSchema,
  ScreeningResultSchema,
  StructuredDataSchema,
} from "@repo/api/routers/types";
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import type { IApplicant } from "@repo/db/schema";
import { Elysia, t } from "elysia";

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
      const applicants = await schema.Applicant.find({ jobId }).sort({ createdAt: -1 }).lean();
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
      const results = await schema.ScreeningResult.find({ jobId })
        .sort({ overallScore: -1 })
        .lean();
      const populated = await Promise.all(
        results.map(async (r) => {
          const applicant = await schema.Applicant.findById(r.applicantId).lean();
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
      const applicant = await schema.Applicant.findById(id).lean();
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
    async ({ params: { id }, body: { status }, user }) => {
      const applicant = await schema.Applicant.findByIdAndUpdate(
        id,
        { $set: { status } },
        { new: true },
      );
      if (!applicant) throw new Response("Applicant not found", { status: 404 });

      await schema.Activity.create({
        userId: user.id,
        action: "APPLICANT_STATUS_UPDATED",
        entityId: applicant._id.toString(),
        entityType: "applicant",
        metadata: { name: applicant.name, status: applicant.status },
      });

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
    async ({ body: { jobId, file }, user }) => {
      const path = require("node:path");
      const fs = require("node:fs");

      // ─── Step 1: Check for duplicate by filename BEFORE doing anything expensive ───
      const existingByFilename = await schema.Applicant.findOne({
        jobId,
        originalFilename: file.name,
      }).lean();

      if (existingByFilename) {
        console.log(`[Duplicate] Filename match: ${file.name}`);
        return {
          applicant: {
            id: existingByFilename._id.toString(),
            jobId: existingByFilename.jobId.toString(),
            name: existingByFilename.name,
            email: existingByFilename.email,
            source: existingByFilename.source,
            status: existingByFilename.status,
            resumeUrl: existingByFilename.resumeUrl,
            rawText: existingByFilename.rawText,
            structuredData: existingByFilename.structuredData,
            createdAt: existingByFilename.createdAt,
            updatedAt: existingByFilename.updatedAt,
          },
          isDuplicate: true,
        };
      }

      // ─── Step 2: Write file to disk ───────────────────────────────────────────────
      const fileName = `${Date.now()}-${file.name}`;
      const baseDir = process.cwd().endsWith("apps/web")
        ? process.cwd()
        : path.join(process.cwd(), "apps/web");
      const uploadDir = path.join(baseDir, "public", "uploads");

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      const filePath = path.join(uploadDir, fileName);

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.promises.writeFile(filePath, buffer);

      // ─── Step 3: Extract text and parse with AI ───────────────────────────────────
      let rawText = "";
      try {
        rawText = await documentService.extractText(filePath);
      } catch (error) {
        console.error("Failed to extract text from document:", error);
      }

      let structuredData: IApplicant["structuredData"];
      if (rawText) {
        try {
          structuredData = await aiService.parseResume(rawText);
        } catch (error) {
          console.error("Failed to parse resume with AI:", error);
        }
      }

      // ─── Step 4: Derive name/email from AI parse, then check for duplicates ──────
      let applicantName = file.name.replace(/\.[^/.]+$/, "");
      let applicantEmail: string | undefined;

      if (structuredData) {
        if (structuredData.firstName || structuredData.lastName) {
          applicantName =
            `${structuredData.firstName || ""} ${structuredData.lastName || ""}`.trim();
        }
        if (structuredData.email) {
          applicantEmail = structuredData.email;
        }
      }

      // Check by email or name (AI-extracted)
      let existingByMeta = null;
      if (applicantEmail) {
        existingByMeta = await schema.Applicant.findOne({ jobId, email: applicantEmail }).lean();
      }
      if (!existingByMeta) {
        existingByMeta = await schema.Applicant.findOne({ jobId, name: applicantName }).lean();
      }

      if (existingByMeta) {
        console.log(`[Duplicate] Meta match: ${existingByMeta.name}`);
        return {
          applicant: {
            id: existingByMeta._id.toString(),
            jobId: existingByMeta.jobId.toString(),
            name: existingByMeta.name,
            email: existingByMeta.email,
            source: existingByMeta.source,
            status: existingByMeta.status,
            resumeUrl: existingByMeta.resumeUrl,
            rawText: existingByMeta.rawText,
            structuredData: existingByMeta.structuredData,
            createdAt: existingByMeta.createdAt,
            updatedAt: existingByMeta.updatedAt,
          },
          isDuplicate: true,
        };
      }

      // ─── Step 5: Create new applicant ─────────────────────────────────────────────
      const applicant = new schema.Applicant({
        jobId,
        name: applicantName,
        email: applicantEmail,
        originalFilename: file.name,
        source: "External Upload",
        resumeUrl: `/uploads/${fileName}`,
        rawText: rawText || undefined,
        structuredData: structuredData || undefined,
        status: "Applied",
      });
      await applicant.save();

      await schema.Activity.create({
        userId: user.id,
        action: "CANDIDATE_UPLOADED",
        entityId: applicant._id.toString(),
        entityType: "applicant",
        metadata: { name: applicant.name, jobId },
      });

      return {
        applicant: {
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
        },
        isDuplicate: false,
      };
    },
    {
      body: t.Object({
        jobId: t.String(),
        file: t.File(),
      }),
      response: t.Object({
        applicant: ApplicantSchema,
        isDuplicate: t.Boolean(),
      }),
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
    async ({ params: { id }, user }) => {
      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });

      const job = await schema.Job.findById(applicant.jobId);
      if (!job) throw new Response("Job not found", { status: 404 });

      // Check if a screening result already exists
      const existingResult = await schema.ScreeningResult.findOne({ applicantId: applicant._id });
      if (existingResult) {
        return {
          success: true,
          result: {
            id: existingResult._id.toString(),
            applicantId: existingResult.applicantId.toString(),
            jobId: existingResult.jobId.toString(),
            overallScore: existingResult.overallScore,
            skillScore: existingResult.skillScore,
            experienceScore: existingResult.experienceScore,
            educationScore: existingResult.educationScore,
            relevanceScore: existingResult.relevanceScore,
            strengths: existingResult.strengths,
            gaps: existingResult.gaps,
            aiRecommendation: existingResult.aiRecommendation,
            aiReasoning: existingResult.aiReasoning,
            processedAt: existingResult.processedAt,
            createdAt: existingResult.createdAt,
            updatedAt: existingResult.updatedAt,
          },
        };
      }

      // Use AI service to screen the applicant
      const result = await aiService.screenApplicant(
        {
          title: job.title,
          description: job.description,
          requiredSkills: job.requiredSkills,
          weightSkills: job.weightSkills,
          weightExperience: job.weightExperience,
          weightEducation: job.weightEducation,
        },
        {
          name: applicant.name,
          rawText: applicant.rawText,
          structuredData: applicant.structuredData,
        },
      );

      // Create screening result in database
      const screeningResult = new schema.ScreeningResult({
        applicantId: applicant._id,
        jobId: applicant.jobId,
        overallScore: result.overallScore,
        skillScore: result.skillScore,
        experienceScore: result.experienceScore,
        educationScore: result.educationScore,
        relevanceScore: result.relevanceScore,
        strengths: result.strengths,
        gaps: result.gaps,
        aiRecommendation: result.aiRecommendation,
        aiReasoning: result.aiReasoning,
      });
      await screeningResult.save();

      // Update applicant status
      applicant.status = result.overallScore >= 70 ? "Shortlisted" : "Screened";
      await applicant.save();

      // Send notification
      await sendNotification({
        userId: job.userId,
        title: "Screening Complete",
        message: `Candidate ${applicant.name} has been screened for ${job.title}. Match score: ${result.overallScore}%`,
        type: result.overallScore >= 70 ? "success" : "info",
      });

      await schema.Activity.create({
        userId: user.id,
        action: "CANDIDATE_SCREENED",
        entityId: applicant._id.toString(),
        entityType: "applicant",
        metadata: { name: applicant.name, score: result.overallScore },
      });

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
