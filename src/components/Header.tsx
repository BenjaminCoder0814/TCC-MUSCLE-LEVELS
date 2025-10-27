import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <nav className="max-w-screen-xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">💪</span>
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600">
              Muscle Levels
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Início
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-blue-600 font-medium">
              Programas
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-blue-600 font-medium">
              Ferramentas
            </Link>
            <Link href="/statistics" className="text-gray-700 hover:text-blue-600 font-medium">
              Estatísticas
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              Sobre
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {/* Points Display */}
            <div className="hidden sm:flex items-center space-x-1 px-3 py-1 bg-yellow-100 rounded-full">
              <span className="text-yellow-600 text-sm">⭐</span>
              <span className="text-yellow-800 text-sm font-medium">1,250</span>
            </div>
            
            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15.5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">BM</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">Benjamin</p>
                <p className="text-xs text-gray-500">Premium</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 space-y-2 bg-white rounded-lg border p-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">Início</Link>
          <Link href="/programs" className="block py-2 text-gray-700 hover:text-blue-600">Programas</Link>
          <Link href="/tools" className="block py-2 text-gray-700 hover:text-blue-600">Ferramentas</Link>
          <Link href="/statistics" className="block py-2 text-gray-700 hover:text-blue-600">Estatísticas</Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">Sobre</Link>
        </div>
      </nav>
    </header>
  )
}