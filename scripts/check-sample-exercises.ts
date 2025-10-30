import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkExerciseSample() {
  console.log('🔍 Verificando amostra de exercícios...\n');
  
  const exercises = await prisma.exercise.findMany({
    select: {
      id: true,
      name: true,
      nameEn: true,
      fullVideoImageUrl: true,
      introduction: true,
      fullVideoUrl: true
    },
    take: 5
  });
  
  exercises.forEach((ex, idx) => {
    console.log(`${idx + 1}. ${ex.name} (${ex.nameEn})`);
    console.log(`   Imagem: ${ex.fullVideoImageUrl}`);
    console.log(`   Instruções: ${ex.introduction ? ex.introduction.substring(0, 50) + '...' : 'N/A'}`);
    console.log(`   Vídeo: ${ex.fullVideoUrl}`);
    console.log('');
  });
}

checkExerciseSample()
  .catch(console.error)
  .finally(() => prisma.$disconnect());