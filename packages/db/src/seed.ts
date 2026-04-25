import { schema } from "@repo/db";
import activitiesData from "@repo/db/seed-data/activities.json";
import applicantsData from "@repo/db/seed-data/applicants.json";
import jobsData from "@repo/db/seed-data/jobs.json";
import profilesData from "@repo/db/seed-data/profiles.json";
import screeningResultsData from "@repo/db/seed-data/screening-results.json";
import usersData from "@repo/db/seed-data/users.json";
import { hashPassword } from "better-auth/crypto";

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

  console.log(`Inserting ${usersData.length} realistic users and accounts...`);
  for (const userData of usersData) {
    const { password, ...user } = userData;

    await schema.user.create({
      ...user,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    });

    const hashedPassword = await hashPassword(password);
    await schema.account.create({
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

  console.log(`Inserting ${applicantsData.length} realistic applicants...`);
  await schema.applicant.insertMany(
    applicantsData.map((a) => ({
      ...a,
      createdAt: new Date(a.createdAt),
      updatedAt: new Date(a.updatedAt),
    })),
  );

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
  console.error("Seeding failed:", error);
  process.exit(1);
});
