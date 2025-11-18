import Link from "next/link";

export default function GlobalFooter() {
  return (
    <>
      {/* Ultra Professional Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Top Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">
                💪
              </div>
              <div>
                <h3 className="text-5xl font-black tracking-wider">
                  M U S C L E <span className="text-orange-500">L E V E L</span>
                </h3>
                <p className="text-gray-400 font-bold tracking-widest">F I T N E S S   P L A T F O R M</p>
              </div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A revolução fitness que está <span className="text-orange-400 font-bold">transformando vidas</span> ao redor do mundo. 
              Junte-se aos <span className="text-green-400 font-bold">50.000+ membros</span> que já alcançaram seus objetivos.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Platform Links */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>🚀</span> PLATAFORMA
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Treinos Inteligentes", href: "/treinos", icon: "🎯" },
                  { label: "Loja FitPoints", href: "/loja", icon: "🛒" },
                  { label: "Sistema de Ranking", href: "/gamification", icon: "🏆" },
                  { label: "AI Especialistas", href: "/ai-chat", icon: "🤖" },
                  { label: "Analytics Pro", href: "/analytics", icon: "📊" },
                  { label: "Comunidade", href: "/community", icon: "👥" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                      <span className="group-hover:scale-125 transition-transform text-lg">{link.icon}</span>
                      <span className="font-semibold">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium & Support */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>👑</span> PREMIUM
              </h4>
              <ul className="space-y-4 mb-8">
                {[
                  { label: "Planos Premium", href: "/premium", icon: "💎" },
                  { label: "Suporte VIP 24/7", href: "/support", icon: "🎧" },
                  { label: "Treinos Exclusivos", href: "/exclusive", icon: "⭐" },
                  { label: "Personal AI", href: "/personal-ai", icon: "🧠" },
                  { label: "Análises Avançadas", href: "/advanced", icon: "📈" },
                  { label: "Coaching Elite", href: "/coaching", icon: "🏅" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                      <span className="group-hover:scale-125 transition-transform text-lg">{link.icon}</span>
                      <span className="font-semibold">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>📚</span> RECURSOS
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Blog Fitness", href: "/blog", icon: "📝" },
                  { label: "Guias Gratuitos", href: "/guides", icon: "📖" },
                  { label: "Calculadoras", href: "/calculators", icon: "🧮" },
                  { label: "Exercícios Database", href: "/exercises", icon: "💪" },
                  { label: "Nutrição", href: "/nutrition", icon: "🥗" },
                  { label: "API Developers", href: "/api", icon: "⚙️" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                      <span className="group-hover:scale-125 transition-transform text-lg">{link.icon}</span>
                      <span className="font-semibold">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>🏢</span> EMPRESA
              </h4>
              <ul className="space-y-4 mb-8">
                {[
                  { label: "Sobre Nós", href: "/about", icon: "ℹ️" },
                  { label: "Carreiras", href: "/careers", icon: "💼" },
                  { label: "Imprensa", href: "/press", icon: "📰" },
                  { label: "Investidores", href: "/investors", icon: "💰" },
                  { label: "Parcerias", href: "/partners", icon: "🤝" },
                  { label: "Contato", href: "/contact", icon: "📧" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 group transform hover:translate-x-2">
                      <span className="group-hover:scale-125 transition-transform text-lg">{link.icon}</span>
                      <span className="font-semibold">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-black mb-8 text-orange-400 flex items-center gap-2">
                <span>🌐</span> CONECTE-SE
              </h4>
              
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl p-6 border border-orange-500/30 mb-8 backdrop-blur-sm">
                <h5 className="font-bold text-orange-400 mb-4 text-lg">CONTATO DIRETO</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📧</span>
                    <span className="font-semibold">suporte@musclelevel.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📱</span>
                    <span className="font-semibold">+55 (11) 98765-4321</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏢</span>
                    <span className="font-semibold">São Paulo, Brasil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⏰</span>
                    <span className="font-semibold">24/7 Suporte</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-bold text-orange-400 mb-4 text-lg">REDES SOCIAIS</h5>
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
                      className={`w-14 h-14 bg-gradient-to-br ${social.bg} rounded-2xl flex items-center justify-center text-2xl text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                      title={social.name}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter & CTA */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700 backdrop-blur-sm">
              <h4 className="text-3xl font-black mb-4 text-orange-400">📬 NEWSLETTER PREMIUM</h4>
              <p className="text-gray-300 mb-6 text-lg">
                Receba dicas exclusivas, novidades e conteúdo VIP diretamente no seu email.
              </p>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transform transition-all duration-300 whitespace-nowrap">
                  INSCREVER-SE
                </button>
              </div>
            </div>

            {/* Premium CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-5xl">👑</span>
                <h4 className="text-3xl font-black">UPGRADE PREMIUM</h4>
              </div>
              <p className="text-xl mb-6 opacity-90">
                Desbloqueie o poder completo da plataforma
              </p>
              <a 
                href="/premium" 
                className="bg-white text-orange-500 px-10 py-4 rounded-full font-black text-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 inline-flex items-center gap-3"
              >
                <span className="text-2xl">⚡</span>
                VER PLANOS
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-black/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-gray-400 text-center lg:text-left">
                <p className="font-semibold">© 2024 MuscleLevel Technology Ltd.</p>
                <p className="text-sm mt-1">Todos os direitos reservados mundialmente.</p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 font-semibold">🚀 Transformando vidas através da tecnologia fitness</p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 text-sm">
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

        {/* Security & Certifications */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span className="text-sm font-semibold">SSL Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span className="text-sm font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <span className="text-sm font-semibold">Certificado Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span className="text-sm font-semibold">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌟</span>
                <span className="text-sm font-semibold">5 Estrelas</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Navigation */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex flex-col gap-3">
          {/* Quick Access Buttons */}
          <a
            href="/treinos"
            className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300"
            title="Iniciar Treino"
          >
            💪
          </a>
          <a
            href="/ai-chat"
            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 relative"
            title="AI Chat"
          >
            🤖
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          </a>
          <a
            href="/premium"
            className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300"
            title="Premium"
          >
            👑
          </a>
        </div>
      </div>
    </>
  );
}
