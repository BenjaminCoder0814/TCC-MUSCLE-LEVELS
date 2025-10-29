'use client'

import { useCurrentUser } from '@/entities/user/model/useCurrentUser'
import { useCurrentLocale } from 'locales/client'
import Link from 'next/link'
import { LogIn, Lock } from 'lucide-react'

interface AuthGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const currentUser = useCurrentUser()
  const locale = useCurrentLocale()

  if (!currentUser) {
    return fallback || (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Acesso Restrito
          </h3>
          <p className="text-gray-600 mb-8">
            Você precisa estar logado para acessar suas estatísticas personalizadas.
          </p>
          <div className="space-y-4">
            <Link 
              href={`/${locale}/auth/signin`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              <LogIn className="w-5 h-5" />
              Fazer Login
            </Link>
            <div className="text-sm text-gray-500">
              Não tem conta?{' '}
              <Link href={`/${locale}/auth/signup`} className="text-blue-600 hover:text-blue-700 font-medium">
                Cadastre-se grátis
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}