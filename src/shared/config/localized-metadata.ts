export const LocalizedMetadata = {
  en: {
    title: "Muscle Levels",
    description: "Modern fitness platform with comprehensive exercise database",
    keywords: [
      "fitness",
      "workout",
      "exercise",
      "training",
      "muscle building",
      "strength training",
      "muscle levels",
      "fitness app",
      "workout planner",
      "exercise database",
    ],
    ogAlt: "Muscle Levels - Modern fitness platform",
    applicationName: "Muscle Levels",
    category: "fitness",
    classification: "Fitness & Health",
  },
  fr: {
    title: "Muscle Levels",
    description: "Plateforme de fitness moderne avec base de données d'exercices complète",
    keywords: [
      "fitness",
      "entraînement",
      "exercice",
      "musculation",
      "sport",
      "muscle levels",
      "programme d'entraînement",
      "application fitness",
      "planificateur d'entraînement",
      "base de données d'exercices",
    ],
    ogAlt: "Muscle Levels - Plateforme de fitness moderne",
    applicationName: "Muscle Levels",
    category: "fitness",
    classification: "Fitness et Santé",
  },
  es: {
    title: "Muscle Levels",
    description: "Plataforma moderna de entrenamiento fitness con base de datos completa de ejercicios",
    keywords: [
      "fitness",
      "entrenamiento",
      "ejercicio",
      "musculación",
      "deporte",
      "muscle levels",
      "programa de entrenamiento",
      "aplicación fitness",
      "planificador de entrenamientos",
      "base de datos de ejercicios",
    ],
    ogAlt: "Muscle Levels - Plataforma de fitness moderna",
    applicationName: "Muscle Levels",
    category: "fitness",
    classification: "Fitness y Salud",
  },
  pt: {
    title: "Muscle Levels",
    description: "Plataforma moderna de treinos com base de dados completa de exercícios",
    keywords: [
      "fitness",
      "treino",
      "exercício",
      "musculação",
      "esporte",
      "muscle levels",
      "programa de treino",
      "aplicativo fitness",
      "planejador de treinos",
      "base de dados de exercícios",
    ],
    ogAlt: "Muscle Levels - Plataforma de fitness moderna",
    applicationName: "Muscle Levels",
    category: "fitness",
    classification: "Fitness e Saúde",
  },
  ru: {
    title: "Muscle Levels",
    description: "Современная платформа фитнес-коучинга с comprehensive базой данных упражнений",
    keywords: [
      "фитнес",
      "тренировка",
      "упражнение",
      "бодибилдинг",
      "спорт",
      "muscle levels",
      "программа тренировок",
      "фитнес приложение",
      "планировщик тренировок",
      "база данных упражнений",
    ],
    ogAlt: "Muscle Levels - Современная фитнес платформа",
    applicationName: "Muscle Levels",
    category: "фитнес",
    classification: "Фитнес и Здоровье",
  },
  "zh-CN": {
    title: "Muscle Levels",
    description: "现代健身教练平台，拥有全面的运动数据库",
    keywords: ["健身", "锻炼", "运动", "训练", "肌肉训练", "力量训练", "健美", "健身应用", "锻炼计划", "运动数据库"],
    ogAlt: "Muscle Levels - 现代健身平台",
    applicationName: "Muscle Levels",
    category: "健身",
    classification: "健身与健康",
  },
} as const;

export type SupportedLocale = keyof typeof LocalizedMetadata;

export function getLocalizedMetadata(locale: string) {
  const supportedLocales: SupportedLocale[] = ["en", "fr", "es", "pt", "ru", "zh-CN"];

  if (supportedLocales.includes(locale as SupportedLocale)) {
    return LocalizedMetadata[locale as SupportedLocale];
  }

  return LocalizedMetadata.en;
}
