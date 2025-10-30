const { PrismaClient } = require("@prisma/client");

async function checkData() {
  const prisma = new PrismaClient();
  
  try {
    const userCount = await prisma.user.count();
    const exerciseCount = await prisma.exercise.count();
    const workoutCount = await prisma.workoutSession.count();
    
    console.log("📊 DADOS DO BANCO:");
    console.log(`   👥 Usuários: ${userCount}`);
    console.log(`   🏋️  Exercícios: ${exerciseCount}`);
    console.log(`   💪 Sessões de treino: ${workoutCount}`);
    
    // Top 3 usuários do leaderboard
    const topUsers = await prisma.user.findMany({
      select: {
        name: true,
        _count: {
          select: { WorkoutSession: true }
        }
      },
      orderBy: {
        WorkoutSession: { _count: 'desc' }
      },
      take: 3
    });
    
    console.log("\n🏆 TOP 3 LEADERBOARD:");
    topUsers.forEach((user, index) => {
      console.log(`   ${index + 1}. ${user.name}: ${user._count.WorkoutSession} treinos`);
    });
    
  } finally {
    await prisma.$disconnect();
  }
}

checkData().catch(console.error);