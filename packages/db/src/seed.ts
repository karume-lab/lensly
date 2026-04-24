import { schema } from "@repo/db";
import usersData from "@repo/db/mock-data/users.json";
import { hashPassword } from "better-auth/crypto";

const seed = async () => {
  console.log("Starting database seeding process...");

  console.log("Cleaning up existing data...");
  await schema.account.deleteMany({});
  await schema.session.deleteMany({});
  await schema.user.deleteMany({});

  console.log(`Inserting ${usersData.length} mock users...`);

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

  console.log("Users and accounts successfully seeded.");
  console.log("Database seeding finalized completely.");
  process.exit(0);
};

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
