interface LocalizedMetadata {
  title: string;
  description: string;
  keywords: string[];
  applicationName: string;
  category: string;
  classification: string;
}

const metadata: Record<string, LocalizedMetadata> = {
  pt: {
    title: "Muscle Levels — Transformação Fitness Inteligente",
    description: "A plataforma brasileira mais completa para fitness. Avaliação corporal, treinos personalizados com IA e acompanhamento profissional.",
    keywords: ["muscle levels", "treino personalizado", "fitness brasil", "musculação"],
    applicationName: "Muscle Levels",
    category: "fitness",
    classification: "health"
  },
  en: {
    title: "Muscle Levels — Smart Fitness Transformation",
    description: "Brazil's most complete fitness platform. Body assessment, AI-powered personalized workouts and professional monitoring.",
    keywords: ["muscle levels", "personalized training", "fitness brazil", "bodybuilding"],
    applicationName: "Muscle Levels",
    category: "fitness", 
    classification: "health"
  }
};

export function getLocalizedMetadata(locale: string): LocalizedMetadata {
  return metadata[locale] || metadata.pt;
}