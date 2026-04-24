import { PromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

const AIStructuredDataSchema = z.object({
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
  skills: z.array(z.string()).optional(),
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
      Include education history, work experience, skills, and location.
      
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
}

export const aiService = new AIService();
