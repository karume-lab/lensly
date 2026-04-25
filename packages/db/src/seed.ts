import fs from "node:fs";
import path from "node:path";
import { schema } from "@repo/db";
import activitiesData from "@repo/db/seed-data/activities.json";
import applicantsData from "@repo/db/seed-data/applicants.json";
import jobsData from "@repo/db/seed-data/jobs.json";
import profilesData from "@repo/db/seed-data/profiles.json";
import screeningResultsData from "@repo/db/seed-data/screening-results.json";
import usersData from "@repo/db/seed-data/users.json";
import { hashPassword } from "better-auth/crypto";
import PDFDocument from "pdfkit";

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

    const doc = new PDFDocument();
    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);
    doc.fontSize(25).text(a.name, 100, 80);
    doc.fontSize(12).text(a.email, 100, 115);
    doc.moveDown();
    doc.fontSize(14).text("Summary of Skills", { underline: true });
    doc.fontSize(10).text(a.structuredData?.skills?.join(", ") || "N/A");
    doc.moveDown();
    doc.fontSize(14).text("Experience", { underline: true });
    a.structuredData?.experience?.forEach((exp) => {
      doc.fontSize(11).text(`${exp.role} at ${exp.company} (${exp.duration})`);
    });
    doc.end();

    // We don't necessarily need to wait for each stream to finish in the loop
    // but it's safer for a seeder to avoid EMFILE
    await new Promise((resolve) => stream.on("finish", () => resolve(undefined)));

    await schema.applicant.create({
      ...a,
      resumeUrl: `/resumes/${fileName}`,
      createdAt: new Date(a.createdAt),
      updatedAt: new Date(a.updatedAt),
    });
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
