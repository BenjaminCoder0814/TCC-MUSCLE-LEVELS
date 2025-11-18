"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  avatar?: string;
}

interface Specialist {
  id: string;
  name: string;
  title: string;
  description: string;
  avatar: string;
  color: string;
  specialties: string[];
  isPremium: boolean;
  greeting: string;
  examples: string[];
}

export default function AIChatsPage() {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPremiumUser, setIsPremiumUser] = useState(true); // Simular usuário premium
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const specialists: Specialist[] = [
    {
      id: 'nutricionista',
      name: 'NutriBot AI',
      title: 'IA Nutricionista Esportiva',
      description: 'Assistente de IA especializada em nutrição esportiva e planejamento alimentar personalizado.',
      avatar: '🥗',
      color: 'from-green-500 to-emerald-600',
      specialties: ['Dietas personalizadas', 'Suplementação', 'Perda de peso', 'Ganho de massa'],
      isPremium: true,
      greeting: 'Olá! Sou a NutriBot AI, sua assistente de nutrição virtual. Estou aqui para te ajudar com sua alimentação e suplementação. Como posso te ajudar hoje?',
      examples: [
        'Como criar uma dieta para ganhar massa muscular?',
        'Quais suplementos devo tomar?',
        'Como calcular minha necessidade calórica?',
        'Alimentos pré e pós-treino'
      ]
    },
    {
      id: 'personal',
      name: 'FitBot Coach',
      title: 'IA Personal Trainer',
      description: 'Assistente de IA especializada em treino funcional e desenvolvimento muscular.',
      avatar: '💪',
      color: 'from-blue-500 to-cyan-600',
      specialties: ['Treino personalizado', 'Técnica de exercícios', 'Planejamento de treino', 'Biomecânica'],
      isPremium: true,
      greeting: 'E aí, atleta! Sou a FitBot Coach, sua personal trainer virtual. Vamos juntos alcançar seus objetivos fitness! Como posso te ajudar?',
      examples: [
        'Como montar um treino para iniciantes?',
        'Qual a melhor técnica para agachamento?',
        'Como progredir nos exercícios?',
        'Treino em casa vs academia'
      ]
    },
    {
      id: 'fisioterapeuta',
      name: 'PhysioBot AI',
      title: 'IA Fisioterapeuta Esportiva',
      description: 'Assistente de IA especializada em prevenção de lesões e reabilitação.',
      avatar: '🏥',
      color: 'from-purple-500 to-indigo-600',
      specialties: ['Prevenção de lesões', 'Reabilitação', 'Alongamentos', 'Biomecânica'],
      isPremium: true,
      greeting: 'Olá! Sou a PhysioBot AI, fisioterapeuta esportiva virtual. Estou aqui para te ajudar a treinar de forma segura e prevenir lesões. O que você gostaria de saber?',
      examples: [
        'Como prevenir lesões no joelho?',
        'Alongamentos para depois do treino',
        'Como tratar dor nas costas?',
        'Exercícios de reabilitação'
      ]
    },
    {
      id: 'psicologo',
      name: 'MindBot Coach',
      title: 'IA Psicóloga do Esporte',
      description: 'Assistente de IA especializada em motivação, disciplina e bem-estar mental.',
      avatar: '🧠',
      color: 'from-pink-500 to-rose-600',
      specialties: ['Motivação', 'Disciplina', 'Ansiedade', 'Autoestima'],
      isPremium: true,
      greeting: 'Oi! Sou a MindBot Coach, psicóloga do esporte virtual. Estou aqui para te apoiar na jornada mental do fitness. Como posso te ajudar hoje?',
      examples: [
        'Como manter a motivação para treinar?',
        'Lidando com ansiedade no exercício',
        'Como criar disciplina nos treinos?',
        'Melhorar autoestima através do fitness'
      ]
    },
    {
      id: 'sleep',
      name: 'SleepBot AI',
      title: 'IA Especialista em Sono',
      description: 'Assistente de IA especializada em qualidade do sono e recuperação muscular.',
      avatar: '😴',
      color: 'from-indigo-500 to-purple-600',
      specialties: ['Qualidade do sono', 'Recuperação', 'Ritmo circadiano', 'Insônia'],
      isPremium: true,
      greeting: 'Olá! Sou a SleepBot AI, especialista em sono virtual. O descanso é fundamental para seus resultados. Como posso te ajudar a melhorar sua qualidade de sono?',
      examples: [
        'Como melhorar a qualidade do sono?',
        'Quanto devo dormir para recuperar?',
        'Suplementos para dormir melhor',
        'Rotina de sono para atletas'
      ]
    },
    {
      id: 'geral',
      name: 'MuscleLevel AI',
      title: 'Assistente Geral',
      description: 'Assistente de IA com conhecimentos gerais sobre fitness e saúde.',
      avatar: '🤖',
      color: 'from-gray-500 to-slate-600',
      specialties: ['Perguntas gerais', 'Dicas básicas', 'Motivação', 'Informações'],
      isPremium: false,
      greeting: 'Olá! Sou o MuscleLevel AI, seu assistente fitness. Posso te ajudar com dúvidas gerais sobre exercícios e saúde. Como posso te ajudar?',
      examples: [
        'Benefícios do exercício físico',
        'Como começar a treinar?',
        'Dicas de motivação',
        'Informações básicas sobre fitness'
      ]
    }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const selectSpecialist = (specialist: Specialist) => {
    if (specialist.isPremium && !isPremiumUser) {
      alert('Este especialista é exclusivo para usuários Premium! Faça o upgrade para acessar.');
      return;
    }

    setSelectedSpecialist(specialist);
    setMessages([
      {
        id: 1,
        type: 'ai',
        content: specialist.greeting,
        timestamp: new Date(),
        avatar: specialist.avatar
      }
    ]);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !selectedSpecialist) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular resposta da IA
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage, selectedSpecialist);
      const aiMessage: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
        avatar: selectedSpecialist.avatar
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const generateAIResponse = (userInput: string, specialist: Specialist): string => {
    const input = userInput.toLowerCase();
    
    // Respostas baseadas no especialista
    if (specialist.id === 'nutricionista') {
      if (input.includes('dieta') || input.includes('alimentação')) {
        return `🥗 Para uma dieta eficaz, é importante considerar seus objetivos, nível de atividade e preferências alimentares. Recomendo:\n\n• Proteínas: 1.6-2.2g por kg de peso corporal\n• Carboidratos: ajustar conforme atividade\n• Gorduras saudáveis: 20-30% das calorias\n• Hidratação adequada: 35ml por kg de peso\n\nQue tal me contar seu objetivo específico para personalizar melhor?`;
      }
      if (input.includes('suplemento')) {
        return `💊 Os suplementos básicos que recomendo:\n\n🥛 **Whey Protein**: 20-30g pós-treino\n⚡ **Creatina**: 3-5g diariamente\n🐟 **Ômega 3**: 1-2g por dia\n☀️ **Vitamina D**: conforme exame de sangue\n\nLembre-se: suplementos complementam, não substituem uma boa alimentação!`;
      }
      return `🍎 Como nutricionista, posso te ajudar com planejamento alimentar, suplementação e estratégias nutricionais. Sua pergunta é muito interessante! Para te dar a melhor orientação, preciso saber mais sobre seu objetivo específico. Você quer ganhar massa, perder gordura ou melhorar performance?`;
    }

    if (specialist.id === 'personal') {
      if (input.includes('treino') || input.includes('exercício')) {
        return `💪 Excelente pergunta! Para um treino efetivo, considere:\n\n📋 **Estrutura básica**:\n• Aquecimento: 5-10 min\n• Exercícios principais: 6-8 exercícios\n• Volta à calma: 5 min\n\n🎯 **Princípios importantes**:\n• Progressão gradual\n• Técnica correta primeiro\n• Descanso adequado entre séries\n• Foco na qualidade vs quantidade\n\nQual seu nível atual de experiência?`;
      }
      if (input.includes('agachamento') || input.includes('técnica')) {
        return `🏋️‍♂️ A técnica correta é fundamental! Para o agachamento:\n\n✅ **Posição inicial**:\n• Pés na largura dos ombros\n• Dedos ligeiramente para fora\n• Core ativado\n\n✅ **Execução**:\n• Desça como se fosse sentar\n• Joelhos alinhados com os pés\n• Peito erguido, olhar à frente\n• Desça até 90° ou sua amplitude\n\n⚠️ **Evite**: joelhos para dentro, inclinação excessiva`;
      }
      return `🎯 Como personal trainer, meu foco é te ajudar a treinar de forma eficiente e segura. Cada pessoa é única, então gosto de personalizar as orientações. Me conte: qual é seu principal objetivo no treino e há quanto tempo você treina?`;
    }

    if (specialist.id === 'fisioterapeuta') {
      if (input.includes('lesão') || input.includes('dor')) {
        return `🏥 A prevenção é sempre melhor que o tratamento! Para evitar lesões:\n\n🔥 **Aquecimento adequado**:\n• 5-10 minutos de atividade leve\n• Mobilidade articular\n• Ativação muscular específica\n\n💪 **Fortalecimento**:\n• Core stability\n• Músculos estabilizadores\n• Trabalho de propriocepção\n\n⚠️ **Sinais de alerta**: dor aguda, inchaço, limitação de movimento\n\nOnde você sente desconforto?`;
      }
      if (input.includes('alongamento')) {
        return `🤸‍♀️ Alongamentos são essenciais! Recomendo:\n\n**Pré-treino (dinâmicos)**:\n• Leg swings • Arm circles\n• Hip circles • Torso twists\n\n**Pós-treino (estáticos)**:\n• 30-60 segundos por grupo muscular\n• Foco nos músculos trabalhados\n• Respiração relaxada\n\n💡 **Dica**: alongue quando o músculo estiver aquecido!`;
      }
      return `🩺 Como fisioterapeuta, meu objetivo é te manter ativo e sem dor. Movimento é vida! A prevenção e o cuidado com o corpo são fundamentais para uma vida ativa. Em que posso te ajudar especificamente hoje?`;
    }

    if (specialist.id === 'psicologo') {
      if (input.includes('motivação') || input.includes('disciplina')) {
        return `🧠 A motivação é um combustível, mas a disciplina é o motor! Estratégias que funcionam:\n\n🎯 **Metas SMART**:\n• Específicas e mensuráveis\n• Prazos definidos\n• Realizáveis\n\n💪 **Hábitos pequenos**:\n• Comece com 10-15 min\n• Mesmo horário diário\n• Celebre pequenas vitórias\n\n🔥 **Mindset**: foque no processo, não só no resultado. Cada treino é uma vitória!\n\nQual sua maior dificuldade atualmente?`;
      }
      if (input.includes('ansiedade') || input.includes('medo')) {
        return `🌱 A ansiedade no exercício é mais comum do que imagina. Estratégias para lidar:\n\n🧘‍♀️ **Respiração**:\n• 4 tempos inspirar\n• 4 tempos segurar\n• 4 tempos expirar\n\n💭 **Reenquadramento**:\n• "Estou nervoso" → "Estou animado"\n• Foque no presente, não no "e se"\n\n👥 **Suporte**: treinar com alguém pode diminuir a ansiedade\n\nO que especificamente te deixa ansioso no treino?`;
      }
      return `💖 Como psicóloga do esporte, acredito que a mente é nosso músculo mais importante! O bem-estar mental e físico andam juntos. Estou aqui para te apoiar nessa jornada de autoconhecimento e crescimento. Como você está se sentindo hoje?`;
    }

    if (specialist.id === 'sleep') {
      if (input.includes('sono') || input.includes('dormir')) {
        return `😴 O sono é quando a mágica da recuperação acontece! Para um sono reparador:\n\n🌙 **Higiene do sono**:\n• Mesmo horário todos os dias\n• Quarto escuro, fresco e silencioso\n• Sem telas 1h antes de dormir\n\n💤 **Para atletas**:\n• 7-9 horas por noite\n• Cochilo de 10-20 min se necessário\n• Evitar cafeína 6h antes de dormir\n\n🔄 **Recuperação**: 70% da liberação do GH acontece no sono profundo!\n\nComo está sua qualidade de sono atualmente?`;
      }
      if (input.includes('recuperação') || input.includes('cansaço')) {
        return `⚡ A recuperação é onde os resultados realmente acontecem!\n\n🛏️ **Sono de qualidade**:\n• Essencial para síntese proteica\n• Consolidação da memória motora\n• Regulação hormonal\n\n🧘‍♀️ **Técnicas de relaxamento**:\n• Meditação mindfulness\n• Banho morno antes de dormir\n• Leitura relaxante\n\n📱 **Evite**: estimulantes noturnos, exercícios intensos 3h antes de dormir\n\nQuantas horas você dorme por noite?`;
      }
      return `🌟 Como especialista em sono, sei que é durante o descanso que seu corpo se torna mais forte! O sono não é tempo perdido, é investimento em performance. Uma boa noite de sono pode melhorar sua força em até 20%! Como posso te ajudar a otimizar seu descanso?`;
    }

    // Assistente geral
    if (input.includes('começar') || input.includes('iniciante')) {
      return `🚀 Que legal que você quer começar! Algumas dicas para iniciantes:\n\n👟 **Primeiros passos**:\n• Comece devagar e seja consistente\n• 2-3 treinos por semana\n• Foque na técnica antes da intensidade\n\n💡 **Dicas importantes**:\n• Ouça seu corpo\n• Hidrate-se bem\n• Tenha paciência com os resultados\n\nLembre-se: a jornada fitness é uma maratona, não um sprint!`;
    }

    return `😊 Obrigado pela sua pergunta! Como ${specialist.title}, posso te ajudar com ${specialist.specialties.join(', ').toLowerCase()}. Que tal ser mais específico sobre o que você gostaria de saber? Estou aqui para te apoiar na sua jornada fitness!`;
  };

  const startExampleChat = (example: string) => {
    setInputMessage(example);
    // Auto-enviar a mensagem após um pequeno delay
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/treinos" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                  AI Specialists
                </h1>
                <p className="text-xs text-gray-500">
                  {isPremiumUser ? 'Premium User' : 'Free User'} • Especialistas Virtuais
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              {!isPremiumUser && (
                <a
                  href="/premium"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all"
                >
                  👑 Upgrade Premium
                </a>
              )}
              
              <a href="/treinos" className="text-gray-600 hover:text-blue-600 transition-colors">
                ← Treinos
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedSpecialist ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Converse com Nossos Especialistas
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Tenha acesso a especialistas virtuais em diversas áreas da saúde e fitness. 
                Pergunte, tire dúvidas e receba orientações personalizadas!
              </p>
            </div>

            {/* Premium Notice */}
            {!isPremiumUser && (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 mb-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">👑</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Acesso Premium Necessário</h3>
                    <p className="opacity-90">
                      A maioria dos nossos especialistas está disponível apenas para usuários Premium. 
                      Faça o upgrade e tenha acesso completo!
                    </p>
                  </div>
                  <a
                    href="/premium"
                    className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-bold transition-colors"
                  >
                    Upgrade Agora
                  </a>
                </div>
              </div>
            )}

            {/* Specialists Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialists.map((specialist) => (
                <div
                  key={specialist.id}
                  className={`relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                    specialist.isPremium && !isPremiumUser
                      ? 'bg-gray-100 dark:bg-gray-800 opacity-60'
                      : 'bg-white dark:bg-gray-800 hover:-translate-y-1'
                  }`}
                  onClick={() => selectSpecialist(specialist)}
                >
                  {specialist.isPremium && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        👑 Premium
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br ${specialist.color}`}>
                      {specialist.avatar}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{specialist.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{specialist.title}</p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">
                    {specialist.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {specialist.specialties.slice(0, 3).map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 rounded-xl font-bold transition-colors ${
                      specialist.isPremium && !isPremiumUser
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : `bg-gradient-to-r ${specialist.color} text-white hover:shadow-lg`
                    }`}
                    disabled={specialist.isPremium && !isPremiumUser}
                  >
                    {specialist.isPremium && !isPremiumUser ? '🔒 Premium Required' : '💬 Iniciar Conversa'}
                  </button>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Respostas Instantâneas</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tire suas dúvidas a qualquer hora do dia com nossos especialistas virtuais.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Orientações Personalizadas</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receba conselhos adaptados ao seu perfil, objetivos e necessidades específicas.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">Conhecimento Especializado</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Acesse conhecimento de profissionais qualificados em diversas áreas da saúde.
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Chat Interface */
          <div className="max-w-4xl mx-auto">
            {/* Chat Header */}
            <div className="bg-white dark:bg-gray-800 rounded-t-2xl p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br ${selectedSpecialist.color}`}>
                    {selectedSpecialist.avatar}
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">{selectedSpecialist.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedSpecialist.title}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedSpecialist(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ← Voltar
                </button>
              </div>

              {/* Quick Examples */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Exemplos de perguntas:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedSpecialist.examples.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => startExampleChat(example)}
                      className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full text-xs transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white dark:bg-gray-800 h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : `bg-gradient-to-br ${selectedSpecialist.color}`
                  }`}>
                    {message.type === 'user' ? '👤' : message.avatar}
                  </div>
                  
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white ml-12'
                      : 'bg-gray-100 dark:bg-gray-700 mr-12'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString('pt-BR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${selectedSpecialist.color}`}>
                    {selectedSpecialist.avatar}
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="bg-white dark:bg-gray-800 rounded-b-2xl p-6 border-t">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder={`Pergunte algo para ${selectedSpecialist.name}...`}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className={`px-6 py-2 rounded-xl font-bold transition-colors ${
                    inputMessage.trim() && !isTyping
                      ? `bg-gradient-to-r ${selectedSpecialist.color} text-white hover:shadow-lg`
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl px-4 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            {[
              { icon: '💪', label: 'Treinos', href: '/treinos' },
              { icon: '📊', label: 'Programas', href: '/programas' },
              { icon: '🤖', label: 'AI Chat', href: '/ai-chat', active: true },
              { icon: '🛒', label: 'Loja', href: '/loja' },
              { icon: '👑', label: 'Premium', href: '/premium' },
              { icon: '🔧', label: 'Tools', href: '/tools' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-colors group ${
                  item.active ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-xs font-medium hidden sm:block">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
