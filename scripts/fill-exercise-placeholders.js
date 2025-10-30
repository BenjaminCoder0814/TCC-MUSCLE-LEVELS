// scripts/fill-exercise-placeholders.js
// Atualiza exercícios sem thumbnail/instruções com placeholders públicos.
// Uso: node scripts/fill-exercise-placeholders.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function fillPlaceholders() {
  console.log('🖼️  Preenchendo placeholders de exercícios...\n');

  try {
    // 1. Buscar exercícios sem imagem
    const exercisesWithoutImages = await prisma.exercise.findMany({
      where: {
        OR: [
          { fullVideoImageUrl: null },
          { fullVideoImageUrl: '' },
          { fullVideoImageUrl: { startsWith: 'https://i.ytimg.com' } } // YouTube thumbnails quebrados
        ]
      },
      select: {
        id: true,
        name: true,
        nameEn: true,
        fullVideoImageUrl: true
      }
    });

    console.log(`📊 Encontrados ${exercisesWithoutImages.length} exercícios sem imagem válida`);

    // 2. Atualizar imagens
    let imageUpdates = 0;
    for (const exercise of exercisesWithoutImages) {
      const searchTerm = (exercise.nameEn || exercise.name)
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
      
      const unsplashUrl = `https://source.unsplash.com/400x300/?fitness,${searchTerm},exercise`;
      
      await prisma.exercise.update({
        where: { id: exercise.id },
        data: { fullVideoImageUrl: unsplashUrl }
      });
      
      console.log(`✅ Imagem atualizada: ${exercise.name} -> ${unsplashUrl}`);
      imageUpdates++;
    }

    // 3. Buscar exercícios sem introdução
    const exercisesWithoutIntro = await prisma.exercise.findMany({
      where: {
        OR: [
          { introduction: null },
          { introduction: '' }
        ]
      },
      select: {
        id: true,
        name: true,
        nameEn: true,
        introduction: true
      }
    });

    console.log(`\n📝 Encontrados ${exercisesWithoutIntro.length} exercícios sem introdução`);

    // 4. Atualizar introduções
    let introUpdates = 0;
    for (const exercise of exercisesWithoutIntro) {
      const defaultIntro = `
        <div class="exercise-instructions">
          <h3>${exercise.name}</h3>
          <p><strong>Exercício principal:</strong> ${exercise.name} é um movimento fundamental para desenvolvimento muscular.</p>
          
          <h4>Como executar:</h4>
          <ol>
            <li>Posicione-se corretamente na posição inicial</li>
            <li>Execute o movimento de forma controlada</li>
            <li>Mantenha a respiração constante durante a execução</li>
            <li>Retorne à posição inicial de forma controlada</li>
          </ol>
          
          <h4>Dicas importantes:</h4>
          <ul>
            <li>Mantenha a postura adequada durante todo o movimento</li>
            <li>Concentre-se na qualidade do movimento, não na velocidade</li>
            <li>Respire de forma adequada: expire na fase concêntrica, inspire na excêntrica</li>
            <li>Se sentir dor, pare imediatamente e consulte um profissional</li>
          </ul>
          
          <h4>Músculos trabalhados:</h4>
          <p>Este exercício trabalha principalmente os músculos alvos com ativação de músculos auxiliares para estabilização.</p>
          
          <p><em>Sempre execute os exercícios com orientação profissional adequada.</em></p>
        </div>
      `.trim();
      
      await prisma.exercise.update({
        where: { id: exercise.id },
        data: { introduction: defaultIntro }
      });
      
      console.log(`✅ Introdução criada: ${exercise.name}`);
      introUpdates++;
    }

    // 5. Buscar exercícios sem vídeo
    const exercisesWithoutVideo = await prisma.exercise.findMany({
      where: {
        OR: [
          { fullVideoUrl: null },
          { fullVideoUrl: '' }
        ]
      },
      select: {
        id: true,
        name: true,
        nameEn: true,
        fullVideoUrl: true
      }
    });

    console.log(`\n📹 Encontrados ${exercisesWithoutVideo.length} exercícios sem vídeo`);

    // 6. Atualizar vídeos com placeholder
    let videoUpdates = 0;
    for (const exercise of exercisesWithoutVideo) {
      const placeholderVideo = `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&rel=0&modestbranding=1`;
      
      await prisma.exercise.update({
        where: { id: exercise.id },
        data: { fullVideoUrl: placeholderVideo }
      });
      
      console.log(`✅ Vídeo placeholder: ${exercise.name}`);
      videoUpdates++;
    }

    // 7. Estatísticas finais
    const totalExercises = await prisma.exercise.count();
    const exercisesWithImages = await prisma.exercise.count({
      where: {
        AND: [
          { fullVideoImageUrl: { not: null } },
          { fullVideoImageUrl: { not: '' } }
        ]
      }
    });
    const exercisesWithIntros = await prisma.exercise.count({
      where: {
        AND: [
          { introduction: { not: null } },
          { introduction: { not: '' } }
        ]
      }
    });
    const exercisesWithVideos = await prisma.exercise.count({
      where: {
        AND: [
          { fullVideoUrl: { not: null } },
          { fullVideoUrl: { not: '' } }
        ]
      }
    });

    console.log('\n📊 RESUMO FINAL:');
    console.log(`   🖼️  Imagens atualizadas: ${imageUpdates}`);
    console.log(`   📝 Introduções criadas: ${introUpdates}`);
    console.log(`   📹 Vídeos adicionados: ${videoUpdates}`);
    console.log('\n📈 ESTADO ATUAL:');
    console.log(`   🏋️  Total de exercícios: ${totalExercises}`);
    console.log(`   🖼️  Com imagem: ${exercisesWithImages} (${((exercisesWithImages/totalExercises)*100).toFixed(1)}%)`);
    console.log(`   📝 Com introdução: ${exercisesWithIntros} (${((exercisesWithIntros/totalExercises)*100).toFixed(1)}%)`);
    console.log(`   📹 Com vídeo: ${exercisesWithVideos} (${((exercisesWithVideos/totalExercises)*100).toFixed(1)}%)`);
    console.log('\n🎉 Placeholders preenchidos com sucesso!');

  } catch (error) {
    console.error('❌ Erro ao preencher placeholders:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  fillPlaceholders().catch(console.error);
}

module.exports = { fillPlaceholders };