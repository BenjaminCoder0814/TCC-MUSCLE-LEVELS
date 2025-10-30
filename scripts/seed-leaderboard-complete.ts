// scripts/seed-leaderboard-complete.ts
// Cria dados completos para o leaderboard igual ao modelo
import { PrismaClient, ExerciseAttributeValueEnum } from "@prisma/client";
const prisma = new PrismaClient();

async function seedLeaderboard() {
  console.log('🏆 Criando dados completos do leaderboard...\n');

  try {
    // 1. Verificar usuários existentes
    const existingUsers = await prisma.user.count();
    console.log(`📊 Usuários existentes: ${existingUsers}`);

    // 2. Criar usuários do leaderboard se não existirem
    const leaderboardUsers = [
      {
        id: 'user-lukas-steger',
        firstName: 'Lukas',
        lastName: 'Steger',
        name: 'Lukas Steger',
        email: 'lukas.steger@muscle-levels.com',
        emailVerified: true,
        image: '/images/avatars/lukas.jpg',
        createdAt: new Date('2025-06-01'),
        updatedAt: new Date(),
      },
      {
        id: 'user-nicolas',
        firstName: 'Nicolas',
        lastName: 'Silva',
        name: 'Nicolas',
        email: 'nicolas.silva@muscle-levels.com',
        emailVerified: true,
        image: '/images/avatars/nicolas.jpg',
        createdAt: new Date('2025-08-01'),
        updatedAt: new Date(),
      },
      {
        id: 'user-kevin',
        firstName: 'Kevin',
        lastName: 'Santos',
        name: 'Kevin',
        email: 'kevin.santos@muscle-levels.com',
        emailVerified: true,
        image: '/images/avatars/kevin.jpg',
        createdAt: new Date('2025-08-01'),
        updatedAt: new Date(),
      },
      {
        id: 'user-tom',
        firstName: 'Tom',
        lastName: 'Oliveira',
        name: 'Tom',
        email: 'tom.oliveira@muscle-levels.com',
        emailVerified: true,
        image: '/images/avatars/tom.jpg',
        createdAt: new Date('2025-07-01'),
        updatedAt: new Date(),
      },
    ];

    let createdUsers = 0;
    for (const userData of leaderboardUsers) {
      const existing = await prisma.user.findUnique({
        where: { email: userData.email }
      });

      if (!existing) {
        await prisma.user.create({ data: userData });
        console.log(`✅ Usuário criado: ${userData.name}`);
        createdUsers++;
      } else {
        console.log(`⏭️  Usuário já existe: ${userData.name}`);
      }
    }

    // 3. Obter todos os exercícios para criar sessões
    const exercises = await prisma.exercise.findMany({
      take: 20 // Pegar 20 exercícios variados
    });

    if (exercises.length === 0) {
      console.log('❌ Nenhum exercício encontrado. Execute o seed de exercícios primeiro.');
      return;
    }

    console.log(`\n🏋️  Encontrados ${exercises.length} exercícios para criar sessões`);

    // 4. Criar sessões de treino para cada usuário
    const users = await prisma.user.findMany({
      where: {
        email: {
          endsWith: '@muscle-levels.com'
        }
      }
    });

    console.log(`\n💪 Criando sessões para ${users.length} usuários...`);

    let totalSessions = 0;
    for (const user of users) {
      // Número de treinos baseado no modelo
      let sessionCount = 0;
      if (user.name === 'Lukas Steger') sessionCount = 58;
      else if (user.name === 'Nicolas') sessionCount = 56;
      else if (user.name === 'Kevin') sessionCount = 55;
      else if (user.name === 'Tom') sessionCount = 51;

      // Criar sessões distribuídas ao longo de 3 meses
      const startDate = new Date('2025-08-01');
      const endDate = new Date();
      
      for (let i = 0; i < sessionCount; i++) {
        // Data aleatória entre startDate e endDate
        const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        const sessionDate = new Date(randomTime);
        
        // Duração aleatória entre 30-90 minutos
        const duration = Math.floor(Math.random() * 3600) + 1800; // 30-90 min em segundos
        
        const session = await prisma.workoutSession.create({
          data: {
            userId: user.id,
            startedAt: sessionDate,
            endedAt: new Date(sessionDate.getTime() + duration * 1000),
            duration,
            rating: Math.floor(Math.random() * 2) + 4, // 4 ou 5 estrelas
            muscles: [['CHEST', 'BACK', 'SHOULDERS', 'BICEPS', 'TRICEPS'][Math.floor(Math.random() * 5)] as ExerciseAttributeValueEnum]
          }
        });

        // Adicionar 2-4 exercícios por sessão
        const sessionExercises = exercises.slice(0, Math.floor(Math.random() * 3) + 2);
        
        for (let j = 0; j < sessionExercises.length; j++) {
          await prisma.workoutSessionExercise.create({
            data: {
              workoutSessionId: session.id,
              exerciseId: sessionExercises[j].id,
              order: j + 1,
              sets: [
                { reps: 12, weight: 20, duration: null, distance: null, completed: true },
                { reps: 10, weight: 22.5, duration: null, distance: null, completed: true },
                { reps: 8, weight: 25, duration: null, distance: null, completed: true }
              ]
            }
          });
        }

        totalSessions++;
        
        // Log progresso a cada 10 sessões
        if (totalSessions % 10 === 0) {
          console.log(`   📈 ${totalSessions} sessões criadas...`);
        }
      }

      console.log(`✅ ${sessionCount} sessões criadas para ${user.name}`);
    }

    // 5. Estatísticas finais
    const finalStats = await prisma.workoutSession.groupBy({
      by: ['userId'],
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } }
    });

    console.log('\n📊 RANKING FINAL:');
    for (const stat of finalStats) {
      const user = users.find(u => u.id === stat.userId);
      if (user) {
        console.log(`   🏆 ${user.name}: ${stat._count.id} treinos`);
      }
    }

    console.log(`\n🎉 Leaderboard completo criado!`);
    console.log(`   ✅ ${createdUsers} novos usuários`);
    console.log(`   ✅ ${totalSessions} sessões de treino`);
    console.log(`   🏆 Ranking funcional igual ao modelo`);

  } catch (error) {
    console.error('❌ Erro ao criar leaderboard:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  seedLeaderboard().catch(console.error);
}

export { seedLeaderboard };