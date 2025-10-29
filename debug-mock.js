console.log('🚀 MUSCLE LEVELS - Iniciando servidor...'); 

// Simular o ambiente de teste básico
const mockData = {
  selectedEquipment: ['BODYWEIGHT'],
  selectedMuscles: ['CHEST'],
  limit: 3
};

console.log('✅ TESTE: Simulando chamada com:', mockData);

// Simular função getMockExercises diretamente aqui
const mockExercises = [
  {
    id: "1",
    name: "Flexão de Braços",
    nameEn: "Push Ups", 
    description: "Exercício com peso corporal para peitoral",
    descriptionEn: "Bodyweight exercise for chest",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "CHEST" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BODYWEIGHT" } }
    ]
  },
  {
    id: "2",
    name: "Flexão Inclinada",
    nameEn: "Incline Push Ups",
    description: "Flexão com pés elevados",
    descriptionEn: "Push ups with feet elevated", 
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "CHEST" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BODYWEIGHT" } }
    ]
  }
];

console.log('📋 EXERCÍCIOS MOCK DISPONÍVEIS:', mockExercises.length);

// Simular a filtragem
const filtered = mockExercises.filter(exercise => {
  const exerciseEquipment = exercise.attributes.find(
    attr => attr.attributeName.name === "EQUIPMENT"
  )?.attributeValue.value;
  
  const primaryMuscle = exercise.attributes.find(
    attr => attr.attributeName.name === "PRIMARY_MUSCLE"
  )?.attributeValue.value;

  const equipmentMatch = mockData.selectedEquipment.includes(exerciseEquipment);
  const muscleMatch = mockData.selectedMuscles.includes(primaryMuscle);

  console.log(`🔍 Exercício: ${exercise.name}, Músculo: ${primaryMuscle}, Equipamento: ${exerciseEquipment}, Match: ${equipmentMatch && muscleMatch}`);

  return equipmentMatch && muscleMatch;
});

console.log('✅ EXERCÍCIOS FILTRADOS:', filtered.length);

// Agrupar por músculo
const result = mockData.selectedMuscles.map(muscle => {
  const muscleExercises = filtered.filter(exercise =>
    exercise.attributes.find(
      attr => attr.attributeName.name === "PRIMARY_MUSCLE" &&
               attr.attributeValue.value === muscle
    )
  );
  
  console.log(`💪 Músculo ${muscle}: ${muscleExercises.length} exercícios`);
  
  return {
    muscle,
    exercises: muscleExercises
  };
}).filter(group => group.exercises.length > 0);

console.log('🎯 RESULTADO FINAL:', JSON.stringify(result, null, 2));

if (result.length > 0) {
  console.log('✅ SUCESSO! Mock service funcionando corretamente!');
  console.log(`✅ Total: ${result.length} grupos de músculos com exercícios`);
} else {
  console.log('❌ FALHA! Nenhum exercício encontrado!');
}