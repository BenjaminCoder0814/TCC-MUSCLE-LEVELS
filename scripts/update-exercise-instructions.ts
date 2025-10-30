import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateExerciseInstructions() {
  console.log('📝 Atualizando instruções dos exercícios...');

  // Obter alguns exercícios e verificar se têm instruções
  const exercises = await prisma.exercise.findMany({
    select: {
      id: true,
      name: true,
      introduction: true,
      fullVideoUrl: true
    },
    take: 10
  });

  console.log('\n📋 Exercícios e suas instruções:');
  exercises.forEach(ex => {
    console.log(`- ${ex.name}`);
    console.log(`  Introdução: ${ex.introduction ? 'SIM' : 'NÃO'}`);
    console.log(`  Vídeo: ${ex.fullVideoUrl ? 'SIM' : 'NÃO'}`);
    console.log('');
  });

  // Atualizar exercícios sem instruções com conteúdo padrão
  const updateResult = await prisma.exercise.updateMany({
    where: {
      OR: [
        { introduction: null },
        { introduction: '' },
        { fullVideoUrl: null },
        { fullVideoUrl: '' }
      ]
    },
    data: {
      introduction: 'Instrução detalhada do exercício será adicionada em breve. Execute o movimento de forma controlada e mantenha a postura adequada.',
      fullVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Placeholder video
    }
  });

  console.log(`✅ Atualizadas ${updateResult.count} instruções de exercícios`);
}

updateExerciseInstructions()
  .catch(console.error)
  .finally(() => prisma.$disconnect());