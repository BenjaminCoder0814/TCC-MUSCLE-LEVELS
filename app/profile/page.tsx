"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading] = useState(false);
  
  // Mock data
  const mockUser = {
    name: "FitBot User",
    email: "user@muscle-level.com",
    image: null,
    points: 1250,
    level: 12,
    workoutsCompleted: 45,
    totalTimeMinutes: 2340,
    streak: 7
  };

  const achievements = [
    { name: "Primeiro Treino", description: "Complete seu primeiro treino", icon: "🏃‍♂️", unlocked: true },
    { name: "Consistency King", description: "7 dias seguidos treinando", icon: "👑", unlocked: true },
    { name: "Power User", description: "1000 FitPoints", icon: "⭐", unlocked: true },
    { name: "Marathon Runner", description: "100 treinos completos", icon: "🏆", unlocked: false },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando perfil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button 
            onClick={() => router.push('/')}
            className="text-blue-400 hover:text-blue-300 mb-4 flex items-center gap-2"
          >
            ← Voltar
          </button>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl text-white font-bold">
                {mockUser.name.charAt(0)}
              </div>
              
              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">{mockUser.name}</h1>
                <p className="text-blue-200 mb-4">{mockUser.email}</p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                    👑 Nível {mockUser.level}
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ {mockUser.points} FitPoints
                  </div>
                  <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    🔥 {mockUser.streak} dias seguidos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-3xl mb-2">🏋️‍♂️</div>
              <div className="text-2xl font-bold text-white">{mockUser.workoutsCompleted}</div>
              <div className="text-blue-200 text-sm">Treinos Completos</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="text-2xl font-bold text-white">{Math.floor(mockUser.totalTimeMinutes / 60)}h {mockUser.totalTimeMinutes % 60}m</div>
              <div className="text-blue-200 text-sm">Tempo Total</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-2xl font-bold text-white">{mockUser.level}</div>
              <div className="text-blue-200 text-sm">Nível Atual</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🏆 Conquistas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border-2 ${
                  achievement.unlocked 
                    ? 'bg-green-500/20 border-green-500/40 text-green-100' 
                    : 'bg-gray-500/20 border-gray-500/40 text-gray-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-bold">{achievement.name}</h3>
                    <p className="text-sm opacity-80">{achievement.description}</p>
                  </div>
                  {achievement.unlocked && (
                    <div className="ml-auto text-green-400">✓</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">⚡ Ações Rápidas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => router.push('/treinos')}
              className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
            >
              🏋️‍♂️ Ir para Treinos
            </button>
            
            <button 
              onClick={() => router.push('/loja')}
              className="p-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium"
            >
              🛍️ Loja FitPoints
            </button>
            
            <button 
              onClick={() => router.push('/ai-chat')}
              className="p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors font-medium"
            >
              🤖 Conversar com IA
            </button>
            
            <button 
              onClick={() => router.push('/gamification')}
              className="p-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl transition-colors font-medium"
            >
              🏆 Ver Ranking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
