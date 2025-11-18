"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface UserStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  totalWorkouts: number;
  totalTime: number; // em minutos
  streak: number;
  maxStreak: number;
  fitPoints: number;
  badges: Badge[];
  achievements: Achievement[];
}

interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt: Date;
}

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
  progress: number;
  target: number;
  reward: {
    xp: number;
    fitPoints: number;
    badge?: Badge;
  };
  completed: boolean;
  completedAt?: Date;
}

interface DailyChallenge {
  id: number;
  name: string;
  description: string;
  icon: string;
  type: 'workout' | 'time' | 'exercises' | 'streak';
  target: number;
  progress: number;
  reward: {
    xp: number;
    fitPoints: number;
  };
  expiresAt: Date;
}

export default function GamificationPage() {
  const [userStats, setUserStats] = useState<UserStats>({
    level: 12,
    xp: 2340,
    xpToNextLevel: 2800,
    totalWorkouts: 87,
    totalTime: 1456, // minutos
    streak: 7,
    maxStreak: 21,
    fitPoints: 8450,
    badges: [
      {
        id: 1,
        name: "Primeiro Treino",
        description: "Complete seu primeiro treino",
        icon: "🎯",
        rarity: "common",
        unlockedAt: new Date("2024-01-15")
      },
      {
        id: 2,
        name: "Sequência de Fogo",
        description: "Mantenha uma sequência de 7 dias",
        icon: "🔥",
        rarity: "rare",
        unlockedAt: new Date("2024-01-22")
      },
      {
        id: 3,
        name: "Mestre dos Músculos",
        description: "Complete 50 treinos",
        icon: "💪",
        rarity: "epic",
        unlockedAt: new Date("2024-02-10")
      }
    ],
    achievements: []
  });

  const [dailyChallenges, setDailyChallenges] = useState<DailyChallenge[]>([
    {
      id: 1,
      name: "Treino Matinal",
      description: "Complete 1 treino hoje",
      icon: "🌅",
      type: "workout",
      target: 1,
      progress: 0,
      reward: { xp: 100, fitPoints: 50 },
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      name: "Maratona de 30 Min",
      description: "Treine por 30 minutos hoje",
      icon: "⏰",
      type: "time",
      target: 30,
      progress: 12,
      reward: { xp: 150, fitPoints: 75 },
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
    },
    {
      id: 3,
      name: "Explorador de Exercícios",
      description: "Experimente 5 exercícios diferentes",
      icon: "🔍",
      type: "exercises",
      target: 5,
      progress: 2,
      reward: { xp: 80, fitPoints: 40 },
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
    }
  ]);

  const achievements: Achievement[] = [
    {
      id: 1,
      name: "Iniciante Dedicado",
      description: "Complete 10 treinos",
      icon: "🏃‍♂️",
      category: "Treinos",
      progress: 87,
      target: 10,
      reward: { xp: 200, fitPoints: 100 },
      completed: true,
      completedAt: new Date("2024-01-20")
    },
    {
      id: 2,
      name: "Atleta Consistente",
      description: "Complete 50 treinos",
      icon: "🏆",
      category: "Treinos",
      progress: 87,
      target: 50,
      reward: { xp: 500, fitPoints: 250 },
      completed: true,
      completedAt: new Date("2024-02-10")
    },
    {
      id: 3,
      name: "Máquina de Treinar",
      description: "Complete 100 treinos",
      icon: "🔥",
      category: "Treinos",
      progress: 87,
      target: 100,
      reward: { xp: 1000, fitPoints: 500 },
      completed: false
    },
    {
      id: 4,
      name: "Sequência Iniciante",
      description: "Mantenha 3 dias consecutivos",
      icon: "📅",
      category: "Sequência",
      progress: 7,
      target: 3,
      reward: { xp: 150, fitPoints: 75 },
      completed: true,
      completedAt: new Date("2024-01-18")
    },
    {
      id: 5,
      name: "Sequência Veterano",
      description: "Mantenha 7 dias consecutivos",
      icon: "🌟",
      category: "Sequência",
      progress: 7,
      target: 7,
      reward: { xp: 300, fitPoints: 150 },
      completed: true,
      completedAt: new Date("2024-01-22")
    },
    {
      id: 6,
      name: "Sequência Lendária",
      description: "Mantenha 30 dias consecutivos",
      icon: "👑",
      category: "Sequência",
      progress: 7,
      target: 30,
      reward: { xp: 1500, fitPoints: 750 },
      completed: false
    },
    {
      id: 7,
      name: "Maratonista",
      description: "Treine por 500 minutos totais",
      icon: "⏱️",
      category: "Tempo",
      progress: 1456,
      target: 500,
      reward: { xp: 400, fitPoints: 200 },
      completed: true,
      completedAt: new Date("2024-02-01")
    },
    {
      id: 8,
      name: "Ultra Maratonista",
      description: "Treine por 1000 minutos totais",
      icon: "🏃‍♀️",
      category: "Tempo",
      progress: 1456,
      target: 1000,
      reward: { xp: 800, fitPoints: 400 },
      completed: true,
      completedAt: new Date("2024-02-15")
    },
    {
      id: 9,
      name: "Guerreiro do Tempo",
      description: "Treine por 2000 minutos totais",
      icon: "⚔️",
      category: "Tempo",
      progress: 1456,
      target: 2000,
      reward: { xp: 1200, fitPoints: 600 },
      completed: false
    }
  ];

  const levelUp = () => {
    if (userStats.xp >= userStats.xpToNextLevel) {
      setUserStats(prev => ({
        ...prev,
        level: prev.level + 1,
        xp: 0,
        xpToNextLevel: prev.xpToNextLevel + 500,
        fitPoints: prev.fitPoints + 100
      }));
    }
  };

  const completeChallenge = (challengeId: number) => {
    setDailyChallenges(prev => 
      prev.map(challenge => 
        challenge.id === challengeId 
          ? { ...challenge, progress: challenge.target }
          : challenge
      )
    );
    
    const challenge = dailyChallenges.find(c => c.id === challengeId);
    if (challenge) {
      setUserStats(prev => ({
        ...prev,
        xp: prev.xp + challenge.reward.xp,
        fitPoints: prev.fitPoints + challenge.reward.fitPoints
      }));
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-orange-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400';
      case 'rare': return 'border-blue-400';
      case 'epic': return 'border-purple-400';
      case 'legendary': return 'border-yellow-400';
      default: return 'border-gray-400';
    }
  };

  const xpPercentage = (userStats.xp / userStats.xpToNextLevel) * 100;
  
  const timeToHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}min` : `${mins}min`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/treinos" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                  Sistema de Gamificação
                </h1>
                <p className="text-xs text-gray-500">Level {userStats.level} • {userStats.fitPoints.toLocaleString()} FitPoints</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full">
                <span className="text-lg">🔥</span>
                <span className="font-bold">{userStats.streak} dias</span>
              </div>
              
              <a href="/treinos" className="text-gray-600 hover:text-blue-600 transition-colors">
                ← Treinos
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Player Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Level & XP */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {userStats.level}
              </div>
              <div>
                <h2 className="text-2xl font-bold">Level {userStats.level}</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {userStats.xp.toLocaleString()} / {userStats.xpToNextLevel.toLocaleString()} XP
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Progresso para o próximo level</span>
                <span>{xpPercentage.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500 relative"
                  style={{ width: `${xpPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">{userStats.totalWorkouts}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Treinos</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{timeToHours(userStats.totalTime)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tempo Total</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">{userStats.streak}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sequência Atual</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">{userStats.maxStreak}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Melhor Sequência</div>
              </div>
            </div>
          </div>

          {/* FitPoints */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-2">FitPoints</h3>
              <div className="text-4xl font-bold mb-4">{userStats.fitPoints.toLocaleString()}</div>
              <p className="text-sm opacity-90 mb-6">
                Ganhe pontos treinando e troque por produtos incríveis na loja!
              </p>
              <a 
                href="/loja" 
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-bold transition-colors inline-block"
              >
                🛒 Ir para Loja
              </a>
            </div>
          </div>
        </div>

        {/* Daily Challenges */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">🎯 Desafios Diários</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyChallenges.map((challenge) => {
              const progress = Math.min((challenge.progress / challenge.target) * 100, 100);
              const isCompleted = challenge.progress >= challenge.target;
              
              return (
                <div key={challenge.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{challenge.icon}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isCompleted ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {isCompleted ? 'Completo' : 'Em Progresso'}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{challenge.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {challenge.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>{challenge.progress} / {challenge.target}</span>
                      <span>{progress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Recompensa: {challenge.reward.xp} XP + {challenge.reward.fitPoints} FP
                    </div>
                    {!isCompleted && (
                      <button
                        onClick={() => completeChallenge(challenge.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                      >
                        Simular
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">🏆 Conquistas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => {
              const progress = Math.min((achievement.progress / achievement.target) * 100, 100);
              
              return (
                <div 
                  key={achievement.id} 
                  className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                    achievement.completed 
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800' 
                      : 'bg-white dark:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-3xl ${achievement.completed ? 'animate-bounce' : 'grayscale'}`}>
                      {achievement.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      achievement.completed 
                        ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200' 
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {achievement.category}
                    </div>
                  </div>
                  
                  <h3 className={`font-bold text-lg mb-2 ${achievement.completed ? 'text-green-700 dark:text-green-300' : ''}`}>
                    {achievement.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>{Math.min(achievement.progress, achievement.target)} / {achievement.target}</span>
                      <span>{progress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          achievement.completed 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-600'
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.reward.xp} XP + {achievement.reward.fitPoints} FP
                    </div>
                    {achievement.completed && (
                      <span className="text-green-600 font-bold text-sm">
                        ✅ Completo
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badge Collection */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">🎖️ Coleção de Badges</h2>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {userStats.badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className={`text-center p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${getRarityBorder(badge.rarity)}`}
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br ${getRarityColor(badge.rarity)}`}>
                    {badge.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{badge.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {badge.description}
                  </p>
                  <div className={`text-xs font-bold uppercase ${
                    badge.rarity === 'common' ? 'text-gray-600' :
                    badge.rarity === 'rare' ? 'text-blue-600' :
                    badge.rarity === 'epic' ? 'text-purple-600' :
                    'text-yellow-600'
                  }`}>
                    {badge.rarity}
                  </div>
                </div>
              ))}
              
              {/* Locked Badges */}
              {[1,2,3,4,5,6].map((i) => (
                <div key={`locked-${i}`} className="text-center p-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 opacity-50">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl bg-gray-200 dark:bg-gray-700">
                    🔒
                  </div>
                  <h4 className="font-bold text-sm mb-1">???</h4>
                  <p className="text-xs text-gray-500">Badge bloqueado</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Goals */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">📅 Metas Semanais</h2>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">💪</div>
                <h3 className="font-bold text-lg mb-2">5 Treinos</h3>
                <div className="bg-white/20 rounded-full h-4 mb-2">
                  <div className="bg-white h-4 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm opacity-90">3 / 5 completos</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">⏰</div>
                <h3 className="font-bold text-lg mb-2">150 Minutos</h3>
                <div className="bg-white/20 rounded-full h-4 mb-2">
                  <div className="bg-white h-4 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm opacity-90">68 / 150 minutos</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">🔥</div>
                <h3 className="font-bold text-lg mb-2">7 Dias Consecutivos</h3>
                <div className="bg-white/20 rounded-full h-4 mb-2">
                  <div className="bg-white h-4 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm opacity-90">7 / 7 dias ✅</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Preview */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">👥 Ranking da Semana</h2>
            <a href="/leaderboard" className="text-blue-600 hover:text-blue-700 font-medium">
              Ver Ranking Completo →
            </a>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { rank: 1, name: "Você", level: 12, xp: 2340, badge: "🥇" },
                  { rank: 2, name: "FitBot Elite", level: 15, xp: 2890, badge: "🥈" },
                  { rank: 3, name: "TrainBot Pro", level: 11, xp: 2120, badge: "🥉" },
                  { rank: 4, name: "Maria João", level: 14, xp: 2560, badge: "4°" },
                  { rank: 5, name: "Pedro Santos", level: 10, xp: 1980, badge: "5°" }
                ].map((user) => (
                  <div key={user.rank} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.badge}
                      </div>
                      <div>
                        <p className="font-bold">{user.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Level {user.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">{user.xp.toLocaleString()} XP</p>
                      <p className="text-sm text-gray-500">Esta semana</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl px-4 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            {[
              { icon: '💪', label: 'Treinos', href: '/treinos' },
              { icon: '📊', label: 'Programas', href: '/programas' },
              { icon: '🏆', label: 'Ranking', href: '/leaderboard' },
              { icon: '🎮', label: 'Gamification', href: '/gamification', active: true },
              { icon: '🛒', label: 'Loja', href: '/loja' },
              { icon: '👑', label: 'Premium', href: '/premium' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-colors group ${
                  item.active ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-xs font-medium hidden sm:block">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
