import Link from 'next/link'

export default function Home() {
  return (
    <section className="min-h-[70vh]">
      <header className="rounded-lg bg-gradient-to-r from-black via-slate-800 to-slate-900 p-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-white">
          <div className="space-y-3">
            <h1 className="text-3xl text-white font-bold sm:text-4xl md:text-5xl">
              💪 Transforme seu corpo com a Muscle Levels
            </h1>
            <p className="max-w-xl leading-relaxed sm:mx-0 text-slate-200">
              Plataforma completa de performance fitness com avaliação corporal, treinos personalizados 
              e acompanhamento de resultados baseado em ciência.
            </p>
          </div>
          <div className="mt-4 items-center justify-between sm:flex">
            <div className="flex items-center gap-x-3 text-sm text-slate-300">
              <span className="block w-2 h-2 rounded-full bg-green-400"></span>
              Gratuito para começar
            </div>
            <Link 
              href="/programs" 
              className="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 sm:mt-0"
            >
              Começar Avaliação
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">🎯 Avaliação Completa</h3>
            <p className="mt-2 text-gray-600">
              IMC, composição corporal, taxa metabólica e análise postural completa.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">🏋️ Treinos Personalizados</h3>
            <p className="mt-2 text-gray-600">
              Exercícios adaptados ao seu nível, objetivos e equipamentos disponíveis.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">📊 Acompanhamento</h3>
            <p className="mt-2 text-gray-600">
              Gráficos de progresso, métricas de performance e relatórios detalhados.
            </p>
          </div>
          
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-900">Comece sua jornada fitness hoje</h2>
          <p className="mt-2 text-blue-800">
            Mais de 10.000 pessoas já transformaram seus corpos com nossa metodologia científica.
          </p>
          <div className="mt-4 space-x-3">
            <Link 
              href="/auth/signup" 
              className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500"
            >
              Cadastrar Grátis
            </Link>
            <Link 
              href="/programs" 
              className="inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
            >
              Ver Programas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}