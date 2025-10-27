import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getServerUrl } from "@/shared/lib/server-url";
import { SiteConfig } from "@/shared/config/site-config";
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
  Star
} from "lucide-react";

import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title = "Transforme seu corpo com treinos personalizados";
  const description = "Plataforma brasileira de fitness com treinos personalizados, análise corporal avançada e acompanhamento de resultados. Comece sua jornada fitness hoje mesmo! 💪";

  return {
    title: `${title} | ${SiteConfig.title}`,
    description,
    keywords: [
      "treino personalizado",
      "fitness brasil", 
      "musculação",
      "academia online",
      "análise corporal",
      "personal trainer",
      "muscle levels",
      "exercícios personalizados"
    ],
    openGraph: {
      title: `${title} | ${SiteConfig.title}`,
      description,
      images: [
        {
          url: `${getServerUrl()}/images/default-og-image_${locale}.jpg`,
          width: SiteConfig.seo.ogImage.width,
          height: SiteConfig.seo.ogImage.height,
          alt: title,
        },
      ],
    },
    twitter: {
      title: `${title} | ${SiteConfig.title}`,
      description,
      images: [`${getServerUrl()}/images/default-og-image_${locale}.jpg`],
    },
  };
}

export default async function HomePage() {
  const features = [
    {
      icon: Target,
      title: "Treinos Personalizados",
      description: "Algoritmo inteligente cria treinos únicos baseados no seu perfil, objetivos e equipamentos disponíveis.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento de Resultados",
      description: "Monitore sua evolução com gráficos detalhados, métricas de performance e análise de progresso.",
    },
    {
      icon: Heart,
      title: "Análise Corporal Completa",
      description: "Avaliação abrangente de composição corporal, IMC, taxa metabólica e recomendações nutricionais.",
    },
    {
      icon: Calendar,
      title: "Planejamento Inteligente",
      description: "Periodização automática com ajustes baseados na sua disponibilidade e nível de condicionamento.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Usuários Ativos" },
    { number: "1M+", label: "Treinos Realizados" },
    { number: "500+", label: "Exercícios Disponíveis" },
    { number: "98%", label: "Satisfação dos Usuários" },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "Em 3 meses consegui resultados que nunca imaginei! Os treinos são perfeitos para minha rotina corrida.",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Estudante",
      content: "A análise corporal me ajudou a entender melhor meu corpo. Os treinos são desafiadores e eficientes.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Personal Trainer",
      content: "Uso a plataforma para complementar meu trabalho. A qualidade dos exercícios e planejamento é excepcional.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:py-32 text-center">
        <div className="max-w-6xl mx-auto">
          <Badge variant="outline" className="mb-6 text-sm font-medium">
            🚀 Novo: IA para treinos personalizados
          </Badge>
          
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-[#6AD0F8] to-primary bg-clip-text text-transparent">
            Transforme seu corpo com a Muscle Levels 💪
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            A plataforma brasileira mais completa para fitness. Treinos personalizados, análise corporal avançada 
            e acompanhamento de resultados em um só lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="extralarge" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-[#6AD0F8] hover:from-primary/90 hover:to-[#6AD0F8]/90">
              <Zap className="mr-2 h-5 w-5" />
              Comece sua análise agora
            </Button>
            <Button variant="outline" size="extralarge" className="text-lg px-8 py-4" asChild>
              <Link href="/programs">
                <Dumbbell className="mr-2 h-5 w-5" />
                Monte seu treino personalizado
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Gratuito para começar
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Sem equipamentos necessários
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Resultados em 30 dias
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Por que escolher a Muscle Levels?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa tecnologia avançada combina ciência do exercício com inteligência artificial 
              para criar a experiência de fitness mais eficiente do mercado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Mais de 50.000 pessoas já transformaram seus corpos com a Muscle Levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a milhares de pessoas que já estão conquistando seus objetivos com a Muscle Levels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="extralarge" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-[#6AD0F8] hover:from-primary/90 hover:to-[#6AD0F8]/90">
              <Award className="mr-2 h-5 w-5" />
              Começar gratuitamente
            </Button>
            <Button variant="outline" size="extralarge" className="text-lg px-8 py-4" asChild>
              <Link href="/about">
                Saiba mais sobre nós
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Sem compromisso • Cancele quando quiser • Suporte 24/7
          </p>
        </div>
      </section>
    </div>
  );
}
