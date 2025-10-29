"use client";

import Link from "next/link";
import { Dumbbell, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Autoanálise", href: "/tools" },
      { name: "Treinos", href: "/workout-builder" },
      { name: "Ranking", href: "/leaderboard" },
      { name: "Planos Premium", href: "/premium" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Calculadoras", href: "/tools" },
      { name: "Exercícios", href: "/exercises" },
      { name: "Guia Fitness", href: "/guides" },
    ],
    company: [
      { name: "Sobre Nós", href: "/about" },
      { name: "Contato", href: "/contact" },
      { name: "Carreiras", href: "/careers" },
      { name: "Parceiros", href: "/partners" },
    ],
    legal: [
      { name: "Política de Privacidade", href: "/privacy" },
      { name: "Termos de Uso", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
      { name: "Suporte", href: "/support" },
    ],
  };

  const socialLinks = [
    { name: "Fitness", icon: Dumbbell, href: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/benjamincoder", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/muscle.levels", color: "hover:text-pink-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/benjamin-maciel", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6AD0F8] to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">💪</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">Muscle Levels</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Transforme seu corpo com nossa plataforma completa de performance e triagem fitness. 
              Análise personalizada, treinos inteligentes e gamificação.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@muscle-levels.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Plataforma</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-[#6AD0F8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-[#6AD0F8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-[#6AD0F8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-[#6AD0F8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-foreground mb-2">Fique por dentro das novidades</h3>
              <p className="text-sm text-muted-foreground">
                Receba dicas exclusivas, novos treinos e atualizações da plataforma
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md space-x-2">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-3 py-2 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#6AD0F8] focus:border-transparent"
              />
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6AD0F8] to-blue-600 rounded-lg hover:opacity-90 transition-opacity">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Muscle Levels. Todos os direitos reservados. 
            <span className="block md:inline md:ml-2">
              Desenvolvido com ❤️ por <span className="font-semibold text-[#6AD0F8]">Benjamin Maciel</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground mr-2">Siga-nos:</span>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-muted/50 text-muted-foreground transition-all duration-200 ${social.color} hover:bg-muted hover:scale-110`}
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SSL Seguro</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>LGPD Compliance</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Dados Protegidos</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}