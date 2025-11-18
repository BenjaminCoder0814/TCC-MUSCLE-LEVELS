"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function GlobalHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 group z-50">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                💪
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-md"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-orange-700 transition-all duration-300 tracking-wider">
                M U S C L E   L E V E L
              </h1>
              <span className="text-sm text-orange-500 font-bold tracking-widest">F I T N E S S   P L A T F O R M</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/treinos" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-semibold tracking-wide hover:scale-105 transform duration-200">
              TREINOS
            </a>
            <a href="/loja" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-semibold tracking-wide hover:scale-105 transform duration-200">
              LOJA
            </a>
            <a href="/gamification" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-semibold tracking-wide hover:scale-105 transform duration-200">
              RANKING
            </a>
            <a href="/ai-chat" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-semibold tracking-wide hover:scale-105 transform duration-200 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              AI CHAT
            </a>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
            <a href="/premium" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider hover:shadow-lg hover:scale-105 transform transition-all duration-300 flex items-center gap-2">
              <span className="text-yellow-300">👑</span>
              PREMIUM
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              <a href="/treinos" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 font-semibold tracking-wide py-2">
                💪 TREINOS
              </a>
              <a href="/loja" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 font-semibold tracking-wide py-2">
                🛒 LOJA
              </a>
              <a href="/gamification" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 font-semibold tracking-wide py-2">
                🏆 RANKING
              </a>
              <a href="/ai-chat" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 font-semibold tracking-wide py-2">
                🤖 AI CHAT
              </a>
              <a href="/premium" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider text-center mt-4">
                👑 PREMIUM
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
