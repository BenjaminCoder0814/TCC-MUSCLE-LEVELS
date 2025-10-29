'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useCurrentLocale } from 'locales/client'
import { Dumbbell, Grid, Activity, Hammer, Trophy, Crown, BarChart3, Users, Star } from 'lucide-react'
import { useCurrentUser } from '@/entities/user/model/useCurrentUser'
import { NotificationDropdown } from '@/components/ui/notification-dropdown'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageSelector } from '@/components/ui/language-selector'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userPoints, setUserPoints] = useState(0)
  const locale = useCurrentLocale()
  const currentUser = useCurrentUser()

  // Fetch user points based on workout sessions
  useEffect(() => {
    if (currentUser) {
      // Simulate points calculation based on user activity
      // In a real implementation, this would fetch from an API
      const simulatedPoints = Math.floor(Math.random() * 1000) + 100
      setUserPoints(simulatedPoints)
    }
  }, [currentUser])

  const navigationItems = [
    {
      id: "workouts",
      label: "Treinos",
      href: `/${locale}/treinos`,
      icon: Dumbbell,
      emoji: "💪",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "programs", 
      label: "Programas",
      href: `/${locale}/programs`,
      icon: Grid,
      emoji: "📋",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "statistics",
      label: "Estatísticas", 
      href: `/${locale}/statistics`,
      icon: Activity,
      emoji: "📊",
      color: "from-purple-500 to-violet-500"
    },
    {
      id: "tools",
      label: "Ferramentas",
      href: `/${locale}/tools`, 
      icon: Hammer,
      emoji: "🔧",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "leaderboard",
      label: "Ranking",
      href: `/${locale}/leaderboard`,
      icon: Trophy,
      emoji: "🏆", 
      color: "from-yellow-500 to-amber-500"
    },
    {
      id: "premium",
      label: "Premium",
      href: `/${locale}/premium`,
      icon: Crown,
      emoji: "👑",
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="max-w-screen-xl mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">💪</span>
            </div>
            <Link href={`/${locale}`} className="text-xl font-bold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              Muscle Levels
            </Link>
          </div>

          {/* Desktop Navigation com Ícones */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link 
                  key={item.id}
                  href={item.href} 
                  className="group flex flex-col items-center px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-1 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            {/* Points Display (only when logged in) */}
            {currentUser && (
              <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 px-3 py-1.5 rounded-full border border-yellow-200 dark:border-yellow-700">
                <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400" />
                <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">{userPoints.toLocaleString()} pontos</span>
              </div>
            )}

            {/* Notification, Theme Toggle, and Language Selector */}
            {currentUser && <NotificationDropdown />}
            <ThemeToggle />
            <LanguageSelector />

            {/* Login/User Actions for Desktop */}
            <div className="hidden md:flex items-center space-x-3 ml-2">
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Olá, {currentUser.name}</span>
                  <Link href={`/${locale}/auth/signout`} className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors">
                    Sair
                  </Link>
                </div>
              ) : (
                <>
                  <Link href={`/${locale}/auth/signin`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                    Entrar
                  </Link>
                  <Link href={`/${locale}/auth/signup`} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 font-medium transition-all transform hover:scale-105">
                    Cadastrar
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 gap-1 p-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link 
                    key={item.id}
                    href={item.href} 
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-2`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">{item.label}</span>
                  </Link>
                )
              })}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-2 bg-gray-50 dark:bg-gray-900">
              {/* Points Display Mobile (only when logged in) */}
              {currentUser && (
                <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 px-3 py-2 rounded-lg border border-yellow-200 dark:border-yellow-700 mb-2">
                  <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400" />
                  <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">{userPoints.toLocaleString()} pontos</span>
                </div>
              )}
              
              {currentUser ? (
                <div className="space-y-2">
                  <div className="text-center py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">Olá, {currentUser.name}</div>
                  <Link href={`/${locale}/auth/signout`} className="block py-2 px-4 text-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors">Sair</Link>
                </div>
              ) : (
                <>
                  <Link href={`/${locale}/auth/signin`} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors">Entrar</Link>
                  <Link href={`/${locale}/auth/signup`} className="block py-2 px-4 text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 font-medium transition-all">Cadastrar</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}