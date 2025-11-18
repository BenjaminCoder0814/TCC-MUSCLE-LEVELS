"use client";

import React from "react";
import Link from "next/link";

export default function ProgramasPage() {
  const programs = [
    {
      id: 1,
      title: "Iniciante Total",
      description: "Perfect para quem está começando na musculação",
      duration: "4 semanas",
      difficulty: "Iniciante",
      workouts: 12,
      image: "🎯",
      goals: ["Condicionamento básico", "Aprender movimentos", "Criar rotina"],
      preview: ["Treino A: Peito, Ombro, Tríceps", "Treino B: Costas, Bíceps", "Treino C: Pernas, Glúteos"]
    },
    {
      id: 2,
      title: "Hipertrofia Intermediário",
      description: "Programa focado no ganho de massa muscular",
      duration: "8 semanas",
      difficulty: "Intermediário",
      workouts: 32,
      image: "💪",
      goals: ["Ganho de massa", "Força progressiva", "Definição muscular"],
      preview: ["Push: Peito, Ombro, Tríceps", "Pull: Costas, Bíceps", "Legs: Pernas completas"]
    },
    {
      id: 3,
      title: "Definição Avançada",
      description: "Queima de gordura mantendo massa magra",
      duration: "12 semanas",
      difficulty: "Avançado",
      workouts: 48,
      image: "🔥",
      goals: ["Redução de gordura", "Manter massa magra", "Condicionamento"],
      preview: ["HIIT + Musculação", "Treinos compostos", "Cardio estratégico"]
    },
    {
      id: 4,
      title: "Força & Potência",
      description: "Desenvolvimento de força máxima e explosiva",
      duration: "10 semanas",
      difficulty: "Avançado",
      workouts: 40,
      image: "⚡",
      goals: ["Força máxima", "Potência explosiva", "Performance atlética"],
      preview: ["Powerlifting básico", "Movimentos olímpicos", "Treino funcional"]
    }
  ];

  const customPrograms = [
    {
      title: "Treino em Casa",
      description: "Exercícios sem equipamentos",
      icon: "🏠",
      exercises: 45
    },
    {
      title: "Treino Funcional",
      description: "Movimentos naturais e funcionais",
      icon: "🤸‍♂️",
      exercises: 38
    },
    {
      title: "Cardio HIIT",
      description: "Alta intensidade em intervalos",
      icon: "🏃‍♂️",
      exercises: 25
    },
    {
      title: "Flexibilidade & Mobilidade",
      description: "Alongamento e mobilidade articular",
      icon: "🧘‍♂️",
      exercises: 32
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 25%, #2d1b69 50%, #1a1f3a 75%, #0a0e1a 100%)',
      color: '#fff',
      paddingBottom: '100px'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(10, 14, 26, 0.98)',
        backdropFilter: 'blur(30px)',
        borderBottom: '2px solid rgba(0, 245, 255, 0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
        marginBottom: '2rem'
      }}>
        <div 
          className="mobile-header"
          style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            padding: '0 2rem',
            height: '90px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
          
          {/* Logo Section - Expandido */}
          <a href="/" style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.2rem',
            padding: '0.8rem',
            borderRadius: '20px',
            transition: 'all 0.3s ease',
            minWidth: '280px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 245, 255, 0.15)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div 
              className="mobile-logo-icon"
              style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 50%, #8b5cf6 100%)',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                boxShadow: '0 12px 35px rgba(0, 245, 255, 0.4)',
                animation: 'pulse 2s infinite'
              }}>💪</div>
            <div style={{ flex: 1 }}>
              <h1 
                className="mobile-logo"
                style={{
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: 0,
                  lineHeight: '1.1',
                  whiteSpace: 'nowrap'
                }}>MuscleLevel</h1>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(0, 245, 255, 0.9)',
                margin: 0,
                fontWeight: '600',
                textShadow: '0 2px 10px rgba(0, 245, 255, 0.3)'
              }}>Fitness Platform</p>
            </div>
          </a>

          {/* Navigation Menu - Menu Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              className="nav-dropdown-trigger"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1rem 1.5rem',
                borderRadius: '15px',
                background: 'rgba(0, 245, 255, 0.1)',
                border: '2px solid rgba(0, 245, 255, 0.3)',
                color: '#00f5ff',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '200px',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 245, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 245, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 245, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.3rem' }}>🚀</span>
                <span>Veja Nossas Páginas</span>
              </div>
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>▼</span>
            </button>

            {/* Dropdown Menu */}
            <div 
              className="nav-dropdown-menu"
              style={{
                position: 'absolute',
                top: '110%',
                right: 0,
                background: 'rgba(10, 14, 26, 0.98)',
                backdropFilter: 'blur(30px)',
                borderRadius: '20px',
                border: '2px solid rgba(0, 245, 255, 0.2)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
                padding: '1rem 0',
                minWidth: '250px',
                zIndex: 1001,
                opacity: 0,
                visibility: 'hidden',
                transform: 'translateY(-10px)',
                transition: 'all 0.3s ease'
              }}
            >
              {[
                { icon: '💪', label: 'Treinos', href: '/treinos', desc: 'Sistema completo de exercícios' },
                { icon: '📊', label: 'Programas', href: '/programas', desc: 'Planos estruturados', active: true },
                { icon: '🏆', label: 'Ranking', href: '/gamification', desc: 'Classificações e conquistas' },
                { icon: '🛍️', label: 'Loja FitPoints', href: '/loja', desc: 'Troque pontos por prêmios' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.5rem',
                    textDecoration: 'none',
                    color: item.active ? '#00f5ff' : 'rgba(255, 255, 255, 0.9)',
                    background: item.active ? 'rgba(0, 245, 255, 0.1)' : 'transparent',
                    transition: 'all 0.3s ease',
                    borderLeft: item.active ? '4px solid #00f5ff' : '4px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderLeftColor = 'rgba(0, 245, 255, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderLeftColor = 'transparent';
                    }
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ 
                      fontWeight: '700', 
                      fontSize: '1rem',
                      marginBottom: '0.2rem' 
                    }}>{item.label}</div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      opacity: 0.7 
                    }}>{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* User Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.2rem'
          }}>
            {/* FitPoints Display */}
            <div 
              className="mobile-points"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 107, 53, 0.1) 100%)',
                padding: '0.8rem 1.2rem',
                borderRadius: '25px',
                border: '2px solid rgba(255, 107, 53, 0.4)',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.2)'
              }}>
              <span style={{ fontSize: '1.3rem' }}>⭐</span>
              <div>
                <div style={{
                  fontWeight: '900',
                  color: '#ff6b35',
                  fontSize: '1.1rem'
                }}>1.250</div>
                <div style={{
                  fontSize: '0.7rem',
                  color: 'rgba(255, 107, 53, 0.8)',
                  fontWeight: '600'
                }}>FitPoints</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* JavaScript para dropdown */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');
              const dropdownMenu = document.querySelector('.nav-dropdown-menu');
              
              if (dropdownTrigger && dropdownMenu) {
                dropdownTrigger.addEventListener('mouseenter', function() {
                  dropdownMenu.style.opacity = '1';
                  dropdownMenu.style.visibility = 'visible';
                  dropdownMenu.style.transform = 'translateY(0)';
                });
                
                dropdownTrigger.addEventListener('mouseleave', function(e) {
                  setTimeout(() => {
                    if (!dropdownMenu.matches(':hover') && !dropdownTrigger.matches(':hover')) {
                      dropdownMenu.style.opacity = '0';
                      dropdownMenu.style.visibility = 'hidden';
                      dropdownMenu.style.transform = 'translateY(-10px)';
                    }
                  }, 100);
                });
                
                dropdownMenu.addEventListener('mouseenter', function() {
                  dropdownMenu.style.opacity = '1';
                  dropdownMenu.style.visibility = 'visible';
                  dropdownMenu.style.transform = 'translateY(0)';
                });
                
                dropdownMenu.addEventListener('mouseleave', function() {
                  dropdownMenu.style.opacity = '0';
                  dropdownMenu.style.visibility = 'hidden';
                  dropdownMenu.style.transform = 'translateY(-10px)';
                });
              }
            });
          `
        }}
      />

      {/* Adicionar animação CSS e responsividade */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 12px 35px rgba(0, 245, 255, 0.4);
          }
          50% {
            box-shadow: 0 12px 45px rgba(0, 245, 255, 0.7);
          }
        }
        
        @media (max-width: 768px) {
          .mobile-points {
            display: none !important;
          }
          .mobile-header {
            padding: 0 1rem !important;
            height: 80px !important;
          }
          .mobile-logo {
            font-size: 1.6rem !important;
          }
          .mobile-logo-icon {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.4rem !important;
          }
          .nav-dropdown-trigger {
            min-width: 150px !important;
            padding: 0.8rem 1rem !important;
            font-size: 0.9rem !important;
          }
          .nav-dropdown-menu {
            min-width: 200px !important;
            right: -50px !important;
          }
        }
        
        @media (max-width: 480px) {
          .mobile-header {
            padding: 0 0.8rem !important;
            height: 75px !important;
          }
          .mobile-logo {
            font-size: 1.4rem !important;
          }
          .mobile-logo-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.2rem !important;
          }
          .nav-dropdown-trigger {
            min-width: 120px !important;
            padding: 0.7rem 0.8rem !important;
            font-size: 0.8rem !important;
          }
          .nav-dropdown-trigger span:first-child {
            display: none !important;
          }
        }
      `}</style>

      {/* Spacer para separação visual */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0, 245, 255, 0.3) 50%, transparent 100%)',
        marginBottom: '3rem'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 0' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            📊 Programas de Treino
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Programas estruturados para todos os níveis e objetivos
          </p>
        </div>

        {/* Main Programs */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🎯 Programas Principais
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {programs.map((program) => (
              <div
                key={program.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '25px',
                  padding: '2rem',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 245, 255, 0.15)';
                  e.currentTarget.style.borderColor = '#00f5ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '3rem' }}>{program.image}</div>
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#fff',
                      marginBottom: '0.5rem'
                    }}>
                      {program.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                      <span style={{
                        background: program.difficulty === 'Iniciante' ? 'rgba(34, 197, 94, 0.2)' :
                                   program.difficulty === 'Intermediário' ? 'rgba(251, 191, 36, 0.2)' :
                                   'rgba(239, 68, 68, 0.2)',
                        color: program.difficulty === 'Iniciante' ? '#22c55e' :
                               program.difficulty === 'Intermediário' ? '#fbbf24' :
                               '#ef4444',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontWeight: '600'
                      }}>
                        {program.difficulty}
                      </span>
                      <span style={{
                        background: 'rgba(138, 43, 226, 0.2)',
                        color: '#8a2be2',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontWeight: '600'
                      }}>
                        {program.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {program.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: '#00f5ff',
                    marginBottom: '0.5rem'
                  }}>
                    Objetivos:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem'
                  }}>
                    {program.goals.map((goal, index) => (
                      <li key={index} style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: '#10b981' }}>✓</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: '#ff6b35',
                    marginBottom: '0.5rem'
                  }}>
                    Exemplo de treinos:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {program.preview.map((workout, index) => (
                      <span key={index} style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        background: 'rgba(0, 0, 0, 0.2)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '8px'
                      }}>
                        {workout}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '1rem',
                  borderRadius: '15px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '900',
                      color: '#00f5ff'
                    }}>
                      {program.workouts}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      Treinos
                    </div>
                  </div>
                  <button style={{
                    background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '15px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}>
                    Iniciar Programa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Programs */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #8a2be2 0%, #00f5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🎨 Programas Especializados
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {customPrograms.map((program, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(138, 43, 226, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: '2px solid rgba(138, 43, 226, 0.3)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{program.icon}</div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  {program.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  {program.description}
                </p>
                <div style={{
                  background: 'rgba(138, 43, 226, 0.2)',
                  padding: '0.5rem 1rem',
                  borderRadius: '12px',
                  color: '#8a2be2',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  {program.exercises} exercícios
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Create Custom Program */}
        <section>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            padding: '3rem 2rem',
            border: '2px solid rgba(0, 245, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Crie Seu Programa Personalizado
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Use nosso construtor de treinos inteligente para criar um programa 
              completamente personalizado para seus objetivos e equipamentos.
            </p>
            <a
              href="/treinos"
              style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                color: '#000',
                padding: '1rem 2rem',
                borderRadius: '20px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                display: 'inline-block',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Criar Programa Personalizado
            </a>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 14, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(0, 245, 255, 0.2)',
        padding: '1rem 0',
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          {[
            { icon: '💪', label: 'Treinos', active: false, href: '/treinos' },
            { icon: '📊', label: 'Programas', active: true, href: '/programas' },
            { icon: '🏆', label: 'Ranking', active: false, href: '/gamification' },
            { icon: '🏪', label: 'Loja', active: false, href: '/loja' },
            { icon: '👑', label: 'Premium', active: false, href: '/premium' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                textDecoration: 'none',
                color: item.active ? '#00f5ff' : 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.8rem',
                fontWeight: item.active ? '600' : '500',
                padding: '0.5rem',
                borderRadius: '8px',
                background: item.active ? 'rgba(0, 245, 255, 0.1)' : 'transparent'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
