'use client'

import Link from "next/link"
import { ArrowRight, Dumbbell, Target, Grid3x3, BarChart3, Trophy } from "lucide-react"

interface PromoBannerProps {
  title: string
  description: string
  href: string
  ctaText?: string
  iconName?: "Dumbbell" | "Target" | "Grid3x3" | "BarChart3" | "Trophy"
  emoji?: string
  gradient?: string
  variant?: "primary" | "secondary" | "accent"
}

export default function PromoBanner({
  title,
  description,
  href,
  ctaText = "Saiba mais",
  iconName,
  emoji,
  gradient = "from-blue-500 to-cyan-500",
  variant = "primary"
}: PromoBannerProps) {
  const variants = {
    primary: "bg-gradient-to-r text-white shadow-lg",
    secondary: "bg-white border border-gray-200 text-gray-900 shadow-md",
    accent: "bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-gray-900"
  }

  const getIcon = () => {
    switch(iconName) {
      case "Dumbbell": return Dumbbell
      case "Target": return Target
      case "Grid3x3": return Grid3x3
      case "BarChart3": return BarChart3
      case "Trophy": return Trophy
      default: return null
    }
  }

  const Icon = getIcon()

  return (
    <div className={`${variants[variant]} ${variant === 'primary' ? gradient : ''} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            {Icon && (
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                variant === 'primary' ? 'bg-white/20' : `bg-gradient-to-r ${gradient}`
              }`}>
                <Icon className={`w-6 h-6 ${variant === 'primary' ? 'text-white' : 'text-white'}`} />
              </div>
            )}
            {emoji && !Icon && (
              <span className="text-4xl">{emoji}</span>
            )}
            <h3 className={`text-2xl font-bold ${variant === 'primary' ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h3>
          </div>
          
          <p className={`text-lg mb-6 leading-relaxed ${
            variant === 'primary' ? 'text-white/90' : 'text-gray-600'
          }`}>
            {description}
          </p>
          
          <Link 
            href={href}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
              variant === 'primary' 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : `bg-gradient-to-r ${gradient} text-white hover:shadow-lg`
            }`}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}