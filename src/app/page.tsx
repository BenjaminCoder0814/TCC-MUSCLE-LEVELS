import Link from 'next/link'

export default function Home() {
  return (
    <section className="min-h-[70vh]">
      <header className="relative rounded-lg overflow-hidden p-8">
        {/* Background com imagem e overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90 z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-5"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), 
              url('/images/360_F_1438986864_q2BfKmyIBtz2sjk6efJUtK4QYoozGOHX.jpg'),
              url('/images/gym-hero-bg.jpg'),
              url('/images/fitness-bg.jpg'),
              linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #db2777 100%)
            `
          }}
        ></div>
        
        {/* Animação de partículas sutis */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-40 animate-ping"></div>
          <div className="absolute bottom-20 right-40 w-1 h-1 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
        </div>
        
        <div className="relative z-20 max-w-screen-xl mx-auto px-4 md:px-8 text-white">
          <div className="space-y-3">
            <h1 className="text-3xl text-white font-bold sm:text-4xl md:text-5xl drop-shadow-lg">
              Transforme seu corpo com a <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Muscle Levels</span> 💪
            </h1>
            <p className="max-w-xl leading-relaxed sm:mx-0 text-slate-200 drop-shadow-md">
              A plataforma brasileira mais completa para fitness. <strong>Análise corporal avançada</strong>, 
              treinos com IA e acompanhamento profissional em um só lugar.
            </p>
          </div>
          <div className="mt-6 items-center justify-between sm:flex">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-x-2 text-sm text-green-400 font-medium">
                <span className="block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                ✅ 100% Gratuito para começar
              </div>
              <div className="flex items-center gap-x-2 text-sm text-blue-300">
                <span className="block w-2 h-2 rounded-full bg-blue-400"></span>
                🔒 Dados protegidos
              </div>
              <div className="flex items-center gap-x-2 text-sm text-purple-300">
                <span className="block w-2 h-2 rounded-full bg-purple-400"></span>
                ✨ Resultados comprovados
              </div>
            </div>
            <div className="flex gap-3 mt-4 sm:mt-0">
              <Link 
                href="/pt/treinos" 
                className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🏃‍♂️ Treinar Agora
              </Link>
              <Link 
                href="/pt/auth/signup" 
                className="inline-flex items-center px-6 py-3 text-blue-600 bg-white/90 backdrop-blur-sm rounded-lg font-semibold hover:bg-white transition-all duration-200 shadow-lg"
              >
                👤 Cadastrar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Seção de Estatísticas */}
      <div className="bg-white/90 backdrop-blur-sm border-t border-b border-gray-200 py-8 -mt-1">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 sm:text-3xl">15.4K+</div>
              <div className="text-sm font-medium text-gray-700">Usuários Ativos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600 sm:text-3xl">89%</div>
              <div className="text-sm font-medium text-gray-700">Taxa de Sucesso</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600 sm:text-3xl">2.5M+</div>
              <div className="text-sm font-medium text-gray-700">Treinos Realizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-600 sm:text-3xl">4.8★</div>
              <div className="text-sm font-medium text-gray-700">Avaliação</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          
          <div className="p-6 border rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-lg text-blue-900 mb-2">Avaliação Completa</h3>
            <p className="text-blue-800 leading-relaxed">
              IMC, composição corporal, taxa metabólica e análise postural completa com tecnologia avançada.
            </p>
          </div>
          
          <div className="p-6 border rounded-xl bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🏋️</span>
            </div>
            <h3 className="font-bold text-lg text-green-900 mb-2">Treinos com IA</h3>
            <p className="text-green-800 leading-relaxed">
              Exercícios adaptados ao seu nível, objetivos e equipamentos disponíveis usando inteligência artificial.
            </p>
          </div>
          
          <div className="p-6 border rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-bold text-lg text-purple-900 mb-2">Acompanhamento Pro</h3>
            <p className="text-purple-800 leading-relaxed">
              Gráficos de progresso em tempo real, métricas de performance e relatórios científicos detalhados.
            </p>
          </div>
          
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between">
              <div className="mb-6 sm:mb-0 sm:pr-8">
                <h2 className="text-2xl font-bold mb-2 sm:text-3xl">
                  🚀 Comece sua transformação hoje
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Mais de <strong>15.400 pessoas</strong> já transformaram seus corpos com nossa 
                  metodologia científica. <span className="text-yellow-300">Seja o próximo!</span>
                </p>
                <div className="flex items-center mt-4 justify-center sm:justify-start">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-yellow-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-blue-200">+15.400 pessoas transformadas</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link 
                  href="/pt/treinos" 
                  className="inline-flex items-center justify-center px-8 py-4 text-blue-600 bg-white rounded-xl font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <span className="mr-2">💪</span>
                  Começar Treino Grátis
                </Link>
                <Link 
                  href="/pt/auth/signup" 
                  className="inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  <span className="mr-2">✨</span>
                  Criar Conta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}