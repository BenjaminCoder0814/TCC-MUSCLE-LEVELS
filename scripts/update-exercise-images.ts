import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateExerciseImages() {
  console.log('🖼️ Atualizando imagens dos exercícios...');

  // Atualizar todos os exercícios que não têm imagem ou têm URL externa
  const result = await prisma.exercise.updateMany({
    where: {
      OR: [
        { fullVideoImageUrl: null },
        { fullVideoImageUrl: { startsWith: 'https://Muscle Levels/' } },
        { fullVideoImageUrl: '' }
      ]
    },
    data: {
      fullVideoImageUrl: '/images/placeholders/no-image.jpg'
    }
  });

  console.log(`✅ Atualizadas ${result.count} imagens de exercícios`);

  // Mostrar alguns exercícios para verificar
  const samples = await prisma.exercise.findMany({
    select: {
      id: true,
      name: true,
      fullVideoImageUrl: true
    },
    take: 5
  });

  console.log('\n📋 Amostra de exercícios atualizados:');
  samples.forEach(ex => {
    console.log(`- ${ex.name}: ${ex.fullVideoImageUrl}`);
  });
}

updateExerciseImages()
  .catch(console.error)
  .finally(() => prisma.$disconnect());