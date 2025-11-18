'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    { href: '/treinos', label: 'TREINOS', icon: '💪', active: pathname === '/treinos' },
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
    return <div>{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {!isHomePage && (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg border-b border-gray-800' : 'bg-black/80 backdrop-blur-md'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-lg group-hover:scale-105 transition-all duration-200 shadow-md">
                    💪
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    MUSCLE LEVEL
                  </h1>
                </div>
              </a>

              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      item.active 
                        ? 'text-white bg-orange-600 shadow-md' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                    {item.badge && (
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                  </a>
                ))}
                
                <div className="h-6 w-px bg-gray-600 mx-3"></div>
                
                <a
                  href="/premium"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:scale-105 transform transition-all duration-200 flex items-center gap-2 shadow-md"
                >
                  <span>👑</span>
                  <span>PREMIUM</span>
                </a>
              </nav>

              <div className="flex items-center gap-3">
                {user ? (
                  <>
                    <div className="hidden md:flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2">
                      <div className="text-xl">{user.avatar}</div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-white text-sm">{user.name}</span>
                        <div className="flex items-center gap-1 text-xs">
                          <span className="text-orange-400">Lv.{user.level}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-green-400">{user.points}p</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={logout}
                      className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      Sair
                    </button>
                  </>
                ) : (
                  <div className="hidden md:flex items-center gap-2">
                    <a
                      href="/auth/login"
                      className="text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                      Entrar
                    </a>
                    <a
                      href="/auth/register"
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200"
                    >
                      Cadastrar
                    </a>
                  </div>
                )}

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                >
                  <div className="w-4 h-4 flex flex-col justify-center gap-0.5">
                    <div className={`h-0.5 bg-current transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                    <div className={`h-0.5 bg-current transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`h-0.5 bg-current transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${item.active ? 'text-white bg-orange-600' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                    {item.badge && (
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto"></div>
                    )}
                  </a>
                ))}
                
                <div className="h-px bg-gray-700 my-3"></div>
                
                <a
                  href="/premium"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>👑</span>
                  <span>PREMIUM</span>
                </a>
                
                {user ? (
                  <div className="border-t border-gray-700 pt-3 space-y-3">
                    <div className="flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-lg px-3 py-3">
                      <div className="text-xl">{user.avatar}</div>
                      <div>
                        <div className="font-semibold text-white">{user.name}</div>
                        <div className="text-sm text-orange-400">Lv.{user.level} • {user.points}p</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                ) : (
                  <div className="border-t border-gray-700 pt-3 space-y-2">
                    <a
                      href="/auth/login"
                      className="block text-center text-gray-300 hover:text-white font-medium px-4 py-3 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Entrar
                    </a>
                    <a
                      href="/auth/register"
                      className="block text-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-lg font-semibold"
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

      <main className={!isHomePage ? "pt-16" : ""}>
        {children}
      </main>

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
                    { label: "Treinos IA", href: "/treinos", icon: "🎯" },
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
