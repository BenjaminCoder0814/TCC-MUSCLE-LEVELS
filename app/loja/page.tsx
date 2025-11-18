"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  inStock: boolean;
  calories?: number;
}

export default function LojaPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [userPoints, setUserPoints] = useState(1250);
  const [cart, setCart] = useState<Product[]>([]);

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🛍️' },
    { id: 'roupas', name: 'Roupas', icon: '👕' },
    { id: 'equipamentos', name: 'Equipamentos', icon: '🏋️‍♂️' },
    { id: 'suplementos', name: 'Suplementos', icon: '💊' },
    { id: 'acessorios', name: 'Acessórios', icon: '⌚' },
    { id: 'premium', name: 'Premium', icon: '👑' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Camiseta Pro Dri-Fit",
      description: "Camiseta de alta performance para treinos intensos",
      price: 300,
      originalPrice: 450,
      category: "roupas",
      image: "👕",
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: "Whey Protein Premium",
      description: "Proteína isolada para recuperação muscular rápida",
      price: 800,
      originalPrice: 1200,
      category: "suplementos",
      image: "🥛",
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: "Halteres Ajustáveis",
      description: "Kit completo 5-25kg para treino em casa",
      price: 1500,
      originalPrice: 2000,
      category: "equipamentos",
      image: "🏋️",
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: "Smartwatch Fitness",
      description: "Monitor cardíaco e GPS integrado",
      price: 2000,
      originalPrice: 3000,
      category: "acessorios",
      image: "⌚",
      rating: 4.6,
      inStock: false
    },
    {
      id: 5,
      name: "Creatina Monohidratada",
      description: "Suplemento para força e potência muscular",
      price: 400,
      originalPrice: 600,
      category: "suplementos",
      image: "💊",
      rating: 4.8,
      inStock: true
    },
    {
      id: 6,
      name: "Shaker Premium",
      description: "Coqueteleira com compartimentos extras",
      price: 150,
      originalPrice: 250,
      category: "acessorios",
      image: "🥤",
      rating: 4.5,
      inStock: true
    },
    {
      id: 7,
      name: "Premium 1 Mês",
      description: "Acesso completo a treinos exclusivos e IA",
      price: 500,
      category: "premium",
      image: "👑",
      rating: 5.0,
      inStock: true
    },
    {
      id: 8,
      name: "Elástico Resistência",
      description: "Kit com 5 níveis de resistência",
      price: 200,
      originalPrice: 350,
      category: "equipamentos",
      image: "🎗️",
      rating: 4.4,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'todos' || product.category === selectedCategory
  );

  const addToCart = (product: Product) => {
    if (userPoints >= product.price && product.inStock) {
      setUserPoints(prev => prev - product.price);
      setCart(prev => [...prev, product]);
      alert(`🎉 Parabéns! Você comprou ${product.name} por ${product.price} FitPoints!`);
    } else if (!product.inStock) {
      alert('❌ Produto fora de estoque!');
    } else {
      alert('💰 FitPoints insuficientes! Complete mais treinos para ganhar pontos.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Professional Header */}
      <header className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl">
                  🛒
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">FitPoints Store</h1>
                  <p className="text-xs text-gray-400">Troque pontos por prêmios</p>
                </div>
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full">
                <span className="text-2xl">⭐</span>
                <span className="font-bold text-white text-lg">{userPoints.toLocaleString()} FitPoints</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Store Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Loja FitPoints
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Troque seus pontos ganhos nos treinos por produtos incríveis e benefícios exclusivos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-gray-900/50 p-4 rounded-2xl backdrop-blur-sm border border-gray-800">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Product Image */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center relative">
                <span className="text-8xl">{product.image}</span>
                
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    OFERTA
                  </div>
                )}
                
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                      ESGOTADO
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-400">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-400">
                      {product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-orange-300">FitPoints</span>
                  </div>
                  
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">
                      {product.originalPrice.toLocaleString()} pts
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock || userPoints < product.price}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    product.inStock && userPoints >= product.price
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transform hover:scale-105'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {!product.inStock ? '❌ Esgotado' : 
                   userPoints < product.price ? '💰 Pontos Insuficientes' : 
                   '🛒 Comprar Agora'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How to Earn Points Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">Como Ganhar FitPoints</h3>
            <p className="text-gray-300 text-lg">Treine e seja recompensado!</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl">
              <div className="text-4xl mb-3">🏋️‍♂️</div>
              <h4 className="font-bold text-white mb-2">Complete Treinos</h4>
              <p className="text-sm text-gray-400">50-150 pontos por treino</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-white mb-2">Atinja Metas</h4>
              <p className="text-sm text-gray-400">100-300 pontos por meta</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl">
              <div className="text-4xl mb-3">🔥</div>
              <h4 className="font-bold text-white mb-2">Sequência Diária</h4>
              <p className="text-sm text-gray-400">20 pontos extras por dia</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold text-white mb-2">Rankings</h4>
              <p className="text-sm text-gray-400">500+ pontos no top 10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl border border-gray-700">
          <div className="flex items-center gap-3">
            {[
              { icon: '💪', label: 'Treinos', href: '/treinos' },
              { icon: '📊', label: 'Programas', href: '/programas' },
              { icon: '🏆', label: 'Ranking', href: '/leaderboard' },
              { icon: '🛒', label: 'Loja', href: '/loja', active: true },
              { icon: '👑', label: 'Premium', href: '/premium' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all transform hover:scale-110 group ${
                  item.active 
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-bold hidden sm:block">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
