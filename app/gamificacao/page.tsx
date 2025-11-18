"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function GamificacaoPage() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('ranking');

  useEffect(() => {
    // Get user data
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const userStats = {
    level: 12,
    xp: 2850,
    nextLevelXp: 3200,
    totalWorkouts: 89,
    totalExercises: 267,
    streak: 7,
    achievements: 15,
    rank: 3,
    points: 12450
  };

  const leaderboard = [
    { rank: 1, name: 'Carlos Silva', level: 25, points: 28900, avatar: '🏆', streak: 45, badge: 'Beast Mode' },
    { rank: 2, name: 'Ana Costa', level: 22, points: 25600, avatar: '💪', streak: 32, badge: 'Consistency Queen' },
    { rank: 3, name: user ? user.name : 'Você', level: 12, points: 12450, avatar: '🔥', streak: 7, badge: 'Rising Star', isUser: true },
    { rank: 4, name: 'Pedro Santos', level: 18, points: 19800, avatar: '⚡', streak: 21, badge: 'Lightning Fast' },
    { rank: 5, name: 'Maria Oliveira', level: 16, points: 17200, avatar: '🌟', streak: 28, badge: 'Shining Bright' },
    { rank: 6, name: 'João Ferreira', level: 14, points: 15100, avatar: '🚀', streak: 14, badge: 'Sky Rocket' },
    { rank: 7, name: 'Sofia Alves', level: 13, points: 14800, avatar: '💎', streak: 19, badge: 'Diamond Mind' },
    { rank: 8, name: 'Lucas Rocha', level: 11, points: 11900, avatar: '🔱', streak: 12, badge: 'Trident Master' }
  ];

  const achievements = [
    { 
      id: 'first_workout', 
      title: 'Primeiro Treino', 
      description: 'Complete seu primeiro treino', 
      icon: '🎯', 
      unlocked: true, 
      points: 100,
      date: '2024-01-15'
    },
    { 
      id: 'week_streak', 
      title: 'Semana Completa', 
      description: '7 dias consecutivos treinando', 
      icon: '🔥', 
      unlocked: true, 
      points: 500,
      date: '2024-02-28'
    },
    { 
      id: 'chest_master', 
      title: 'Mestre do Peito', 
      description: 'Complete 50 exercícios de peito', 
      icon: '💪', 
      unlocked: true, 
      points: 300,
      date: '2024-03-10'
    },
    { 
      id: 'early_bird', 
      title: 'Madrugador', 
      description: 'Treine antes das 7h da manhã', 
      icon: '🌅', 
      unlocked: true, 
      points: 200,
      date: '2024-03-18'
    },
    { 
      id: 'century_club', 
      title: 'Clube dos 100', 
      description: 'Complete 100 treinos', 
      icon: '💯', 
      unlocked: false, 
      points: 1000,
      progress: 89
    },
    { 
      id: 'variety_master', 
      title: 'Mestre da Variedade', 
      description: 'Use todos os tipos de equipamento', 
      icon: '🎪', 
      unlocked: false, 
      points: 400,
      progress: 75
    },
    { 
      id: 'month_streak', 
      title: 'Mês de Fogo', 
      description: '30 dias consecutivos treinando', 
      icon: '🔥', 
      unlocked: false, 
      points: 1500,
      progress: 7
    },
    { 
      id: 'social_butterfly', 
      title: 'Borboleta Social', 
      description: 'Compartilhe 10 treinos', 
      icon: '🦋', 
      unlocked: false, 
      points: 300,
      progress: 3
    }
  ];

  const challenges = [
    {
      id: 'march_madness',
      title: 'Loucura de Março',
      description: 'Complete 20 treinos em março',
      icon: '🏀',
      progress: 12,
      target: 20,
      reward: '1000 XP + Badge Especial',
      daysLeft: 8,
      active: true
    },
    {
      id: 'upper_body_week',
      title: 'Semana do Tronco',
      description: 'Foque em exercícios de membros superiores',
      icon: '💪',
      progress: 4,
      target: 7,
      reward: '500 XP',
      daysLeft: 3,
      active: true
    },
    {
      id: 'cardio_blast',
      title: 'Explosão Cardio',
      description: 'Adicione 30 min de cardio em seus treinos',
      icon: '❤️',
      progress: 0,
      target: 5,
      reward: '750 XP + Achievement',
      daysLeft: 14,
      active: false
    }
  ];

  const RankingTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {leaderboard.map((player) => (
        <div
          key={player.rank}
          style={{
            background: player.isUser 
              ? 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)'
              : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '1.5rem',
            border: player.isUser ? '2px solid #00f5ff' : '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {player.isUser && (
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              color: '#000',
              padding: '0.3rem 0.8rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '700'
            }}>
              VOCÊ
            </div>
          )}

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: player.rank <= 3 
              ? `linear-gradient(135deg, ${player.rank === 1 ? '#ffd700, #ffed4e' : player.rank === 2 ? '#c0c0c0, #e8e8e8' : '#cd7f32, #ffa500'} )`
              : 'rgba(255, 255, 255, 0.1)',
            fontSize: '1.5rem',
            fontWeight: '900',
            color: player.rank <= 3 ? '#000' : '#fff'
          }}>
            {player.rank <= 3 ? player.rank : player.avatar}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '700', 
                color: '#fff', 
                margin: 0 
              }}>
                {player.name}
              </h3>
              <span style={{
                background: 'rgba(138, 43, 226, 0.2)',
                color: '#8a2be2',
                padding: '0.2rem 0.6rem',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: '600',
                border: '1px solid rgba(138, 43, 226, 0.3)'
              }}>
                {player.badge}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              <span>Nível {player.level}</span>
              <span>{player.points.toLocaleString()} pontos</span>
              <span>🔥 {player.streak} dias</span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: '900',
              color: player.rank <= 3 ? '#ffd700' : '#00f5ff'
            }}>
              #{player.rank}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const AchievementsTab = () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '1.5rem' 
    }}>
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          style={{
            background: achievement.unlocked 
              ? 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)'
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2rem',
            border: achievement.unlocked 
              ? '2px solid rgba(0, 245, 255, 0.5)' 
              : '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            position: 'relative',
            opacity: achievement.unlocked ? 1 : 0.6
          }}
        >
          {achievement.unlocked && (
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: '#10b981',
              color: '#fff',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem'
            }}>
              ✓
            </div>
          )}

          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            filter: achievement.unlocked ? 'none' : 'grayscale(100%)'
          }}>
            {achievement.icon}
          </div>

          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: achievement.unlocked ? '#fff' : 'rgba(255, 255, 255, 0.5)',
            marginBottom: '0.5rem'
          }}>
            {achievement.title}
          </h3>

          <p style={{
            color: achievement.unlocked ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
            marginBottom: '1rem',
            lineHeight: '1.5'
          }}>
            {achievement.description}
          </p>

          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#ffd700'
            }}>
              +{achievement.points} XP
            </span>

            {achievement.unlocked && achievement.date && (
              <span style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                {new Date(achievement.date).toLocaleDateString('pt-BR')}
              </span>
            )}

            {!achievement.unlocked && achievement.progress && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${achievement.progress || 0}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #00f5ff 0%, #ff6b35 100%)',
                    borderRadius: '3px'
                  }} />
                </div>
                <span style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  {achievement.progress}%
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const ChallengesTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          style={{
            background: challenge.active 
              ? 'linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(255, 107, 53, 0.15) 100%)'
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2rem',
            border: challenge.active 
              ? '2px solid rgba(0, 245, 255, 0.3)' 
              : '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative'
          }}
        >
          {challenge.active && (
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#fff',
              padding: '0.3rem 0.8rem',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontWeight: '700'
            }}>
              ATIVO
            </div>
          )}

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{
              fontSize: '4rem',
              opacity: challenge.active ? 1 : 0.5
            }}>
              {challenge.icon}
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: challenge.active ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                marginBottom: '0.5rem'
              }}>
                {challenge.title}
              </h3>

              <p style={{
                color: challenge.active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
                marginBottom: '1.5rem',
                fontSize: '1rem'
              }}>
                {challenge.description}
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    color: '#00f5ff'
                  }}>
                    {challenge.progress}/{challenge.target}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    Progresso
                  </div>
                </div>

                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    color: '#ffd700'
                  }}>
                    {challenge.daysLeft}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    Dias Restantes
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                padding: '0.5rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: `${(challenge.progress / challenge.target) * 100}%`,
                  height: '8px',
                  background: 'linear-gradient(90deg, #00f5ff 0%, #ff6b35 100%)',
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }} />
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 215, 0, 0.1)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '12px',
                padding: '1rem'
              }}>
                <span style={{
                  color: '#ffd700',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  🏆 Recompensa:
                </span>
                <span style={{
                  color: '#fff',
                  fontWeight: '700'
                }}>
                  {challenge.reward}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{
        background: 'rgba(138, 43, 226, 0.1)',
        border: '1px solid rgba(138, 43, 226, 0.3)',
        borderRadius: '20px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          color: '#8a2be2',
          marginBottom: '1rem'
        }}>
          🚀 Novos desafios toda semana!
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1rem'
        }}>
          Fique atento aos novos desafios que são lançados todas as segundas-feiras.
          Cada desafio completado aumenta seu nível e desbloqueia conquistas especiais!
        </p>
      </div>
    </div>
  );

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
        {/* User Stats Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)',
          backdropFilter: 'blur(20px)',
          borderRadius: '25px',
          padding: '2rem',
          border: '2px solid rgba(0, 245, 255, 0.3)',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1rem'
              }}>
                🔥
              </div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '0.5rem'
              }}>
                Nível {userStats.level}
              </h2>
              <div style={{
                width: '100px',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                margin: '0 auto',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(userStats.xp / userStats.nextLevelXp) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #00f5ff 0%, #ff6b35 100%)',
                  borderRadius: '4px'
                }} />
              </div>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginTop: '0.5rem'
              }}>
                {userStats.xp}/{userStats.nextLevelXp} XP
              </p>
            </div>

            {[
              { label: 'Pontos', value: userStats.points.toLocaleString(), icon: '⭐' },
              { label: 'Treinos', value: userStats.totalWorkouts, icon: '💪' },
              { label: 'Exercícios', value: userStats.totalExercises, icon: '🎯' },
              { label: 'Sequência', value: `${userStats.streak} dias`, icon: '🔥' },
              { label: 'Conquistas', value: userStats.achievements, icon: '🏆' },
              { label: 'Ranking', value: `#${userStats.rank}`, icon: '👑' }
            ].map((stat) => (
              <div key={stat.label} style={{
                textAlign: 'center',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '15px',
                padding: '1rem'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#00f5ff',
                  marginBottom: '0.25rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '0.5rem',
          backdropFilter: 'blur(20px)'
        }}>
          {[
            { id: 'ranking', label: 'Classificação', icon: '👑' },
            { id: 'achievements', label: 'Conquistas', icon: '🏆' },
            { id: 'challenges', label: 'Desafios', icon: '🎯' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                background: activeTab === tab.id 
                  ? 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)'
                  : 'transparent',
                color: activeTab === tab.id ? '#000' : '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'ranking' && <RankingTab />}
        {activeTab === 'achievements' && <AchievementsTab />}
        {activeTab === 'challenges' && <ChallengesTab />}
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
            { icon: '🏆', label: 'Classificação', active: true, href: '/gamificacao' },
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
