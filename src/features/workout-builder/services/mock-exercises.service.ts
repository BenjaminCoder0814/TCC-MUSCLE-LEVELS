// Mock service para exercícios quando o banco não está disponível
export interface MockExercise {
  id: string;
  name: string;
  nameEn: string;
  description?: string;
  descriptionEn?: string;
  attributes: {
    attributeName: {
      name: string;
    };
    attributeValue: {
      value: string;
    };
  }[];
}

const mockExercises: MockExercise[] = [
  // CHEST EXERCISES
  {
    id: "1",
    name: "Supino Reto com Barra",
    nameEn: "Barbell Bench Press",
    description: "Exercício fundamental para peitoral, ombros e tríceps",
    descriptionEn: "Fundamental exercise for chest, shoulders and triceps",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "CHEST" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BARBELL" } }
    ]
  },
  {
    id: "2",
    name: "Supino com Halteres",
    nameEn: "Dumbbell Bench Press",
    description: "Supino com halteres para maior amplitude de movimento",
    descriptionEn: "Dumbbell bench press for greater range of motion",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "CHEST" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },
  {
    id: "3",
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
    id: "4",
    name: "Crucifixo com Halteres",
    nameEn: "Dumbbell Flyes",
    description: "Exercício de isolamento para peitoral",
    descriptionEn: "Chest isolation exercise",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "CHEST" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },
  {
    id: "5",
    name: "Supino Inclinado",
    nameEn: "Incline Bench Press",
    description: "Supino inclinado para peitoral superior",
    descriptionEn: "Incline bench press for upper chest",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "CHEST" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BARBELL" } }
    ]
  },

  // BACK EXERCISES
  {
    id: "6",
    name: "Puxada na Polia Alta",
    nameEn: "Lat Pulldown",
    description: "Exercício para dorsais e bíceps",
    descriptionEn: "Exercise for lats and biceps",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "BACK" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "CABLE" } }
    ]
  },
  {
    id: "7",
    name: "Remada com Barra",
    nameEn: "Barbell Row",
    description: "Remada curvada com barra para dorsais",
    descriptionEn: "Bent over barbell row for lats",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "BACK" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BARBELL" } }
    ]
  },
  {
    id: "8",
    name: "Remada com Halteres",
    nameEn: "Dumbbell Row",
    description: "Remada unilateral com halter",
    descriptionEn: "Single arm dumbbell row",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "BACK" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },
  {
    id: "9",
    name: "Barra Fixa",
    nameEn: "Pull Ups",
    description: "Exercício com peso corporal para dorsais",
    descriptionEn: "Bodyweight exercise for back",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "BACK" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BODYWEIGHT" } }
    ]
  },

  // LEGS EXERCISES  
  {
    id: "10", 
    name: "Agachamento com Barra",
    nameEn: "Barbell Squat",
    description: "Exercício fundamental para pernas e glúteos",
    descriptionEn: "Fundamental exercise for legs and glutes",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "QUADRICEPS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BARBELL" } }
    ]
  },
  {
    id: "11",
    name: "Levantamento Terra",
    nameEn: "Deadlift", 
    description: "Exercício completo para posterior da coxa e lombar",
    descriptionEn: "Complete exercise for hamstrings and lower back",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "HAMSTRINGS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BARBELL" } }
    ]
  },
  {
    id: "12",
    name: "Leg Press",
    nameEn: "Leg Press",
    description: "Exercício para quadríceps e glúteos na máquina",
    descriptionEn: "Machine exercise for quads and glutes",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "QUADRICEPS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "MACHINE" } }
    ]
  },
  {
    id: "13",
    name: "Mesa Flexora",
    nameEn: "Leg Curl",
    description: "Exercício isolado para posterior da coxa",
    descriptionEn: "Isolation exercise for hamstrings",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "HAMSTRINGS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "MACHINE" } }
    ]
  },
  {
    id: "14",
    name: "Cadeira Extensora",
    nameEn: "Leg Extension",
    description: "Exercício isolado para quadríceps",
    descriptionEn: "Isolation exercise for quadriceps",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "QUADRICEPS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "MACHINE" } }
    ]
  },
  {
    id: "15",
    name: "Agachamento Livre",
    nameEn: "Bodyweight Squat",
    description: "Agachamento com peso corporal",
    descriptionEn: "Bodyweight squat exercise",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "QUADRICEPS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BODYWEIGHT" } }
    ]
  },

  // SHOULDERS EXERCISES
  {
    id: "16",
    name: "Desenvolvimento com Halteres",
    nameEn: "Dumbbell Shoulder Press",
    description: "Exercício para ombros e tríceps",
    descriptionEn: "Exercise for shoulders and triceps",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "SHOULDERS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },
  {
    id: "17",
    name: "Desenvolvimento com Barra",
    nameEn: "Military Press",
    description: "Desenvolvimento militar com barra",
    descriptionEn: "Military press with barbell",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "SHOULDERS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BARBELL" } }
    ]
  },
  {
    id: "18",
    name: "Elevação Lateral",
    nameEn: "Lateral Raise",
    description: "Elevação lateral com halteres para deltóide médio",
    descriptionEn: "Lateral raise with dumbbells for middle deltoid",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "SHOULDERS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },
  {
    id: "19",
    name: "Elevação Frontal",
    nameEn: "Front Raise",
    description: "Elevação frontal com halteres para deltóide anterior",
    descriptionEn: "Front raise with dumbbells for anterior deltoid",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "SHOULDERS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },

  // ARMS EXERCISES
  {
    id: "20",
    name: "Rosca Direta com Barra",
    nameEn: "Barbell Bicep Curl",
    description: "Exercício isolado para bíceps",
    descriptionEn: "Isolation exercise for biceps",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "BICEPS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BARBELL" } }
    ]
  },
  {
    id: "21",
    name: "Rosca com Halteres",
    nameEn: "Dumbbell Bicep Curl",
    description: "Rosca alternada com halteres",
    descriptionEn: "Alternating dumbbell bicep curls",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "BICEPS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },
  {
    id: "22",
    name: "Tríceps Pulley",
    nameEn: "Cable Tricep Extension",
    description: "Exercício isolado para tríceps", 
    descriptionEn: "Isolation exercise for triceps",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "TRICEPS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "CABLE" } }
    ]
  },
  {
    id: "23",
    name: "Tríceps com Halteres",
    nameEn: "Dumbbell Tricep Extension",
    description: "Extensão de tríceps com halter",
    descriptionEn: "Tricep extension with dumbbell",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "TRICEPS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },

  // ABS EXERCISES
  {
    id: "24",
    name: "Prancha",
    nameEn: "Plank",
    description: "Exercício isométrico para core",
    descriptionEn: "Isometric exercise for core",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "ABS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BODYWEIGHT" } }
    ]
  },
  {
    id: "25",
    name: "Abdominal Supra",
    nameEn: "Crunches",
    description: "Exercício básico para abdômen",
    descriptionEn: "Basic abdominal exercise",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "ABS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BODYWEIGHT" } }
    ]
  },
  {
    id: "26",
    name: "Elevação de Pernas",
    nameEn: "Leg Raises",
    description: "Elevação de pernas para abdômen inferior",
    descriptionEn: "Leg raises for lower abs",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "ABS" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BODYWEIGHT" } }
    ]
  },

  // GLUTES EXERCISES
  {
    id: "27",
    name: "Hip Thrust",
    nameEn: "Hip Thrust",
    description: "Exercício específico para glúteos",
    descriptionEn: "Specific exercise for glutes",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "GLUTES" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "BARBELL" } }
    ]
  },
  {
    id: "28",
    name: "Agachamento Sumo",
    nameEn: "Sumo Squat",
    description: "Agachamento sumo com foco nos glúteos",
    descriptionEn: "Sumo squat focusing on glutes",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "GLUTES" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "DUMBBELLS" } }
    ]
  },

  // CALVES EXERCISES
  {
    id: "29",
    name: "Panturrilha em Pé",
    nameEn: "Standing Calf Raise",
    description: "Exercício para panturrilha em pé",
    descriptionEn: "Standing calf raise exercise",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "CALVES" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "MACHINE" } }
    ]
  },
  {
    id: "30",
    name: "Panturrilha Sentado",
    nameEn: "Seated Calf Raise",
    description: "Exercício para panturrilha sentado",
    descriptionEn: "Seated calf raise exercise",
    attributes: [
      { attributeName: { name: "PRIMARY_MUSCLE" }, attributeValue: { value: "CALVES" } },
      { attributeName: { name: "EQUIPMENT" }, attributeValue: { value: "MACHINE" } }
    ]
  }
];

// Export the mock exercises array for use in other parts of the application
export { mockExercises };

export function getMockExercises(equipment: string[], muscles: string[], limit: number = 3) {
  console.log('🏃‍♂️ MOCK SERVICE: Parâmetros:', { equipment, muscles, limit });
  console.log('🏃‍♂️ MOCK SERVICE: Total de exercícios mock:', mockExercises.length);
  
  const filteredExercises = mockExercises.filter(exercise => {
    const exerciseEquipment = exercise.attributes.find(
      attr => attr.attributeName.name === "EQUIPMENT"
    )?.attributeValue.value;
    
    const primaryMuscle = exercise.attributes.find(
      attr => attr.attributeName.name === "PRIMARY_MUSCLE" 
    )?.attributeValue.value;

    const equipmentMatch = equipment.length === 0 || equipment.includes(exerciseEquipment || '');
    const muscleMatch = muscles.length === 0 || muscles.includes(primaryMuscle || '');

    const match = equipmentMatch && muscleMatch;
    
    if (match) {
      console.log('🏃‍♂️ MOCK SERVICE: Exercício encontrado:', exercise.name, 'para', primaryMuscle, 'com', exerciseEquipment);
    }

    return match;
  });

  console.log('🏃‍♂️ MOCK SERVICE: Exercícios filtrados:', filteredExercises.length);

  // Shuffle and limit results
  const shuffled = [...filteredExercises].sort(() => Math.random() - 0.5);
  
  // Group by muscle for the expected format and transform to ExerciseWithAttributes
  const exercisesByMuscle = muscles.map(muscle => {
    const muscleExercises = shuffled
      .filter(exercise =>
        exercise.attributes.find(
          attr => attr.attributeName.name === "PRIMARY_MUSCLE" && 
                   attr.attributeValue.value === muscle
        )
      )
      .slice(0, limit)
      .map(mockExercise => ({
        // Transform MockExercise to ExerciseWithAttributes
        id: mockExercise.id,
        name: mockExercise.name,
        nameEn: mockExercise.nameEn,
        description: mockExercise.description || '',
        descriptionEn: mockExercise.descriptionEn || '',
        fullVideoUrl: null,
        fullVideoImageUrl: null,
        introduction: null,
        introductionEn: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        attributes: mockExercise.attributes.map((attr, index) => ({
          id: `${mockExercise.id}-attr-${index}`,
          exerciseId: mockExercise.id,
          attributeNameId: `attr-name-${attr.attributeName.name}`,
          attributeValueId: `attr-value-${attr.attributeValue.value}`,
          attributeName: attr.attributeName.name as any,
          attributeValue: attr.attributeValue.value as any
        }))
      }));

    console.log('🏃‍♂️ MOCK SERVICE: Músculo', muscle, 'tem', muscleExercises.length, 'exercícios transformados');

    return {
      muscle,
      exercises: muscleExercises
    };
  }).filter(group => group.exercises.length > 0);

  console.log('🏃‍♂️ MOCK SERVICE: Resultado final:', exercisesByMuscle.length, 'grupos de músculos');
  
  return exercisesByMuscle;
}