import '../shared/styles/globals-temp.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Muscle Levels — Plataforma de Performance Fitness',
  description: 'Transforme seu corpo com avaliações precisas, treinos personalizados e acompanhamento completo de performance.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-slate-900">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}