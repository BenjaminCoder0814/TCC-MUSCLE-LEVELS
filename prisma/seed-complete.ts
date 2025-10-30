import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting complete database seed...");

  // 1. Criar usuário de teste
  console.log("👤 Creating test user...");
  const userId = `user-${Date.now()}`;
  const user = await prisma.user.upsert({
    where: { email: "benjamin@example.com" },
    update: {},
    create: {
      id: userId,
      email: "benjamin@example.com",
      name: "Benjamin Coder",
      firstName: "Benjamin",
      lastName: "Coder",
      emailVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log(`✅ User created: ${user.email}`);

  // 2. Criar programas de treino
  console.log("📋 Creating workout programs...");
  
  const programs = [
    {
      title: "Full Body Beginner",
      slug: "full-body-beginner",
      description: "Perfect program for beginners focusing on compound movements and building a solid foundation.",
      difficulty: "BEGINNER",
      durationWeeks: 8,
      sessionsPerWeek: 3,
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      published: true,
      featured: true,
    },
    {
      title: "Upper Lower Split",
      slug: "upper-lower-split",
      description: "Classic 4-day split focusing on upper and lower body development with progressive overload.",
      difficulty: "INTERMEDIATE",
      durationWeeks: 12,
      sessionsPerWeek: 4,
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      published: true,
      featured: true,
    },
    {
      title: "Push Pull Legs",
      slug: "push-pull-legs",
      description: "Advanced 6-day split for maximum muscle growth and strength development.",
      difficulty: "ADVANCED",
      durationWeeks: 16,
      sessionsPerWeek: 6,
      imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
      published: true,
      featured: false,
    },
    {
      title: "Strength & Power",
      slug: "strength-power",
      description: "Focused program for building maximum strength with low reps and heavy weights.",
      difficulty: "ADVANCED",
      durationWeeks: 10,
      sessionsPerWeek: 4,
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      published: true,
      featured: false,
    },
    {
      title: "Athletic Performance",
      slug: "athletic-performance",
      description: "Designed for athletes focusing on explosive power, speed, and functional strength.",
      difficulty: "INTERMEDIATE",
      durationWeeks: 12,
      sessionsPerWeek: 5,
      imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800",
      published: true,
      featured: false,
    },
  ];

  for (const programData of programs) {
    const program = await prisma.program.upsert({
      where: { slug: programData.slug },
      update: {},
      create: programData,
    });
    console.log(`✅ Program created: ${program.title}`);
  }

  // 3. Verificar e reportar exercícios existentes
  const exerciseCount = await prisma.exercise.count();
  console.log(`✅ Exercises in database: ${exerciseCount}`);

  // 4. Estatísticas finais
  console.log("\n📊 Database Summary:");
  console.log(`Users: ${await prisma.user.count()}`);
  console.log(`Programs: ${await prisma.program.count()}`);
  console.log(`Exercises: ${await prisma.exercise.count()}`);
  console.log(`Workout Sessions: ${await prisma.workoutSession.count()}`);
  
  console.log("\n✅ Seed completed successfully!");
  console.log("\n🔐 Test user credentials:");
  console.log("Email: benjamin@example.com");
  console.log("(Use Better Auth to login)");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
