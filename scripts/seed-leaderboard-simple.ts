// scripts/seed-leaderboard-simple.ts
// Criar dados simples para o leaderboard
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedLeaderboardSimple() {
  console.log('🏆 Criando leaderboard simples...\n');

  try {
    // 1. Verificar se já temos usuários
    let users = await prisma.user.findMany();
    
    if (users.length === 0) {
      console.log('📊 Criando usuários do leaderboard...');
      
      // Criar usuários básicos
      const userData = [
        { name: 'Lukas Steger', email: 'lukas@muscle-levels.com' },
        { name: 'Nicolas', email: 'nicolas@muscle-levels.com' },
        { name: 'Kevin', email: 'kevin@muscle-levels.com' },
        { name: 'Tom', email: 'tom@muscle-levels.com' },
      ];

      for (const user of userData) {
        await prisma.user.create({
          data: {
            id: `user-${user.name.toLowerCase().replace(/\s+/g, '-')}`,
            firstName: user.name.split(' ')[0],
            lastName: user.name.split(' ')[1] || '',
            name: user.name,
            email: user.email,
            emailVerified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        });
        console.log(`✅ Usuário criado: ${user.name}`);
      }
      
      users = await prisma.user.findMany();
    } else {
      console.log(`📊 Usando ${users.length} usuários existentes`);
    }

    // 2. Criar sessões de treino simples
    const sessionsPerUser: Record<string, number> = {
      'Lukas Steger': 58,
      'Nicolas': 56,
      'Kevin': 55,
      'Tom': 51
    };

    console.log('\n💪 Criando sessões de treino...');

    for (const user of users) {
      const targetSessions = sessionsPerUser[user.name] || 25;
      
      // Verificar se já tem sessões
      const existingSessions = await prisma.workoutSession.count({
        where: { userId: user.id }
      });

      if (existingSessions >= targetSessions) {
        console.log(`⏭️  ${user.name} já tem ${existingSessions} sessões`);
        continue;
      }

      const sessionsToCreate = targetSessions - existingSessions;
      console.log(`🔄 Criando ${sessionsToCreate} sessões para ${user.name}...`);

      // Criar sessões distribuídas nos últimos 3 meses
      const now = new Date();
      const threeMonthsAgo = new Date(now.getTime() - (90 * 24 * 60 * 60 * 1000));

      for (let i = 0; i < sessionsToCreate; i++) {
        // Data aleatória nos últimos 3 meses
        const randomTime = threeMonthsAgo.getTime() + 
          Math.random() * (now.getTime() - threeMonthsAgo.getTime());
        const startDate = new Date(randomTime);
        
        // Duração entre 30-90 minutos
        const duration = Math.floor(Math.random() * 3600) + 1800;
        const endDate = new Date(startDate.getTime() + (duration * 1000));

        await prisma.workoutSession.create({
          data: {
            userId: user.id,
            startedAt: startDate,
            endedAt: endDate,
            duration,
            rating: Math.floor(Math.random() * 2) + 4, // 4 ou 5 estrelas
          }
        });
      }

      console.log(`✅ ${user.name}: ${targetSessions} sessões totais`);
    }

    // 3. Verificar resultados
    console.log('\n🏆 RANKING FINAL:');
    const leaderboard = await prisma.workoutSession.groupBy({
      by: ['userId'],
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } }
    });

    for (const entry of leaderboard) {
      const user = users.find(u => u.id === entry.userId);
      if (user) {
        console.log(`   ${user.name}: ${entry._count.id} treinos`);
      }
    }

    console.log('\n🎉 Leaderboard criado com sucesso!');

  } catch (error) {
    console.error('❌ Erro:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seedLeaderboardSimple().catch(console.error);