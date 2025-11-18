import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MuscleLevel - Plataforma Profissional de Fitness",
    template: "%s | MuscleLevel"
  },
  description: "A plataforma mais avançada para transformar seu corpo e mente através do fitness profissional. Treinos personalizados, acompanhamento detalhado e resultados garantidos.",
  keywords: ["fitness", "academia", "treino", "musculação", "MuscleLevel", "personal trainer", "exercícios", "saúde"],
  authors: [{ name: "MuscleLevel Team" }],
  creator: "MuscleLevel",
  publisher: "MuscleLevel",
  applicationName: "MuscleLevel",
  category: "fitness",
  classification: "fitness app",
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://musclelevel.com',
    siteName: 'MuscleLevel',
    title: 'MuscleLevel - Plataforma Profissional de Fitness',
    description: 'A plataforma mais avançada para transformar seu corpo e mente através do fitness profissional',
    images: [
      {
        url: '/images/og-musclelevel.jpg',
        width: 1200,
        height: 630,
        alt: 'MuscleLevel - Fitness Profissional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MuscleLevel - Plataforma Profissional de Fitness',
    description: 'A plataforma mais avançada para transformar seu corpo e mente através do fitness profissional',
    images: ['/images/og-musclelevel.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
