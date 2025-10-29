import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getServerUrl } from "@/shared/lib/server-url";
import { SiteConfig } from "@/shared/config/site-config";
import PromoBanner from "@/components/PromoBanner";
import { 
  Dumbbell, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Zap,
  Heart,
  Calendar,
  BarChart3,
  CheckCircle,
  Star,
  PlayCircle,
  Shield,
  Trophy,
  Grid3x3,
  Activity,
  Hammer,
  Crown
} from "lucide-react";

import type { Metadata } from "next";

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
          url: `${getServerUrl()}/images/muscle-levels-og.jpg`,
          width: SiteConfig.seo.ogImage.width,
          height: SiteConfig.seo.ogImage.height,
          alt: title,
        },
      ],
    },
    twitter: {
      title: `${title}`,
      description,
      images: [`${getServerUrl()}/images/muscle-levels-og.jpg`],
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
      name: "Maria Silva",
      role: "Empresária, 34 anos",
      content: "Em 3 meses perdi 8kg e ganhei muito mais disposição! A análise corporal foi um divisor de águas.",
      rating: 5,
      result: "-8kg em 3 meses"
    },
    {
      name: "João Santos",
      role: "Estudante, 22 anos", 
      content: "Os treinos são desafiadores mas adequados ao meu nível. Nunca consegui ser tão consistente!",
      rating: 5,
      result: "+5kg massa muscular"
    },
    {
      name: "Ana Costa",
      role: "Personal Trainer",
      content: "Uso para complementar meu trabalho. A qualidade dos exercícios e relatórios é excepcional.",
      rating: 5,
      result: "Profissional certificada"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section com Background de Academia */}
      <section 
        className="relative px-6 py-32 lg:py-48 text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyMCIgeTI9IjEwODAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFBMjAyQyIvPgo8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzJEMzc0OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0QTU1NjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1a202c'
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <Badge variant="outline" className="mb-6 text-sm font-medium bg-green-500/20 text-green-200 border-green-400 backdrop-blur-sm">
            🚀 Novo: IA para treinos personalizados
          </Badge>
          
          <h1 className="text-5xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            Transforme seu corpo com a <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Muscle Levels</span> 💪
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100 drop-shadow-lg">
            A plataforma brasileira mais completa para fitness. <strong className="text-green-400">Análise corporal avançada</strong>, 
            treinos com IA e acompanhamento profissional em um só lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="large" className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all" asChild>
              <Link href={`/${locale}/premium`}>
                <Crown className="mr-2 h-5 w-5" />
                Torne-se Premium
              </Link>
            </Button>
            <Button variant="outline" size="large" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all" asChild>
              <Link href={`/${locale}/onboarding`}>
                <Dumbbell className="mr-2 h-5 w-5" />
                Treine agora
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>100% Gratuito para começar</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Dados protegidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-green-400" />
              <span>Resultados comprovados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banners Promocionais */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Descubra todas as funcionalidades</h2>
            <p className="text-xl text-gray-600">Tudo que você precisa para sua transformação fitness em um só lugar</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <PromoBanner
              title="Treinos Inteligentes"
              description="IA cria treinos únicos para seus objetivos, nível e equipamentos disponíveis. Milhares de exercícios na base."
              href={`/${locale}/programs`}
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
              href={`/${locale}/programs`}
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
                  <Dumbbell className="h-8 w-8 text-white" />
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
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Treinos adaptados ao seu nível</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Progressão automática</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>500+ exercícios disponíveis</span>
                </div>
              </div>
              <Link 
                href={`/${locale}/treinos`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                <Dumbbell className="w-5 h-5" />
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

      {/* Programs Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Grid3x3 className="h-8 w-8 text-white" />
                </div>
                <span className="text-6xl">📋</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Programas Estruturados
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Programas completos de 4 a 12 semanas, desenvolvidos por especialistas. 
                Periodização inteligente para máximos resultados.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Programas para todos os níveis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Acompanhamento de progresso</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Resultados comprovados</span>
                </div>
              </div>
              <Link 
                href={`/${locale}/programs`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-colors text-lg"
              >
                <Grid3x3 className="w-5 h-5" />
                Ver programas disponíveis
              </Link>
            </div>
            <div className="lg:order-1">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">💚 Iniciante</h4>
                  <p className="text-green-700">Para quem está começando</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">🔵 Intermediário</h4>
                  <p className="text-blue-700">Para quem já tem experiência</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">🟣 Avançado</h4>
                  <p className="text-purple-700">Para atletas experientes</p>
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
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <span className="text-6xl">🔧</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Ferramentas de Análise
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
                    { pos: "🥇", name: "Ana Silva", points: "2,580", specialty: "Personal Trainer" },
                    { pos: "🥈", name: "Carlos Lima", points: "2,450", specialty: "Nutricionista" },
                    { pos: "🥉", name: "Maria Costa", points: "2,380", specialty: "Fisioterapeuta" }
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
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <span className="text-6xl">👑</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                Experiência Premium
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              Transformações reais de pessoas reais
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 50.000 brasileiros já alcançaram seus objetivos com a Muscle Levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
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
            <Button size="large" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href={`/${locale}/tools`}>
                <Heart className="mr-2 h-5 w-5" />
                Começar análise gratuita
              </Link>
            </Button>
            <Button variant="outline" size="large" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10" asChild>
              <Link href={`/${locale}/about`}>
                Conheça nossa história
              </Link>
            </Button>
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
