"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const stats = [
    { number: "350K+", label: "Usuários Ativos" },
    { number: "5M+", label: "Treinos Realizados" },
    { number: "2500+", label: "Exercícios Validados" },
    { number: "99.2%", label: "Taxa de Satisfação" },
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Empresário, 34 anos",
      image: "👨‍💼",
      rating: 5,
      text: "Perdi 15kg em 6 meses! O sistema de gamificação me motivou todos os dias. As análises corporais são incríveis!",
      achievement: "Perdeu 15kg • Ganhou 8kg de massa muscular"
    },
    {
      name: "Ana Silva",
      role: "Professora, 28 anos", 
      image: "👩‍🏫",
      rating: 5,
      text: "A IA personalizada criou treinos perfeitos para minha rotina. Nunca me senti tão forte e confiante!",
      achievement: "Nível 47 • 280 dias consecutivos"
    },
    {
      name: "Roberto Santos",
      role: "Desenvolvedor, 31 anos",
      image: "👨‍💻",
      rating: 5,
      text: "Como dev, adorei a tecnologia por trás. A análise 3D é revolucionária. Recomendo 100%!",
      achievement: "Beta Tester • 500+ treinos completos"
    },
    {
      name: "Mariana Costa",
      role: "Médica, 29 anos",
      image: "👩‍⚕️", 
      rating: 5,
      text: "Como médica, posso afirmar: a metodologia é cientificamente sólida. Resultados comprovados!",
      achievement: "Embaixadora Premium • Top 1% usuários"
    }
  ];

  const features = [
    {
      icon: "🤖",
      title: "IA Personalizada",
      description: "Algoritmos inteligentes criam treinos únicos baseados no seu perfil, objetivos e progresso em tempo real.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: "📊",
      title: "Análise Corporal 3D",
      description: "Escaneamento corporal avançado com medições precisas e acompanhamento da evolução muscular.",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: "🎮",
      title: "Sistema de Gamificação",
      description: "Ganhe pontos, desbloqueie conquistas e compete com amigos. Fitness nunca foi tão divertido!",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: "👨‍⚕️",
      title: "Suporte Premium",
      description: "Acesso direto a educadores físicos certificados e nutricionistas especializados 24/7.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: "📱",
      title: "App Mobile",
      description: "Leve seus treinos para qualquer lugar. Sincronização em tempo real entre todos os dispositivos.",
      color: "from-indigo-500 to-blue-400"
    },
    {
      icon: "🏆",
      title: "Competições",
      description: "Participe de desafios mensais, torneios e competitions com prêmios incríveis!",
      color: "from-yellow-500 to-orange-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem('muscleLevel_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.6; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 1; 
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .testimonial-enter {
          animation: slideIn 0.5s ease-out;
        }
        
        button:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 20px 60px rgba(0, 245, 255, 0.6) !important;
        }
      `}</style>
      
      <div className="min-h-screen" style={{ 
        background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 25%, #2d1b69 50%, #1a1f3a 75%, #0a0e1a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite'
        }}></div>

        {/* Premium Header */}
        <header style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 50, 
          background: 'rgba(10, 14, 26, 0.95)', 
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 245, 255, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 8px 25px rgba(0, 245, 255, 0.3)'
                }}>💪</div>
                <div>
                  <h1 style={{ 
                    margin: 0, 
                    fontSize: '1.8rem', 
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em'
                  }}>MuscleLevel</h1>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.8rem', 
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: '500' 
                  }}>Fitness Academy</p>
                </div>
              </div>
              
              <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="/" style={{ 
                  color: '#fff', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}>Início</a>
                <a href="/sobre" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s ease'
                }}>Sobre</a>
                <a href="/ferramentas" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s ease'
                }}>Ferramentas</a>
                <a href="/gamificacao" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s ease'
                }}>Gamificação</a>
                
                {isLoggedIn ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <a href="/treinos" style={{
                      background: 'linear-gradient(135deg, #00f5ff 0%, #0099cc 100%)',
                      color: '#000',
                      padding: '0.6rem 1.5rem',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span>🏠</span> Dashboard
                    </a>
                  </div>
                ) : (
                  <a href="/login" style={{
                    background: 'linear-gradient(135deg, #00f5ff 0%, #0099cc 100%)',
                    color: '#000',
                    padding: '0.8rem 2rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 8px 25px rgba(0, 245, 255, 0.3)'
                  }}>
                    <span>🔐</span> Login
                  </a>
                )}
              </nav>
            </div>
          </div>
        </header>

        {/* Promotional Banner */}
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '0',
          right: '0',
          background: 'linear-gradient(90deg, #ff6b35 0%, #f7931e 50%, #ff6b35 100%)',
          padding: '0.8rem 0',
          textAlign: 'center',
          zIndex: 49,
          boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
        }}>
          <div style={{ 
            color: '#fff', 
            fontWeight: '600',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <span>🎉</span>
            <span>OFERTA ESPECIAL: 50% OFF no Premium - Apenas hoje!</span>
            <span>🎉</span>
          </div>
        </div>

        {/* Hero Section Premium */}
        <section id="home" style={{ 
          position: 'relative', 
          padding: '12rem 2rem 6rem', 
          textAlign: 'center', 
          color: 'white',
          overflow: 'hidden',
          zIndex: 5,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Floating Elements */}
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '8%',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, transparent 100%)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '25%',
            right: '10%',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.25) 0%, transparent 100%)',
            borderRadius: '50%',
            animation: 'float 3s ease-in-out infinite 1.5s'
          }}></div>

          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3) 0%, transparent 100%)',
            borderRadius: '50%',
            animation: 'float 5s ease-in-out infinite 0.8s'
          }}></div>
          
          <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            {/* Premium Badge */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)',
              border: '1px solid rgba(0, 245, 255, 0.4)',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '3rem',
              boxShadow: '0 8px 32px rgba(0, 245, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>🚀</span> Novo: IA para treinos personalizados + Sistema de Gamificação
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: '900',
              margin: '0 0 1.5rem 0',
              lineHeight: '0.95',
              color: '#fff',
              letterSpacing: '-0.03em',
              textShadow: '0 4px 20px rgba(0, 245, 255, 0.3)'
            }}>
              Transforme seu corpo com a<br />
              <span style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 50%, #8a2be2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>
                MuscleLevel Academy
              </span>
              <span style={{ fontSize: '0.8em', marginLeft: '1rem' }}>💪</span>
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
              marginBottom: '3.5rem', 
              maxWidth: '64rem', 
              margin: '0 auto 3.5rem', 
              lineHeight: 1.7, 
              textShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              color: 'rgba(255, 255, 255, 0.85)'
            }}>
              A plataforma brasileira mais completa para fitness com{' '}
              <strong style={{ color: '#00f5ff', fontWeight: '600', textShadow: '0 2px 10px rgba(0, 245, 255, 0.5)' }}>Análise corporal 3D</strong>, 
              treinos com IA, sistema de gamificação e acompanhamento profissional.
            </p>
            
            {/* CTA Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              marginBottom: '4rem'
            }}>
              <a href="/login" style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #0099cc 100%)',
                color: '#000',
                border: 'none',
                padding: '1.2rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.15rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 10px 40px rgba(0, 245, 255, 0.4)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transform: 'translateY(0)',
                position: 'relative',
                overflow: 'hidden',
                textDecoration: 'none'
              }}>
                <span>👑</span> Começar Agora - GRÁTIS
              </a>
              
              <a href="/ferramentas" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '1.2rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.15rem',
                fontWeight: '600',
                cursor: 'pointer',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}>
                <span>⚡</span> Ver Ferramentas
              </a>
            </div>

            {/* Social Proof */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.95rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <div style={{ display: 'flex' }}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} style={{ color: '#FFD700', fontSize: '1.2rem' }}>⭐</span>
                ))}
              </div>
              <span><strong style={{ color: '#fff' }}>4.9/5</strong> • Mais de 350k usuários satisfeitos</span>
            </div>
          </div>
        </section>

        {/* Premium Stats */}
        <section style={{ 
          padding: '5rem 2rem', 
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '4rem',
            maxWidth: '900px',
            width: '100%',
            margin: '0 auto'
          }}>
            {stats.map((stat, index) => {
              const gradients = [
                'linear-gradient(135deg, #00f5ff 0%, #0099cc 100%)',
                'linear-gradient(135deg, #ff6b35 0%, #ff4757 100%)',
                'linear-gradient(135deg, #8a2be2 0%, #da70d6 100%)',
                'linear-gradient(135deg, #00f5ff 0%, #8a2be2 100%)'
              ];
              return (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: '900', 
                    background: gradients[index],
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: '1.1rem',
                    fontWeight: '500' 
                  }}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ 
          padding: '8rem 2rem', 
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              Recursos Revolucionários
            </h2>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: '1.3rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Tecnologia de ponta para maximizar seus resultados
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                background: `linear-gradient(135deg, ${feature.color.split(' ')[1]} 0.15, ${feature.color.split(' ')[3]} 0.05)`,
                border: `1px solid ${feature.color.split(' ')[1].replace('to-', 'rgba(')}0.3)`,
                borderRadius: '25px',
                padding: '3rem 2.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '1.5rem',
                  filter: `drop-shadow(0 4px 15px ${feature.color.split(' ')[1].replace('to-', 'rgba(')}0.3))`
                }}>{feature.icon}</div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.5rem', 
                  marginBottom: '1.5rem',
                  fontWeight: '700' 
                }}>{feature.title}</h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  lineHeight: '1.7',
                  fontSize: '1.05rem' 
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ 
          padding: '8rem 2rem', 
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}>
                O que nossos usuários dizem
              </h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: '1.3rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Histórias reais de transformação
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '25px',
              padding: '4rem 3rem',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div key={currentTestimonial} className="testimonial-enter">
                <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>
                  {testimonials[currentTestimonial].image}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                  {[1,2,3,4,5].map(i => (
                    <span key={i} style={{ color: '#FFD700', fontSize: '1.5rem', margin: '0 0.1rem' }}>⭐</span>
                  ))}
                </div>
                
                <p style={{
                  fontSize: '1.4rem',
                  color: '#fff',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  marginBottom: '2.5rem',
                  maxWidth: '800px',
                  margin: '0 auto 2.5rem'
                }}>
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div style={{
                  background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  marginBottom: '2rem',
                  display: 'inline-block',
                  color: '#000',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  {testimonials[currentTestimonial].achievement}
                </div>
                
                <div>
                  <h4 style={{ color: '#00f5ff', fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', margin: '0.5rem 0 0 0' }}>
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '0.5rem', 
                marginTop: '3rem' 
              }}>
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: currentTestimonial === index 
                        ? 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)'
                        : 'rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 50%, rgba(138, 43, 226, 0.2) 100%)',
          padding: '6rem 2rem',
          textAlign: 'center',
          margin: '4rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Pronto para sua transformação?
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.85)', 
            fontSize: '1.3rem', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6'
          }}>
            Junte-se a mais de 350k pessoas que já transformaram suas vidas
          </p>
          <a href="/login" style={{
            background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 50%, #8a2be2 100%)',
            color: '#000',
            border: 'none',
            padding: '1.5rem 4rem',
            borderRadius: '50px',
            fontSize: '1.3rem',
            fontWeight: '800',
            cursor: 'pointer',
            boxShadow: '0 15px 50px rgba(0, 245, 255, 0.4)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            position: 'relative',
            overflow: 'hidden',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Começar Transformação - GRÁTIS 🚀
          </a>
        </section>

        {/* Footer Profissional */}
        <footer style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
          color: 'white', 
          padding: '4rem 2rem 2rem'
        }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {/* Footer Top */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem'
            }}>
              {/* Logo Section */}
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
                    borderRadius: '0.75rem', 
                    background: 'linear-gradient(135deg, #00f5ff, #ff6b35)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    💪
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    background: 'linear-gradient(135deg, #00f5ff, #ff6b35)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    margin: 0
                  }}>
                    MuscleLevel
                  </h3>
                </div>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  A plataforma brasileira mais completa para transformação corporal através de tecnologia e gamificação.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(0, 245, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>📘</div>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(0, 245, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>📷</div>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(0, 245, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>🐦</div>
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Plataforma</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href="/sobre" style={{ color: '#94a3b8', textDecoration: 'none' }}>Sobre Nós</a>
                  <a href="/ferramentas" style={{ color: '#94a3b8', textDecoration: 'none' }}>Ferramentas</a>
                  <a href="/gamificacao" style={{ color: '#94a3b8', textDecoration: 'none' }}>Gamificação</a>
                  <a href="/treinos" style={{ color: '#94a3b8', textDecoration: 'none' }}>Dashboard</a>
                </div>
              </div>

              {/* Suporte */}
              <div>
                <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Suporte</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Central de Ajuda</a>
                  <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contato</a>
                  <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Comunidade</a>
                  <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Status do Sistema</a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Legal</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Política de Privacidade</a>
                  <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Termos de Uso</a>
                  <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Cookies</a>
                  <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Licenças</a>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <p style={{ color: '#64748b', margin: 0 }}>
                © 2024 MuscleLevel Academy. Todos os direitos reservados. TCC - Projeto Acadêmico
              </p>
              <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>🇧🇷 Feito no Brasil</span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>⚡ Powered by Next.js</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Advanced CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(-10px) rotate(240deg); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              transform: scale(1); 
              opacity: 0.6; 
            }
            50% { 
              transform: scale(1.1); 
              opacity: 1; 
            }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          button:hover, a:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 20px 60px rgba(0, 245, 255, 0.6) !important;
          }
        `}</style>
      </div>
    </>
  );
}
