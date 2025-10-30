import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateToNewPlaceholder() {
  console.log('🖼️ Atualizando para novo placeholder...');

  const result = await prisma.exercise.updateMany({
    where: {
      fullVideoImageUrl: '/images/placeholders/no-image.jpg'
    },
    data: {
      fullVideoImageUrl: '/images/placeholders/exercise-placeholder.svg'
    }
  });

  console.log(`✅ Atualizadas ${result.count} imagens para novo placeholder`);
  
  // Contar exercícios por categoria
  const count = await prisma.exercise.count();
  console.log(`📊 Total de exercícios no banco: ${count}`);
}

updateToNewPlaceholder()
  .catch(console.error)
  .finally(() => prisma.$disconnect());