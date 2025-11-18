"use client";

import React from "react";
import Link from "next/link";

export default function SobrePage() {
  const team = [
    {
      name: "Desenvolvedor",
      role: "Estudante de Engenharia de Software",
      description: "Responsável pelo desenvolvimento completo da plataforma",
      avatar: "👨‍💻",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Prisma"]
    }
  ];

  const technologies = [
    { name: "Next.js 15", description: "Framework React para produção", icon: "⚛️" },
    { name: "TypeScript", description: "JavaScript com tipagem estática", icon: "🔷" },
    { name: "Prisma", description: "ORM moderno para banco de dados", icon: "🔺" },
    { name: "PostgreSQL", description: "Banco de dados relacional", icon: "🐘" },
    { name: "Tailwind CSS", description: "Framework CSS utilitário", icon: "🎨" },
    { name: "NextAuth.js", description: "Autenticação para Next.js", icon: "🔐" }
  ];

  const features = [
    {
      title: "Sistema de Treinos Personalizados",
      description: "Criação de treinos baseados em equipamentos disponíveis e grupos musculares específicos",
      icon: "💪"
    },
    {
      title: "Banco de Dados de Exercícios",
      description: "Mais de 200 exercícios catalogados com instruções detalhadas e grupos musculares",
      icon: "📚"
    },
    {
      title: "Gamificação Completa",
      description: "Sistema de pontos, níveis, conquistas e desafios para manter a motivação",
      icon: "🎮"
    },
    {
      title: "Calculadoras Fitness",
      description: "Ferramentas para calcular IMC, TDEE, gordura corporal e necessidades nutricionais",
      icon: "🧮"
    },
    {
      title: "Estatísticas e Progresso",
      description: "Acompanhamento detalhado do progresso com gráficos e métricas",
      icon: "📊"
    },
    {
      title: "Interface Responsiva",
      description: "Design moderno e responsivo que funciona em todos os dispositivos",
      icon: "📱"
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
        background: 'rgba(10, 14, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(0, 245, 255, 0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <a href="/treinos" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}>💪</div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>MuscleLevel</h1>
          </a>

          <a href="/treinos" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600'
          }}>
            ← Treinos
          </a>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 50%, #8a2be2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            lineHeight: '1.1'
          }}>
            MuscleLevel Academy
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem'
          }}>
            Trabalho de Conclusão de Curso
          </h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.8'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Uma plataforma completa de fitness desenvolvida como projeto final do curso de 
              <strong style={{ color: '#00f5ff' }}> Engenharia de Software</strong>, 
              integrando tecnologias modernas para criar uma experiência única de treino personalizado.
            </p>
            <p>
              O MuscleLevel Academy representa a convergência entre tecnologia e fitness, 
              oferecendo uma solução abrangente para entusiastas do exercício físico.
            </p>
          </div>
        </div>

        {/* Project Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {[
            { label: 'Exercícios', value: '200+', icon: '💪', color: '#00f5ff' },
            { label: 'Tecnologias', value: '10+', icon: '⚡', color: '#ff6b35' },
            { label: 'Funcionalidades', value: '15+', icon: '🚀', color: '#8a2be2' },
            { label: 'Horas de Desenvolvimento', value: '300+', icon: '⏰', color: '#10b981' }
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                border: `2px solid ${stat.color}30`,
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{stat.icon}</div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '600'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🚀 Principais Funcionalidades
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 245, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '1rem'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #8a2be2 0%, #00f5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            💻 Stack Tecnológico
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(138, 43, 226, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  border: '1px solid rgba(138, 43, 226, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: '2.5rem' }}>{tech.icon}</div>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#fff',
                    marginBottom: '0.5rem'
                  }}>
                    {tech.name}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.4'
                  }}>
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #ff6b35 0%, #8a2be2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            👨‍💻 Desenvolvedor
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            {team.map((member, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '25px',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  border: '2px solid rgba(255, 107, 53, 0.3)',
                  maxWidth: '400px',
                  width: '100%'
                }}
              >
                <div style={{
                  fontSize: '5rem',
                  marginBottom: '1.5rem'
                }}>
                  {member.avatar}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#ff6b35',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {member.role}
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  {member.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: 'rgba(0, 245, 255, 0.2)',
                        color: '#00f5ff',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        border: '1px solid rgba(0, 245, 255, 0.3)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Objectives Section */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            padding: '3rem 2rem',
            border: '2px solid rgba(0, 245, 255, 0.2)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              🎯 Objetivos do Projeto
            </h2>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.8'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                O MuscleLevel Academy foi desenvolvido com o objetivo de democratizar o acesso a treinos 
                personalizados e de qualidade, utilizando tecnologias modernas para criar uma experiência 
                única no mundo do fitness digital.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Como projeto de TCC, busca demonstrar a aplicação prática de conhecimentos adquiridos 
                durante o curso, integrando frontend, backend, banco de dados e gamificação em uma 
                solução completa e funcional.
              </p>
              <p>
                A plataforma serve como ponte entre a teoria acadêmica e a prática profissional, 
                preparando para os desafios do mercado de desenvolvimento de software.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '4rem'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '1rem'
          }}>
            © 2024 MuscleLevel Academy - TCC Engenharia de Software
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.9rem',
            marginTop: '0.5rem'
          }}>
            Desenvolvido com 💪 e muito ☕
          </p>
        </footer>
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
            { icon: '📊', label: 'Programas', active: false, href: '/programas' },
            { icon: '📈', label: 'Estatísticas', active: false, href: '/estatisticas' },
            { icon: '🔧', label: 'Ferramentas', active: false, href: '/ferramentas' },
            { icon: '🏆', label: 'Classificação', active: false, href: '/gamificacao' },
            { icon: 'ℹ️', label: 'Sobre', active: true, href: '/sobre' }
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
