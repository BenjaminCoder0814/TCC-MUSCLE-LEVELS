"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface User {
  name: string;
  avatar: string;
  level: number;
  points: number;
}

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isAuthPage = pathname?.startsWith('/auth/') || pathname === '/login' || pathname === '/register';
  const isHomePage = pathname === '/';

  useEffect(() => {
    const savedUser = localStorage.getItem('muscleLevel_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/dashboard', label: 'TREINOS', icon: '💪', active: pathname === '/dashboard' },
    { href: '/loja', label: 'LOJA', icon: '🛒', active: pathname === '/loja' },
    { href: '/gamification', label: 'RANKING', icon: '🏆', active: pathname === '/gamification' },
    { href: '/ai-chat', label: 'AI CHAT', icon: '🤖', active: pathname === '/ai-chat', badge: true }
  ];

  const logout = () => {
    localStorage.removeItem('muscleLevel_user');
    setUser(null);
    window.location.href = '/';
  };

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Global Header */}
      {!isHomePage && (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-orange-500/30' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="/" className="flex items-center gap-4 group z-50">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    💪
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-3xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-orange-700 transition-all duration-300 tracking-wider">
                    M U S C L E   L E V E L
                  </h1>
                  <span className="text-sm text-orange-500 font-bold tracking-widest">F I T N E S S   P L A T F O R M</span>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 ${item.active ? 'text-orange-400 bg-orange-500/20 shadow-lg' : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10'}`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                    {item.badge && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </a>
                ))}
                
                <div className="h-8 w-px bg-gray-600"></div>
                
                <a
                  href="/premium"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
                >
                  <span className="text-yellow-300">👑</span>
                  PREMIUM
                </a>
              </nav>

              {/* User Info & Mobile Menu */}
              <div className="flex items-center gap-4">
                {user ? (
                  <>
                    <div className="hidden md:flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-orange-500/30 rounded-2xl px-4 py-2">
                      <div className="text-2xl">{user.avatar}</div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white">{user.name}</span>
                        <span className="text-xs text-orange-400">Nível {user.level} • {user.points} pts</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={logout}
                      className="hidden md:flex bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded-xl hover:bg-red-500/30 transition-colors font-semibold"
                    >
                      Sair
                    </button>
                  </>
                ) : (
                  <div className="hidden md:flex items-center gap-3">
                    <a
                      href="/auth/login"
                      className="text-gray-300 hover:text-orange-400 font-semibold px-4 py-2 rounded-xl transition-colors"
                    >
                      Entrar
                    </a>
                    <a
                      href="/auth/register"
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transform transition-all duration-300"
                    >
                      Cadastrar
                    </a>
                  </div>
                )}

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden w-10 h-10 bg-orange-500/20 border border-orange-500/50 rounded-xl flex items-center justify-center text-orange-400 hover:bg-orange-500/30 transition-colors"
                >
                  <div className="w-5 h-5 flex flex-col justify-center gap-1">
                    <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-orange-500/30">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <nav className="flex flex-col gap-4 mb-6">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${item.active ? 'text-orange-400 bg-orange-500/20' : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.label}
                      {item.badge && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </a>
                  ))}
                </nav>
                
                {user ? (
                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{user.avatar}</div>
                      <div>
                        <div className="font-bold text-white">{user.name}</div>
                        <div className="text-sm text-orange-400">Nível {user.level} • {user.points} pts</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl hover:bg-red-500/30 transition-colors font-semibold"
                    >
                      Sair
                    </button>
                  </div>
                ) : (
                  <div className="border-t border-gray-700 pt-6 flex flex-col gap-3">
                    <a
                      href="/auth/login"
                      className="text-center text-gray-300 hover:text-orange-400 font-semibold px-4 py-3 rounded-xl border border-gray-600 hover:border-orange-500/50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Entrar
                    </a>
                    <a
                      href="/auth/register"
                      className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-xl font-bold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Cadastrar
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </header>
      )}

      {/* Main Content */}
      <main className={!isHomePage ? "pt-20" : ""}>
        {children}
      </main>

      {/* Global Footer */}
      {!isHomePage && (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">
                  💪
                </div>
                <div>
                  <h3 className="text-4xl font-black tracking-wider text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text">
                    M U S C L E   L E V E L
                  </h3>
                  <p className="text-orange-500 font-bold tracking-widest">F I T N E S S   P L A T F O R M</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A revolução fitness que está <span className="text-orange-400 font-bold">transformando vidas</span> ao redor do mundo.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-black mb-6 text-orange-400 flex items-center gap-2">
                  <span>🚀</span> PLATAFORMA
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "Treinos IA", href: "/dashboard", icon: "🎯" },
                    { label: "Loja FitPoints", href: "/loja", icon: "🛒" },
                    { label: "Ranking", href: "/gamification", icon: "🏆" },
                    { label: "AI Especialistas", href: "/ai-chat", icon: "🤖" }
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                        <span className="group-hover:scale-125 transition-transform">{link.icon}</span>
                        <span className="font-semibold">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-black mb-6 text-orange-400 flex items-center gap-2">
                  <span>👑</span> PREMIUM
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "Planos Premium", href: "/premium", icon: "💎" },
                    { label: "Suporte VIP", href: "/support", icon: "🎧" },
                    { label: "Treinos Exclusivos", href: "/exclusive", icon: "⭐" },
                    { label: "Personal AI", href: "/personal-ai", icon: "🧠" }
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                        <span className="group-hover:scale-125 transition-transform">{link.icon}</span>
                        <span className="font-semibold">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-black mb-6 text-orange-400 flex items-center gap-2">
                  <span>📚</span> RECURSOS
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "Blog Fitness", href: "/blog", icon: "📝" },
                    { label: "Guias Gratuitos", href: "/guides", icon: "📖" },
                    { label: "Calculadoras", href: "/calculators", icon: "🧮" },
                    { label: "Exercícios", href: "/exercises", icon: "💪" }
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                        <span className="group-hover:scale-125 transition-transform">{link.icon}</span>
                        <span className="font-semibold">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-black mb-6 text-orange-400 flex items-center gap-2">
                  <span>🌐</span> CONTATO
                </h4>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-500/30 mb-6 backdrop-blur-sm">
                  <h5 className="font-bold text-orange-400 mb-4">FALE CONOSCO</h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <span>📧</span>
                      <span>suporte@musclelevel.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>📱</span>
                      <span>+55 (11) 98765-4321</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>🏢</span>
                      <span>São Paulo, Brasil</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-orange-400 mb-4">REDES SOCIAIS</h5>
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
                        className={`w-12 h-12 bg-gradient-to-br ${social.bg} rounded-xl flex items-center justify-center text-xl text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                        title={social.name}
                      >
                        {social.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">👑</span>
                <h4 className="text-2xl font-black">UPGRADE PARA PREMIUM</h4>
              </div>
              <p className="text-lg mb-6 opacity-90">
                Desbloqueie o poder completo da plataforma
              </p>
              <a 
                href="/premium" 
                className="bg-white text-orange-500 px-8 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 inline-flex items-center gap-3"
              >
                <span className="text-xl">⚡</span>
                VER PLANOS
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 bg-black/70 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid lg:grid-cols-3 gap-6 items-center">
                <div className="text-gray-400 text-center lg:text-left">
                  <p className="font-semibold">© 2024 MuscleLevel Technology Ltd.</p>
                  <p className="text-sm mt-1">Todos os direitos reservados.</p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-300 font-semibold">🚀 Transformando vidas através da tecnologia fitness</p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 text-sm">
                  <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold">
                    Privacidade
                  </a>
                  <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold">
                    Termos de Uso
                  </a>
                  <a href="/cookies" className="text-gray-400 hover:text-orange-400 transition-colors font-semibold">
                    Cookies
                  </a>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    <span>🇧🇷</span>
                    <span className="font-semibold">Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Mobile Bottom Navigation */}
      {user && !isHomePage && (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-orange-500/30 z-40">
          <div className="grid grid-cols-4 p-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-colors ${item.active ? 'text-orange-400 bg-orange-500/20' : 'text-gray-400 hover:text-orange-400'}`}
              >
                <div className="relative">
                  <span className="text-xl">{item.icon}</span>
                  {item.badge && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  )}
                </div>
                <span className="text-xs font-semibold">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
