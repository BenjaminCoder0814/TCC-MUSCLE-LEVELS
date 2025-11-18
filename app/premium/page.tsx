"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState('yearly');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      id: 'monthly',
      name: 'Mensal',
      price: 29.90,
      originalPrice: 49.90,
      period: '/mês',
      savings: null,
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'yearly',
      name: 'Anual',
      price: 19.90,
      originalPrice: 49.90,
      period: '/mês',
      savings: 'Economize 60%',
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'lifetime',
      name: 'Vitalício',
      price: 297.00,
      originalPrice: 599.00,
      period: 'pagamento único',
      savings: 'Melhor Oferta!',
      popular: false,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const features = [
    {
      category: 'Treinos Ilimitados',
      icon: '🏋️‍♂️',
      items: [
        'Acesso a todos os 500+ exercícios',
        'Criação ilimitada de treinos personalizados',
        'Programas premium de especialistas',
        'IA para otimização automática de treinos'
      ]
    },
    {
      category: 'Analytics Avançados',
      icon: '📊',
      items: [
        'Relatórios detalhados de progresso',
        'Análise de composição corporal',
        'Gráficos de performance avançados',
        'Comparações e benchmarks'
      ]
    },
    {
      category: 'Funcionalidades Exclusivas',
      icon: '⭐',
      items: [
        'Modo offline completo',
        'Backup automático na nuvem',
        'Suporte prioritário via WhatsApp',
        'Acesso antecipado a novos recursos'
      ]
    },
    {
      category: 'Gamificação Premium',
      icon: '🎮',
      items: [
        'Conquistas e badges exclusivos',
        'Ranking premium global',
        'Multiplicador de pontos 2x',
        'Acesso VIP à loja de recompensas'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Personal Trainer',
      avatar: '👨‍💼',
      comment: 'O Premium revolucionou minha forma de treinar. As análises são incríveis!',
      rating: 5,
      verified: true
    },
    {
      name: 'Ana Costa',
      role: 'Atleta Amadora',
      avatar: '🏃‍♀️',
      comment: 'Valeu cada centavo! A IA me ajudou a quebrar platôs que não conseguia há meses.',
      rating: 5,
      verified: true
    },
    {
      name: 'Pedro Santos',
      role: 'Empresário',
      avatar: '💼',
      comment: 'Como alguém ocupado, o modo offline e sincronização são fundamentais.',
      rating: 5,
      verified: true
    }
  ];

  const faq = [
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim! Você pode cancelar sua assinatura a qualquer momento. Não há taxas de cancelamento e você continuará tendo acesso aos recursos premium até o final do período pago.'
    },
    {
      question: 'Funciona offline?',
      answer: 'Com o Premium, você tem acesso completo offline a todos os treinos, exercícios e funcionalidades. Perfeito para academias com WiFi instável!'
    },
    {
      question: 'Há garantia de reembolso?',
      answer: 'Oferecemos garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.'
    },
    {
      question: 'Posso usar em múltiplos dispositivos?',
      answer: 'Sim! Sua conta Premium funciona em até 3 dispositivos simultaneamente com sincronização automática.'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 25%, #2d1b69 50%, #1a1f3a 75%, #0a0e1a 100%)',
      color: '#fff',
      paddingBottom: '100px'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(10, 14, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(0, 245, 255, 0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <a href="/treinos" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}>💪</div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>MuscleLevel</h1>
          </a>

          <a href="/treinos" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600'
          }}>
            ← Treinos
          </a>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)',
            border: '2px solid rgba(255, 215, 0, 0.5)',
            borderRadius: '25px',
            padding: '1rem 2rem',
            marginBottom: '2rem'
          }}>
            <span style={{ fontSize: '2rem' }}>👑</span>
            <span style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              MUSCLE LEVEL PREMIUM
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 50%, #8a2be2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Desbloqueie Seu<br/>Potencial Máximo
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Transforme seu treino com recursos premium, IA avançada e análises detalhadas. 
            Junte-se a +50.000 atletas que já escolheram o Premium.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#10b981' }}>✓</span>
              <span>30 dias de garantia</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#10b981' }}>✓</span>
              <span>Cancele quando quiser</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#10b981' }}>✓</span>
              <span>Suporte prioritário</span>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            💎 Escolha Seu Plano Premium
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                style={{
                  background: selectedPlan === plan.id
                    ? 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '25px',
                  padding: '2.5rem 2rem',
                  border: selectedPlan === plan.id 
                    ? '3px solid #00f5ff' 
                    : plan.popular 
                      ? '3px solid #ffd700'
                      : '2px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 245, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 100%)',
                    color: '#000',
                    padding: '0.5rem 2rem',
                    borderRadius: '25px',
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}>
                    ⭐ MAIS POPULAR
                  </div>
                )}

                {plan.savings && (
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10b981',
                    padding: '0.5rem 1rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    {plan.savings}
                  </div>
                )}

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '1rem'
                }}>
                  {plan.name}
                </h3>

                <div style={{
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    padding: '0.5rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                  }}>
                    R$ {plan.price.toFixed(2).replace('.', ',')}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {plan.period}
                  </div>
                  {plan.originalPrice > plan.price && (
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                      textDecoration: 'line-through',
                      marginTop: '0.3rem'
                    }}>
                      De R$ {plan.originalPrice.toFixed(2).replace('.', ',')}
                    </div>
                  )}
                </div>

                {selectedPlan === plan.id ? (
                  <div style={{
                    color: '#10b981',
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                  }}>
                    ✓ Selecionado
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    style={{
                      background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                      color: '#000',
                      border: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '15px',
                      fontSize: '1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      marginBottom: '1rem',
                      width: '100%'
                    }}
                  >
                    Selecionar Plano
                  </button>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                color: '#000',
                border: 'none',
                padding: '1.2rem 3rem',
                borderRadius: '25px',
                fontSize: '1.2rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                boxShadow: '0 10px 30px rgba(0, 245, 255, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🚀 Começar Premium Agora - {plans.find(p => p.id === selectedPlan)?.name || 'Plano Selecionado'}
            </button>
          </div>
        </section>

        {/* Price Comparison Highlight */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(255, 107, 53, 0.15) 100%)',
            borderRadius: '25px',
            padding: '3rem 2rem',
            border: '2px solid rgba(0, 245, 255, 0.3)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '2rem',
              color: '#ffffff'
            }}>
              💰 Economize Até 60% com o Plano Anual
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>Plano Mensal</h3>
                <div style={{ color: '#ff6b35', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  R$ 29,90
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>por mês</div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)',
                borderRadius: '15px',
                padding: '2rem',
                border: '2px solid #00f5ff',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#10b981',
                  color: '#000',
                  padding: '0.3rem 1rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}>
                  MAIS POPULAR
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>Plano Anual</h3>
                <div style={{ color: '#00f5ff', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  R$ 19,90
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>por mês</div>
                <div style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  Economize R$ 120 por ano!
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '15px',
                padding: '2rem',
                border: '1px solid rgba(255, 215, 0, 0.3)'
              }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>Plano Vitalício</h3>
                <div style={{ color: '#ffd700', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  R$ 299,90
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>pagamento único</div>
                <div style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  Economia de R$ 300!
                </div>
              </div>
            </div>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem',
              marginBottom: '2rem'
            }}>
              Todos os planos incluem acesso completo a recursos premium, sem taxas adicionais.
            </p>
          </div>
        </section>

        {/* Features */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #8a2be2 0%, #00f5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ⚡ Recursos Exclusivos Premium
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: '2px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#fff'
                  }}>
                    {feature.category}
                  </h3>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}>
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{ color: '#10b981', fontSize: '1.1rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            💬 O Que Dizem Nossos Usuários Premium
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: '2px solid rgba(255, 215, 0, 0.3)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '3rem' }}>{testimonial.avatar}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        color: '#fff',
                        margin: 0
                      }}>
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <span style={{
                          color: '#10b981',
                          fontSize: '1rem'
                        }}>✓</span>
                      )}
                    </div>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      margin: 0
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '0.2rem',
                  marginBottom: '1rem'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#ffd700', fontSize: '1.2rem' }}>⭐</span>
                  ))}
                </div>

                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.5',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #00f5ff 0%, #8a2be2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ❓ Dúvidas Frequentes
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {faq.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '15px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#00f5ff',
                  marginBottom: '1rem'
                }}>
                  {item.question}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal de Pagamento */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1f3a 0%, #2d1b69 100%)',
            borderRadius: '25px',
            padding: '3rem',
            maxWidth: '500px',
            width: '100%',
            border: '2px solid rgba(0, 245, 255, 0.3)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              🎉 Funcionalidade em Desenvolvimento
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              O sistema de pagamento Premium está sendo desenvolvido! 
              <br/>Por enquanto, aproveite todas as funcionalidades gratuitamente.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Entendi, Obrigado!
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 14, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(0, 245, 255, 0.2)',
        padding: '1rem 0',
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          {[
            { icon: '💪', label: 'Treinos', active: false, href: '/treinos' },
            { icon: '📊', label: 'Programas', active: false, href: '/programas' },
            { icon: '📈', label: 'Estatísticas', active: false, href: '/estatisticas' },
            { icon: '🏆', label: 'Ranking', active: false, href: '/leaderboard' },
            { icon: '🛒', label: 'Loja', active: false, href: '/loja' },
            { icon: '👑', label: 'Premium', active: true, href: '/premium' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                textDecoration: 'none',
                color: item.active ? '#00f5ff' : 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.8rem',
                fontWeight: item.active ? '600' : '500',
                padding: '0.5rem',
                borderRadius: '8px',
                background: item.active ? 'rgba(0, 245, 255, 0.1)' : 'transparent'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
