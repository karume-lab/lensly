import { PromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

const AIStructuredDataSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  headline: z.string().optional(),
  bio: z.string().optional(),
  education: z
    .array(
      z.object({
        institution: z.string().optional(),
        degree: z.string().optional(),
        field: z.string().optional(),
        year: z.number().optional(),
      }),
    )
    .optional(),
  experience: z
    .array(
      z.object({
        company: z.string().optional(),
        role: z.string().optional(),
        duration: z.string().optional(),
        description: z.string().optional(),
      }),
    )
    .optional(),
  skills: z
    .array(
      z.object({
        name: z.string(),
        level: z.string(),
        yearsOfExperience: z.number(),
      }),
    )
    .optional(),
  languages: z
    .array(
      z.object({
        name: z.string(),
        proficiency: z.string(),
      }),
    )
    .optional(),
  certifications: z
    .array(
      z.object({
        name: z.string(),
        issuer: z.string(),
        issueDate: z.string(),
      }),
    )
    .optional(),
  location: z.string().optional(),
});

const AIScreeningResultSchema = z.object({
  overallScore: z.number().min(0).max(100),
  skillScore: z.number().min(0).max(100),
  experienceScore: z.number().min(0).max(100),
  educationScore: z.number().min(0).max(100),
  relevanceScore: z.number().min(0).max(100),
  strengths: z.array(z.string()),
  gaps: z.array(z.string()),
  aiRecommendation: z.string(),
  aiReasoning: z.string(),
});

export type AIStructuredData = z.infer<typeof AIStructuredDataSchema>;
export type AIScreeningResult = z.infer<typeof AIScreeningResultSchema>;

export interface UmuravaTalent {
  firstName: string;
  lastName: string;
  email: string;
  headline: string;
  bio: string;
  skills: {
    name: string;
    level: string;
    yearsOfExperience: number;
  }[];
  languages?: {
    name: string;
    proficiency: string;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    issueDate: string;
  }[];
  projects?: {
    name: string;
    description: string;
    technologies: string[];
    role: string;
    link: string;
    startDate: string;
    endDate: string;
  }[];
  availability?: {
    status: string;
    type: string;
    startDate: string;
  };
  socialLinks?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  location: string;
}

export class AIService {
  private model: ChatGoogleGenerativeAI;

  constructor() {
    this.model = new ChatGoogleGenerativeAI({
      model: "gemini-flash-latest",
      apiVersion: "v1beta",
      maxOutputTokens: 2048,
    });
  }

  async parseResume(text: string): Promise<AIStructuredData> {
    const prompt = PromptTemplate.fromTemplate(`
      Extract structured information from the following resume text. 
      Include candidate names, headline, bio, education history, work experience, skills (with level and years of experience), languages, certifications, and location.
      
      Resume Text:
      {text}
    `);

    const chain = prompt.pipe(this.model.withStructuredOutput(AIStructuredDataSchema));

    return await chain.invoke({ text });
  }

  async screenApplicant(
    job: {
      title: string;
      description: string;
      requiredSkills: string[];
      weightSkills: number;
      weightExperience: number;
      weightEducation: number;
    },
    applicant: {
      name: string;
      rawText?: string;
      structuredData?: AIStructuredData;
    },
  ): Promise<AIScreeningResult> {
    const prompt = PromptTemplate.fromTemplate(`
      Evaluate the following applicant for the job description provided.
      
      Job Title: {jobTitle}
      Job Description: {jobDescription}
      Required Skills: {requiredSkills}
      Weights: Skills ({weightSkills}%), Experience ({weightExperience}%), Education ({weightEducation}%)
      
      Applicant Name: {applicantName}
      Applicant Resume Text: {applicantText}
      Applicant Structured Data: {applicantStructuredData}
      
      Provide a detailed screening result including scores (0-100), strengths, gaps, a recommendation (e.g., "Strong Yes", "Maybe", "No"), and reasoning.
      The overallScore should be a weighted average based on the provided weights.
    `);

    const chain = prompt.pipe(this.model.withStructuredOutput(AIScreeningResultSchema));

    return await chain.invoke({
      jobTitle: job.title,
      jobDescription: job.description,
      requiredSkills: job.requiredSkills.join(", "),
      weightSkills: job.weightSkills,
      weightExperience: job.weightExperience,
      weightEducation: job.weightEducation,
      applicantName: applicant.name,
      applicantText: applicant.rawText || "N/A",
      applicantStructuredData: JSON.stringify(applicant.structuredData || {}),
    });
  }

  async matchTalents(
    job: {
      title: string;
      description: string;
      requiredSkills: string[];
    },
    talents: UmuravaTalent[],
  ): Promise<string[]> {
    const prompt = PromptTemplate.fromTemplate(`
      You are an expert technical recruiter. Review the following job details and the provided list of candidates.
      Select the 3 to 5 most qualified candidates for this job from the list based on their skills, experience, and headline.
      Return an array of the selected candidates' email addresses.

      Job Title: {jobTitle}
      Job Description: {jobDescription}
      Required Skills: {requiredSkills}

      Candidates:
      {talents}
    `);

    const MatchingSchema = z.object({
      selectedEmails: z.array(z.string()),
    });

    const chain = prompt.pipe(this.model.withStructuredOutput(MatchingSchema));

    const simplifiedTalents = talents.map((t) => ({
      email: t.email,
      name: `${t.firstName} ${t.lastName}`,
      headline: t.headline,
      skills: t.skills?.map((s) => s.name).join(", "),
      experience_years: t.skills?.reduce((max, s) => Math.max(max, s.yearsOfExperience || 0), 0),
    }));

    const result = await chain.invoke({
      jobTitle: job.title,
      jobDescription: job.description,
      requiredSkills: job.requiredSkills.join(", "),
      talents: JSON.stringify(simplifiedTalents, null, 2),
    });

    return result.selectedEmails || [];
  }
}

export const aiService = new AIService();
