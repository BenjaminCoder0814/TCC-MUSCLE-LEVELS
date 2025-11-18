"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function EstatisticasPage() {
  const [timeframe, setTimeframe] = useState('month');

  const stats = {
    totalWorkouts: 89,
    totalTime: 142, // hours
    totalExercises: 267,
    averageWorkout: 95, // minutes
    caloriesBurned: 15420,
    currentStreak: 7,
    longestStreak: 21,
    favoriteEquipment: 'Halteres'
  };

  const weeklyData = [
    { day: 'Dom', workouts: 1, duration: 80 },
    { day: 'Seg', workouts: 2, duration: 95 },
    { day: 'Ter', workouts: 1, duration: 75 },
    { day: 'Qua', workouts: 2, duration: 110 },
    { day: 'Qui', workouts: 1, duration: 65 },
    { day: 'Sex', workouts: 2, duration: 90 },
    { day: 'Sáb', workouts: 1, duration: 85 }
  ];

  const muscleGroups = [
    { name: 'Peito', percentage: 85, color: '#ff6b35', exercises: 28 },
    { name: 'Costas', percentage: 78, color: '#00f5ff', exercises: 24 },
    { name: 'Pernas', percentage: 92, color: '#8a2be2', exercises: 35 },
    { name: 'Ombros', percentage: 65, color: '#10b981', exercises: 18 },
    { name: 'Braços', percentage: 88, color: '#fbbf24', exercises: 31 },
    { name: 'Core', percentage: 45, color: '#ef4444', exercises: 15 }
  ];

  const achievements = [
    { title: '100 Treinos', progress: 89, target: 100, color: '#ff6b35' },
    { title: '30 Dias Seguidos', progress: 7, target: 30, color: '#00f5ff' },
    { title: '500 Exercícios', progress: 267, target: 500, color: '#8a2be2' },
    { title: '50h de Treino', progress: 142, target: 200, color: '#10b981' }
  ];

  const recentWorkouts = [
    { date: '2024-03-18', name: 'Push - Peito e Ombros', duration: 85, exercises: 8, calories: 420 },
    { date: '2024-03-17', name: 'Pull - Costas e Bíceps', duration: 95, exercises: 9, calories: 480 },
    { date: '2024-03-16', name: 'Legs - Pernas Completas', duration: 110, exercises: 12, calories: 550 },
    { date: '2024-03-15', name: 'Upper - Membros Superiores', duration: 75, exercises: 7, calories: 380 },
    { date: '2024-03-14', name: 'Full Body', duration: 90, exercises: 10, calories: 450 }
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
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            📈 Suas Estatísticas
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Acompanhe seu progresso e evolução no fitness
          </p>
        </div>

        {/* Time Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {[
            { id: 'week', label: 'Esta Semana' },
            { id: 'month', label: 'Este Mês' },
            { id: 'year', label: 'Este Ano' },
            { id: 'all', label: 'Todo Período' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setTimeframe(filter.id)}
              style={{
                background: timeframe === filter.id 
                  ? 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: timeframe === filter.id ? '#000' : '#fff',
                border: timeframe === filter.id ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.75rem 1.5rem',
                borderRadius: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Main Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {[
            { label: 'Total de Treinos', value: stats.totalWorkouts, suffix: '', icon: '💪', color: '#00f5ff' },
            { label: 'Horas Treinando', value: stats.totalTime, suffix: 'h', icon: '⏱️', color: '#ff6b35' },
            { label: 'Exercícios Feitos', value: stats.totalExercises, suffix: '', icon: '🎯', color: '#8a2be2' },
            { label: 'Tempo Médio', value: stats.averageWorkout, suffix: 'min', icon: '📊', color: '#10b981' },
            { label: 'Calorias Queimadas', value: stats.caloriesBurned.toLocaleString(), suffix: '', icon: '🔥', color: '#ef4444' },
            { label: 'Sequência Atual', value: stats.currentStreak, suffix: ' dias', icon: '⚡', color: '#fbbf24' }
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = stat.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{stat.icon}</div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '600'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Activity Chart */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            📅 Atividade Semanal
          </h2>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '1rem',
              alignItems: 'end',
              height: '200px'
            }}>
              {weeklyData.map((day, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    height: `${(day.duration / 120) * 160}px`,
                    background: 'linear-gradient(to top, #00f5ff, #ff6b35)',
                    borderRadius: '8px',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    padding: '0.5rem',
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '0.8rem'
                  }}>
                    {day.duration}min
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: '600'
                  }}>
                    {day.day}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Muscle Groups Progress */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #8a2be2 0%, #00f5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            💪 Grupos Musculares
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {muscleGroups.map((muscle, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#fff'
                  }}>
                    {muscle.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      {muscle.exercises} exercícios
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: muscle.color
                    }}>
                      {muscle.percentage}%
                    </span>
                  </div>
                </div>

                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${muscle.percentage}%`,
                    height: '100%',
                    background: muscle.color,
                    borderRadius: '4px',
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Progress */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🏆 Progresso das Conquistas
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  border: '2px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '1rem'
                }}>
                  {achievement.title}
                </h3>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: achievement.color
                  }}>
                    {achievement.progress}
                  </span>
                  <span style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    / {achievement.target}
                  </span>
                </div>

                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    width: `${(achievement.progress / achievement.target) * 100}%`,
                    height: '100%',
                    background: achievement.color,
                    borderRadius: '4px',
                    transition: 'width 0.5s ease'
                  }} />
                </div>

                <div style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  textAlign: 'center'
                }}>
                  {Math.round((achievement.progress / achievement.target) * 100)}% completo
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Workouts */}
        <section>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            📋 Treinos Recentes
          </h2>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            {recentWorkouts.map((workout, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 0',
                  borderBottom: index !== recentWorkouts.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}
              >
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#fff',
                    marginBottom: '0.25rem'
                  }}>
                    {workout.name}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {new Date(workout.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#00f5ff', fontWeight: '700' }}>{workout.duration}min</div>
                    <div>Duração</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#ff6b35', fontWeight: '700' }}>{workout.exercises}</div>
                    <div>Exercícios</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#10b981', fontWeight: '700' }}>{workout.calories}</div>
                    <div>Calorias</div>
                  </div>
                </div>
              </div>
            ))}
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
            { icon: '📊', label: 'Programas', active: false, href: '/programas' },
            { icon: '📈', label: 'Estatísticas', active: true, href: '/estatisticas' },
            { icon: '🔧', label: 'Ferramentas', active: false, href: '/ferramentas' },
            { icon: '🏆', label: 'Classificação', active: false, href: '/gamificacao' },
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
