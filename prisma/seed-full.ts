// prisma/seed-full.ts
// Seed mais completo para popular muitas tabelas do Muscle Levels.
// Execute com: npx tsx prisma/seed-full.ts
import { PrismaClient, ExerciseAttributeNameEnum, ExerciseAttributeValueEnum } from "@prisma/client";
const prisma = new PrismaClient();

// Dados completos de exercícios por categoria
const COMPLETE_EXERCISES = [
  // PEITO (CHEST)
  { name: 'Supino Reto', nameEn: 'Barbell Bench Press', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Supino Inclinado', nameEn: 'Incline Bench Press', primary: 'CHEST', secondary: ['TRICEPS', 'SHOULDERS'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Supino com Halteres', nameEn: 'Dumbbell Bench Press', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Crucifixo', nameEn: 'Dumbbell Flyes', primary: 'CHEST', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Crossover', nameEn: 'Cable Crossover', primary: 'CHEST', secondary: [], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Flexão de Braço', nameEn: 'Push-ups', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Supino Declinado', nameEn: 'Decline Bench Press', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Peck Deck', nameEn: 'Pec Deck', primary: 'CHEST', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Chest Press', nameEn: 'Machine Chest Press', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Flexão Diamante', nameEn: 'Diamond Push-ups', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },

  // COSTAS (BACK)
  { name: 'Barra Fixa', nameEn: 'Pull-ups', primary: 'BACK', secondary: ['BICEPS'], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Remada Curvada', nameEn: 'Bent-over Row', primary: 'BACK', secondary: ['BICEPS'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Puxada Frontal', nameEn: 'Lat Pulldown', primary: 'BACK', secondary: ['BICEPS'], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Remada Sentada', nameEn: 'Seated Cable Row', primary: 'BACK', secondary: ['BICEPS'], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Levantamento Terra', nameEn: 'Deadlift', primary: 'BACK', secondary: ['HAMSTRINGS', 'GLUTES'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Remada com Halter', nameEn: 'One-Arm Row', primary: 'BACK', secondary: ['BICEPS'], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Pullover', nameEn: 'Dumbbell Pullover', primary: 'BACK', secondary: ['CHEST'], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Puxada Triangular', nameEn: 'V-Bar Pulldown', primary: 'BACK', secondary: ['BICEPS'], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Remada T-Bar', nameEn: 'T-Bar Row', primary: 'BACK', secondary: ['BICEPS'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Remada Máquina', nameEn: 'Machine Row', primary: 'BACK', secondary: ['BICEPS'], equipment: ['MACHINE'], type: 'STRENGTH' },

  // OMBROS (SHOULDERS)
  { name: 'Desenvolvimento', nameEn: 'Military Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Desenvolvimento com Halteres', nameEn: 'Dumbbell Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Elevação Lateral', nameEn: 'Lateral Raises', primary: 'SHOULDERS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Elevação Frontal', nameEn: 'Front Raises', primary: 'SHOULDERS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Remada Alta', nameEn: 'Upright Row', primary: 'SHOULDERS', secondary: ['TRAPS'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Crucifixo Inverso', nameEn: 'Reverse Flyes', primary: 'SHOULDERS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Arnold Press', nameEn: 'Arnold Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Face Pull', nameEn: 'Face Pulls', primary: 'SHOULDERS', secondary: ['TRAPS'], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Desenvolvimento Máquina', nameEn: 'Machine Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Elevação Posterior', nameEn: 'Rear Delt Flyes', primary: 'SHOULDERS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },

  // BÍCEPS
  { name: 'Rosca Direta', nameEn: 'Barbell Curl', primary: 'BICEPS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Rosca Alternada', nameEn: 'Alternating Curls', primary: 'BICEPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Rosca Martelo', nameEn: 'Hammer Curl', primary: 'BICEPS', secondary: ['FOREARMS'], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Rosca Scott', nameEn: 'Preacher Curl', primary: 'BICEPS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Rosca Concentrada', nameEn: 'Concentration Curl', primary: 'BICEPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Rosca no Cabo', nameEn: 'Cable Curl', primary: 'BICEPS', secondary: [], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Rosca 21', nameEn: '21s Curl', primary: 'BICEPS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Rosca Inversa', nameEn: 'Reverse Curl', primary: 'BICEPS', secondary: ['FOREARMS'], equipment: ['BARBELL'], type: 'STRENGTH' },

  // TRÍCEPS
  { name: 'Tríceps Testa', nameEn: 'Skull Crushers', primary: 'TRICEPS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Tríceps Francês', nameEn: 'Overhead Extension', primary: 'TRICEPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Mergulho', nameEn: 'Dips', primary: 'TRICEPS', secondary: ['CHEST'], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Tríceps Corda', nameEn: 'Rope Pushdown', primary: 'TRICEPS', secondary: [], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Tríceps Polia', nameEn: 'Cable Pushdown', primary: 'TRICEPS', secondary: [], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Kickback', nameEn: 'Tricep Kickback', primary: 'TRICEPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Supino Fechado', nameEn: 'Close Grip Press', primary: 'TRICEPS', secondary: ['CHEST'], equipment: ['BARBELL'], type: 'STRENGTH' },

  // PERNAS - QUADRÍCEPS
  { name: 'Agachamento', nameEn: 'Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Leg Press', nameEn: 'Leg Press', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Agachamento Frontal', nameEn: 'Front Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Cadeira Extensora', nameEn: 'Leg Extension', primary: 'QUADRICEPS', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Hack Squat', nameEn: 'Hack Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Afundo', nameEn: 'Lunges', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Agachamento Búlgaro', nameEn: 'Bulgarian Split Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Sissy Squat', nameEn: 'Sissy Squat', primary: 'QUADRICEPS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },

  // PERNAS - POSTERIORES
  { name: 'Stiff', nameEn: 'Stiff Deadlift', primary: 'HAMSTRINGS', secondary: ['GLUTES'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Mesa Flexora', nameEn: 'Leg Curl', primary: 'HAMSTRINGS', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Stiff com Halteres', nameEn: 'Dumbbell Stiff', primary: 'HAMSTRINGS', secondary: ['GLUTES'], equipment: ['DUMBBELL'], type: 'STRENGTH' },
  { name: 'Good Morning', nameEn: 'Good Morning', primary: 'HAMSTRINGS', secondary: ['BACK'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Nordic Curl', nameEn: 'Nordic Curl', primary: 'HAMSTRINGS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },

  // GLÚTEOS
  { name: 'Hip Thrust', nameEn: 'Hip Thrust', primary: 'GLUTES', secondary: ['HAMSTRINGS'], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Elevação Pélvica', nameEn: 'Glute Bridge', primary: 'GLUTES', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Coice na Polia', nameEn: 'Cable Kickback', primary: 'GLUTES', secondary: [], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Abdução na Máquina', nameEn: 'Machine Abduction', primary: 'GLUTES', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH' },

  // PANTURRILHA
  { name: 'Panturrilha em Pé', nameEn: 'Standing Calf Raise', primary: 'CALVES', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Panturrilha Sentado', nameEn: 'Seated Calf Raise', primary: 'CALVES', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH' },
  { name: 'Panturrilha no Leg Press', nameEn: 'Leg Press Calf', primary: 'CALVES', secondary: [], equipment: ['MACHINE'], type: 'STRENGTH' },

  // ABDÔMEN
  { name: 'Abdominal Supra', nameEn: 'Crunches', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Prancha', nameEn: 'Plank', primary: 'ABDOMINALS', secondary: ['BACK'], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Elevação de Pernas', nameEn: 'Leg Raises', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Abdominal na Polia', nameEn: 'Cable Crunch', primary: 'ABDOMINALS', secondary: [], equipment: ['CABLE'], type: 'STRENGTH' },
  { name: 'Bicicleta', nameEn: 'Bicycle Crunches', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },
  { name: 'Russian Twist', nameEn: 'Russian Twist', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH' },

  // TRAPÉZIO
  { name: 'Encolhimento', nameEn: 'Shrugs', primary: 'TRAPS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Encolhimento com Halteres', nameEn: 'Dumbbell Shrugs', primary: 'TRAPS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH' },

  // ANTEBRAÇO
  { name: 'Rosca Punho', nameEn: 'Wrist Curl', primary: 'FOREARMS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH' },
  { name: 'Rosca Punho Inversa', nameEn: 'Reverse Wrist Curl', primary: 'FOREARMS', secondary: [], equipment: ['BARBELL'], type: 'STRENGTH' },

  // CARDIO
  { name: 'Burpees', nameEn: 'Burpees', primary: 'FULL_BODY', secondary: [], equipment: ['BODYWEIGHT'], type: 'CARDIO' },
  { name: 'Jumping Jacks', nameEn: 'Jumping Jacks', primary: 'FULL_BODY', secondary: [], equipment: ['BODYWEIGHT'], type: 'CARDIO' },
  { name: 'Mountain Climbers', nameEn: 'Mountain Climbers', primary: 'FULL_BODY', secondary: [], equipment: ['BODYWEIGHT'], type: 'CARDIO' },
  { name: 'Box Jumps', nameEn: 'Box Jumps', primary: 'QUADRICEPS', secondary: ['CALVES'], equipment: ['BOX'], type: 'PLYOMETRICS' },
];

async function seedFull() {
  console.log('🚀 Iniciando seed completo...\n');

  try {
    // 1. Buscar ou criar atributos necessários
    console.log('🔧 Configurando atributos...');
    const [primaryMuscleAttr, secondaryMuscleAttr, equipmentAttr, typeAttr] = await Promise.all([
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.PRIMARY_MUSCLE },
        create: { name: ExerciseAttributeNameEnum.PRIMARY_MUSCLE },
        update: {}
      }),
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.SECONDARY_MUSCLE },
        create: { name: ExerciseAttributeNameEnum.SECONDARY_MUSCLE },
        update: {}
      }),
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.EQUIPMENT },
        create: { name: ExerciseAttributeNameEnum.EQUIPMENT },
        update: {}
      }),
      prisma.exerciseAttributeName.upsert({
        where: { name: ExerciseAttributeNameEnum.TYPE },
        create: { name: ExerciseAttributeNameEnum.TYPE },
        update: {}
      })
    ]);

    let createdCount = 0;
    let skippedCount = 0;

    // 2. Criar exercícios
    console.log('💪 Criando exercícios...');
    for (const template of COMPLETE_EXERCISES) {
      // Verificar se já existe
      const existing = await prisma.exercise.findFirst({
        where: { name: template.name }
      });

      if (existing) {
        console.log(`⏭️  Já existe: ${template.name}`);
        skippedCount++;
        continue;
      }

      // Criar exercício
      const exercise = await prisma.exercise.create({
        data: {
          name: template.name,
          nameEn: template.nameEn,
          fullVideoImageUrl: `https://source.unsplash.com/400x300/?fitness,${template.nameEn.toLowerCase().replace(/\s+/g, '-')}`,
          fullVideoUrl: `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`,
          introduction: `<p><strong>${template.name}</strong> é um exercício ${template.type.toLowerCase()} que trabalha principalmente o(a) <strong>${template.primary.toLowerCase()}</strong>. Execute o movimento de forma controlada, mantendo a postura adequada e respiração constante.</p>`,
        }
      });

      // Criar atributos do exercício
      const attributes = [];

      // Primary muscle
      const primaryValue = await prisma.exerciseAttributeValue.upsert({
        where: {
          attributeNameId_value: {
            attributeNameId: primaryMuscleAttr.id,
            value: template.primary as ExerciseAttributeValueEnum
          }
        },
        create: {
          value: template.primary as ExerciseAttributeValueEnum,
          attributeNameId: primaryMuscleAttr.id
        },
        update: {}
      });

      attributes.push({
        exerciseId: exercise.id,
        attributeNameId: primaryMuscleAttr.id,
        attributeValueId: primaryValue.id
      });

      // Secondary muscles
      for (const secondary of template.secondary) {
        const secondaryValue = await prisma.exerciseAttributeValue.upsert({
          where: {
            attributeNameId_value: {
              attributeNameId: secondaryMuscleAttr.id,
              value: secondary as ExerciseAttributeValueEnum
            }
          },
          create: {
            value: secondary as ExerciseAttributeValueEnum,
            attributeNameId: secondaryMuscleAttr.id
          },
          update: {}
        });

        attributes.push({
          exerciseId: exercise.id,
          attributeNameId: secondaryMuscleAttr.id,
          attributeValueId: secondaryValue.id
        });
      }

      // Equipment
      for (const equip of template.equipment) {
        const equipValue = await prisma.exerciseAttributeValue.upsert({
          where: {
            attributeNameId_value: {
              attributeNameId: equipmentAttr.id,
              value: equip as ExerciseAttributeValueEnum
            }
          },
          create: {
            value: equip as ExerciseAttributeValueEnum,
            attributeNameId: equipmentAttr.id
          },
          update: {}
        });

        attributes.push({
          exerciseId: exercise.id,
          attributeNameId: equipmentAttr.id,
          attributeValueId: equipValue.id
        });
      }

      // Type
      const typeValue = await prisma.exerciseAttributeValue.upsert({
        where: {
          attributeNameId_value: {
            attributeNameId: typeAttr.id,
            value: template.type as ExerciseAttributeValueEnum
          }
        },
        create: {
          value: template.type as ExerciseAttributeValueEnum,
          attributeNameId: typeAttr.id
        },
        update: {}
      });

      attributes.push({
        exerciseId: exercise.id,
        attributeNameId: typeAttr.id,
        attributeValueId: typeValue.id
      });

      // Criar todos os atributos
      await prisma.exerciseAttribute.createMany({
        data: attributes
      });

      console.log(`✅ Criado: ${template.name} com ${attributes.length} atributos`);
      createdCount++;
    }

    // 3. Criar programa de exemplo (simplificado)
    console.log('\n📚 Criando programa de exemplo...');
    const existingProgram = await prisma.program.findFirst({
      where: { slug: 'treino-completo-muscle-levels' }
    });

    if (!existingProgram) {
      const program = await prisma.program.create({
        data: {
          slug: 'treino-completo-muscle-levels',
          slugEn: 'complete-workout-muscle-levels',
          slugEs: 'entrenamiento-completo-muscle-levels',
          slugPt: 'treino-completo-muscle-levels',
          slugRu: 'polnaya-trenirovka-muscle-levels',
          slugZhCn: 'complete-workout-muscle-levels-zh',
          title: 'Treino Completo - Muscle Levels',
          titleEn: 'Complete Workout - Muscle Levels',
          titleEs: 'Entrenamiento Completo - Muscle Levels',
          titlePt: 'Treino Completo - Muscle Levels',
          titleRu: 'Полная Тренировка - Muscle Levels',
          titleZhCn: '完整锻炼 - Muscle Levels',
          description: 'Programa completo de treino para todos os grupos musculares',
          descriptionEn: 'Complete workout program for all muscle groups',
          descriptionEs: 'Programa completo de entrenamiento para todos los grupos musculares',
          descriptionPt: 'Programa completo de treino para todos os grupos musculares',
          descriptionRu: 'Полная программа тренировок для всех групп мышц',
          descriptionZhCn: '针对所有肌肉群的完整锻炼计划',
          category: 'FITNESS',
          image: 'https://source.unsplash.com/600x400/?fitness,gym',
          level: 'INTERMEDIATE',
          type: 'STRENGTH',
          durationWeeks: 8,
          sessionsPerWeek: 4,
          sessionDurationMin: 60,
          equipment: ['BARBELL', 'DUMBBELL'],
          isPremium: false,
          isActive: true,
          visibility: 'PUBLISHED'
        }
      });

      console.log('✅ Programa criado');
    } else {
      console.log('⏭️  Programa já existe');
    }

    // 4. Estatísticas finais
    const totalExercises = await prisma.exercise.count();
    const totalPrograms = await prisma.program.count();
    const totalAttributes = await prisma.exerciseAttribute.count();

    console.log('\n📊 RESUMO DO SEED:');
    console.log(`   ✅ Criados: ${createdCount} exercícios`);
    console.log(`   ⏭️  Pulados: ${skippedCount} (já existiam)`);
    console.log(`   📚 Programas: ${totalPrograms}`);
    console.log('\n📈 ESTADO FINAL:');
    console.log(`   🏋️  Total de exercícios: ${totalExercises}`);
    console.log(`   🏷️  Total de atributos: ${totalAttributes}`);
    console.log('\n🎉 Seed completo finalizado!');

  } catch (error) {
    console.error('❌ Erro durante o seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seedFull().catch(console.error);