const { PrismaClient } = require('@prisma/client');

async function checkDatabaseStatus() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🔍 Verificando status do banco de dados...\n');
    
    // Contar exercícios
    const exerciseCount = await prisma.exercise.count();
    console.log(`🏋️  Total de exercícios: ${exerciseCount}`);
    
    // Contar atributos
    const attributeCount = await prisma.exerciseAttribute.count();
    console.log(`🏷️  Total de atributos: ${attributeCount}`);
    
    // Contar por tipo de atributo usando relações
    const typeCount = await prisma.exerciseAttribute.count({
      where: { 
        attributeName: { name: 'TYPE' } 
      }
    });
    const muscleCount = await prisma.exerciseAttribute.count({
      where: { 
        attributeName: { name: 'PRIMARY_MUSCLE' } 
      }
    });
    const equipmentCount = await prisma.exerciseAttribute.count({
      where: { 
        attributeName: { name: 'EQUIPMENT' } 
      }
    });
    const mechanicsCount = await prisma.exerciseAttribute.count({
      where: { 
        attributeName: { name: 'MECHANICS_TYPE' } 
      }
    });
    
    console.log('\n📊 Distribuição por tipo de atributo:');
    console.log(`   TYPE: ${typeCount}`);
    console.log(`   PRIMARY_MUSCLE: ${muscleCount}`);
    console.log(`   EQUIPMENT: ${equipmentCount}`);
    console.log(`   MECHANICS_TYPE: ${mechanicsCount}`);
    
    // Exercícios por grupo muscular
    const chestExercises = await prisma.exerciseAttribute.count({
      where: { 
        attributeName: { name: 'PRIMARY_MUSCLE' },
        attributeValue: { value: 'CHEST' }
      }
    });
    const backExercises = await prisma.exerciseAttribute.count({
      where: { 
        attributeName: { name: 'PRIMARY_MUSCLE' },
        attributeValue: { value: 'BACK' }
      }
    });
    const shoulderExercises = await prisma.exerciseAttribute.count({
      where: { 
        attributeName: { name: 'PRIMARY_MUSCLE' },
        attributeValue: { value: 'SHOULDERS' }
      }
    });
    
    console.log('\n💪 Exercícios por grupo muscular (principais):');
    console.log(`   CHEST: ${chestExercises} exercícios`);
    console.log(`   BACK: ${backExercises} exercícios`);
    console.log(`   SHOULDERS: ${shoulderExercises} exercícios`);
    
    // Últimos exercícios adicionados
    const recentExercises = await prisma.exercise.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        name: true,
        createdAt: true
      }
    });
    
    console.log('\n🕐 Últimos exercícios adicionados:');
    recentExercises.forEach(exercise => {
      console.log(`   ${exercise.name} (${exercise.createdAt.toLocaleString()})`);
    });
    
    console.log('\n✅ Verificação concluída!');
    
  } catch (error) {
    console.error('❌ Erro ao verificar banco:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabaseStatus();