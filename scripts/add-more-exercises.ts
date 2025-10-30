import { PrismaClient, ExerciseAttributeNameEnum, ExerciseAttributeValueEnum } from '@prisma/client';

const prisma = new PrismaClient();

// Mais exercícios para chegar a 100+
const ADDITIONAL_EXERCISES = [
  // Variações de Peito
  { name: 'Supino Guilhotina', nameEn: 'Guillotine Press', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Flexão Diamante', nameEn: 'Diamond Push-ups', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Supino com Pausa', nameEn: 'Pause Bench Press', primary: 'CHEST', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  
  // Variações de Costas
  { name: 'Remada T-Bar', nameEn: 'T-Bar Row', primary: 'BACK', secondary: ['BICEPS', 'LATS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Remada Cavalinho', nameEn: 'Seal Row', primary: 'BACK', secondary: ['BICEPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Pull-over na Polia', nameEn: 'Cable Pull-over', primary: 'BACK', secondary: ['LATS'], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Remada Meadows', nameEn: 'Meadows Row', primary: 'BACK', secondary: ['BICEPS', 'LATS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  
  // Variações de Ombros
  { name: 'Desenvolvimento Bradford', nameEn: 'Bradford Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Elevação em W', nameEn: 'W Raises', primary: 'SHOULDERS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Desenvolvimento Landmine', nameEn: 'Landmine Press', primary: 'SHOULDERS', secondary: ['TRICEPS'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Bus Driver', nameEn: 'Bus Driver', primary: 'SHOULDERS', secondary: [], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  
  // Variações de Pernas
  { name: 'Pistol Squat', nameEn: 'Pistol Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Goblet Squat', nameEn: 'Goblet Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Box Squat', nameEn: 'Box Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Zercher Squat', nameEn: 'Zercher Squat', primary: 'QUADRICEPS', secondary: ['GLUTES', 'BACK'], equipment: ['BARBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Walking Lunges', nameEn: 'Walking Lunges', primary: 'QUADRICEPS', secondary: ['GLUTES', 'HAMSTRINGS'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Reverse Lunges', nameEn: 'Reverse Lunges', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['DUMBBELL'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Jump Squat', nameEn: 'Jump Squat', primary: 'QUADRICEPS', secondary: ['GLUTES'], equipment: ['BODYWEIGHT'], type: 'PLYOMETRICS', mechanics: 'COMPOUND' },
  { name: 'Glute Ham Raise', nameEn: 'Glute Ham Raise', primary: 'HAMSTRINGS', secondary: ['GLUTES'], equipment: ['MACHINE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  
  // Core Avançado
  { name: 'Ab Wheel', nameEn: 'Ab Wheel Rollout', primary: 'ABDOMINALS', secondary: [], equipment: ['OTHER'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'Hanging Knee Raises', nameEn: 'Hanging Knee Raises', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Dragon Flag', nameEn: 'Dragon Flag', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'COMPOUND' },
  { name: 'L-Sit', nameEn: 'L-Sit Hold', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Pallof Press', nameEn: 'Pallof Press', primary: 'ABDOMINALS', secondary: ['OBLIQUES'], equipment: ['CABLE'], type: 'STRENGTH', mechanics: 'ISOLATION' },
  { name: 'Dead Bug', nameEn: 'Dead Bug', primary: 'ABDOMINALS', secondary: [], equipment: ['BODYWEIGHT'], type: 'STRENGTH', mechanics: 'ISOLATION' },
];

async function addMoreExercises() {
  console.log('🚀 Adicionando mais exercícios ao banco...\n');

  try {
    const attributeNames = await Promise.all([
      prisma.exerciseAttributeName.findUniqueOrThrow({ where: { name: ExerciseAttributeNameEnum.PRIMARY_MUSCLE } }),
      prisma.exerciseAttributeName.findUniqueOrThrow({ where: { name: ExerciseAttributeNameEnum.SECONDARY_MUSCLE } }),
      prisma.exerciseAttributeName.findUniqueOrThrow({ where: { name: ExerciseAttributeNameEnum.EQUIPMENT } }),
      prisma.exerciseAttributeName.findUniqueOrThrow({ where: { name: ExerciseAttributeNameEnum.TYPE } }),
      prisma.exerciseAttributeName.findUniqueOrThrow({ where: { name: ExerciseAttributeNameEnum.MECHANICS_TYPE } }),
    ]);

    const [primaryMuscleAttr, secondaryMuscleAttr, equipmentAttr, typeAttr, mechanicsAttr] = attributeNames;

    let imported = 0;
    let skipped = 0;

    for (const template of ADDITIONAL_EXERCISES) {
      try {
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

        await prisma.exercise.create({
          data: {
            name: template.name,
            nameEn: template.nameEn,
            fullVideoImageUrl: `https://Muscle Levels/exercises/${template.nameEn.toLowerCase().replace(/\s+/g, '-')}.jpg`,
            fullVideoUrl: `https://Muscle Levels/exercises/${template.nameEn.toLowerCase().replace(/\s+/g, '-')}.mp4`,
            attributes: {
              create: [
                {
                  attributeNameId: primaryMuscleAttr.id,
                  attributeValueId: primaryMuscleValue.id,
                },
                ...secondaryMuscleValues.map((value) => ({
                  attributeNameId: secondaryMuscleAttr.id,
                  attributeValueId: value.id,
                })),
                ...equipmentValues.map((value) => ({
                  attributeNameId: equipmentAttr.id,
                  attributeValueId: value.id,
                })),
                {
                  attributeNameId: typeAttr.id,
                  attributeValueId: typeValue.id,
                },
                {
                  attributeNameId: mechanicsAttr.id,
                  attributeValueId: mechanicsValue.id,
                },
              ],
            },
          },
        });

        console.log(`✅ Importado: ${template.name}`);
        imported++;

      } catch (error) {
        console.error(`❌ Erro: ${template.name}:`, (error as Error).message);
        skipped++;
      }
    }

    const totalExercises = await prisma.exercise.count();
    const totalAttributes = await prisma.exerciseAttribute.count();

    console.log('\n📊 RESUMO:');
    console.log(`   ✅ Importados: ${imported}`);
    console.log(`   ⏭️  Pulados: ${skipped}`);
    console.log('\n📈 BANCO DE DADOS:');
    console.log(`   🏋️  Total de exercícios: ${totalExercises}`);
    console.log(`   🏷️  Total de atributos: ${totalAttributes}`);
    console.log('\n🎉 Concluído!');

  } catch (error) {
    console.error('❌ Erro:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

addMoreExercises()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
