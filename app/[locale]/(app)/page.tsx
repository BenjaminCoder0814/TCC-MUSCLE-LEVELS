import React from "react";
import Link from "next/link";

import type { Metadata } from "next";
import { PromoBanner } from "@/components/PromoBanner";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title = "Muscle Levels — Transformação Fitness Inteligente";
  const description = "A plataforma brasileira mais completa para fitness. Avaliação corporal, treinos personalizados com IA e acompanhamento profissional. Transforme seu corpo com ciência! 💪";

  return {
    title: `${title}`,
    description,
    keywords: [
      "muscle levels",
      "treino personalizado",
      "fitness brasil", 
      "musculação",
      "academia online",
      "análise corporal",
      "personal trainer",
      "exercícios personalizados",
      "transformação corporal"
    ],
    openGraph: {
      title: `${title}`,
      description,
      images: [
        {
          url: `/images/muscle-levels-og.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title: `${title}`,
      description,
      images: [`/images/muscle-levels-og.jpg`],
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const stats = [
    { number: "50K+", label: "Usuários Transformados" },
    { number: "1M+", label: "Treinos Realizados" },
    { number: "500+", label: "Exercícios Validados" },
    { number: "98%", label: "Satisfação" },
  ];

  const testimonials = [
    {
      name: "FitBot User Alpha",
      role: "IA Empresária, 34 anos",
      content: "Em 3 meses perdi 8kg e ganhei muito mais disposição! A análise corporal foi um divisor de águas.",
      rating: 5,
      result: "-8kg em 3 meses"
    },
    {
      name: "StudyBot Beta",
      role: "IA Estudante, 22 anos", 
      content: "Os treinos são desafiadores mas adequados ao meu nível. Nunca consegui ser tão consistente!",
      rating: 5,
      result: "+5kg massa muscular"
    },
    {
      name: "TrainerBot Pro",
      role: "IA Personal Trainer",
      content: "Uso para complementar meu trabalho. A qualidade dos exercícios e relatórios é excepcional.",
      rating: 5,
      result: "Profissional certificada"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section com Background Profissional */}
      <section className="relative px-6 pt-32 pb-16 lg:pt-36 lg:pb-20 text-center text-white overflow-hidden">
        {/* Professional Multi-layer Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
          
          {/* Professional gym background */}
          <div className="absolute inset-0 opacity-60 bg-cover bg-center bg-fixed hero-gym-background" />
          
          {/* Floating particles */}
          <div className="hero-particles opacity-30" />
          
          {/* Professional overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.08)_25%,rgba(255,255,255,.08)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.08)_75%,rgba(255,255,255,.08)_76%,transparent_77%,transparent),linear-gradient(transparent_24%,rgba(255,255,255,.08)_25%,rgba(255,255,255,.08)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.08)_75%,rgba(255,255,255,.08)_76%,transparent_77%,transparent)] bg-[120px_120px]" />
          </div>
          
          {/* Floating orbs for depth */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-6 text-sm font-medium bg-green-500/20 text-green-200 border border-green-400 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
            🚀 Novo: IA para treinos personalizados
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            Transforme seu corpo com a <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Muscle Levels</span> 💪
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100 drop-shadow-lg">
            A plataforma brasileira mais completa para fitness. <strong className="text-green-400">Análise corporal avançada</strong>, 
            treinos com IA e acompanhamento profissional em um só lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href={`/${locale}/premium`} className="inline-flex items-center justify-center text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all rounded-lg font-medium">
              👑
              Torne-se Premium
            </Link>
            <Link href={`/${locale}/onboarding`} className="inline-flex items-center justify-center text-lg px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all rounded-lg font-medium">
              💪
              Treine agora
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              ✅
              <span>100% Gratuito para começar</span>
            </div>
            <div className="flex items-center gap-2">
              🛡️
              <span>Dados protegidos</span>
            </div>
            <div className="flex items-center gap-2">
              🏆
              <span>Resultados comprovados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Futuristic background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_26%,transparent_27%)] bg-[50px_50px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banners Promocionais */}
      <section className="px-6 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Descubra todas as funcionalidades</h2>
            <p className="text-xl text-slate-300">Tudo que você precisa para sua transformação fitness em um só lugar</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <PromoBanner
              title="Treinos Inteligentes"
              description="IA cria treinos únicos para seus objetivos, nível e equipamentos disponíveis. Milhares de exercícios na base."
              href={`/${locale}/treinos`}
              ctaText="Ver treinos"
              iconName="Dumbbell"
              gradient="from-blue-500 to-cyan-500"
            />
            
            <PromoBanner
              title="Análise Completa"
              description="Avalie sua composição corporal, IMC, taxa metabólica e receba recomendações personalizadas baseadas em ciência."
              href={`/${locale}/tools`}
              ctaText="Fazer análise"
              iconName="Target"
              gradient="from-green-500 to-emerald-500"
              variant="secondary"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PromoBanner
              title="Programas Estruturados"
              description="Programas completos de 4 a 12 semanas, desenvolvidos por especialistas."
              href={`/${locale}/treinos`}
              ctaText="Ver programas"
              iconName="Grid3x3"
              gradient="from-purple-500 to-violet-500"
              variant="accent"
            />
            
            <PromoBanner
              title="Estatísticas Avançadas"
              description="Monitore sua evolução com gráficos detalhados e métricas de performance."
              href={`/${locale}/statistics`}
              ctaText="Ver estatísticas"
              iconName="BarChart3"
              gradient="from-orange-500 to-red-500"
              variant="accent"
            />
            
            <PromoBanner
              title="Ranking Global"
              description="Compare seu progresso e conecte-se com profissionais certificados."
              href={`/${locale}/leaderboard`}
              ctaText="Ver ranking"
              iconName="Trophy"
              gradient="from-yellow-500 to-amber-500"
              variant="accent"
            />
          </div>
        </div>
      </section>

      {/* Workout Builder Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🏋️‍♂️</span>
                </div>
                <span className="text-6xl">💪</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Treinos Personalizados com IA
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Nosso algoritmo inteligente cria treinos únicos baseados no seu perfil, objetivos e equipamentos disponíveis. 
                Milhares de exercícios validados por especialistas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✅</span>
                  <span>Treinos adaptados ao seu nível</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✅</span>
                  <span>Progressão automática</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✅</span>
                  <span>500+ exercícios disponíveis</span>
                </div>
              </div>
              <Link 
                href={`/${locale}/treinos`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                <span>💪</span>
                Começar meu treino agora
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="font-bold mb-2">🔥 Peso Corporal</h4>
                  <p className="text-blue-100 text-sm">Exercícios sem equipamentos</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="font-bold mb-2">🏋️ Halteres</h4>
                  <p className="text-blue-100 text-sm">Treino com halteres</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="font-bold mb-2">🏃 Barra</h4>
                  <p className="text-blue-100 text-sm">Exercícios com barras</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="font-bold mb-2">⚡ Kettlebell</h4>
                  <p className="text-blue-100 text-sm">Treino funcional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA Premium Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  👑
                </div>
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full font-medium">
                  🤖 EXCLUSIVO PREMIUM
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Inteligência Artificial
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Muscle Levels
                </span>
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Revolucione seu treino com 3 IAs especializadas que evoluem com você. 
                Cada conquista desbloqueia novas funcionalidades e conhecimentos personalizados.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="text-2xl mb-2">💪</div>
                  <div className="text-white font-semibold">FitBot</div>
                  <div className="text-purple-200 text-sm">IA de Treino</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="text-2xl mb-2">🥗</div>
                  <div className="text-white font-semibold">NutriBot</div>
                  <div className="text-purple-200 text-sm">IA de Dieta</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-white font-semibold">WellBot</div>
                  <div className="text-purple-200 text-sm">IA de Autocuidado</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✅</span>
                  <span className="text-purple-100">Conversas personalizadas estilo ChatGPT</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✅</span>
                  <span className="text-purple-100">Desbloqueie com pontos de atividade</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✅</span>
                  <span className="text-purple-100">Conhecimento científico avançado</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✅</span>
                  <span className="text-purple-100">Exclusivo para membros premium</span>
                </div>
              </div>
              
              <Link 
                href={`/${locale}/ia-premium`}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>🤖</span>
                Acessar IAs Premium
                <span>➡️</span>
              </Link>
            </div>
            
            <div className="lg:order-2 relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                {/* Chat Interface Preview */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white">💪</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">FitBot</div>
                      <div className="text-purple-200 text-sm">IA de Treino • Online</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-purple-200 text-sm mb-2">Usuário</div>
                    <div className="text-white">"Como fazer agachamento corretamente?"</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4">
                    <div className="text-blue-200 text-sm mb-2">FitBot</div>
                    <div className="text-white">
                      "Perfeito! Vou te ensinar o agachamento ideal... 
                      <br />
                      <br />
                      🎯 **TÉCNICA PERFEITA:**
                      <br />
                      • Pés na largura dos ombros
                      <br />
                      • Desça como se fosse sentar
                      <br />
                      • Mantenha o peito aberto..."
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-purple-200 text-sm ml-2">FitBot está digitando...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Professional background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(79,70,229,0.15),transparent_50%),radial-gradient(circle_at_70%_40%,rgba(147,51,234,0.15),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
                <span className="text-6xl">🏪</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Loja Exclusiva FitPoints
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Nossa loja exclusiva onde você troca os pontos ganhos nos treinos por produtos incríveis! 
                Suplementos, acessórios, roupas esportivas e muito mais.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span>Pague apenas com pontos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span>Produtos de qualidade premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span>Entrega em todo o Brasil</span>
                </div>
              </div>
              <Link 
                href={`/${locale}/loja`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-indigo-600 hover:to-purple-700 transition-colors text-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                Explorar loja agora
              </Link>
            </div>
            <div className="lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                  <h4 className="font-bold text-indigo-800 mb-2">💊 Suplementos</h4>
                  <p className="text-indigo-700 text-sm">Whey, Creatina, BCAA</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">� Roupas</h4>
                  <p className="text-purple-700 text-sm">Camisetas, Shorts, Tops</p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl border border-pink-200">
                  <h4 className="font-bold text-pink-800 mb-2">🎒 Acessórios</h4>
                  <p className="text-pink-700 text-sm">Garrafas, Luvas, Mochilas</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">🏋️ Equipamentos</h4>
                  <p className="text-blue-700 text-sm">Halteres, Faixas, Cordas</p>
                </div>
              </div>
              
              {/* Destaque de pontos */}
              <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                  <div>
                    <h4 className="font-bold text-yellow-800">Sistema de Pontos</h4>
                    <p className="text-yellow-700 text-sm">Ganhe pontos treinando</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">1 Treino = 50-100⭐</div>
                  <div className="text-yellow-700 text-sm">Use seus pontos na loja!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-purple-500 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <span className="text-6xl">📊</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Estatísticas Avançadas
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Monitore sua evolução com gráficos detalhados, métricas de performance e análises aprofundadas. 
                Dados que realmente importam para seu progresso.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-purple-200" />
                  <span>Gráficos de progresso em tempo real</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-purple-200" />
                  <span>Análise de performance por exercício</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-purple-200" />
                  <span>Relatórios personalizados</span>
                </div>
              </div>
              <Link 
                href={`/${locale}/statistics`}
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                <Activity className="w-5 h-5" />
                Ver minhas estatísticas
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white/10 p-8 rounded-2xl">
                <h4 className="font-bold mb-4 text-xl">Seus números esta semana:</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Treinos realizados</span>
                    <span className="font-bold text-2xl">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Calorias queimadas</span>
                    <span className="font-bold text-2xl">1,250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tempo total</span>
                    <span className="font-bold text-2xl">3h 20m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sequência atual</span>
                    <span className="font-bold text-2xl">12 dias 🔥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden">
        {/* Professional background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(234,88,12,0.15),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(239,68,68,0.15),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <span className="text-6xl">🔧</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Ferramentas de Análise
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Calculadoras avançadas para IMC, composição corporal, taxa metabólica e muito mais. 
                Ciência aplicada à sua transformação.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600">⚖️</span>
                  </div>
                  <span className="font-medium">Calculadora IMC</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600">❤️</span>
                  </div>
                  <span className="font-medium">Zonas Cardíacas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600">🔥</span>
                  </div>
                  <span className="font-medium">Taxa Metabólica</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600">📏</span>
                  </div>
                  <span className="font-medium">Composição Corporal</span>
                </div>
              </div>
              <Link 
                href={`/${locale}/tools`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-colors text-lg"
              >
                <Hammer className="w-5 h-5" />
                Usar ferramentas gratuitas
              </Link>
            </div>
            <div className="lg:order-1">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-6 text-xl">Análise Rápida - IMC</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-orange-700 mb-1">Altura (cm)</label>
                    <div className="w-full h-10 bg-white rounded-lg border border-orange-200 flex items-center px-3">
                      <span className="text-gray-500">175</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-700 mb-1">Peso (kg)</label>
                    <div className="w-full h-10 bg-white rounded-lg border border-orange-200 flex items-center px-3">
                      <span className="text-gray-500">70</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">22.8</div>
                      <div className="text-orange-700 font-medium">Peso Normal</div>
                      <div className="text-sm text-orange-600 mt-2">✅ Faixa saudável</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard/Ranking Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-yellow-400 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <span className="text-6xl">🏆</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Ranking dos Melhores
              </h2>
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                Conecte-se com personal trainers e nutricionistas certificados. 
                Compare seu progresso e encontre inspiração na nossa comunidade.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-yellow-200" />
                  <span>Personal trainers certificados</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-yellow-200" />
                  <span>Rankings por categoria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-yellow-200" />
                  <span>Comunidade ativa</span>
                </div>
              </div>
              <Link 
                href={`/${locale}/leaderboard`}
                className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                <Trophy className="w-5 h-5" />
                Ver ranking completo
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white/10 p-8 rounded-2xl">
                <h4 className="font-bold mb-6 text-xl">🏆 Top Profissionais:</h4>
                <div className="space-y-4">
                  {[
                    { pos: "🥇", name: "FitBot Elite", points: "2,580", specialty: "IA Personal Trainer" },
                    { pos: "🥈", name: "NutriBot Pro", points: "2,450", specialty: "IA Nutricionista" },
                    { pos: "🥉", name: "PhysioBot AI", points: "2,380", specialty: "IA Fisioterapeuta" }
                  ].map((prof, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{prof.pos}</span>
                        <div>
                          <div className="font-bold">{prof.name}</div>
                          <div className="text-yellow-200 text-sm">{prof.specialty}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{prof.points}</div>
                        <div className="text-yellow-200 text-sm">pontos</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-rose-900 relative overflow-hidden">
        {/* Professional background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(236,72,153,0.15),transparent_50%),radial-gradient(circle_at_60%_80%,rgba(244,63,94,0.15),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                  👑
                </div>
                <span className="text-6xl">👑</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Experiência Premium
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Desbloquie todo o potencial da plataforma com recursos exclusivos, 
                acompanhamento personalizado e ferramentas avançadas de análise.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Crown className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-medium">Treinos ilimitados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Crown className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-medium">Suporte prioritário</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Crown className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-medium">Relatórios avançados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Crown className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-medium">IA personalizada</span>
                </div>
              </div>
              <Link 
                href={`/${locale}/premium`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl font-bold hover:from-pink-600 hover:to-rose-600 transition-colors text-lg"
              >
                <Crown className="w-5 h-5" />
                Seja premium agora
              </Link>
            </div>
            <div className="lg:order-1">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full font-bold mb-4">
                    <Crown className="w-4 h-4" />
                    PREMIUM
                  </div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">R$ 29,90</div>
                  <div className="text-pink-700">/mês</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-pink-700">
                    <CheckCircle className="h-4 w-4 text-pink-600" />
                    <span className="text-sm">Todos os treinos desbloqueados</span>
                  </div>
                  <div className="flex items-center gap-3 text-pink-700">
                    <CheckCircle className="h-4 w-4 text-pink-600" />
                    <span className="text-sm">Análises corporais ilimitadas</span>
                  </div>
                  <div className="flex items-center gap-3 text-pink-700">
                    <CheckCircle className="h-4 w-4 text-pink-600" />
                    <span className="text-sm">Suporte via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3 text-pink-700">
                    <CheckCircle className="h-4 w-4 text-pink-600" />
                    <span className="text-sm">Sem anúncios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Transformações reais de pessoas reais
            </h2>
            <p className="text-xl text-slate-600">
              Mais de 50.000 brasileiros já alcançaram seus objetivos com a Muscle Levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.result}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.15),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo e História */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-cyan-400/30 shadow-2xl">
                  <img 
                    src="/images/muscle-levels-logo.png" 
                    alt="Muscle Levels" 
                    className="w-14 h-14 object-contain filter drop-shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Muscle Levels
                  </h2>
                  <p className="text-cyan-400/80 font-semibold">FITNESS AI PLATFORM</p>
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Uma História de <span className="text-cyan-400">Sonhos e Determinação</span>
              </h3>
              
              <div className="space-y-6 text-purple-200 text-lg leading-relaxed">
                <p>
                  Tudo começou em <strong className="text-white">2024</strong>, quando três amigos apaixonados por tecnologia e fitness, 
                  cursando o ensino técnico em TI, decidiram transformar suas próprias lutas com a forma física em uma 
                  solução revolucionária.
                </p>
                
                <p>
                  <strong className="text-cyan-400">Benjamin</strong>, <strong className="text-cyan-400">Lucas</strong> e 
                  <strong className="text-cyan-400"> Pedro</strong> passavam horas na academia, mas sentiam que faltava algo: 
                  uma plataforma que combinasse <em className="text-white">ciência, tecnologia e personalização real</em>.
                </p>
                
                <p>
                  Noites em claro codificando, fins de semana estudando biomecânica, e muitos cafés depois, nasceu a 
                  <strong className="text-white">Muscle Levels</strong> - não apenas um projeto escolar, mas um 
                  <em className="text-cyan-400">sonho de democratizar o fitness inteligente no Brasil</em>.
                </p>
                
                <p className="text-yellow-300 font-semibold border-l-4 border-yellow-400 pl-4">
                  "Acreditamos que toda pessoa merece ter acesso às melhores tecnologias de fitness, 
                  independente de onde esteja ou quanto possa investir."
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl px-6 py-3">
                  <div className="text-2xl font-bold text-cyan-400">50K+</div>
                  <div className="text-sm text-purple-200">Usuários Ativos</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl px-6 py-3">
                  <div className="text-2xl font-bold text-purple-400">1M+</div>
                  <div className="text-sm text-purple-200">Análises Realizadas</div>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl px-6 py-3">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-purple-200">Satisfação</div>
                </div>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700/50">
                    <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">2024</div>
                    <div className="text-sm text-purple-200">Fundação</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700/50">
                    <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">3</div>
                    <div className="text-sm text-purple-200">Fundadores</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700/50">
                    <Bot className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">IA</div>
                    <div className="text-sm text-purple-200">Tecnologia</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700/50">
                    <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">BR</div>
                    <div className="text-sm text-purple-200">Feito no Brasil</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse delay-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque - Carrossel */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-cyan-400/30">
                <img 
                  src="/images/muscle-levels-logo.png" 
                  alt="Muscle Levels" 
                  className="w-8 h-8 object-contain filter drop-shadow-lg"
                />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Loja Muscle Levels
              </h2>
            </div>
            <p className="text-xl text-slate-600 mb-8">
              Produtos premium selecionados para potencializar seus resultados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Whey Protein */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  💪
                </div>
                <h3 className="font-bold text-xl text-gray-900">Whey Protein Premium</h3>
                <p className="text-gray-600 text-sm">25g de proteína por porção</p>
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-blue-600">450⭐</div>
                <div className="text-sm text-gray-500 line-through">R$ 89,90</div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <span>🛒</span>
                Comprar com Pontos
              </button>
            </div>

            {/* Kit Treino */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  🏋️
                </div>
                <h3 className="font-bold text-xl text-gray-900">Kit Treino Completo</h3>
                <p className="text-gray-600 text-sm">Halteres + Tapete + Faixas</p>
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-purple-600">750⭐</div>
                <div className="text-sm text-gray-500 line-through">R$ 149,90</div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <span>🛒</span>
                Comprar com Pontos
              </button>
            </div>

            {/* Creatina */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  ⚡
                </div>
                <h3 className="font-bold text-xl text-gray-900">Creatina Pura 300g</h3>
                <p className="text-gray-600 text-sm">100% pura, sem sabor</p>
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-orange-600">300⭐</div>
                <div className="text-sm text-gray-500 line-through">R$ 59,90</div>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <span>🛒</span>
                Comprar com Pontos
              </button>
            </div>

            {/* Roupas Fitness */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  👕
                </div>
                <h3 className="font-bold text-xl text-gray-900">Conjunto Fitness Pro</h3>
                <p className="text-gray-600 text-sm">Camiseta + Short + Toalha</p>
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-600">600⭐</div>
                <div className="text-sm text-gray-500 line-through">R$ 99,90</div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <span>🛒</span>
                Comprar com Pontos
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/loja`} className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              <span>🛒</span>
              Ver todos os produtos
              <span>➡️</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Sua transformação começa agora! 🚀
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Junte-se a milhares de brasileiros que já estão conquistando o corpo dos sonhos com metodologia científica comprovada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={`/${locale}/tools`} className="inline-flex items-center gap-2 text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
              <span>❤️</span>
              Começar análise gratuita
            </Link>
            
            <Link href={`/${locale}/about`} className="inline-flex items-center gap-2 text-lg px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors">
              Conheça nossa história
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            <span>✅ Sem compromisso</span>
            <span>✅ Cancele quando quiser</span>  
            <span>✅ Suporte brasileiro 24/7</span>
          </div>
        </div>
      </section>
    </div>
  );
}
