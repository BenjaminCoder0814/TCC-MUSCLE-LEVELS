import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkDatabase() {
  console.log('🔍 Verificando estado do banco de dados...\n');
  
  // Contagem total de exercícios
  const totalExercises = await prisma.exercise.count();
  console.log(`📊 Total de exercícios: ${totalExercises}`);
  
  // Exercícios sem imagem
  const exercisesWithoutImage = await prisma.exercise.count({
    where: {
      OR: [
        { fullVideoImageUrl: null },
        { fullVideoImageUrl: '' }
      ]
    }
  });
  console.log(`🖼️ Exercícios sem imagem: ${exercisesWithoutImage}`);
  
  // Exercícios sem instruções 
  const exercisesWithoutInstructions = await prisma.exercise.count({
    where: {
      OR: [
        { introduction: null },
        { introduction: '' }
      ]
    }
  });
  console.log(`📋 Exercícios sem instruções: ${exercisesWithoutInstructions}`);
  
  // Exercícios sem vídeo
  const exercisesWithoutVideo = await prisma.exercise.count({
    where: {
      OR: [
        { fullVideoUrl: null },
        { fullVideoUrl: '' }
      ]
    }
  });
  console.log(`🎬 Exercícios sem vídeo: ${exercisesWithoutVideo}`);
  
  // Amostra dos primeiros exercícios vazios
  console.log('\n📋 Amostra de exercícios que precisam de dados:');
  const sampleExercises = await prisma.exercise.findMany({
    where: {
      OR: [
        { fullVideoImageUrl: null },
        { fullVideoImageUrl: '' },
        { introduction: null },
        { introduction: '' }
      ]
    },
    select: {
      id: true,
      name: true,
      fullVideoImageUrl: true,
      introduction: true,
      fullVideoUrl: true
    },
    take: 10
  });
  
  sampleExercises.forEach((ex, idx) => {
    console.log(`${idx + 1}. ${ex.name}`);
    console.log(`   Imagem: ${ex.fullVideoImageUrl ? '✅' : '❌'}`);
    console.log(`   Instruções: ${ex.introduction ? '✅' : '❌'}`);
    console.log(`   Vídeo: ${ex.fullVideoUrl ? '✅' : '❌'}`);
    console.log('');
  });
  
  // Contagem de programas
  const totalPrograms = await prisma.program.count();
  console.log(`📚 Total de programas: ${totalPrograms}`);
}

checkDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect());