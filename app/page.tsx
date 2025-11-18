"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Componente das partículas animadas (client-side only)
const AnimatedParticles = () => {
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    // Gerar partículas apenas no cliente para evitar erro de hidratação
    const newParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${2 + Math.random() * 2}s`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-orange-500 rounded-full animate-pulse"
          style={particle}
        />
      ))}
    </div>
  );
};

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "EVOLUA",
      subtitle: "SEM LIMITES",
      description: "A plataforma fitness mais completa do Brasil. Treinos profissionais, gamificação e resultados reais.",
      cta: "COMEÇAR AGORA",
      image: "🏋️‍♂️"
    },
    {
      title: "TREINO IA",
      subtitle: "INTELIGENTE",
      description: "Inteligência artificial que adapta seus treinos baseado no seu progresso e objetivos únicos.",
      cta: "EXPERIMENTAR IA",
      image: "🤖"
    },
    {
      title: "GANHE PRÊMIOS",
      subtitle: "FITPOINTS",
      description: "Ganhe pontos treinando e troque por produtos, suplementos e muito mais na nossa loja exclusiva.",
      cta: "VER LOJA",
      image: "🏆"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [banners.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Modern Professional Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/98 backdrop-blur-lg shadow-2xl border-b-2 border-orange-500/20' 
          : 'bg-black/95 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section - Expandido */}
            <a href="/" className="flex items-center gap-3 group z-50 hover:bg-orange-500/10 p-3 rounded-2xl transition-all duration-300">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-all duration-300 shadow-xl animate-pulse">
                  💪
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-md"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-orange-700 transition-all duration-300 tracking-wider whitespace-nowrap">
                  MuscleLevel
                </h1>
                <p className="text-xs text-orange-300/80 font-bold tracking-widest">FITNESS PLATFORM</p>
              </div>
            </a>

            {/* Navigation Menu - Dropdown Style */}
            <div className="hidden lg:block relative">
              <button 
                className="nav-dropdown-trigger flex items-center gap-3 px-6 py-3 rounded-xl bg-orange-500/10 border-2 border-orange-500/30 text-orange-400 font-bold hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                onMouseEnter={(e) => {
                  const dropdown = e.currentTarget.parentElement?.querySelector('.nav-dropdown-menu');
                  if (dropdown) {
                    (dropdown as HTMLElement).style.opacity = '1';
                    (dropdown as HTMLElement).style.visibility = 'visible';
                    (dropdown as HTMLElement).style.transform = 'translateY(0)';
                  }
                }}
              >
                <span className="text-xl">🚀</span>
                <span className="whitespace-nowrap">Explore Nossa Plataforma</span>
                <span className="text-sm opacity-70">▼</span>
              </button>

              {/* Dropdown Menu */}
              <div 
                className="nav-dropdown-menu absolute top-full right-0 mt-2 bg-black/98 backdrop-blur-lg border-2 border-orange-500/40 rounded-2xl shadow-2xl p-3 min-w-80 opacity-0 invisible transform translate-y-[-10px] transition-all duration-300 z-50 bg-gradient-to-b from-black/98 to-gray-900/98"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '1';
                  (e.currentTarget as HTMLElement).style.visibility = 'visible';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '0';
                  (e.currentTarget as HTMLElement).style.visibility = 'hidden';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-10px)';
                }}
              >
                {[
                  { label: "Treinos", href: "/treinos", icon: "💪", desc: "Sistema completo de exercícios", active: false },
                  { label: "Programas", href: "/programas", icon: "📊", desc: "Planos estruturados", active: false },
                  { label: "Ranking", href: "/gamification", icon: "🏆", desc: "Classificações e conquistas", active: false },
                  { label: "Loja FitPoints", href: "/loja", icon: "🛍️", desc: "Troque pontos por prêmios", active: false }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl text-white hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-300 group border-l-4 border-transparent hover:border-orange-500 bg-white/5 hover:bg-white/10"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div>
                      <div className="font-bold text-base">{item.label}</div>
                      <div className="text-sm opacity-70">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              {/* FitPoints Display */}
              <div className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm px-4 py-3 rounded-2xl border-2 border-orange-500/30">
                <span className="text-xl animate-spin-slow">⭐</span>
                <div className="flex flex-col">
                  <div className="font-black text-orange-400 text-lg">1,250</div>
                  <div className="text-xs text-orange-300/80 font-bold">FitPoints</div>
                </div>
              </div>
              
              <a
                href="/premium"
                className="hidden sm:flex bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transform transition-all duration-300 items-center gap-2"
              >
                <span className="text-xl">👑</span>
                PREMIUM
              </a>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden bg-orange-500/20 border-2 border-orange-500/40 text-orange-400 p-3 rounded-xl hover:bg-orange-500/30 hover:border-orange-500/60 transition-all duration-300"
              >
                <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-lg border-b-2 border-orange-500/20 shadow-2xl">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-2">
                {[
                  { label: "Treinos", href: "/treinos", icon: "💪", desc: "Sistema completo" },
                  { label: "Programas", href: "/programas", icon: "📊", desc: "Planos estruturados" },
                  { label: "Ranking", href: "/gamification", icon: "🏆", desc: "Classificações" },
                  { label: "Loja FitPoints", href: "/loja", icon: "🛍️", desc: "Troque pontos" }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 text-white/90 hover:text-orange-400 font-semibold p-4 rounded-xl hover:bg-orange-500/10 transition-all duration-300 border-l-4 border-transparent hover:border-orange-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-bold">{item.label}</div>
                      <div className="text-sm opacity-70">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner Academia */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        {/* Background with Gym Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Gym Equipment Silhouettes */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 text-9xl transform rotate-12">🏋️‍♂️</div>
            <div className="absolute top-3/4 right-1/4 text-7xl transform -rotate-12">💪</div>
            <div className="absolute bottom-1/4 left-1/3 text-6xl opacity-50">⚡</div>
            <div className="absolute top-1/2 right-1/3 text-8xl opacity-30 transform rotate-45">🎯</div>
          </div>
          
          {/* Dynamic Grid Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20"></div>
          
          {/* Animated Particles */}
          <AnimatedParticles />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {/* Rotating Banner Content */}
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-orange-500/20 backdrop-blur-sm text-orange-300 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-orange-500/30">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                <span>ACADEMIA DIGITAL PREMIUM</span>
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              </div>
            </div>

            {/* Dynamic Banner Text */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                    <span className="block text-white">{banners[currentBanner].title}</span>
                    <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                      {banners[currentBanner].subtitle}
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                    {banners[currentBanner].description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <a 
                      href="/treinos" 
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-full font-black text-xl tracking-wider hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <span className="text-2xl">{banners[currentBanner].image}</span>
                      {banners[currentBanner].cta}
                    </a>
                    <a 
                      href="/premium" 
                      className="border-2 border-white/30 text-white px-12 py-6 rounded-full font-bold text-xl tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                    >
                      👑 VER PLANOS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Indicators */}
            <div className="flex justify-center gap-3 mb-12">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentBanner 
                      ? 'w-12 bg-orange-500' 
                      : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { icon: "🎯", title: "Treinos IA", desc: "Personalizados" },
                { icon: "🏆", title: "Gamificação", desc: "FitPoints" },
                { icon: "🤖", title: "AI Chat", desc: "Especialistas" },
                { icon: "🛒", title: "Loja", desc: "Recompensas" }
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats & Features Combined */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          {/* Platform Stats */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
              A PLATAFORMA MAIS <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">COMPLETA</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto">
              Números que comprovam nossa excelência e o sucesso de nossa comunidade fitness
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: "50K+", label: "Usuários Ativos", icon: "👥", color: "from-blue-500 to-cyan-500" },
                { number: "1M+", label: "Treinos Realizados", icon: "💪", color: "from-orange-500 to-red-500" },
                { number: "25M+", label: "Calorias Queimadas", icon: "🔥", color: "from-red-500 to-pink-500" },
                { number: "45+", label: "Países Atendidos", icon: "🌎", color: "from-green-500 to-teal-500" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105">
                    <div className={`text-5xl mb-4 p-4 rounded-2xl bg-gradient-to-r ${stat.color} w-20 h-20 flex items-center justify-center mx-auto`}>
                      <span className="text-white">{stat.icon}</span>
                    </div>
                    <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Treinos Inteligentes",
                description: "IA avançada que adapta cada exercício ao seu nível, objetivos e progresso atual. Nunca mais faça um treino genérico.",
                features: ["Personalização total", "Adaptação automática", "Progressão inteligente"],
                highlight: "🚀 IA Premium"
              },
              {
                icon: "🏆", 
                title: "Sistema FitPoints",
                description: "Ganhe pontos reais treinando e troque por produtos, suplementos e equipamentos na nossa loja exclusiva.",
                features: ["Recompensas reais", "Loja exclusiva", "Produtos premium"],
                highlight: "💰 Economia Real"
              },
              {
                icon: "🤖",
                title: "Especialistas AI",
                description: "Acesso 24/7 a especialistas virtuais em nutrição, treino, psicologia esportiva e muito mais.",
                features: ["Suporte 24/7", "Múltiplas especialidades", "Respostas instantâneas"],
                highlight: "👨‍⚕️ Expert Level"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:scale-105 h-full">
                  {/* Feature Badge */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {feature.highlight}
                  </div>
                  
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-black mb-6">
            HISTÓRIAS DE SUCESSO
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Conheça pessoas reais que transformaram suas vidas com nossa plataforma
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Carlos Silva",
                role: "Personal Trainer",
                result: "-15kg em 3 meses",
                quote: "Nunca vi uma plataforma tão completa. Meus alunos adoram!",
                avatar: "👨‍💼",
                badge: "CREF 12345"
              },
              {
                name: "Maria Santos", 
                role: "Atleta Amadora",
                result: "+25% força",
                quote: "O sistema de gamificação me motivou como nunca antes!",
                avatar: "🏃‍♀️",
                badge: "Top 1%"
              },
              {
                name: "João Costa",
                role: "Executivo",
                result: "100% consistência",
                quote: "Consegui manter a rotina mesmo com agenda corrida.",
                avatar: "💼",
                badge: "Premium"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-6xl mb-4">{story.avatar}</div>
                <div className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                  {story.badge}
                </div>
                <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                <p className="text-white/80 text-sm mb-4">{story.role}</p>
                <div className="text-2xl font-black text-yellow-300 mb-4">{story.result}</div>
                <blockquote className="italic text-white/90">"{story.quote}"</blockquote>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a 
              href="/treinos" 
              className="bg-white text-orange-500 px-12 py-6 rounded-full font-black text-xl tracking-wider hover:shadow-2xl hover:scale-105 transform transition-all duration-300 inline-flex items-center gap-3"
            >
              <span className="text-2xl">🚀</span>
              COMECE SUA TRANSFORMAÇÃO
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Platform Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-gray-900 dark:text-white mb-8">
              PLATAFORMA <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">COMPLETA</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Descubra todos os recursos que fazem do MuscleLevel a escolha #1 de profissionais e atletas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Treinos Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-12 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl">
                  💪
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white">TREINOS INTELIGENTES</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">Powered by AI</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "🎯 Personalização Total",
                  "📊 Análise de Performance",
                  "⚡ Adaptação Automática", 
                  "📈 Progressão Inteligente",
                  "🏆 Metas Dinâmicas",
                  "📱 Sincronização Devices"
                ].map((feature, i) => (
                  <div key={i} className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4 text-center font-semibold text-gray-800 dark:text-gray-200">
                    {feature}
                  </div>
                ))}
              </div>
              
              <a href="/treinos" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 text-center block">
                EXPLORAR TREINOS →
              </a>
            </div>

            {/* Gamificação Section */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-12 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl">
                  🏆
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white">GAMIFICAÇÃO</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-bold">FitPoints System</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "🎮 Níveis e XP",
                  "🏅 Badges Exclusivos",
                  "💰 FitPoints Reais",
                  "🛒 Loja Premium",
                  "🥇 Ranking Global",
                  "🎁 Recompensas Diárias"
                ].map((feature, i) => (
                  <div key={i} className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4 text-center font-semibold text-gray-800 dark:text-gray-200">
                    {feature}
                  </div>
                ))}
              </div>
              
              <a href="/gamification" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 text-center block">
                VER RANKING →
              </a>
            </div>
          </div>

          {/* AI Chat Section */}
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-12 border border-green-200 dark:border-green-800 mb-20">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">
                🤖
              </div>
              <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4">AI ESPECIALISTAS 24/7</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400">Converse com especialistas virtuais em tempo real</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "🥗", name: "Nutricionista AI", specialty: "Dietas e Suplementação" },
                { icon: "💪", name: "Personal AI", specialty: "Treinos e Técnicas" },
                { icon: "🧠", name: "Psicólogo AI", specialty: "Motivação e Mental" },
                { icon: "⚕️", name: "Fisioterapeuta AI", specialty: "Lesões e Recuperação" },
                { icon: "🏃", name: "Coach AI", specialty: "Performance e Metas" },
                { icon: "📊", name: "Analista AI", specialty: "Dados e Métricas" }
              ].map((ai, i) => (
                <div key={i} className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
                  <div className="text-4xl mb-4">{ai.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{ai.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{ai.specialty}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/ai-chat" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transform transition-all duration-300 inline-flex items-center gap-3">
                <span className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
                CONVERSAR AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Statistics */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-6">
              NÚMEROS QUE <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">IMPRESSIONAM</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Resultados reais de uma comunidade que não para de crescer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50,000+", label: "Usuários Ativos", icon: "👥" },
              { number: "2M+", label: "Treinos Realizados", icon: "💪" },
              { number: "500M+", label: "Calorias Queimadas", icon: "🔥" },
              { number: "89%", label: "Taxa de Sucesso", icon: "🎯" },
              { number: "4.9/5", label: "Avaliação Média", icon: "⭐" },
              { number: "45+", label: "Países Atendidos", icon: "🌎" },
              { number: "24/7", label: "Suporte Disponível", icon: "🆘" },
              { number: "99.9%", label: "Uptime Garantido", icon: "⚡" }
            ].map((stat, i) => (
              <div key={i} className="text-center group hover:scale-110 transform transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-4xl font-black text-orange-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-12 border border-orange-500/30 text-center">
            <h3 className="text-4xl font-black mb-6">JUNTE-SE À REVOLUÇÃO FITNESS</h3>
            <p className="text-xl mb-8 opacity-90">Mais de 1000 pessoas se cadastram por dia!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/treinos" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300">
                COMEÇAR GRÁTIS
              </a>
              <a href="/premium" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                VER PREMIUM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features & Transformations */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-black text-gray-900 dark:text-white mb-8">
              RECURSOS <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">EXCLUSIVOS</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Tecnologia de ponta que revoluciona sua experiência fitness
            </p>
          </div>

          {/* Advanced Features Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {[
              {
                icon: "🧠",
                title: "IA NEURAL AVANÇADA",
                description: "Sistema de aprendizado que evolui com você, analisando mais de 50 variáveis para otimizar cada treino.",
                features: ["Deep Learning", "Análise Preditiva", "Adaptação Contínua"],
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "📊",
                title: "ANALYTICS PRO",
                description: "Relatórios detalhados com insights profissionais sobre seu progresso, pontos fracos e oportunidades.",
                features: ["Métricas Avançadas", "Comparações", "Previsões"],
                color: "from-green-500 to-teal-500"
              },
              {
                icon: "🎯",
                title: "PRECISION TRAINING",
                description: "Treinos com precisão científica baseados em biomecânica, fisiologia e seu perfil genético.",
                features: ["Biomecânica", "Periodização", "Recuperação"],
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, i) => (
              <div key={i} className={`bg-gradient-to-br ${feature.color} rounded-3xl p-1`}>
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 h-full hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{feature.icon}</div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-center leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.features.map((item, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Before/After Transformations */}
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-5xl font-black mb-6">
                TRANSFORMAÇÕES <span className="text-orange-400">REAIS</span>
              </h3>
              <p className="text-xl opacity-90">Resultados que falam por si só</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Lucas M.",
                  age: "28 anos",
                  period: "6 meses",
                  before: "85kg - 18% BF",
                  after: "78kg - 12% BF",
                  achievement: "Perdeu 7kg e ganhou massa muscular",
                  quote: "Nunca pensei que seria possível!"
                },
                {
                  name: "Ana P.",
                  age: "32 anos",
                  period: "4 meses",
                  before: "65kg - Sedentária",
                  after: "68kg - Atleta",
                  achievement: "Ganhou 3kg de massa magra",
                  quote: "Me sinto uma nova pessoa!"
                },
                {
                  name: "Roberto S.",
                  age: "45 anos",
                  period: "8 meses",
                  before: "92kg - 22% BF",
                  after: "81kg - 15% BF",
                  achievement: "Perdeu 11kg e melhorou saúde",
                  quote: "Minha vida mudou completamente!"
                }
              ].map((transformation, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                      🏆
                    </div>
                    <h4 className="text-xl font-bold">{transformation.name}</h4>
                    <p className="text-orange-300">{transformation.age} • {transformation.period}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <p className="text-gray-400">ANTES</p>
                      <p className="font-bold">{transformation.before}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400">DEPOIS</p>
                      <p className="font-bold text-green-400">{transformation.after}</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-orange-400 font-bold mb-2">{transformation.achievement}</p>
                    <blockquote className="italic text-sm opacity-90">"{transformation.quote}"</blockquote>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/treinos" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transform transition-all duration-300 inline-flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                COMEÇAR MINHA TRANSFORMAÇÃO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips & Blog Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/10 dark:via-red-900/10 dark:to-pink-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-gray-900 dark:text-white mb-6">
              DICAS <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">PROFISSIONAIS</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Conteúdo exclusivo dos nossos especialistas para acelerar seus resultados
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                category: "NUTRIÇÃO",
                title: "Os 10 Alimentos Que Aceleram o Metabolismo",
                author: "Dra. Nutricionista IA",
                time: "5 min read",
                preview: "Descubra os superalimentos que vão turbinar sua queima de gordura de forma natural e científica.",
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "TREINO",
                title: "Técnica Avançada: Drop Sets Científicos", 
                author: "Prof. Personal IA",
                time: "7 min read",
                preview: "Método revolucionário para quebrar platôs e acelerar ganhos de massa muscular em 30% menos tempo.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "RECUPERAÇÃO",
                title: "Protocolo de Sono para Atletas de Elite",
                author: "Dr. Sono IA",
                time: "6 min read",
                preview: "Como otimizar seu sono para triplicar a recuperação muscular e melhorar performance.",
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "MINDSET",
                title: "Psicologia da Transformação Corporal",
                author: "Psic. Esportiva IA", 
                time: "8 min read",
                preview: "Técnicas mentais usadas por atletas profissionais para manter disciplina e motivação.",
                color: "from-orange-500 to-red-500"
              }
            ].map((article, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className={`inline-block bg-gradient-to-r ${article.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                  {article.category}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {article.preview}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${article.color} flex items-center justify-center text-white text-sm`}>
                      🤖
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{article.author}</p>
                      <p className="text-gray-500 text-xs">{article.time}</p>
                    </div>
                  </div>
                  
                  <button className={`bg-gradient-to-r ${article.color} text-white px-6 py-2 rounded-full font-bold hover:scale-105 transform transition-all duration-300`}>
                    Ler →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-gray-900 dark:text-white mb-6">
              PLANOS <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">PREMIUM</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Escolha o plano perfeito para seus objetivos de fitness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "BÁSICO",
                price: "R$ 0",
                period: "Grátis para sempre",
                features: [
                  "✅ Treinos básicos",
                  "✅ Gamificação limitada", 
                  "✅ Estatísticas básicas",
                  "❌ AI Especialistas",
                  "❌ Treinos personalizados",
                  "❌ Loja FitPoints"
                ],
                color: "from-gray-500 to-gray-600",
                popular: false
              },
              {
                name: "PRO",
                price: "R$ 29,90",
                period: "por mês",
                features: [
                  "✅ Todos os treinos",
                  "✅ Gamificação completa",
                  "✅ AI Especialistas básico",
                  "✅ Treinos personalizados",
                  "✅ Loja FitPoints",
                  "✅ Suporte prioritário"
                ],
                color: "from-orange-500 to-red-500",
                popular: true
              },
              {
                name: "ELITE",
                price: "R$ 49,90",
                period: "por mês",
                features: [
                  "✅ Tudo do Pro +",
                  "✅ AI Especialistas 24/7",
                  "✅ Análises avançadas",
                  "✅ Coaching pessoal",
                  "✅ Acesso antecipado",
                  "✅ Comunidade VIP"
                ],
                color: "from-purple-500 to-blue-500",
                popular: false
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 ${plan.popular ? 'border-orange-500 scale-105' : 'border-gray-200 dark:border-gray-700'} hover:scale-105 transform transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-black text-gray-900 dark:text-white">{plan.price}</span>
                    {plan.price !== "R$ 0" && <span className="text-gray-600 dark:text-gray-400">/{plan.period.split(' ')[1]}</span>}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-gray-700 dark:text-gray-300 flex items-center gap-3">
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="/premium" 
                  className={`w-full bg-gradient-to-r ${plan.color} text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 text-center block`}
                >
                  {plan.price === "R$ 0" ? "COMEÇAR GRÁTIS" : "ASSINAR AGORA"}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              🔒 Pagamento seguro • 📱 Cancele quando quiser • 🎁 7 dias grátis no Pro
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-black mb-8">
            COMUNIDADE <span className="text-yellow-400">GLOBAL</span>
          </h2>
          
          <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
            Conecte-se com milhares de pessoas compartilhando a mesma jornada de transformação
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: "🌎", title: "45+ Países", desc: "Comunidade global ativa" },
              { icon: "💬", title: "Fórum 24/7", desc: "Discussões e dicas" },
              { icon: "🏆", title: "Desafios", desc: "Competições mensais" },
              { icon: "📱", title: "App Mobile", desc: "Leve onde for" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-black mb-6">BAIXE NOSSO APP</h3>
            <p className="text-lg mb-8 opacity-90">
              Disponível para iOS e Android. Sincronize seus treinos, acompanhe progresso e conecte-se com a comunidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transform transition-all duration-300 flex items-center gap-3">
                📱 App Store
              </button>
              <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transform transition-all duration-300 flex items-center gap-3">
                🤖 Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Professional Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5"></div>
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Top Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">
                💪
              </div>
              <div>
                <h3 className="text-5xl font-black tracking-wider">
                  M U S C L E <span className="text-orange-500">L E V E L</span>
                </h3>
                <p className="text-gray-400 font-bold tracking-widest">F I T N E S S   P L A T F O R M</p>
              </div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A revolução fitness está <span className="text-orange-400 font-bold">transformando vidas</span> ao redor do mundo. 
              Junte-se aos <span className="text-green-400 font-bold">50.000+ membros</span> que já alcançaram seus objetivos.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Platform Links */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>🚀</span> PLATAFORMA
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Treinos Inteligentes", href: "/treinos", icon: "🎯" },
                  { label: "Loja FitPoints", href: "/loja", icon: "🛒" },
                  { label: "Sistema de Ranking", href: "/gamification", icon: "🏆" },
                  { label: "AI Especialistas", href: "/ai-chat", icon: "🤖" },
                  { label: "Analytics Pro", href: "/analytics", icon: "📊" },
                  { label: "Comunidade", href: "/community", icon: "👥" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                      <span className="group-hover:scale-125 transition-transform text-lg">{link.icon}</span>
                      <span className="font-semibold">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium & Support */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>👑</span> PREMIUM
              </h4>
              <ul className="space-y-4 mb-8">
                {[
                  { label: "Planos Premium", href: "/premium", icon: "💎" },
                  { label: "Suporte VIP 24/7", href: "/support", icon: "🎧" },
                  { label: "Treinos Exclusivos", href: "/exclusive", icon: "⭐" },
                  { label: "Personal AI", href: "/personal-ai", icon: "🧠" },
                  { label: "Análises Avançadas", href: "/advanced", icon: "📈" },
                  { label: "Coaching Elite", href: "/coaching", icon: "🏅" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                      <span className="group-hover:scale-125 transition-transform text-lg">{link.icon}</span>
                      <span className="font-semibold">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>📚</span> RECURSOS
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Blog Fitness", href: "/blog", icon: "📝" },
                  { label: "Guias Gratuitos", href: "/guides", icon: "📖" },
                  { label: "Calculadoras", href: "/calculators", icon: "🧮" },
                  { label: "Exercícios Database", href: "/exercises", icon: "💪" },
                  { label: "Nutrição", href: "/nutrition", icon: "🥗" },
                  { label: "API Developers", href: "/api", icon: "⚙️" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                      <span className="group-hover:scale-125 transition-transform text-lg">{link.icon}</span>
                      <span className="font-semibold">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>🏢</span> EMPRESA
              </h4>
              <ul className="space-y-4 mb-8">
                {[
                  { label: "Sobre Nós", href: "/about", icon: "ℹ️" },
                  { label: "Carreiras", href: "/careers", icon: "💼" },
                  { label: "Imprensa", href: "/press", icon: "📰" },
                  { label: "Investidores", href: "/investors", icon: "💰" },
                  { label: "Parcerias", href: "/partners", icon: "🤝" },
                  { label: "Contato", href: "/contact", icon: "📧" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                      <span className="group-hover:scale-125 transition-transform text-lg">{link.icon}</span>
                      <span className="font-semibold">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>🌐</span> CONECTE-SE
              </h4>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl p-6 border border-orange-500/30 mb-8 backdrop-blur-sm">
                <h5 className="font-bold text-orange-400 mb-4 text-lg">CONTATO DIRETO</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📧</span>
                    <span className="font-semibold">suporte@musclelevel.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📱</span>
                    <span className="font-semibold">+55 (11) 98765-4321</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏢</span>
                    <span className="font-semibold">São Paulo, Brasil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⏰</span>
                    <span className="font-semibold">24/7 Suporte</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-bold text-orange-400 mb-4 text-lg">REDES SOCIAIS</h5>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: "📘", name: "Facebook", bg: "from-blue-600 to-blue-700" },
                    { icon: "📸", name: "Instagram", bg: "from-pink-500 to-purple-600" },
                    { icon: "🐦", name: "Twitter", bg: "from-blue-400 to-blue-500" },
                    { icon: "📺", name: "YouTube", bg: "from-red-500 to-red-600" },
                    { icon: "💼", name: "LinkedIn", bg: "from-blue-700 to-blue-800" },
                    { icon: "💬", name: "Discord", bg: "from-indigo-500 to-purple-600" }
                  ].map((social) => (
                    <button 
                      key={social.name} 
                      className={`w-14 h-14 bg-gradient-to-br ${social.bg} rounded-2xl flex items-center justify-center text-2xl text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                      title={social.name}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-black/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-gray-400 text-center lg:text-left">
                <p className="font-semibold">© 2024 MuscleLevel Technology Ltd.</p>
                <p className="text-sm mt-1">Todos os direitos reservados mundialmente.</p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 font-semibold">🚀 Transformando vidas através da tecnologia fitness</p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold">
                  Privacidade
                </a>
                <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold">
                  Termos de Uso
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Navigation */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex flex-col gap-3">
          {/* Quick Access Buttons */}
          <a
            href="/treinos"
            className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300"
            title="Iniciar Treino"
          >
            💪
          </a>
          <a
            href="/ai-chat"
            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 relative"
            title="AI Chat"
          >
            🤖
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          </a>
          <a
            href="/premium"
            className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300"
            title="Premium"
          >
            👑
          </a>
        </div>
      </div>

      {/* CSS Styles for Header */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        @media (max-width: 768px) {
          .nav-dropdown-trigger {
            min-width: 200px !important;
            padding: 0.75rem 1rem !important;
            font-size: 0.9rem !important;
          }
          
          .nav-dropdown-menu {
            min-width: 280px !important;
            right: -20px !important;
          }
        }
        
        @media (max-width: 480px) {
          .nav-dropdown-trigger span:first-child {
            display: none !important;
          }
          
          .nav-dropdown-trigger {
            min-width: 150px !important;
            padding: 0.6rem 0.8rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>

    </div>
  );
}
