import fs from "node:fs";
import path from "node:path";
import { schema } from "@repo/db";
import activitiesData from "@repo/db/seed-data/activities.json";
import applicantsData from "@repo/db/seed-data/applicants.json";
import jobsData from "@repo/db/seed-data/jobs.json";
import profilesData from "@repo/db/seed-data/profiles.json";
import screeningResultsData from "@repo/db/seed-data/screening-results.json";
import umuravaTalentsData from "@repo/db/seed-data/umurava-talents.json";
import usersData from "@repo/db/seed-data/users.json";
import { hashPassword } from "better-auth/crypto";
import mongoose from "mongoose";
import PDFDocument from "pdfkit";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description?: string;
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  year: number;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  role: string;
  link?: string;
  startDate: string;
  endDate: string;
}

interface Certification {
  name: string;
  issuer: string;
  issueDate?: string;
}

interface Skill {
  name: string;
  level?: string;
  yearsOfExperience?: number;
}

interface Language {
  name: string;
  proficiency: string;
}

interface StructuredData {
  education?: Education[];
  experience?: Experience[];
  skills?: (string | Skill)[];
  location?: string;
  headline?: string;
  bio?: string;
  projects?: Project[];
  certifications?: Certification[];
  languages?: Language[];
}

interface Applicant {
  name: string;
  email: string;
  structuredData?: StructuredData;
}

// Helper function to generate a professional resume PDF
const generateResumePDF = async (
  applicant: Applicant,
  pdfPath: string,
  isUmuravaTalent: boolean = false,
): Promise<void> => {
  const doc = new PDFDocument({ margin: 50 });
  const stream = fs.createWriteStream(pdfPath);
  doc.pipe(stream);

  // Header with contact information
  doc.fontSize(20).font("Helvetica-Bold").text(applicant.name, { underline: true });
  doc.fontSize(10).font("Helvetica").moveDown(0.5);

  const contactInfo = [
    applicant.email,
    applicant.structuredData?.location || "Location not specified",
    "+1 (555) 123-4567", // Placeholder phone
  ].filter(Boolean);
  doc.text(contactInfo.join(" | "));

  doc.moveDown(0.8);
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.6);

  // Professional Summary / Headline
  if (isUmuravaTalent && applicant.structuredData?.headline) {
    doc.fontSize(12).font("Helvetica-Bold").text("HEADLINE", { underline: false });
    doc.fontSize(10).font("Helvetica").moveDown(0.3).text(applicant.structuredData.headline);
    doc.moveDown(0.3);
  }

  // Bio / Summary
  if (applicant.structuredData?.bio) {
    doc.fontSize(12).font("Helvetica-Bold").text("PROFESSIONAL SUMMARY", { underline: false });
    doc.fontSize(10).font("Helvetica").moveDown(0.3);
    doc.text(applicant.structuredData.bio, { align: "left", width: 450 });
    doc.moveDown(0.6);
  } else {
    doc.fontSize(12).font("Helvetica-Bold").text("PROFESSIONAL SUMMARY", { underline: false });
    doc.fontSize(10).font("Helvetica").moveDown(0.3);
    const summary = `Results-driven professional with ${
      applicant.structuredData?.experience?.length || 3
    }+ years of experience. Proven expertise in ${
      applicant.structuredData?.skills?.slice(0, 3).join(", ") || "technology"
    }. Known for delivering high-quality solutions and collaborating effectively with cross-functional teams.`;
    doc.text(summary, { align: "left", width: 450 });
    doc.moveDown(0.6);
  }

  // Experience Section
  if (applicant.structuredData?.experience && applicant.structuredData.experience.length > 0) {
    doc.fontSize(12).font("Helvetica-Bold").text("PROFESSIONAL EXPERIENCE", { underline: false });
    doc.moveDown(0.3);

    const experiences = applicant.structuredData.experience;
    experiences.forEach((exp: Experience, index: number) => {
      doc.fontSize(11).font("Helvetica-Bold").text(exp.role, { continued: true });
      doc.font("Helvetica").text(` at ${exp.company}`);
      doc
        .fontSize(9)
        .font("Helvetica")
        .fillColor("#666666")
        .text(exp.duration)
        .fillColor("#000000");
      doc.fontSize(10).font("Helvetica").moveDown(0.2);

      const description =
        exp.description ||
        `Performed duties as ${exp.role} with focus on technical excellence and innovation.`;
      doc.text(`• ${description}`, { width: 450 });

      if (index < experiences.length - 1) {
        doc.moveDown(0.4);
      }
    });

    doc.moveDown(0.6);
  }

  // Projects Section (for Umurava talents)
  if (
    isUmuravaTalent &&
    applicant.structuredData?.projects &&
    applicant.structuredData.projects.length > 0
  ) {
    doc.fontSize(12).font("Helvetica-Bold").text("PROJECTS", { underline: false });
    doc.moveDown(0.3);

    const projects = applicant.structuredData.projects;
    projects.forEach((project: Project, index: number) => {
      doc.fontSize(11).font("Helvetica-Bold").text(project.name);
      doc
        .fontSize(9)
        .font("Helvetica")
        .text(`${project.role} | ${project.startDate} - ${project.endDate}`);
      doc.fontSize(10).font("Helvetica").moveDown(0.2);
      doc.text(`• ${project.description}`, { width: 450 });

      if (project.technologies && project.technologies.length > 0) {
        doc
          .fontSize(9)
          .font("Helvetica")
          .fillColor("#666666")
          .text(`Technologies: ${project.technologies.join(", ")}`)
          .fillColor("#000000");
      }

      if (index < projects.length - 1) {
        doc.moveDown(0.4);
      }
    });

    doc.moveDown(0.6);
  }

  // Education Section
  if (applicant.structuredData?.education && applicant.structuredData.education.length > 0) {
    doc.fontSize(12).font("Helvetica-Bold").text("EDUCATION", { underline: false });
    doc.moveDown(0.3);

    applicant.structuredData.education.forEach((edu: Education) => {
      doc.fontSize(11).font("Helvetica-Bold").text(`${edu.degree} in ${edu.field}`);
      doc.fontSize(10).font("Helvetica").text(`${edu.institution}, ${edu.year}`);
      doc.moveDown(0.4);
    });

    doc.moveDown(0.4);
  }

  // Certifications Section (for Umurava talents)
  if (
    isUmuravaTalent &&
    applicant.structuredData?.certifications &&
    applicant.structuredData.certifications.length > 0
  ) {
    doc.fontSize(12).font("Helvetica-Bold").text("CERTIFICATIONS", { underline: false });
    doc.moveDown(0.3);

    applicant.structuredData.certifications.forEach((cert: Certification) => {
      doc.fontSize(10).font("Helvetica").text(`• ${cert.name} - ${cert.issuer}`);
      if (cert.issueDate) {
        doc
          .fontSize(9)
          .font("Helvetica")
          .fillColor("#666666")
          .text(`Issued: ${cert.issueDate}`)
          .fillColor("#000000");
      }
      doc.moveDown(0.3);
    });

    doc.moveDown(0.4);
  }

  // Technical Skills Section
  if (applicant.structuredData?.skills && applicant.structuredData.skills.length > 0) {
    doc.fontSize(12).font("Helvetica-Bold").text("TECHNICAL SKILLS", { underline: false });
    doc.fontSize(10).font("Helvetica").moveDown(0.3);

    const skillsList = Array.isArray(applicant.structuredData.skills)
      ? applicant.structuredData.skills
          .map((s: string | Skill) => {
            if (typeof s === "string") {
              return s;
            }
            const level = s?.level ? ` (${s.level})` : "";
            return `${s?.name || ""}${level}`;
          })
          .filter(Boolean)
      : [];

    const skillsText = skillsList.join(" • ");
    doc.text(skillsText, { width: 450 });
    doc.moveDown(0.6);
  }

  // Languages Section (for Umurava talents)
  if (
    isUmuravaTalent &&
    applicant.structuredData?.languages &&
    applicant.structuredData.languages.length > 0
  ) {
    doc.fontSize(12).font("Helvetica-Bold").text("LANGUAGES", { underline: false });
    doc.fontSize(10).font("Helvetica").moveDown(0.3);

    applicant.structuredData.languages.forEach((lang: Language) => {
      doc.text(`• ${lang.name} (${lang.proficiency})`);
    });
  }

  doc.end();

  // Wait for the stream to finish writing
  await new Promise((resolve) => stream.on("finish", () => resolve(undefined)));
};

const seed = async () => {
  console.log("Starting comprehensive database seeding process...");

  console.log("Cleaning up existing data...");
  await Promise.all([
    schema.account.deleteMany({}),
    schema.session.deleteMany({}),
    schema.user.deleteMany({}),
    schema.job.deleteMany({}),
    schema.applicant.deleteMany({}),
    schema.screeningResult.deleteMany({}),
    schema.activity.deleteMany({}),
    schema.profile.deleteMany({}),
  ]);

  const resumesDir = path.join(process.cwd(), "../../apps/web/public/resumes");
  if (fs.existsSync(resumesDir)) {
    console.log("Cleaning up generated PDFs...");
    fs.rmSync(resumesDir, { recursive: true, force: true });
  }

  console.log(`Inserting ${usersData.length} realistic users and accounts...`);
  for (const userData of usersData) {
    const { password, ...user } = userData;

    await schema.user.create({
      _id: user.id,
      ...user,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    });

    const hashedPassword = await hashPassword(password);
    await schema.account.create({
      _id: user.id,
      id: user.id,
      userId: user.id,
      accountId: user.id,
      providerId: "credential",
      password: hashedPassword,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    });
  }

  console.log(`Inserting ${profilesData.length} profiles...`);
  await schema.profile.insertMany(
    profilesData.map((p) => ({
      ...p,
      createdAt: new Date(p.createdAt),
      updatedAt: new Date(p.updatedAt),
    })),
  );

  console.log(`Inserting ${jobsData.length} realistic jobs...`);
  await schema.job.insertMany(
    jobsData.map((j) => ({
      ...j,
      createdAt: new Date(j.createdAt),
      updatedAt: new Date(j.updatedAt),
    })),
  );

  console.log(`Inserting ${applicantsData.length} realistic applicants and generating PDFs...`);
  if (!fs.existsSync(resumesDir)) {
    fs.mkdirSync(resumesDir, { recursive: true });
  }

  for (const a of applicantsData) {
    const id = a._id;
    const safeName = a.name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    const fileName = `${safeName}-${id}.pdf`;
    const pdfPath = path.join(resumesDir, fileName);

    await generateResumePDF(a, pdfPath, false);

    await schema.applicant.create({
      ...a,
      jobId: new mongoose.Types.ObjectId(a.jobId as string),
      structuredData: {
        ...a.structuredData,
        skills: a.structuredData?.skills?.map(
          (s: string | { name: string; level: string; yearsOfExperience: number }) =>
            typeof s === "string" ? { name: s, level: "Intermediate", yearsOfExperience: 3 } : s,
        ),
      },
      resumeUrl: `/resumes/${fileName}`,
      createdAt: new Date(a.createdAt),
      updatedAt: new Date(a.updatedAt),
    });
  }

  console.log("Seeding Umurava Talent Pool candidates for each job...");
  for (const job of jobsData) {
    // Assign 3-5 talents from the Umurava pool to each job
    const numTalents = Math.floor(Math.random() * 3) + 3;
    const shuffled = [...umuravaTalentsData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numTalents);

    for (const talent of selected) {
      const { email: _talentEmail, ...rest } = talent;
      const talentName = `${talent.firstName} ${talent.lastName}`;
      const talentId = new mongoose.Types.ObjectId().toString();
      const safeName = talentName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
      const fileName = `${safeName}-${talentId}.pdf`;
      const pdfPath = path.join(resumesDir, fileName);

      // Generate resume for Umurava talent
      const talentApplicant = {
        name: talentName,
        email: `${job._id.toString().slice(-4)}_${talent.email}`,
        structuredData: rest,
      };
      await generateResumePDF(talentApplicant, pdfPath, true);

      await schema.applicant.create({
        jobId: new mongoose.Types.ObjectId(job._id as string),
        name: talentName,
        email: `${job._id.toString().slice(-4)}_${talent.email}`,
        source: "Umurava Talent Pool",
        structuredData: rest,
        status: "Pending_Screening",
        resumeUrl: `/resumes/${fileName}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }

  console.log(`Inserting ${screeningResultsData.length} realistic screening results...`);
  await schema.screeningResult.insertMany(
    screeningResultsData.map((s) => ({
      ...s,
      processedAt: new Date(s.processedAt),
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt),
    })),
  );

  console.log(`Inserting ${activitiesData.length} realistic activities...`);
  await schema.activity.insertMany(
    activitiesData.map((a) => ({
      ...a,
      createdAt: new Date(a.createdAt),
      updatedAt: new Date(a.updatedAt),
    })),
  );

  console.log("Database seeded successfully with all realistic data sets.");
  process.exit(0);
};

seed().catch((error) => {
  console.error("Seeding failed:");
  console.dir(error, { depth: null });
  process.exit(1);
});
