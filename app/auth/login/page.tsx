import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Muscle Levels",
  description: "Entre na sua conta Muscle Levels",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo de volta</h1>
          <p className="text-gray-600">Entre na sua conta para continuar</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Senha</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            Entrar
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-6">
          Não tem conta? <a href="/auth/register" className="text-blue-600 hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
