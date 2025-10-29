// Teste rápido do mock service
const { getMockExercises } = require('./src/features/workout-builder/services/mock-exercises.service.ts');

console.log('🧪 TESTE: Iniciando teste do mock service');

try {
  // Simular chamada com CHEST e BODYWEIGHT
  const result = getMockExercises(['BODYWEIGHT'], ['CHEST'], 3);
  
  console.log('🧪 TESTE: Resultado obtido:', JSON.stringify(result, null, 2));
  
  if (result.length === 0) {
    console.error('❌ TESTE: FALHOU - Nenhum resultado retornado!');
  } else {
    console.log('✅ TESTE: SUCESSO - Exercícios encontrados:', result.length);
  }
  
} catch (error) {
  console.error('❌ TESTE: ERRO:', error);
}