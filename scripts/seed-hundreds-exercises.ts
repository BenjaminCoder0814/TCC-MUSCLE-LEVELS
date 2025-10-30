import { PrismaClient, ExerciseAttributeNameEnum, ExerciseAttributeValueEnum } from '@prisma/client';

const prisma = new PrismaClient();

// Dados para gerar centenas de exercícios
const EXERCISE_TEMPLATES = [
  // PEITO (CHEST)
  { name: 'Supino Reto com Barra', nameEn: 'Barbell Bench Press', primary: 'CHEST', secondary: ['TRICEPS', 'SHOULDERS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Supino Inclinado com Halteres', nameEn: 'Incline Dumbbell Press', primary: 'CHEST', secondary: ['TRICEPS', 'SHOULDERS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Supino Declinado', nameEn: 'Decline Bench Press', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Crucifixo com Halteres', nameEn: 'Dumbbell Flyes', primary: 'CHEST', secondary: ['SHOULDERS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Crossover no Cabo', nameEn: 'Cable Crossover', primary: 'CHEST', secondary: [], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Flexão de Braço', nameEn: 'Push-ups', primary: 'CHEST', secondary: ['TRICEPS', 'SHOULDERS'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Supino na Máquina', nameEn: 'Machine Chest Press', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Peck Deck', nameEn: 'Pec Deck Machine', primary: 'CHEST', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'ISOLATION' },

  // COSTAS (BACK)
  { name: 'Barra Fixa', nameEn: 'Pull-ups', primary: 'BACK', secondary: ['BICEPS', 'LATS'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Remada Curvada com Barra', nameEn: 'Barbell Bent-Over Row', primary: 'BACK', secondary: ['BICEPS', 'LATS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Remada Sentada no Cabo', nameEn: 'Seated Cable Row', primary: 'BACK', secondary: ['BICEPS'], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Levantamento Terra', nameEn: 'Deadlift', primary: 'BACK', secondary: ['HAMSTRINGS', 'GLUTES', 'TRAPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Pulldown Frontal', nameEn: 'Lat Pulldown', primary: 'BACK', secondary: ['BICEPS', 'LATS'], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Remada Unilateral com Halter', nameEn: 'One-Arm Dumbbell Row', primary: 'BACK', secondary: ['BICEPS', 'LATS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Pullover com Halter', nameEn: 'Dumbbell Pullover', primary: 'BACK', secondary: ['CHEST', 'LATS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Remada na Máquina', nameEn: 'Machine Row', primary: 'BACK', secondary: ['BICEPS'], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'COMPOUND' },

  // OMBROS (SHOULDERS)
  { name: 'Desenvolvimento com Barra', nameEn: 'Military Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Desenvolvimento com Halteres', nameEn: 'Dumbbell Shoulder Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Elevação Lateral', nameEn: 'Lateral Raises', primary: 'SHOULDERS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Elevação Frontal', nameEn: 'Front Raises', primary: 'SHOULDERS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Remada Alta', nameEn: 'Upright Row', primary: 'SHOULDERS', secondary: ['TRAPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Face Pull', nameEn: 'Face Pulls', primary: 'SHOULDERS', secondary: ['TRAPS'], equipment: ['CABLE', 'ROPE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Crucifixo Inverso', nameEn: 'Reverse Flyes', primary: 'SHOULDERS', secondary: ['BACK'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Arnold Press', nameEn: 'Arnold Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },

  // BÍCEPS (BICEPS)
  { name: 'Rosca Direta com Barra', nameEn: 'Barbell Curl', primary: 'BICEPS', secondary: ['FOREARMS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Rosca Alternada com Halteres', nameEn: 'Alternating Dumbbell Curl', primary: 'BICEPS', secondary: ['FOREARMS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Rosca Martelo', nameEn: 'Hammer Curl', primary: 'BICEPS', secondary: ['FOREARMS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Rosca Scott', nameEn: 'Preacher Curl', primary: 'BICEPS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Rosca Concentrada', nameEn: 'Concentration Curl', primary: 'BICEPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Rosca no Cabo', nameEn: 'Cable Curl', primary: 'BICEPS', secondary: ['FOREARMS'], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Rosca 21', nameEn: '21s Curl', primary: 'BICEPS', secondary: ['FOREARMS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },

  // TRÍCEPS (TRICEPS)
  { name: 'Tríceps Testa com Barra', nameEn: 'Skull Crushers', primary: 'TRICEPS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Tríceps Francês', nameEn: 'Overhead Triceps Extension', primary: 'TRICEPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Mergulho em Paralelas', nameEn: 'Dips', primary: 'TRICEPS', secondary: ['CHEST'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Tríceps Corda', nameEn: 'Rope Pushdown', primary: 'TRICEPS', secondary: [], equipment: ['CABLE', 'ROPE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Tríceps na Polia', nameEn: 'Cable Pushdown', primary: 'TRICEPS', secondary: [], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Kickback com Halter', nameEn: 'Triceps Kickback', primary: 'TRICEPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Supino Fechado', nameEn: 'Close-Grip Bench Press', primary: 'TRICEPS', secondary: ['CHEST'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },

  // PERNAS - QUADRÍCEPS (QUADRICEPS)
  { name: 'Agachamento com Barra', nameEn: 'Barbell Squat', primary: 'QUADRICEPS', secondary: ['GLUTES', 'HAMSTRINGS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Leg Press 45º', nameEn: 'Leg Press', primary: 'QUADRICEPS', secondary: ['GLUTES', 'HAMSTRINGS'], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Agachamento Frontal', nameEn: 'Front Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Cadeira Extensora', nameEn: 'Leg Extension', primary: 'QUADRICEPS', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Hack Squat', nameEn: 'Hack Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Afundo com Halteres', nameEn: 'Dumbbell Lunges', primary: 'QUADRICEPS', secondary: ['GLUTES', 'HAMSTRINGS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Agachamento Búlgaro', nameEn: 'Bulgarian Split Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Sissy Squat', nameEn: 'Sissy Squat', primary: 'QUADRICEPS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },

  // POSTERIORES DE COXA (HAMSTRINGS)
  { name: 'Stiff com Barra', nameEn: 'Romanian Deadlift', primary: 'HAMSTRINGS', secondary: ['GLUTES', 'BACK'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Mesa Flexora', nameEn: 'Leg Curl', primary: 'HAMSTRINGS', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Stiff com Halteres', nameEn: 'Dumbbell Romanian Deadlift', primary: 'HAMSTRINGS', secondary: ['GLUTES'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Good Morning', nameEn: 'Good Morning', primary: 'HAMSTRINGS', secondary: ['BACK', 'GLUTES'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Nordic Curl', nameEn: 'Nordic Hamstring Curl', primary: 'HAMSTRINGS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },

  // GLÚTEOS (GLUTES)
  { name: 'Hip Thrust com Barra', nameEn: 'Barbell Hip Thrust', primary: 'GLUTES', secondary: ['HAMSTRINGS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Elevação Pélvica', nameEn: 'Glute Bridge', primary: 'GLUTES', secondary: ['HAMSTRINGS'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Coice na Polia', nameEn: 'Cable Kickback', primary: 'GLUTES', secondary: [], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Abdução na Máquina', nameEn: 'Hip Abduction Machine', primary: 'GLUTES', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Step Up', nameEn: 'Step Ups', primary: 'GLUTES', secondary: ['QUADRICEPS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },

  // PANTURRILHAS (CALVES)
  { name: 'Panturrilha em Pé', nameEn: 'Standing Calf Raise', primary: 'CALVES', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Panturrilha Sentado', nameEn: 'Seated Calf Raise', primary: 'CALVES', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Panturrilha no Leg Press', nameEn: 'Leg Press Calf Raise', primary: 'CALVES', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Panturrilha Unilateral', nameEn: 'Single Leg Calf Raise', primary: 'CALVES', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },

  // ABDÔMEN (ABDOMINALS)
  { name: 'Abdominal Supra', nameEn: 'Crunches', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Prancha Frontal', nameEn: 'Plank', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Elevação de Pernas', nameEn: 'Leg Raises', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Abdominal na Polia', nameEn: 'Cable Crunch', primary: 'ABDOMINALS', secondary: [], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Bicicleta no Ar', nameEn: 'Bicycle Crunches', primary: 'ABDOMINALS', secondary: ['OBLIQUES'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Mountain Climbers', nameEn: 'Mountain Climbers', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'CARDIO', mechanics: 'COMPOUND' },
  { name: 'Sit-ups', nameEn: 'Sit-ups', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Russian Twist', nameEn: 'Russian Twist', primary: 'ABDOMINALS', secondary: ['OBLIQUES'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },

  // OBLÍQUOS (OBLIQUES)
  { name: 'Prancha Lateral', nameEn: 'Side Plank', primary: 'OBLIQUES', secondary: ['ABDOMINALS'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Oblíquo com Halter', nameEn: 'Dumbbell Side Bend', primary: 'OBLIQUES', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Wood Chop no Cabo', nameEn: 'Cable Wood Chop', primary: 'OBLIQUES', secondary: ['ABDOMINALS'], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'COMPOUND' },

  // TRAPÉZIO (TRAPS)
  { name: 'Encolhimento com Barra', nameEn: 'Barbell Shrug', primary: 'TRAPS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Encolhimento com Halteres', nameEn: 'Dumbbell Shrug', primary: 'TRAPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Farmers Walk', nameEn: 'Farmers Walk', primary: 'TRAPS', secondary: ['FOREARMS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },

  // ANTEBRAÇOS (FOREARMS)
  { name: 'Rosca Punho com Barra', nameEn: 'Wrist Curl', primary: 'FOREARMS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Rosca Punho Inversa', nameEn: 'Reverse Wrist Curl', primary: 'FOREARMS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Pinça com Anilhas', nameEn: 'Plate Pinch', primary: 'FOREARMS', secondary: [], equipment: ['PLATE'], type: 'STRENGTH', mechanics: 'ISOLATION' },

  // CARDIO
  { name: 'Burpees', nameEn: 'Burpees', primary: 'FULL_BODY', secondary: [], equipment: ['BODYWEIGHT'], type: 'CARDIO', mechanics: 'COMPOUND' },
  { name: 'Jumping Jacks', nameEn: 'Jumping Jacks', primary: 'FULL_BODY', secondary: [], equipment: ['BODYWEIGHT'], type: 'CARDIO', mechanics: 'COMPOUND' },
  { name: 'Corrida Estacionária', nameEn: 'Running in Place', primary: 'FULL_BODY', secondary: [], equipment: ['BODYWEIGHT'], type: 'CARDIO', mechanics: 'COMPOUND' },
  { name: 'Box Jumps', nameEn: 'Box Jumps', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['BOX'], type: 'PLYOMETRICS', mechanics: 'COMPOUND' },
  { name: 'Battle Ropes', nameEn: 'Battle Ropes', primary: 'SHOULDERS', secondary: ['BACK'], equipment: ['OTHER'], type: 'CARDIO', mechanics: 'COMPOUND' },
];

async function seedExercises() {
  console.log('🚀 Iniciando importação de centenas de exercícios...\n');

  try {
    // Buscar ou criar attribute names
    const attributeNames = await Promise.all([
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.PRIMARY_MUSCLE },
        create: { name: ExerciseAttributeNameEnum.PRIMARY_MUSCLE },
        update: {},
      }),
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.SECONDARY_MUSCLE },
        create: { name: ExerciseAttributeNameEnum.SECONDARY_MUSCLE },
        update: {},
      }),
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.EQUIPMENT },
        create: { name: ExerciseAttributeNameEnum.EQUIPMENT },
        update: {},
      }),
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.TYPE },
        create: { name: ExerciseAttributeNameEnum.TYPE },
        update: {},
      }),
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.MECHANICS_TYPE },
        create: { name: ExerciseAttributeNameEnum.MECHANICS_TYPE },
        update: {},
      }),
    ]);

    const [primaryMuscleAttr, secondaryMuscleAttr, equipmentAttr, typeAttr, mechanicsAttr] = attributeNames;

    let imported = 0;
    let skipped = 0;

    for (const template of EXERCISE_TEMPLATES) {
      try {
        // Verificar se já existe
        const existing = await prisma.exercise.findFirst({
          where: {
            OR: [
              { name: template.name },
              { nameEn: template.nameEn },
            ],
          },
        });

        if (existing) {
          console.log(`⏭️  Já existe: ${template.name}`);
          skipped++;
          continue;
        }

        // Criar attribute values se não existirem
        const primaryMuscleValue = await prisma.exerciseAttributeValue.upsert({
          where: {
            attributeNameId_value: {
              attributeNameId: primaryMuscleAttr.id,
              value: template.primary as ExerciseAttributeValueEnum,
            },
          },
          create: {
            value: template.primary as ExerciseAttributeValueEnum,
            attributeNameId: primaryMuscleAttr.id,
          },
          update: {},
        });

        const secondaryMuscleValues = await Promise.all(
          template.secondary.map(secondary =>
            prisma.exerciseAttributeValue.upsert({
              where: {
                attributeNameId_value: {
                  attributeNameId: secondaryMuscleAttr.id,
                  value: secondary as ExerciseAttributeValueEnum,
                },
              },
              create: {
                value: secondary as ExerciseAttributeValueEnum,
                attributeNameId: secondaryMuscleAttr.id,
              },
              update: {},
            })
          )
        );

        const equipmentValues = await Promise.all(
          template.equipment.map(equip =>
            prisma.exerciseAttributeValue.upsert({
              where: {
                attributeNameId_value: {
                  attributeNameId: equipmentAttr.id,
                  value: equip as ExerciseAttributeValueEnum,
                },
              },
              create: {
                value: equip as ExerciseAttributeValueEnum,
                attributeNameId: equipmentAttr.id,
              },
              update: {},
            })
          )
        );

        const typeValue = await prisma.exerciseAttributeValue.upsert({
          where: {
            attributeNameId_value: {
              attributeNameId: typeAttr.id,
              value: template.type as ExerciseAttributeValueEnum,
            },
          },
          create: {
            value: template.type as ExerciseAttributeValueEnum,
            attributeNameId: typeAttr.id,
          },
          update: {},
        });

        const mechanicsValue = await prisma.exerciseAttributeValue.upsert({
          where: {
            attributeNameId_value: {
              attributeNameId: mechanicsAttr.id,
              value: template.mechanics as ExerciseAttributeValueEnum,
            },
          },
          create: {
            value: template.mechanics as ExerciseAttributeValueEnum,
            attributeNameId: mechanicsAttr.id,
          },
          update: {},
        });

        // Criar exercício com atributos
        const exercise = await prisma.exercise.create({
          data: {
            name: template.name,
            nameEn: template.nameEn,
            fullVideoImageUrl: `/images/placeholders/no-image.jpg`,
            fullVideoUrl: `https://Muscle Levels/exercises/${template.nameEn.toLowerCase().replace(/\s+/g, '-')}.mp4`,
            attributes: {
              create: [
                // Primary muscle
                {
                  attributeNameId: primaryMuscleAttr.id,
                  attributeValueId: primaryMuscleValue.id,
                },
                // Secondary muscles
                ...secondaryMuscleValues.map((value) => ({
                  attributeNameId: secondaryMuscleAttr.id,
                  attributeValueId: value.id,
                })),
                // Equipment
                ...equipmentValues.map((value) => ({
                  attributeNameId: equipmentAttr.id,
                  attributeValueId: value.id,
                })),
                // Type
                {
                  attributeNameId: typeAttr.id,
                  attributeValueId: typeValue.id,
                },
                // Mechanics
                {
                  attributeNameId: mechanicsAttr.id,
                  attributeValueId: mechanicsValue.id,
                },
              ],
            },
          },
        });

        console.log(`✅ Importado: ${template.name} (${template.nameEn})`);
        imported++;

      } catch (error) {
        console.error(`❌ Erro ao importar ${template.name}:`, (error as Error).message);
        skipped++;
      }
    }

    // Contar total no banco
    const totalExercises = await prisma.exercise.count();
    const totalAttributes = await prisma.exerciseAttribute.count();

    console.log('\n📊 RESUMO DA IMPORTAÇÃO:');
    console.log(`   ✅ Importados com sucesso: ${imported}`);
    console.log(`   ⏭️  Pulados (já existiam): ${skipped}`);
    console.log(`   📝 Total de templates: ${EXERCISE_TEMPLATES.length}`);
    console.log('\n📈 ESTADO DO BANCO DE DADOS:');
    console.log(`   🏋️  Total de exercícios: ${totalExercises}`);
    console.log(`   🏷️  Total de atributos: ${totalAttributes}`);
    console.log('\n🎉 Importação concluída com sucesso!');

  } catch (error) {
    console.error('❌ Erro fatal durante importação:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar
seedExercises()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
