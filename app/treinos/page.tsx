"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./workout-styles.css";

interface Exercise {
  id: number;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  instructions: string[];
  instructionsEn?: string[];
  type: string;
  equipment: string;
  difficulty: string;
  targetMuscles: string[];
  videoUrl?: string;
  imageUrl?: string;
  duration?: number;
  reps?: string;
  sets?: number;
  restTime?: number;
  tips: string[];
  warnings?: string[];
  modifications?: {
    easier: string;
    harder: string;
  };
  category: string;
  calories?: number;
  icon?: string;
}

interface WorkoutStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
}

interface UserWorkout {
  id: string;
  name: string;
  exercises: Exercise[];
  duration: number;
  difficulty: string;
  targetMuscles: string[];
  createdAt: Date;
}

export default function TreinosPage() {
  // Workout Builder States
  const [currentStep, setCurrentStep] = useState(-1); // Começar com questionário
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [workoutName, setWorkoutName] = useState('');
  const [isWorkoutMode, setIsWorkoutMode] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [restTimer, setRestTimer] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [userPoints, setUserPoints] = useState(1250);
  const [showExerciseDetail, setShowExerciseDetail] = useState<Exercise | null>(null);
  const [savedWorkouts, setSavedWorkouts] = useState<UserWorkout[]>([]);
  const [activeTab, setActiveTab] = useState<'builder' | 'library' | 'saved'>('builder');

  // Estados para o questionário inicial
  const [userProfile, setUserProfile] = useState({
    age: '',
    gender: '',
    experience: '',
    goal: '',
    timeAvailable: '',
    fitnessLevel: '',
    preferences: ''
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Workout Builder Steps
  const workoutSteps: WorkoutStep[] = [
    { id: 0, title: "Músculos", description: "Selecione os grupos musculares", icon: "🎯", completed: selectedMuscles.length > 0 },
    { id: 1, title: "Equipamentos", description: "Escolha os equipamentos disponíveis", icon: "🏋️", completed: selectedEquipment.length > 0 },
    { id: 2, title: "Dificuldade", description: "Defina o nível de intensidade", icon: "📊", completed: selectedDifficulty !== '' },
    { id: 3, title: "Duração", description: "Tempo total do treino", icon: "⏱️", completed: selectedDuration > 0 },
    { id: 4, title: "Exercícios", description: "Escolha exercícios específicos", icon: "💪", completed: selectedExercises.length > 0 },
    { id: 5, title: "Finalizar", description: "Revise e inicie seu treino", icon: "🚀", completed: workoutName !== '' }
  ];

  // Comprehensive Exercise Database - Organized by Category
  const exercises: Exercise[] = [
    // === PEITO (7 exercícios) ===
    {
      id: 1,
      name: "Flexão de Braço",
      description: "Exercício fundamental para fortalecer peitoral, tríceps e core.",
      instructions: [
        "Deite de bruços no chão com as palmas das mãos apoiadas",
        "Coloque as mãos ligeiramente mais largas que os ombros",
        "Mantenha o corpo reto da cabeça aos pés como uma prancha",
        "Desça controladamente até o peito quase tocar o chão",
        "Empurre com força para voltar à posição inicial",
        "Mantenha o core contraído durante todo o movimento"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["peitoral", "tríceps", "core"],
      category: "peito",
      reps: "8-15",
      sets: 3,
      restTime: 60,
      calories: 80,
      icon: "💪",
      tips: [
        "Mantenha o core contraído durante todo o movimento",
        "Controle a descida por 2-3 segundos",
        "Expire ao empurrar para cima",
        "Não deixe os quadris subirem ou descerem"
      ]
    },
    {
      id: 101,
      name: "Flexão Diamante",
      description: "Variação avançada focada nos tríceps e peitoral interno.",
      instructions: [
        "Posicione-se como na flexão tradicional",
        "Junte as mãos formando um diamante com os dedos",
        "Mantenha os cotovelos próximos ao corpo",
        "Desça até o peito tocar as mãos",
        "Empurre de volta controladamente",
        "Foque na contração dos tríceps"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "avançado",
      targetMuscles: ["tríceps", "peitoral"],
      category: "peito",
      reps: "5-12",
      sets: 3,
      restTime: 90,
      calories: 100,
      icon: "💎",
      tips: [
        "Movimento mais lento e controlado",
        "Mantenha os cotovelos próximos ao corpo",
        "Se for difícil, apoie os joelhos"
      ]
    },
    {
      id: 102,
      name: "Flexão Inclinada",
      description: "Exercício para iniciantes usando elevação para facilitar o movimento.",
      instructions: [
        "Coloque as mãos em uma superfície elevada (banco, sofá)",
        "Mantenha o corpo reto em ângulo inclinado",
        "Execute o movimento de flexão normalmente",
        "Quanto mais alta a superfície, mais fácil fica",
        "Desça controladamente e empurre de volta"
      ],
      type: "strength",
      equipment: "banco",
      difficulty: "iniciante",
      targetMuscles: ["peitoral", "tríceps"],
      category: "peito",
      reps: "10-20",
      sets: 3,
      restTime: 45,
      calories: 60,
      icon: "📐",
      tips: [
        "Ideal para quem não consegue fazer flexão no chão",
        "Vá diminuindo a altura conforme progride"
      ]
    },
    {
      id: 103,
      name: "Flexão com Palmas",
      description: "Exercício explosivo que desenvolve potência no peitoral.",
      instructions: [
        "Posição inicial da flexão tradicional",
        "Desça normalmente até próximo ao chão",
        "Empurre explosivamente tirando as mãos do chão",
        "Bata palmas no ar rapidamente",
        "Volte à posição com as mãos no chão",
        "Amorteça a descida controladamente"
      ],
      type: "explosive",
      equipment: "corpo",
      difficulty: "avançado",
      targetMuscles: ["peitoral", "tríceps", "core"],
      category: "peito",
      reps: "3-8",
      sets: 3,
      restTime: 120,
      calories: 120,
      icon: "👏",
      tips: [
        "Movimento explosivo na subida",
        "Muito cuidado ao voltar ao chão",
        "Para avançados apenas"
      ]
    },
    {
      id: 104,
      name: "Flexão Archer",
      description: "Exercício unilateral que simula flexão com um braço.",
      instructions: [
        "Posição de flexão com braços bem abertos",
        "Transfira o peso para um lado",
        "Flexione apenas um braço, o outro fica estendido",
        "Empurre de volta e alterne os lados",
        "Mantenha o core bem contraído"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "avançado",
      targetMuscles: ["peitoral", "tríceps", "core"],
      category: "peito",
      reps: "4-8 cada lado",
      sets: 3,
      restTime: 90,
      calories: 110,
      icon: "🏹",
      tips: [
        "Movimento unilateral desafiador",
        "Foque na estabilização do core"
      ]
    },
    {
      id: 105,
      name: "Flexão T",
      description: "Combinação de flexão com rotação para trabalhar estabilidade.",
      instructions: [
        "Execute uma flexão normal",
        "Após subir, levante um braço formando um T",
        "Gire o tronco acompanhando o braço",
        "Volte à posição inicial",
        "Repita alternando os lados"
      ],
      type: "functional",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["peitoral", "core", "ombros"],
      category: "peito",
      reps: "6-12 cada lado",
      sets: 3,
      restTime: 75,
      calories: 95,
      icon: "🔄",
      tips: [
        "Trabalha rotação e estabilidade",
        "Movimento controlado na rotação"
      ]
    },
    {
      id: 106,
      name: "Flexão Hindu",
      description: "Movimento fluido tradicional que trabalha todo o corpo.",
      instructions: [
        "Comece em posição de V invertido (como cão olhando para baixo)",
        "Mergulhe para frente passando próximo ao chão",
        "Termine com peito para cima, braços estendidos",
        "Volte pelo mesmo caminho ao V invertido",
        "Movimento fluido e contínuo"
      ],
      type: "functional",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["peitoral", "ombros", "tríceps", "core"],
      category: "peito",
      reps: "5-12",
      sets: 3,
      restTime: 75,
      calories: 105,
      icon: "🕉️",
      tips: [
        "Movimento tradicional do yoga",
        "Flui como uma onda",
        "Trabalha flexibilidade e força"
      ]
    },
    // === COSTAS (7 exercícios) ===
    {
      id: 2,
      name: "Remada Curvada Corporal",
      description: "Exercício fundamental para fortalecer toda a musculatura das costas.",
      instructions: [
        "Deite embaixo de uma mesa resistente ou barra baixa",
        "Segure a borda com pegada pronada (palmas para baixo)",
        "Mantenha o corpo completamente reto como uma prancha",
        "Puxe o peito em direção à mesa contraindo as escápulas",
        "Desça controladamente mantendo a tensão",
        "Foque em puxar com as costas, não com os braços"
      ],
      type: "strength",
      equipment: "mesa",
      difficulty: "intermediário",
      targetMuscles: ["latíssimo", "romboides", "bíceps"],
      category: "costas",
      reps: "8-15",
      sets: 3,
      restTime: 60,
      calories: 90,
      icon: "🔙",
      tips: [
        "Aperte as escápulas no topo do movimento",
        "Mantenha o core ativo e contraído",
        "Puxe com os músculos das costas, não apenas os braços",
        "Certifique-se que a mesa suporte seu peso"
      ]
    },
    {
      id: 201,
      name: "Superman",
      description: "Fortalece a lombar e músculos profundos das costas.",
      instructions: [
        "Deite de bruços no chão com braços estendidos à frente",
        "Mantenha o rosto voltado para baixo",
        "Levante simultaneamente braços, peito e pernas",
        "Mantenha a posição por 2-3 segundos",
        "Desça controladamente",
        "Imagine que está voando como o Superman"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["lombar", "glúteos", "posteriores"],
      category: "costas",
      reps: "10-20",
      sets: 3,
      restTime: 45,
      calories: 60,
      icon: "🦸‍♂️",
      tips: [
        "Não force o pescoço para trás",
        "Movimento controlado e suave",
        "Foque na contração da lombar"
      ]
    },
    {
      id: 202,
      name: "Remada Inclinada",
      description: "Usando inclinação para trabalhar diferentes ângulos das costas.",
      instructions: [
        "Posicione a mesa/barra em altura mais alta",
        "Fique mais inclinado, facilitando o exercício",
        "Mantenha corpo reto da cabeça aos pés",
        "Puxe o peito em direção à barra",
        "Controle tanto subida quanto descida"
      ],
      type: "strength",
      equipment: "mesa",
      difficulty: "iniciante",
      targetMuscles: ["latíssimo", "romboides"],
      category: "costas",
      reps: "12-20",
      sets: 3,
      restTime: 45,
      calories: 70,
      icon: "📐",
      tips: [
        "Ideal para iniciantes",
        "Quanto mais inclinado, mais fácil",
        "Progressão natural para remada horizontal"
      ]
    },
    {
      id: 203,
      name: "Remada Archer",
      description: "Exercício unilateral avançado para as costas.",
      instructions: [
        "Posição de remada com pegada mais larga",
        "Puxe principalmente com um braço",
        "O outro braço fica mais estendido",
        "Alterne entre os lados",
        "Foque na contração unilateral"
      ],
      type: "strength",
      equipment: "mesa",
      difficulty: "avançado",
      targetMuscles: ["latíssimo", "romboides", "bíceps"],
      category: "costas",
      reps: "5-10 cada lado",
      sets: 3,
      restTime: 90,
      calories: 110,
      icon: "🏹",
      tips: [
        "Trabalho unilateral intenso",
        "Exige mais estabilização",
        "Para praticantes avançados"
      ]
    },
    {
      id: 204,
      name: "Good Morning",
      description: "Exercício para posteriores de coxa e lombar.",
      instructions: [
        "Fique em pé com pés na largura dos ombros",
        "Coloque as mãos atrás da cabeça",
        "Flexione o quadril empinando o bumbum para trás",
        "Desça até sentir alongamento nos posteriores",
        "Volte contraindo glúteos e lombar"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["lombar", "glúteos", "posteriores"],
      category: "costas",
      reps: "8-15",
      sets: 3,
      restTime: 60,
      calories: 80,
      icon: "🌅",
      tips: [
        "Movimento vem do quadril, não da coluna",
        "Mantenha joelhos levemente flexionados",
        "Sinta o alongamento dos posteriores"
      ]
    },
    {
      id: 205,
      name: "Hiperextensão",
      description: "Fortalecimento específico da lombar e glúteos.",
      instructions: [
        "Deite de bruços em uma cama com quadril na borda",
        "Deixe o tronco suspenso para fora",
        "Coloque as mãos atrás da cabeça",
        "Levante o tronco até ficar alinhado",
        "Desça controladamente"
      ],
      type: "strength",
      equipment: "cama",
      difficulty: "intermediário",
      targetMuscles: ["lombar", "glúteos"],
      category: "costas",
      reps: "8-15",
      sets: 3,
      restTime: 60,
      calories: 75,
      icon: "↗️",
      tips: [
        "Não suba além do alinhamento natural",
        "Movimento controlado",
        "Alguém pode segurar suas pernas"
      ]
    },
    {
      id: 206,
      name: "Prancha Reversa",
      description: "Exercício isométrico que trabalha posterior das costas.",
      instructions: [
        "Sente com pernas estendidas",
        "Coloque as mãos atrás do corpo",
        "Levante o quadril formando linha reta",
        "Mantenha a posição contraindo glúteos",
        "Olhe para cima mantendo pescoço neutro"
      ],
      type: "isometric",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["lombar", "glúteos", "posteriores"],
      category: "costas",
      duration: 30,
      sets: 3,
      restTime: 60,
      calories: 65,
      icon: "🔄",
      tips: [
        "Mantenha corpo alinhado",
        "Contraia glúteos constantemente",
        "Respire normalmente"
      ]
    },
    // === PERNAS (7 exercícios) ===
    {
      id: 3,
      name: "Agachamento Clássico",
      description: "Rei dos exercícios para pernas, trabalha quadríceps, glúteos e core.",
      instructions: [
        "Fique em pé com os pés na largura dos ombros",
        "Mantenha o peito erguido e core contraído",
        "Desça como se fosse sentar em uma cadeira",
        "Desça até as coxas ficarem paralelas ao chão",
        "Empurre pelos calcanhares para subir",
        "Mantenha o peso distribuído nos pés"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["quadríceps", "glúteos", "core"],
      category: "pernas",
      reps: "12-20",
      sets: 3,
      restTime: 60,
      calories: 85,
      icon: "🏋️",
      tips: [
        "Mantenha os joelhos alinhados com os pés",
        "Não deixe os joelhos passarem dos dedos dos pés",
        "Desça controladamente",
        "Imagine que está sentando em uma cadeira"
      ]
    },
    {
      id: 301,
      name: "Lunge (Afundo)",
      description: "Exercício unilateral excelente para pernas e equilíbrio.",
      instructions: [
        "Fique em pé com os pés juntos",
        "Dê um passo grande para frente",
        "Desça até ambos os joelhos ficarem em 90°",
        "O joelho da frente não deve passar do tornozelo",
        "Empurre de volta à posição inicial",
        "Alterne as pernas ou faça todas de um lado"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["quadríceps", "glúteos", "panturrilha"],
      category: "pernas",
      reps: "8-12 cada perna",
      sets: 3,
      restTime: 45,
      calories: 75,
      icon: "🦵",
      tips: [
        "Mantenha o tronco ereto",
        "Distribua o peso entre ambas as pernas",
        "Controle a descida",
        "Use parede para equilíbrio se necessário"
      ]
    },
    {
      id: 302,
      name: "Agachamento Sumo",
      description: "Variação com pernas abertas focando mais nos glúteos.",
      instructions: [
        "Fique com pés mais largos que os ombros",
        "Dedos dos pés apontados levemente para fora",
        "Desça mantendo joelhos alinhados com os pés",
        "Desça até sentir boa contração nos glúteos",
        "Suba contraindo glúteos e coxas"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["glúteos", "quadríceps", "adutores"],
      category: "pernas",
      reps: "12-18",
      sets: 3,
      restTime: 60,
      calories: 90,
      icon: "🤼",
      tips: [
        "Foque na contração dos glúteos",
        "Joelhos sempre alinhados com os pés",
        "Trabalha mais a parte interna das coxas"
      ]
    },
    {
      id: 303,
      name: "Agachamento Jump",
      description: "Versão explosiva do agachamento com salto.",
      instructions: [
        "Posição inicial do agachamento normal",
        "Desça controladamente",
        "Exploda para cima saltando o mais alto possível",
        "Aterrisse suavemente voltando ao agachamento",
        "Amorteça bem a aterrissagem"
      ],
      type: "explosive",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["quadríceps", "glúteos", "panturrilhas"],
      category: "pernas",
      reps: "6-12",
      sets: 3,
      restTime: 90,
      calories: 120,
      icon: "🤸",
      tips: [
        "Salto explosivo",
        "Aterrissagem controlada",
        "Excelente para potência"
      ]
    },
    {
      id: 304,
      name: "Agachamento Pistol (Assistência)",
      description: "Versão assistida do agachamento em uma perna.",
      instructions: [
        "Segure em algo firme para apoio",
        "Levante uma perna estendida à frente",
        "Desça lentamente na perna de apoio",
        "Use o apoio para ajudar na subida",
        "Alterne as pernas"
      ],
      type: "strength",
      equipment: "apoio",
      difficulty: "avançado",
      targetMuscles: ["quadríceps", "glúteos"],
      category: "pernas",
      reps: "3-8 cada perna",
      sets: 3,
      restTime: 120,
      calories: 100,
      icon: "🔫",
      tips: [
        "Use assistência no início",
        "Movimento unilateral desafiador",
        "Progride para pistol completo"
      ]
    },
    {
      id: 305,
      name: "Panturrilha em Pé",
      description: "Exercício isolado para fortalecer as panturrilhas.",
      instructions: [
        "Fique em pé com pés paralelos",
        "Suba nas pontas dos pés o mais alto possível",
        "Mantenha por 1-2 segundos no topo",
        "Desça controladamente",
        "Use parede para equilíbrio se necessário"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["panturrilhas"],
      category: "pernas",
      reps: "15-25",
      sets: 3,
      restTime: 45,
      calories: 50,
      icon: "🦶",
      tips: [
        "Suba o mais alto possível",
        "Pausa no topo",
        "Pode fazer com uma perna só"
      ]
    },
    {
      id: 306,
      name: "Wall Sit (Cadeirinha na Parede)",
      description: "Exercício isométrico desafiador para quadríceps.",
      instructions: [
        "Encoste as costas na parede",
        "Desça até coxas ficarem paralelas ao chão",
        "Mantenha joelhos em 90 graus",
        "Segure a posição pelo tempo determinado",
        "Respire normalmente"
      ],
      type: "isometric",
      equipment: "parede",
      difficulty: "intermediário",
      targetMuscles: ["quadríceps", "glúteos"],
      category: "pernas",
      duration: 45,
      sets: 3,
      restTime: 60,
      calories: 70,
      icon: "🧿",
      tips: [
        "Mantenha 90 graus nos joelhos",
        "Respire constantemente",
        "Exercício de resistência mental"
      ]
    },
    // === CORE (7 exercícios) ===
    {
      id: 4,
      name: "Prancha Clássica",
      description: "Exercício isométrico fundamental para fortalecer o core.",
      instructions: [
        "Deite de bruços no chão",
        "Apoie nos antebraços e dedos dos pés",
        "Mantenha o corpo reto da cabeça aos pés",
        "Contraia o abdômen e glúteos",
        "Respire normalmente e mantenha a posição",
        "Imagine uma linha reta do topo da cabeça aos calcanhares"
      ],
      type: "isometric",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["core", "ombros", "glúteos"],
      category: "core",
      duration: 30,
      sets: 3,
      restTime: 30,
      calories: 50,
      icon: "⭕",
      tips: [
        "Mantenha o pescoço neutro",
        "Não deixe os quadris caírem ou subirem",
        "Respire constantemente",
        "Core sempre contraído"
      ]
    },
    {
      id: 401,
      name: "Abdominal Tradicional",
      description: "Exercício clássico para reto abdominal.",
      instructions: [
        "Deite de costas com joelhos flexionados",
        "Pés apoiados no chão",
        "Mãos atrás da cabeça (sem puxar o pescoço)",
        "Levante o tronco contraindo o abdômen",
        "Suba apenas até as escápulas saírem do chão",
        "Desça controladamente"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["reto abdominal"],
      category: "core",
      reps: "12-20",
      sets: 3,
      restTime: 45,
      calories: 60,
      icon: "💪",
      tips: [
        "Não puxe o pescoço",
        "Foque na contração do abdômen",
        "Movimento controlado"
      ]
    },
    {
      id: 402,
      name: "Prancha Lateral",
      description: "Trabalha os músculos laterais do core (oblíquos).",
      instructions: [
        "Deite de lado apoiando no antebraço",
        "Mantenha corpo alinhado dos pés à cabeça",
        "Levante o quadril formando linha reta",
        "Contraia o oblíquo do lado que está apoiado",
        "Mantenha a posição",
        "Repita do outro lado"
      ],
      type: "isometric",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["oblíquos", "core"],
      category: "core",
      duration: 25,
      sets: 3,
      restTime: 45,
      calories: 55,
      icon: "🔄",
      tips: [
        "Corpo perfeitamente alinhado",
        "Não deixe quadril cair",
        "Faça dos dois lados"
      ]
    },
    {
      id: 403,
      name: "Mountain Climbers",
      description: "Exercício dinâmico que combina core e cardio.",
      instructions: [
        "Comece em posição de prancha alta",
        "Traga um joelho em direção ao peito",
        "Volte à posição e alterne as pernas",
        "Mantenha ritmo constante como se estivesse correndo",
        "Core sempre contraído",
        "Quadril estável"
      ],
      type: "cardio",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["core", "ombros", "quadríceps"],
      category: "core",
      duration: 30,
      sets: 3,
      restTime: 60,
      calories: 100,
      icon: "⛰️",
      tips: [
        "Ritmo constante",
        "Quadril estável",
        "Combina força e cardio"
      ]
    },
    {
      id: 404,
      name: "Russian Twist",
      description: "Exercício rotacional para oblíquos.",
      instructions: [
        "Sente com joelhos flexionados",
        "Incline o tronco para trás mantendo equilíbrio",
        "Gire o tronco alternando para os lados",
        "Toque o chão de cada lado com as mãos",
        "Mantenha pés no ar para mais desafio"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["oblíquos", "core"],
      category: "core",
      reps: "10-20 cada lado",
      sets: 3,
      restTime: 45,
      calories: 70,
      icon: "🇷🇺",
      tips: [
        "Rotação vem do tronco",
        "Pés no ar aumenta dificuldade",
        "Mantenha equilíbrio"
      ]
    },
    {
      id: 405,
      name: "Dead Bug",
      description: "Exercício de estabilização do core.",
      instructions: [
        "Deite de costas com braços estendidos para cima",
        "Joelhos e quadris em 90 graus",
        "Estenda um braço para trás e perna oposta para frente",
        "Volte à posição inicial",
        "Alterne os lados",
        "Mantenha lombar sempre apoiada"
      ],
      type: "stability",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["core", "estabilizadores"],
      category: "core",
      reps: "6-12 cada lado",
      sets: 3,
      restTime: 45,
      calories: 45,
      icon: "🪲",
      tips: [
        "Lombar sempre no chão",
        "Movimento lento e controlado",
        "Foco na estabilização"
      ]
    },
    {
      id: 406,
      name: "Leg Raises",
      description: "Fortalece a parte inferior do abdômen.",
      instructions: [
        "Deite de costas com pernas estendidas",
        "Mãos ao lado do corpo ou embaixo da lombar",
        "Levante as pernas até 90 graus",
        "Desça controladamente sem tocar o chão",
        "Mantenha lombar sempre apoiada"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["abdômen inferior", "flexores do quadril"],
      category: "core",
      reps: "8-15",
      sets: 3,
      restTime: 60,
      calories: 65,
      icon: "⬆️",
      tips: [
        "Não arquear a lombar",
        "Movimento controlado",
        "Foque no abdômen inferior"
      ]
    },
    // === OMBROS (7 exercícios) ===
    {
      id: 5,
      name: "Pike Push-up",
      description: "Exercício avançado que imita o movimento do desenvolvimento militar.",
      instructions: [
        "Comece na posição de flexão tradicional",
        "Ande com os pés em direção às mãos",
        "Forme um V invertido com o corpo (posição de cão)",
        "Desça a cabeça em direção ao chão",
        "Empurre de volta à posição inicial",
        "Foque no trabalho dos ombros"
      ],
      type: "strength",
      equipment: "corpo",
      difficulty: "avançado",
      targetMuscles: ["ombros", "tríceps", "core"],
      category: "ombros",
      reps: "5-10",
      sets: 3,
      restTime: 90,
      calories: 110,
      icon: "💺",
      tips: [
        "Mantenha as pernas o mais retas possível",
        "Foque no movimento dos ombros",
        "Controle a descida",
        "Pode causar tontura - vá devagar"
      ]
    },
    {
      id: 501,
      name: "Pike Push-up Inclinado",
      description: "Versão mais fácil usando elevação nos pés.",
      instructions: [
        "Coloque os pés em uma superfície elevada",
        "Mãos no chão formando V invertido",
        "Desça a cabeça em direção às mãos",
        "Empurre de volta",
        "Quanto mais alto os pés, mais difícil"
      ],
      type: "strength",
      equipment: "banco",
      difficulty: "intermediário",
      targetMuscles: ["ombros", "tríceps"],
      category: "ombros",
      reps: "6-12",
      sets: 3,
      restTime: 75,
      calories: 95,
      icon: "📐",
      tips: [
        "Progressão para pike tradicional",
        "Varie a altura conforme evolução"
      ]
    },
    {
      id: 502,
      name: "Elevação Lateral com Garrafa",
      description: "Isolamento dos deltoides usando peso improvisado.",
      instructions: [
        "Fique em pé com uma garrafa d’água em cada mão",
        "Braços ligeiramente flexionados ao lado do corpo",
        "Levante os braços lateralmente até altura dos ombros",
        "Pause por 1 segundo no topo",
        "Desça controladamente"
      ],
      type: "strength",
      equipment: "garrafas",
      difficulty: "iniciante",
      targetMuscles: ["deltoides", "ombros"],
      category: "ombros",
      reps: "12-20",
      sets: 3,
      restTime: 60,
      calories: 70,
      icon: "🌊",
      tips: [
        "Use garrafas d’água como peso",
        "Não levante além da altura dos ombros",
        "Movimento controlado"
      ]
    },
    {
      id: 503,
      name: "Prancha para Pico",
      description: "Transição dinâmica que trabalha ombros e core.",
      instructions: [
        "Comece em posição de prancha alta",
        "Caminhe com os pés em direção às mãos",
        "Forme o V invertido (posição de pico)",
        "Volte caminhando para a prancha",
        "Movimento fluido e controlado"
      ],
      type: "functional",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["ombros", "core", "panturrilhas"],
      category: "ombros",
      reps: "8-15",
      sets: 3,
      restTime: 60,
      calories: 85,
      icon: "⛰️",
      tips: [
        "Transição suave",
        "Trabalha mobilidade também",
        "Core sempre ativo"
      ]
    },
    {
      id: 504,
      name: "Handstand na Parede (Assistência)",
      description: "Preparação para parada de mão com apoio.",
      instructions: [
        "Coloque as mãos no chão próximo à parede",
        "Suba os pés na parede um por vez",
        "Ande os pés para cima até onde conseguir",
        "Mantenha a posição",
        "Desça controladamente"
      ],
      type: "strength",
      equipment: "parede",
      difficulty: "avançado",
      targetMuscles: ["ombros", "tríceps", "core"],
      category: "ombros",
      duration: 15,
      sets: 3,
      restTime: 120,
      calories: 80,
      icon: "🤸‍♂️",
      tips: [
        "Use parede para segurança",
        "Progride gradualmente",
        "Força intensa nos ombros"
      ]
    },
    {
      id: 505,
      name: "Desenvolvimento com Toalha",
      description: "Simulação de desenvolvimento usando resistência isométrica.",
      instructions: [
        "Fique em pé pisando numa toalha",
        "Segure as pontas da toalha com as mãos",
        "Tente levantar os braços contra a resistência",
        "Mantenha tensão por 10-15 segundos",
        "Relaxe e repita"
      ],
      type: "isometric",
      equipment: "toalha",
      difficulty: "iniciante",
      targetMuscles: ["ombros", "deltoides"],
      category: "ombros",
      duration: 15,
      sets: 3,
      restTime: 45,
      calories: 40,
      icon: "🧽",
      tips: [
        "Resistência isométrica",
        "Varie a força aplicada",
        "Criativo e eficaz"
      ]
    },
    {
      id: 506,
      name: "Rotação de Ombros",
      description: "Exercício de mobilidade e fortalecimento.",
      instructions: [
        "Fique em pé com braços estendidos nas laterais",
        "Faça círculos pequenos com os braços",
        "Alterne direção (horário e anti-horário)",
        "Aumente gradualmente o tamanho dos círculos",
        "Mantenha tensão durante todo movimento"
      ],
      type: "mobility",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["ombros", "deltoides"],
      category: "ombros",
      duration: 30,
      sets: 3,
      restTime: 30,
      calories: 35,
      icon: "🔄",
      tips: [
        "Começe com círculos pequenos",
        "Varie a direção",
        "Ótimo para aquecimento"
      ]
    },
    // === CARDIO (7 exercícios) ===
    {
      id: 6,
      name: "Burpees Completo",
      description: "Exercício completo que combina força e cardio de alta intensidade.",
      instructions: [
        "Comece em pé com pés na largura dos ombros",
        "Agache e coloque as mãos no chão",
        "Pule os pés para trás (posição de flexão)",
        "Faça uma flexão completa",
        "Pule os pés de volta próximo às mãos",
        "Salte explosivamente com braços para cima"
      ],
      type: "hiit",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["corpo todo"],
      category: "cardio",
      reps: "5-15",
      sets: 3,
      restTime: 60,
      calories: 150,
      icon: "🔥",
      tips: [
        "Mantenha um ritmo constante",
        "Foque na técnica, não na velocidade",
        "Respire coordenadamente",
        "Exercício de alta intensidade"
      ]
    },
    {
      id: 601,
      name: "Jumping Jacks",
      description: "Exercício cardio clássico para aquecimento e condicionamento.",
      instructions: [
        "Comece em pé com pés juntos e braços ao lado",
        "Salte abrindo as pernas e levantando braços acima da cabeça",
        "Salte novamente fechando pernas e baixando braços",
        "Mantenha ritmo constante",
        "Aterrisse suavemente nas pontas dos pés"
      ],
      type: "cardio",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["corpo todo", "sistema cardiovascular"],
      category: "cardio",
      duration: 45,
      sets: 3,
      restTime: 30,
      calories: 80,
      icon: "🤸‍♂️",
      tips: [
        "Aterrissagem suave",
        "Ótimo para aquecimento",
        "Mantenha ritmo constante"
      ]
    },
    {
      id: 602,
      name: "High Knees (Joelho Alto)",
      description: "Corrida estacionária com joelhos elevados.",
      instructions: [
        "Fique em pé no lugar",
        "Comece a \"correr\" levantando os joelhos",
        "Tente tocar os joelhos no peito",
        "Mantenha ritmo rápido",
        "Balançe os braços naturalmente"
      ],
      type: "cardio",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["quadríceps", "core", "sistema cardiovascular"],
      category: "cardio",
      duration: 30,
      sets: 3,
      restTime: 45,
      calories: 90,
      icon: "🏃‍♂️",
      tips: [
        "Joelhos o mais alto possível",
        "Mantenha o core contraído",
        "Respiração rítmica"
      ]
    },
    {
      id: 603,
      name: "Butt Kickers (Chute no Bumbum)",
      description: "Corrida estacionária chutando os glúteos com os calcanhares.",
      instructions: [
        "Fique em pé no lugar",
        "Comece a \"correr\" chutando os glúteos com os calcanhares",
        "Tente tocar os glúteos com os calcanhares",
        "Mantenha ritmo constante",
        "Tronco ligeiramente inclinado para frente"
      ],
      type: "cardio",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["posteriores", "glúteos", "sistema cardiovascular"],
      category: "cardio",
      duration: 30,
      sets: 3,
      restTime: 45,
      calories: 85,
      icon: "🧿",
      tips: [
        "Calcanhares tocam os glúteos",
        "Tronco estabilizado",
        "Trabalha posteriores"
      ]
    },
    {
      id: 604,
      name: "Skaters (Patinadores)",
      description: "Movimento lateral que simula patinação.",
      instructions: [
        "Comece com peso em uma perna",
        "Salte lateralmente para a outra perna",
        "Aterrisse com a perna oposta",
        "Toque o chão atrás com a perna livre",
        "Continue alternando os lados"
      ],
      type: "cardio",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["pernas", "glúteos", "core"],
      category: "cardio",
      reps: "10-20 cada lado",
      sets: 3,
      restTime: 60,
      calories: 100,
      icon: "⛸️",
      tips: [
        "Movimento lateral amplo",
        "Aterrissagem controlada",
        "Trabalha estabilidade"
      ]
    },
    {
      id: 605,
      name: "Squat Jumps",
      description: "Agachamento explosivo com salto.",
      instructions: [
        "Posição inicial de agachamento",
        "Desça até coxas paralelas",
        "Exploda para cima saltando",
        "Aterrisse suavemente em agachamento",
        "Repita imediatamente"
      ],
      type: "explosive",
      equipment: "corpo",
      difficulty: "intermediário",
      targetMuscles: ["quadríceps", "glúteos", "panturrilhas"],
      category: "cardio",
      reps: "8-15",
      sets: 3,
      restTime: 75,
      calories: 120,
      icon: "🤸",
      tips: [
        "Salto explosivo",
        "Aterrissagem controlada",
        "Combina força e cardio"
      ]
    },
    {
      id: 606,
      name: "Corrida no Lugar",
      description: "Simulação de corrida para condicionamento cardiovascular.",
      instructions: [
        "Fique em pé no lugar",
        "Comece a \"correr\" elevando alternadamente os pés",
        "Balançe os braços como na corrida real",
        "Mantenha ritmo moderado a intenso",
        "Respire de forma rítmica"
      ],
      type: "cardio",
      equipment: "corpo",
      difficulty: "iniciante",
      targetMuscles: ["sistema cardiovascular", "pernas"],
      category: "cardio",
      duration: 60,
      sets: 3,
      restTime: 45,
      calories: 70,
      icon: "🏃",
      tips: [
        "Varie a intensidade",
        "Movimento natural de corrida",
        "Base para outros exercícios"
      ]
    }
  ];

  // Muscle Groups Configuration  
  const muscleGroups = [
    { id: 'peito', name: 'Peito', icon: '🦴', color: 'from-red-500 to-red-600' },
    { id: 'costas', name: 'Costas', icon: '🔙', color: 'from-blue-500 to-blue-600' },
    { id: 'pernas', name: 'Pernas', icon: '🦵', color: 'from-green-500 to-green-600' },
    { id: 'core', name: 'Core', icon: '⭕', color: 'from-orange-500 to-orange-600' },
    { id: 'ombros', name: 'Ombros', icon: '💺', color: 'from-purple-500 to-purple-600' },
    { id: 'cardio', name: 'Cardio', icon: '❤️', color: 'from-pink-500 to-pink-600' }
  ];

  // Equipment Options
  const equipmentOptions = [
    { id: 'corpo', name: 'Peso Corporal', icon: '🤸‍♂️', color: 'from-emerald-500 to-emerald-600' },
    { id: 'halteres', name: 'Halteres', icon: '🏋️‍♂️', color: 'from-blue-500 to-blue-600' },
    { id: 'barra', name: 'Barra', icon: '🚫', color: 'from-gray-500 to-gray-600' },
    { id: 'mesa', name: 'Mesa/Cadeira', icon: '🪑', color: 'from-yellow-500 to-yellow-600' },
    { id: 'elastico', name: 'Elástico', icon: '🎗️', color: 'from-purple-500 to-purple-600' },
    { id: 'kettlebell', name: 'Kettlebell', icon: '⚫', color: 'from-orange-500 to-orange-600' }
  ];

  // Difficulty Levels
  const difficultyLevels = [
    { id: 'iniciante', name: 'Iniciante', icon: '🌱', color: 'from-green-400 to-green-500', description: 'Para quem está começando' },
    { id: 'intermediário', name: 'Intermediário', icon: '🔥', color: 'from-orange-400 to-orange-500', description: 'Já tem experiência' },
    { id: 'avançado', name: 'Avançado', icon: '⚡', color: 'from-red-400 to-red-500', description: 'Para atletas experientes' }
  ];

  // Timer Effects
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isResting && restTimer > 0) {
      interval = setInterval(() => {
        setRestTimer(prev => {
          if (prev <= 1) {
            setIsResting(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isResting, restTimer]);

  // Utility Functions
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Workout Builder Functions
  const getFilteredExercises = () => {
    return exercises.filter(exercise => {
      if (selectedMuscles.length > 0) {
        const hasSelectedMuscle = selectedMuscles.some(muscle => 
          exercise.targetMuscles.includes(muscle) || exercise.category === muscle
        );
        if (!hasSelectedMuscle) return false;
      }
      
      if (selectedEquipment.length > 0) {
        if (!selectedEquipment.includes(exercise.equipment)) return false;
      }
      
      if (selectedDifficulty) {
        if (exercise.difficulty !== selectedDifficulty) return false;
      }
      
      return true;
    });
  };

  const generateWorkout = () => {
    const filtered = getFilteredExercises();
    const workoutExercises = filtered.slice(0, Math.floor(selectedDuration / 5));
    setSelectedExercises(workoutExercises);
    setCurrentStep(4);
  };

  const createCategoryWorkout = (category: string) => {
    const categoryExercises = exercises.filter(ex => ex.category === category);
    const selectedExercisesForWorkout = categoryExercises.slice(0, 6); // Mínimo 6 exercícios
    setSelectedExercises(selectedExercisesForWorkout);
    setActiveTab('builder');
    setCurrentStep(5);
    setWorkoutName(`Treino de ${category.charAt(0).toUpperCase() + category.slice(1)}`);
  };

  const startCustomWorkout = () => {
    if (selectedExercises.length === 0) return;
    setIsWorkoutMode(true);
    setCurrentExerciseIndex(0);
    setTimer(0);
    setCompletedExercises([]);
  };

  const nextExercise = () => {
    const currentExercise = selectedExercises[currentExerciseIndex];
    setCompletedExercises(prev => [...prev, currentExercise.id]);
    
    if (currentExerciseIndex < selectedExercises.length - 1) {
      setRestTimer(currentExercise.restTime || 60);
      setIsResting(true);
      setIsTimerRunning(false);
      
      setTimeout(() => {
        setCurrentExerciseIndex(prev => prev + 1);
        setTimer(0);
      }, (currentExercise.restTime || 60) * 1000);
    } else {
      setIsWorkoutMode(false);
      setIsTimerRunning(false);
      // Award points
      const pointsEarned = selectedExercises.reduce((total, ex) => total + (ex.calories || 50), 0);
      setUserPoints(prev => prev + pointsEarned);
      alert(`🎉 Treino completo! Você ganhou ${pointsEarned} FitPoints!`);
    }
  };

  const saveWorkout = () => {
    if (!workoutName || selectedExercises.length === 0) return;
    
    const newWorkout: UserWorkout = {
      id: Date.now().toString(),
      name: workoutName,
      exercises: selectedExercises,
      duration: selectedDuration,
      difficulty: selectedDifficulty,
      targetMuscles: selectedMuscles,
      createdAt: new Date()
    };
    
    setSavedWorkouts(prev => [...prev, newWorkout]);
    alert('Treino salvo com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <header className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl">
                  💪
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">MuscleLevel</h1>
                  <p className="text-xs text-gray-400">Treinos Profissionais</p>
                </div>
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full">
                <span className="text-xl">⭐</span>
                <span className="font-bold text-white">{userPoints.toLocaleString()} FitPoints</span>
              </div>
              
              <div className="flex items-center gap-2">
                {['builder', 'library', 'saved'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {tab === 'builder' ? '🏗️ Criar' : tab === 'library' ? '📚 Biblioteca' : '💾 Salvos'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {!isWorkoutMode ? (
        <>
          {activeTab === 'builder' && (
            <div className="max-w-7xl mx-auto px-4 py-8">
              {/* Workout Stepper */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                    Crie Seu Treino Perfeito
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Use nossa IA para criar treinos personalizados baseados em seus objetivos, equipamentos e preferências
                  </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-12">
                  <div className="flex items-center gap-4">
                    {workoutSteps.map((step, index) => {
                      const isLocked = index > currentStep + 1 || (index > currentStep && !workoutSteps[currentStep]?.completed) || (index > 0 && !workoutSteps.slice(0, index).every(step => step.completed));
                      
                      return (
                        <div key={step.id} className="flex items-center">
                          <div className="relative group">
                            <button
                              onClick={() => {
                                // Só permite navegar para steps anteriores ou o próximo step se o atual estiver completo
                                if (index <= currentStep || (index === currentStep + 1 && workoutSteps[currentStep]?.completed)) {
                                  // Verifica se todos os steps anteriores estão completos
                                  const canNavigate = workoutSteps.slice(0, index).every(step => step.completed) || index === 0;
                                  if (canNavigate) {
                                    setCurrentStep(index);
                                  }
                                }
                              }}
                              disabled={isLocked}
                              className={`relative flex items-center justify-center w-16 h-16 rounded-2xl font-bold text-lg transition-all ${
                                currentStep === index
                                  ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg transform scale-110'
                                  : step.completed
                                  ? 'bg-green-500 text-white cursor-pointer'
                                  : isLocked
                                  ? 'bg-gray-800 text-gray-400 cursor-not-allowed opacity-50'
                                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 cursor-pointer'
                              }`}
                            >
                              <span className="text-2xl">{step.icon}</span>
                              {step.completed && currentStep !== index && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                                  <span className="text-xs">✓</span>
                                </div>
                              )}
                              {/* Indicador de step bloqueado */}
                              {isLocked && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-xs">🔒</span>
                                </div>
                              )}
                            </button>
                            {/* Tooltip explicativo para steps bloqueados */}
                            {isLocked && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 border border-gray-700">
                                Complete os passos anteriores
                              </div>
                            )}
                          </div>
                          {index < workoutSteps.length - 1 && (
                            <div className={`w-8 h-1 mx-2 rounded-full ${
                              step.completed ? 'bg-green-500' : 'bg-gray-700'
                            }`} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step Content */}
                <div className="bg-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-800">
                  {currentStep === -1 ? (
                    <UserQuestionnaire 
                      userProfile={userProfile}
                      setUserProfile={setUserProfile}
                      currentQuestion={currentQuestion}
                      setCurrentQuestion={setCurrentQuestion}
                      onComplete={() => setCurrentStep(0)}
                    />
                  ) : (
                    <>
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold mb-2 text-white">
                          {workoutSteps[currentStep]?.title}
                        </h3>
                        <p className="text-gray-400 text-lg">
                          {workoutSteps[currentStep]?.description}
                        </p>
                      </div>
                    </>
                  )}
                  
                  {currentStep >= 0 && (
                    <>
                      {/* Quick Category Workouts */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-center mb-6 text-white">
                    🏃‍♂️ Treinos Rápidos por Categoria
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {muscleGroups.map((muscle) => {
                      const categoryExerciseCount = exercises.filter(ex => ex.category === muscle.id).length;
                      return (
                        <button
                          key={muscle.id}
                          onClick={() => createCategoryWorkout(muscle.id)}
                          className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${muscle.color} text-white shadow-xl hover:shadow-2xl`}
                        >
                          <div className="text-4xl mb-2">{muscle.icon}</div>
                          <div className="font-bold text-sm mb-1">{muscle.name}</div>
                          <div className="text-xs opacity-90">{categoryExerciseCount} exercícios</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              {/* Step 0: Muscle Selection */}
                  {currentStep === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-400 text-lg">
                        Use os botões de "Treinos Rápidos por Categoria" acima para começar imediatamente!
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        Ou continue no builder personalizado clicando em "Próximo"
                      </p>
                    </div>
                  )}

                  {/* Step 1: Equipment Selection */}
                  {currentStep === 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {equipmentOptions.map((equipment) => (
                        <button
                          key={equipment.id}
                          onClick={() => {
                            setSelectedEquipment(prev => 
                              prev.includes(equipment.id)
                                ? prev.filter(e => e !== equipment.id)
                                : [...prev, equipment.id]
                            );
                          }}
                          className={`p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                            selectedEquipment.includes(equipment.id)
                              ? `bg-gradient-to-br ${equipment.color} text-white shadow-xl scale-105`
                              : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                          }`}
                        >
                          <div className="text-5xl mb-4 text-center">{equipment.icon}</div>
                          <div className="font-bold text-lg text-center">{equipment.name}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 2: Difficulty Selection */}
                  {currentStep === 2 && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {difficultyLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setSelectedDifficulty(level.id)}
                          className={`p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center ${
                            selectedDifficulty === level.id
                              ? `bg-gradient-to-br ${level.color} text-white shadow-xl scale-105`
                              : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                          }`}
                        >
                          <div className="text-6xl mb-4">{level.icon}</div>
                          <h4 className="font-bold text-2xl mb-2">{level.name}</h4>
                          <p className="text-gray-300">{level.description}</p>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 3: Duration Selection */}
                  {currentStep === 3 && (
                    <div className="max-w-2xl mx-auto">
                      <div className="text-center mb-8">
                        <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                          {selectedDuration} min
                        </div>
                        <p className="text-gray-400">Duração total do treino</p>
                      </div>
                      
                      <input
                        type="range"
                        min="15"
                        max="90"
                        step="15"
                        value={selectedDuration}
                        onChange={(e) => setSelectedDuration(Number(e.target.value))}
                        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      
                      <div className="flex justify-between text-sm text-gray-400 mt-4">
                        <span>15 min</span>
                        <span>30 min</span>
                        <span>45 min</span>
                        <span>60 min</span>
                        <span>90 min</span>
                      </div>
                      
                      <div className="mt-8 text-center">
                        <button
                          onClick={generateWorkout}
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all"
                        >
                          🎯 Gerar Treino Personalizado
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Exercise Selection */}
                  {currentStep === 4 && (
                    <div>
                      <div className="text-center mb-8">
                        <p className="text-gray-300 text-lg">
                          {selectedExercises.length} exercícios selecionados para seu treino de {selectedDuration} minutos
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {selectedExercises.map((exercise) => (
                          <div
                            key={exercise.id}
                            className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-3xl">{exercise.icon}</span>
                              <span className="text-green-400 font-bold">+{exercise.calories} pts</span>
                            </div>
                            
                            <h4 className="font-bold text-lg mb-2 text-white">{exercise.name}</h4>
                            <p className="text-gray-400 text-sm mb-4">{exercise.description}</p>
                            
                            <div className="flex justify-between text-sm text-gray-300">
                              <span>{exercise.sets} séries</span>
                              <span>{exercise.reps || `${exercise.duration}s`}</span>
                              <span className="capitalize">{exercise.difficulty}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Finalize */}
                  {currentStep === 5 && (
                    <div className="max-w-2xl mx-auto text-center">
                      <div className="mb-8">
                        <input
                          type="text"
                          placeholder="Digite um nome para seu treino..."
                          value={workoutName}
                          onChange={(e) => setWorkoutName(e.target.value)}
                          className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-2xl text-white text-lg focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <button
                          onClick={saveWorkout}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all"
                        >
                          💾 Salvar Treino
                        </button>
                        
                        <button
                          onClick={startCustomWorkout}
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all"
                        >
                          🚀 Iniciar Agora
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-12">
                    <button
                      onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                      disabled={currentStep === 0}
                      className="px-6 py-3 bg-gray-700 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                    >
                      ← Anterior
                    </button>
                    
                    <button
                      onClick={() => setCurrentStep(Math.min(workoutSteps.length - 1, currentStep + 1))}
                      disabled={currentStep === workoutSteps.length - 1 || !workoutSteps[currentStep]?.completed}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                    >
                      Próximo →
                    </button>
                  </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Exercise Library Tab */}
          {activeTab === 'library' && (
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Biblioteca de Exercícios
                </h2>
                <p className="text-gray-300 text-lg">
                  Explore nossa coleção completa de exercícios profissionais
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-700"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">{exercise.icon}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          exercise.difficulty === 'iniciante' ? 'bg-green-100 text-green-700' :
                          exercise.difficulty === 'intermediário' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {exercise.difficulty}
                        </span>
                      </div>
                      
                      <h4 className="font-bold text-lg mb-2 text-white">{exercise.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{exercise.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span>{exercise.sets} séries</span>
                        <span>{exercise.reps || `${exercise.duration}s`}</span>
                        <span>+{exercise.calories} pts</span>
                      </div>
                      
                      <button
                        onClick={() => setShowExerciseDetail(exercise)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-medium"
                      >
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Workouts Tab */}
          {activeTab === 'saved' && (
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Seus Treinos Salvos
                </h2>
                <p className="text-gray-300 text-lg">
                  Acesse rapidamente seus treinos personalizados
                </p>
              </div>

              {savedWorkouts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-400">Nenhum treino salvo</h3>
                  <p className="text-gray-500 mb-8">Crie e salve treinos personalizados para acessá-los rapidamente</p>
                  <button
                    onClick={() => setActiveTab('builder')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all"
                  >
                    🏗️ Criar Primeiro Treino
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedWorkouts.map((workout) => (
                    <div key={workout.id} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                      <h4 className="font-bold text-xl mb-2 text-white">{workout.name}</h4>
                      <p className="text-gray-400 mb-4">{workout.exercises.length} exercícios • {workout.duration} min</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {workout.targetMuscles.map((muscle) => (
                          <span key={muscle} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {muscle}
                          </span>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => {
                          setSelectedExercises(workout.exercises);
                          startCustomWorkout();
                        }}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                      >
                        🚀 Iniciar Treino
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        /* Workout Mode - Ultra Professional */
        <div className="max-w-6xl mx-auto px-4 py-8">
          {isResting ? (
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white rounded-3xl p-12 mb-8 shadow-2xl">
                <h2 className="text-5xl font-bold mb-6 text-white">⏰ Intervalo</h2>
                <div className="text-8xl font-mono mb-6 text-white font-bold tracking-wider">
                  {formatTime(restTimer)}
                </div>
                <p className="text-2xl opacity-90 text-gray-100 mb-4">Recupere sua energia</p>
                <div className="w-24 h-2 bg-white/30 rounded-full mx-auto overflow-hidden">
                  <div 
                    className="h-full bg-white rounded-full transition-all duration-1000"
                    style={{ width: `${((60 - restTimer) / 60) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-white">🎯 Próximo Exercício:</h3>
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  {selectedExercises[currentExerciseIndex + 1]?.name}
                </div>
                <p className="text-gray-300 text-lg">
                  {selectedExercises[currentExerciseIndex + 1]?.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Current Exercise - Ultra Professional Design */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700 backdrop-blur-lg">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{selectedExercises[currentExerciseIndex]?.icon}</div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {selectedExercises[currentExerciseIndex]?.name}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {selectedExercises[currentExerciseIndex]?.description}
                  </p>
                  <div className="flex justify-center items-center gap-4 mt-4">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                      +{selectedExercises[currentExerciseIndex]?.calories} FitPoints
                    </span>
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold capitalize">
                      {selectedExercises[currentExerciseIndex]?.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="bg-gray-800/50 rounded-2xl p-6">
                    <h4 className="font-bold mb-6 text-white text-xl flex items-center gap-2">
                      <span className="text-2xl">📋</span> Instruções Passo a Passo:
                    </h4>
                    <ol className="space-y-4">
                      {selectedExercises[currentExerciseIndex]?.instructions.map((instruction, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-200 text-lg leading-relaxed">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-2xl p-6">
                    <h4 className="font-bold mb-6 text-white text-xl flex items-center gap-2">
                      <span className="text-2xl">💡</span> Dicas Pro:
                    </h4>
                    <ul className="space-y-3">
                      {selectedExercises[currentExerciseIndex]?.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-green-400 text-xl">●</span>
                          <span className="text-gray-200 leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Advanced Timer Controls */}
                <div className="text-center mt-10">
                  <div className="bg-black/50 rounded-3xl p-8 mb-8">
                    <div className="text-8xl font-mono mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                      {formatTime(timer)}
                    </div>
                    <div className="text-gray-400 text-lg mb-6">Tempo de execução</div>
                    
                    <div className="flex justify-center gap-6">
                      <button
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        className={`px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg ${
                          isTimerRunning 
                            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                            : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                        }`}
                      >
                        {isTimerRunning ? '⏸️ Pausar' : '▶️ Iniciar'}
                      </button>
                      
                      <button
                        onClick={() => setTimer(0)}
                        className="px-10 py-5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg"
                      >
                        🔄 Resetar
                      </button>
                      
                      <button
                        onClick={nextExercise}
                        className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg"
                      >
                        ✅ Concluído
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Professional Exercise Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {selectedExercises[currentExerciseIndex]?.sets}
                    </div>
                    <div className="text-gray-300 font-medium">Séries</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {selectedExercises[currentExerciseIndex]?.reps || `${selectedExercises[currentExerciseIndex]?.duration}s`}
                    </div>
                    <div className="text-gray-300 font-medium">Repetições</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">
                      {selectedExercises[currentExerciseIndex]?.restTime}s
                    </div>
                    <div className="text-gray-300 font-medium">Descanso</div>
                  </div>
                </div>
              </div>
              
              {/* Ultra Professional Workout Progress */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-2xl text-white flex items-center gap-3">
                    <span className="text-3xl">📊</span> Progresso do Treino
                  </h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-400">
                      {Math.round(((currentExerciseIndex) / selectedExercises.length) * 100)}%
                    </div>
                    <div className="text-sm text-gray-400">Concluído</div>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  {selectedExercises.map((exercise, index) => (
                    <div
                      key={exercise.id}
                      className={`flex-1 h-4 rounded-full transition-all duration-500 ${
                        index < currentExerciseIndex ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        index === currentExerciseIndex ? 'bg-gradient-to-r from-orange-500 to-red-500 animate-pulse' :
                        'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex justify-between text-gray-300">
                  <span>✅ {completedExercises.length} exercícios completos</span>
                  <span>⏳ {selectedExercises.length - currentExerciseIndex - 1} exercícios restantes</span>
                </div>
              </div>
              
              <button
                onClick={() => setIsWorkoutMode(false)}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg"
              >
                🚪 Finalizar Treino
              </button>
            </div>
          )}
        </div>
      )}

      {/* Ultra Professional Exercise Detail Modal */}
      {showExerciseDetail && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-600 shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{showExerciseDetail.icon}</div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{showExerciseDetail.name}</h2>
                    <p className="text-xl text-gray-300">{showExerciseDetail.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowExerciseDetail(null)}
                  className="text-gray-400 hover:text-white text-3xl p-2 rounded-full hover:bg-gray-700 transition-all"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <h4 className="font-bold mb-6 text-white text-2xl flex items-center gap-3">
                    <span className="text-3xl">📋</span> Instruções Detalhadas:
                  </h4>
                  <ol className="space-y-4">
                    {showExerciseDetail.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-200 text-lg leading-relaxed">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                  
                  <h4 className="font-bold mb-4 mt-8 text-white text-xl flex items-center gap-2">
                    <span className="text-2xl">🎯</span> Músculos Alvo:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {showExerciseDetail.targetMuscles.map((muscle) => (
                      <span
                        key={muscle}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium capitalize"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <h4 className="font-bold mb-6 text-white text-2xl flex items-center gap-3">
                    <span className="text-3xl">💡</span> Dicas Profissionais:
                  </h4>
                  <ul className="space-y-4 mb-8">
                    {showExerciseDetail.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-400 text-2xl">●</span>
                        <span className="text-gray-200 text-lg leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {showExerciseDetail.modifications && (
                    <>
                      <h4 className="font-bold mb-4 text-white text-xl flex items-center gap-2">
                        <span className="text-2xl">🔄</span> Modificações:
                      </h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl">
                          <strong className="text-green-400 text-lg">✨ Mais Fácil:</strong>
                          <p className="text-gray-200 mt-2">{showExerciseDetail.modifications.easier}</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl">
                          <strong className="text-red-400 text-lg">🔥 Mais Difícil:</strong>
                          <p className="text-gray-200 mt-2">{showExerciseDetail.modifications.harder}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Professional Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
                <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{showExerciseDetail.sets}</div>
                  <div className="text-gray-300 font-medium">Séries</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {showExerciseDetail.reps || `${showExerciseDetail.duration}s`}
                  </div>
                  <div className="text-gray-300 font-medium">Reps</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl">
                  <div className="text-3xl font-bold text-orange-400 mb-2">{showExerciseDetail.restTime}s</div>
                  <div className="text-gray-300 font-medium">Descanso</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl">
                  <div className="text-2xl font-bold text-purple-400 mb-2 capitalize">{showExerciseDetail.difficulty}</div>
                  <div className="text-gray-300 font-medium">Nível</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-2xl">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">+{showExerciseDetail.calories}</div>
                  <div className="text-gray-300 font-medium">Pontos</div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-6">
                <button
                  onClick={() => {
                    setSelectedExercises([showExerciseDetail]);
                    startCustomWorkout();
                    setShowExerciseDetail(null);
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  🚀 Treinar Agora
                </button>
                <button
                  onClick={() => setShowExerciseDetail(null)}
                  className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-4 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Professional Floating Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl border border-gray-700">
          <div className="flex items-center gap-3">
            {[
              { icon: '💪', label: 'Treinos', href: '/treinos', active: true },
              { icon: '📊', label: 'Programas', href: '/programas' },
              { icon: '🏆', label: 'Ranking', href: '/leaderboard' },
              { icon: '🛒', label: 'Loja', href: '/loja' },
              { icon: '👑', label: 'Premium', href: '/premium' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all transform hover:scale-110 group ${
                  item.active 
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-bold hidden sm:block">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

// Componente do Questionário Inicial
function UserQuestionnaire({ userProfile, setUserProfile, currentQuestion, setCurrentQuestion, onComplete }: {
  userProfile: any;
  setUserProfile: (profile: any) => void;
  currentQuestion: number;
  setCurrentQuestion: (q: number) => void;
  onComplete: () => void;
}) {
  const questions = [
    {
      id: 1,
      question: "Qual a sua idade?",
      type: "select",
      icon: "🎂",
      options: [
        { value: "16-20", label: "16-20 anos" },
        { value: "21-30", label: "21-30 anos" },
        { value: "31-40", label: "31-40 anos" },
        { value: "41-50", label: "41-50 anos" },
        { value: "51+", label: "51+ anos" }
      ],
      field: "age"
    },
    {
      id: 2,
      question: "Qual o seu gênero?",
      type: "select",
      icon: "👤",
      options: [
        { value: "masculino", label: "Masculino" },
        { value: "feminino", label: "Feminino" },
        { value: "outro", label: "Outro" },
        { value: "prefiro-nao-dizer", label: "Prefiro não dizer" }
      ],
      field: "gender"
    },
    {
      id: 3,
      question: "Qual a sua experiência com exercícios?",
      type: "select",
      icon: "💪",
      options: [
        { value: "iniciante", label: "Iniciante - Pouca ou nenhuma experiência" },
        { value: "intermediario", label: "Intermediário - 6 meses a 2 anos" },
        { value: "avancado", label: "Avançado - Mais de 2 anos" },
        { value: "atleta", label: "Atleta - Competitivo/Profissional" }
      ],
      field: "experience"
    },
    {
      id: 4,
      question: "Qual o seu principal objetivo?",
      type: "select",
      icon: "🎯",
      options: [
        { value: "perder-peso", label: "Perder peso e definir" },
        { value: "ganhar-massa", label: "Ganhar massa muscular" },
        { value: "resistencia", label: "Melhorar resistência" },
        { value: "forca", label: "Aumentar força" },
        { value: "saude-geral", label: "Saúde geral e bem-estar" },
        { value: "reabilitacao", label: "Reabilitação/Fisioterapia" }
      ],
      field: "goal"
    },
    {
      id: 5,
      question: "Quanto tempo você tem disponível para treinar?",
      type: "select",
      icon: "⏰",
      options: [
        { value: "15-30min", label: "15-30 minutos" },
        { value: "30-45min", label: "30-45 minutos" },
        { value: "45-60min", label: "45-60 minutos" },
        { value: "60+min", label: "Mais de 60 minutos" }
      ],
      field: "timeAvailable"
    },
    {
      id: 6,
      question: "Como você avalia seu nível de condicionamento físico atual?",
      type: "select",
      icon: "📊",
      options: [
        { value: "baixo", label: "Baixo - Fico cansado rapidamente" },
        { value: "medio", label: "Médio - Consigo me exercitar moderadamente" },
        { value: "bom", label: "Bom - Tenho boa resistência" },
        { value: "excelente", label: "Excelente - Muito condicionado" }
      ],
      field: "fitnessLevel"
    },
    {
      id: 7,
      question: "Você tem alguma preferência ou restrição?",
      type: "select",
      icon: "⚠️",
      options: [
        { value: "nenhuma", label: "Nenhuma restrição" },
        { value: "lesoes", label: "Tenho lesões ou limitações" },
        { value: "casa", label: "Prefiro treinar em casa" },
        { value: "academia", label: "Prefiro treinar na academia" },
        { value: "cardio", label: "Foco em exercícios cardiovasculares" },
        { value: "musculacao", label: "Foco em musculação" }
      ],
      field: "preferences"
    }
  ];

  const currentQ = questions[currentQuestion];

  const handleAnswer = (value) => {
    setUserProfile(prev => ({
      ...prev,
      [currentQ.field]: value
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Questionário completo, processar respostas e sugerir configurações
      processUserAnswers();
      onComplete();
    }
  };

  const processUserAnswers = () => {
    // Lógica para processar as respostas e sugerir configurações automáticas
    console.log('Perfil do usuário:', userProfile);
    
    // Aqui você pode adicionar lógica para:
    // - Sugerir músculos específicos baseado no objetivo
    // - Definir dificuldade baseado na experiência
    // - Ajustar duração baseado no tempo disponível
    // - Etc.
  };

  return (
    <div className="text-center py-8">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">{currentQ.icon}</span>
        </div>
        
        <h3 className="text-3xl font-bold mb-4 text-white">
          Vamos conhecer você melhor!
        </h3>
        
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentQuestion 
                    ? 'bg-orange-500 w-8' 
                    : index < currentQuestion 
                      ? 'bg-green-500' 
                      : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-2">
          Pergunta {currentQuestion + 1} de {questions.length}
        </p>
        
        <h4 className="text-2xl font-bold text-white mb-8">
          {currentQ.question}
        </h4>
      </div>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {currentQ.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className="p-4 text-left bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-orange-500 rounded-xl transition-all duration-200 text-white hover:scale-105 transform"
          >
            <div className="font-semibold text-lg">{option.label}</div>
          </button>
        ))}
      </div>

      <div className="mt-8 text-gray-400">
        <p className="text-sm">
          Suas respostas nos ajudam a criar o treino perfeito para você! 🎯
        </p>
      </div>
    </div>
  );
}
