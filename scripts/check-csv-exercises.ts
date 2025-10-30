import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkCSVImportedExercises() {
  console.log('🔍 Verificando exercícios importados do CSV...\n');
  
  // Buscar exercícios que NÃO têm o placeholder (provavelmente vieram do CSV)
  const csvExercises = await prisma.exercise.findMany({
    where: {
      NOT: {
        fullVideoImageUrl: '/images/placeholders/exercise-placeholder.svg'
      }
    },
    select: {
      id: true,
      name: true,
      nameEn: true,
      fullVideoImageUrl: true,
      introduction: true,
      fullVideoUrl: true
    },
    take: 10
  });
  
  console.log(`📊 Exercícios com dados do CSV: ${csvExercises.length}`);
  
  csvExercises.forEach((ex, idx) => {
    console.log(`${idx + 1}. ${ex.name} (${ex.nameEn || 'N/A'})`);
    console.log(`   Imagem: ${ex.fullVideoImageUrl}`);
    console.log(`   Instruções: ${ex.introduction ? ex.introduction.substring(0, 60) + '...' : 'N/A'}`);
    console.log(`   Vídeo: ${ex.fullVideoUrl || 'N/A'}`);
    console.log('');
  });
  
  // Estatísticas
  const totalWithRealImages = await prisma.exercise.count({
    where: {
      AND: [
        { fullVideoImageUrl: { not: null } },
        { fullVideoImageUrl: { not: '' } },
        { fullVideoImageUrl: { not: '/images/placeholders/exercise-placeholder.svg' } }
      ]
    }
  });
  
  console.log(`📈 Estatísticas:`);
  console.log(`   Total de exercícios: ${await prisma.exercise.count()}`);
  console.log(`   Com imagens reais: ${totalWithRealImages}`);
  console.log(`   Com placeholders: ${await prisma.exercise.count() - totalWithRealImages}`);
}

checkCSVImportedExercises()
  .catch(console.error)
  .finally(() => prisma.$disconnect());