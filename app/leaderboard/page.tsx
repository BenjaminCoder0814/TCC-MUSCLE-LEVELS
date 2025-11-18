"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('global');
  const [timeframe, setTimeframe] = useState('month');

  // Dados do usuário atual
  const currentUser = {
    id: 'current-user',
    name: 'Você',
    level: 12,
    xp: 2850,
    totalPoints: 12450,
    workouts: 89,
    streak: 7,
    avatar: '🔥',
    rank: 3,
    monthlyRank: 2,
    weeklyRank: 1
  };

  const globalLeaderboard = [
    { rank: 1, name: 'Carlos "Beast" Silva', level: 28, points: 45600, workouts: 234, streak: 89, avatar: '👑', badge: 'Legend', country: '🇧🇷', premium: true },
    { rank: 2, name: 'Ana "Iron" Costa', level: 25, points: 38900, workouts: 198, streak: 67, avatar: '💪', badge: 'Champion', country: '🇧🇷', premium: true },
    { rank: 3, name: 'Você', level: 12, points: 12450, workouts: 89, streak: 7, avatar: '🔥', badge: 'Rising Star', country: '🇧🇷', isCurrentUser: true },
    { rank: 4, name: 'Pedro "Thunder" Santos', level: 22, points: 29800, workouts: 156, streak: 45, avatar: '⚡', badge: 'Elite', country: '🇧🇷', premium: true },
    { rank: 5, name: 'Maria "Phoenix" Oliveira', level: 20, points: 27200, workouts: 167, streak: 52, avatar: '🌟', badge: 'Master', country: '🇧🇷' },
    { rank: 6, name: 'João "Titan" Ferreira', level: 18, points: 23100, workouts: 134, streak: 28, avatar: '🚀', badge: 'Expert', country: '🇧🇷' },
    { rank: 7, name: 'Sofia "Diamond" Alves', level: 17, points: 21800, workouts: 145, streak: 41, avatar: '💎', badge: 'Diamond', country: '🇧🇷', premium: true },
    { rank: 8, name: 'Lucas "Storm" Rocha', level: 16, points: 19900, workouts: 128, streak: 33, avatar: '🌪️', badge: 'Storm', country: '🇧🇷' },
    { rank: 9, name: 'Isabella "Fire" Lima', level: 15, points: 18200, workouts: 119, streak: 29, avatar: '🔥', badge: 'Blaze', country: '🇧🇷' },
    { rank: 10, name: 'Gabriel "Rock" Mendes', level: 14, points: 16500, workouts: 112, streak: 22, avatar: '🗿', badge: 'Stone', country: '🇧🇷' }
  ];

  const weeklyLeaderboard = [
    { rank: 1, name: 'Você', level: 12, points: 2100, workouts: 7, streak: 7, avatar: '🔥', badge: 'Week Winner', country: '🇧🇷', isCurrentUser: true },
    { rank: 2, name: 'Ana "Iron" Costa', level: 25, points: 1980, workouts: 6, streak: 67, avatar: '💪', badge: 'Consistent', country: '🇧🇷', premium: true },
    { rank: 3, name: 'Carlos "Beast" Silva', level: 28, points: 1850, workouts: 6, streak: 89, avatar: '👑', badge: 'Legend', country: '🇧🇷', premium: true },
    { rank: 4, name: 'Pedro "Thunder" Santos', level: 22, points: 1720, workouts: 5, streak: 45, avatar: '⚡', badge: 'Elite', country: '🇧🇷', premium: true },
    { rank: 5, name: 'Maria "Phoenix" Oliveira', level: 20, points: 1650, workouts: 5, streak: 52, avatar: '🌟', badge: 'Master', country: '🇧🇷' }
  ];

  const monthlyLeaderboard = [
    { rank: 1, name: 'Carlos "Beast" Silva', level: 28, points: 8900, workouts: 28, streak: 89, avatar: '👑', badge: 'Monthly King', country: '🇧🇷', premium: true },
    { rank: 2, name: 'Você', level: 12, points: 7200, workouts: 24, streak: 7, avatar: '🔥', badge: 'Climber', country: '🇧🇷', isCurrentUser: true },
    { rank: 3, name: 'Ana "Iron" Costa', level: 25, points: 6800, workouts: 22, streak: 67, avatar: '💪', badge: 'Consistent', country: '🇧🇷', premium: true },
    { rank: 4, name: 'Pedro "Thunder" Santos', level: 22, points: 6100, workouts: 20, streak: 45, avatar: '⚡', badge: 'Elite', country: '🇧🇷', premium: true },
    { rank: 5, name: 'Maria "Phoenix" Oliveira', level: 20, points: 5850, workouts: 19, streak: 52, avatar: '🌟', badge: 'Master', country: '🇧🇷' }
  ];

  const achievements = [
    { id: 1, title: 'Primeiro no Ranking Semanal', icon: '🥇', description: 'Alcance o #1 na semana', rarity: 'Legendary', color: '#ffd700' },
    { id: 2, title: 'Sequência de Ferro', icon: '🔥', description: '30 dias consecutivos', rarity: 'Epic', color: '#ff6b35' },
    { id: 3, title: 'Mestre do Treino', icon: '💪', description: '100 treinos completados', rarity: 'Rare', color: '#8a2be2' },
    { id: 4, title: 'Subida Meteórica', icon: '🚀', description: 'Subir 10 posições em uma semana', rarity: 'Epic', color: '#00f5ff' }
  ];

  const getCurrentLeaderboard = () => {
    switch (timeframe) {
      case 'week': return weeklyLeaderboard;
      case 'month': return monthlyLeaderboard;
      default: return globalLeaderboard;
    }
  };

  const getUserRank = () => {
    switch (timeframe) {
      case 'week': return currentUser.weeklyRank;
      case 'month': return currentUser.monthlyRank;
      default: return currentUser.rank;
    }
  };

  const LeaderboardList = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {getCurrentLeaderboard().map((player) => (
        <div
          key={player.rank}
          style={{
            background: player.isCurrentUser 
              ? 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)'
              : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2rem',
            border: player.isCurrentUser ? '3px solid #00f5ff' : '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            if (!player.isCurrentUser) {
              e.currentTarget.style.transform = 'translateX(5px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 245, 255, 0.1)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {player.isCurrentUser && (
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              color: '#000',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '700'
            }}>
              VOCÊ ESTÁ AQUI!
            </div>
          )}

          {player.premium && (
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 100%)',
              color: '#000',
              padding: '0.3rem 0.8rem',
              borderRadius: '15px',
              fontSize: '0.7rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              👑 PREMIUM
            </div>
          )}

          {/* Rank Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: player.rank <= 3 
              ? `linear-gradient(135deg, ${
                  player.rank === 1 ? '#ffd700, #ffed4e' : 
                  player.rank === 2 ? '#c0c0c0, #e8e8e8' : 
                  '#cd7f32, #ffa500'
                } )`
              : 'rgba(255, 255, 255, 0.2)',
            fontSize: '1.8rem',
            fontWeight: '900',
            color: player.rank <= 3 ? '#000' : '#fff',
            border: player.rank <= 3 ? '3px solid rgba(255, 255, 255, 0.3)' : '2px solid rgba(255, 255, 255, 0.1)'
          }}>
            {player.rank <= 3 ? player.rank : player.avatar}
          </div>

          {/* Player Info */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                color: '#fff', 
                margin: 0 
              }}>
                {player.country} {player.name}
              </h3>
              <span style={{
                background: 'rgba(138, 43, 226, 0.3)',
                color: '#8a2be2',
                padding: '0.3rem 0.8rem',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: '600',
                border: '1px solid rgba(138, 43, 226, 0.5)'
              }}>
                {player.badge}
              </span>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
              gap: '1rem', 
              fontSize: '0.9rem', 
              color: 'rgba(255, 255, 255, 0.8)' 
            }}>
              <div>
                <span style={{ color: '#8a2be2' }}>Nível:</span> {player.level}
              </div>
              <div>
                <span style={{ color: '#00f5ff' }}>Pontos:</span> {player.points.toLocaleString()}
              </div>
              <div>
                <span style={{ color: '#10b981' }}>Treinos:</span> {player.workouts}
              </div>
              <div>
                <span style={{ color: '#ff6b35' }}>Sequência:</span> {player.streak} dias
              </div>
            </div>
          </div>

          {/* Position Number */}
          <div style={{
            fontSize: player.rank <= 3 ? '3rem' : '2rem',
            fontWeight: '900',
            color: player.rank <= 3 ? '#ffd700' : '#00f5ff',
            textAlign: 'center'
          }}>
            #{player.rank}
          </div>
        </div>
      ))}
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
        {/* User Position Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)',
          backdropFilter: 'blur(20px)',
          borderRadius: '25px',
          padding: '2rem',
          border: '3px solid rgba(255, 215, 0, 0.5)',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            🏆 Ranking Global
          </h1>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#ffd700',
                marginBottom: '0.5rem'
              }}>
                #{getUserRank()}
              </div>
              <div style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Sua Posição
              </div>
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#00f5ff',
                marginBottom: '0.5rem'
              }}>
                {currentUser.totalPoints.toLocaleString()}
              </div>
              <div style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Pontos Totais
              </div>
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#8a2be2',
                marginBottom: '0.5rem'
              }}>
                {currentUser.level}
              </div>
              <div style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Nível Atual
              </div>
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#ff6b35',
                marginBottom: '0.5rem'
              }}>
                {currentUser.streak}
              </div>
              <div style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Dias de Sequência
              </div>
            </div>
          </div>
        </div>

        {/* Time Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'week', label: 'Semanal', icon: '📅' },
            { id: 'month', label: 'Mensal', icon: '🗓️' },
            { id: 'all', label: 'Geral', icon: '🌍' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setTimeframe(filter.id)}
              style={{
                background: timeframe === filter.id 
                  ? 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: timeframe === filter.id ? '#000' : '#fff',
                border: timeframe === filter.id ? 'none' : '2px solid rgba(255, 255, 255, 0.2)',
                padding: '1rem 2rem',
                borderRadius: '20px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem'
              }}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Leaderboard */}
        <LeaderboardList />

        {/* Recent Achievements */}
        <section style={{ marginTop: '4rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #8a2be2 0%, #00f5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}>
            🏅 Conquistas Recentes da Comunidade
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: `2px solid ${achievement.color}30`,
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{achievement.icon}</div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  {achievement.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '1rem'
                }}>
                  {achievement.description}
                </p>
                <span style={{
                  background: achievement.color + '30',
                  color: achievement.color,
                  padding: '0.3rem 1rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  border: `1px solid ${achievement.color}50`
                }}>
                  {achievement.rarity}
                </span>
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
            { icon: '📈', label: 'Estatísticas', active: false, href: '/estatisticas' },
            { icon: '🏆', label: 'Ranking', active: true, href: '/leaderboard' },
            { icon: '🛒', label: 'Loja', active: false, href: '/loja' },
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
