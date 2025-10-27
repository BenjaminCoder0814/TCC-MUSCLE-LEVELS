export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-white">Muscle Levels</h4>
          <p className="mt-2 text-sm">
            Plataforma completa de performance fitness com avaliação corporal e treinos personalizados.
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-sm">📧 contato@musclelevels.com</p>
            <p className="text-sm">📱 (11) 99999-9999</p>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-white">Plataforma</h5>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/programs" className="hover:text-white">Programas</a></li>
            <li><a href="/tools" className="hover:text-white">Ferramentas</a></li>
            <li><a href="/statistics" className="hover:text-white">Estatísticas</a></li>
            <li><a href="/premium" className="hover:text-white">Premium</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white">Recursos</h5>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/tools/bmi-calculator" className="hover:text-white">Calculadora IMC</a></li>
            <li><a href="/tools/calorie-calculator" className="hover:text-white">Calculadora Calorias</a></li>
            <li><a href="/about" className="hover:text-white">Sobre nós</a></li>
            <li><a href="/contact" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white">Conecte-se</h5>
          <div className="mt-4 flex space-x-3">
            <a href="https://github.com/BenjaminCoder0814" className="text-slate-400 hover:text-white" target="_blank" rel="noopener">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.956 1.404-5.956s-.358-.715-.358-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 01.083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.012.001 12.017 0z"/>
              </svg>
            </a>
          </div>
          
          <div className="mt-6">
            <h6 className="text-sm font-medium text-white">Newsletter</h6>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Seu email..." 
                className="flex-1 px-3 py-2 text-sm text-gray-900 bg-white rounded-l border-0 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r hover:bg-blue-700">
                ✓
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Muscle Levels. Desenvolvido por <a href="https://github.com/BenjaminCoder0814" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener">Benjamin Maciel</a>.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="/privacy" className="hover:text-white">Privacidade</a>
            <a href="/terms" className="hover:text-white">Termos</a>
            <a href="/contact" className="hover:text-white">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  )
}