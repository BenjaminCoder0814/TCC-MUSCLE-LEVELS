"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Autoanálise", href: "/tools" },
    { name: "Treinos", href: "/workout-builder" },
    { name: "Profissionais", href: "/professionals" },
    { name: "Loja", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Planos", href: "/premium" },
    { name: "Contato", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6AD0F8] to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">💪</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-xl text-foreground">Muscle Levels</span>
              <span className="text-xs text-muted-foreground -mt-1">Transforme seu corpo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Points Display */}
            <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-[#6AD0F8]/10 to-blue-600/10 px-3 py-1 rounded-full border border-[#6AD0F8]/20">
              <Zap className="w-4 h-4 text-[#6AD0F8]" />
              <span className="text-sm font-semibold text-foreground">1,250</span>
              <span className="text-xs text-muted-foreground">pts</span>
            </div>

            {/* Cart */}
            <Button variant="ghost" size="small" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge 
                variant="danger" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
              >
                3
              </Badge>
            </Button>

            {/* User Menu */}
            <Button variant="ghost" size="small">
              <User className="w-5 h-5" />
              <span className="hidden sm:ml-2 sm:block text-sm">Benjamin</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="small"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <nav className="px-4 py-3 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Points */}
              <div className="flex items-center space-x-2 bg-gradient-to-r from-[#6AD0F8]/10 to-blue-600/10 px-3 py-2 rounded-md border border-[#6AD0F8]/20 mt-4">
                <Zap className="w-4 h-4 text-[#6AD0F8]" />
                <span className="text-sm font-semibold text-foreground">1,250 pontos</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}