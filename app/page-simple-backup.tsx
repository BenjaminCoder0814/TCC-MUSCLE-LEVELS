export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header simples */}
      <header className="p-6 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">💪</div>
            <h1 className="text-2xl font-bold text-orange-500">MuscleLevel</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/treinos" className="hover:text-orange-500 transition-colors">Dashboard</a>
            <a href="/treinos" className="hover:text-orange-500 transition-colors">Treinos</a>
            <a href="/sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            MUSCLELEVEL
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Plataforma profissional de fitness com treinos personalizados e acompanhamento científico
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/treinos"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Começar Treino
            </a>
            
            <a
              href="/treinos"
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              📚 Ver Exercícios
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Treinos Personalizados</h3>
              <p className="text-gray-400">Exercícios adaptados ao seu nível e objetivos</p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Progresso Detalhado</h3>
              <p className="text-gray-400">Acompanhe sua evolução com métricas precisas</p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Resultados Garantidos</h3>
              <p className="text-gray-400">Método científico comprovado para resultados reais</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 border-t border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 MuscleLevel. Transformando vidas através do fitness.</p>
        </div>
      </footer>
    </div>
  );
}
