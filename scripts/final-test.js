// scripts/final-test.js  
// Teste final para verificar se tudo está funcionando
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function testFinalSetup() {
  console.log('🧪 Testando configuração final...\n');

  try {
    // 1. Contar total de exercícios
    const totalExercises = await prisma.exercise.count();
    console.log(`✅ Total de exercícios: ${totalExercises}`);

    // 2. Exercícios por músculo principal
    const muscleGroups = await prisma.$queryRaw`
      SELECT 
        eav.value as muscle, 
        COUNT(DISTINCT e.id) as count
      FROM exercises e
      JOIN exercise_attributes ea ON e.id = ea."exerciseId"
      JOIN exercise_attribute_values eav ON ea."attributeValueId" = eav.id
      JOIN exercise_attribute_names ean ON ea."attributeNameId" = ean.id
      WHERE ean.name = 'PRIMARY_MUSCLE'
      GROUP BY eav.value
      ORDER BY count DESC
    `;
    
    console.log('\n💪 Exercícios por grupo muscular:');
    muscleGroups.forEach(group => {
      console.log(`   ${group.muscle}: ${group.count} exercícios`);
    });

    // 3. Verificar imagens e introduções
    const withImages = await prisma.exercise.count({
      where: {
        fullVideoImageUrl: { not: null, notIn: [''] }
      }
    });
    
    const withIntros = await prisma.exercise.count({
      where: {
        introduction: { not: null, notIn: [''] }
      }
    });

    console.log('\n🖼️ Status de conteúdo:');
    console.log(`   Com imagens: ${withImages}/${totalExercises} (${(withImages/totalExercises*100).toFixed(1)}%)`);
    console.log(`   Com instruções: ${withIntros}/${totalExercises} (${(withIntros/totalExercises*100).toFixed(1)}%)`);

    // 4. Verificar programas
    const totalPrograms = await prisma.program.count();
    console.log(`\n📚 Programas disponíveis: ${totalPrograms}`);

    // 5. Exemplo de exercícios por categoria
    console.log('\n📋 Exemplo de exercícios por categoria:');
    const categories = ['CHEST', 'BACK', 'SHOULDERS', 'BICEPS', 'TRICEPS'];
    
    for (const category of categories) {
      const exercises = await prisma.exercise.findMany({
        where: {
          attributes: {
            some: {
              attributeValue: { value: category },
              attributeName: { name: 'PRIMARY_MUSCLE' }
            }
          }
        },
        take: 3,
        select: { name: true, fullVideoImageUrl: true }
      });
      
      if (exercises.length > 0) {
        console.log(`   ${category}:`);
        exercises.forEach(ex => {
          const hasImage = ex.fullVideoImageUrl ? '🖼️' : '❌';
          console.log(`     ${hasImage} ${ex.name}`);
        });
      }
    }

    console.log('\n🎉 TESTE COMPLETO - SISTEMA PRONTO!');
    console.log('\n🚀 Próximos passos:');
    console.log('   1. Execute: npm run dev (ou pnpm dev)');
    console.log('   2. Acesse: http://localhost:3000');
    console.log('   3. Teste as funcionalidades de treino');
    console.log('   4. Verifique se o timer aparece no stepper');
    console.log('   5. Confirme que as imagens e "Ver instruções" funcionam');

  } catch (error) {
    console.error('❌ Erro no teste:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  testFinalSetup().catch(console.error);
}

module.exports = { testFinalSetup };