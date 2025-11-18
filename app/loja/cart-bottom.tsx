        {/* Cart Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ✕
                  </button>
                </div>
                
                {Object.keys(cartItems).length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-gray-500">Seu carrinho está vazio</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {Object.entries(cartItems).map(([productId, quantity]) => {
                        const product = products.find(p => p.id === parseInt(productId));
                        if (!product) return null;
                        
                        return (
                          <div key={productId} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="text-3xl">{product.image}</div>
                            <div className="flex-1">
                              <h4 className="font-bold">{product.name}</h4>
                              <p className="text-blue-600 font-medium">💎 {product.price.toLocaleString()} FP</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setCartItems(prev => ({
                                  ...prev,
                                  [productId]: Math.max(1, prev[parseInt(productId)] - 1)
                                }))}
                                className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">{quantity}</span>
                              <button
                                onClick={() => addToCart(parseInt(productId))}
                                className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                              >
                                +
                              </button>
                              <button
                                onClick={() => removeFromCart(parseInt(productId))}
                                className="ml-2 text-red-500 hover:text-red-700"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold">Total:</span>
                        <span className="text-xl font-bold text-blue-600">
                          💎 {getTotalCartPrice().toLocaleString()} FP
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold">
                          Finalizar Compra (Só Paga Frete)
                        </button>
                        <button
                          onClick={() => setIsCartOpen(false)}
                          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium"
                        >
                          Continuar Comprando
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Bottom Navigation */}
        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl px-4 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              {[
                { icon: '💪', label: 'Treinos', href: '/treinos' },
                { icon: '📊', label: 'Programas', href: '/programas' },
                { icon: '🏆', label: 'Ranking', href: '/leaderboard' },
                { icon: '🛒', label: 'Loja', href: '/loja', active: true },
                { icon: '👑', label: 'Premium', href: '/premium' },
                { icon: '🔧', label: 'Tools', href: '/tools' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-colors group ${
                    item.active ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-xs font-medium hidden sm:block">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    );
  }
