"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function FerramentasPage() {
  const [activeCalculator, setActiveCalculator] = useState(null);
  const [bmcResults, setBmcResults] = useState(null);
  const [tdeeResults, setTdeeResults] = useState(null);

  const calculators = [
    {
      id: 'imc',
      title: 'Calculadora de IMC',
      description: 'Calcule seu Índice de Massa Corporal',
      icon: '⚖️',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'tdee',
      title: 'Calculadora TDEE',
      description: 'Gasto Energético Total Diário',
      icon: '🔥',
      color: 'from-orange-500 to-red-400'
    },
    {
      id: 'bf',
      title: 'Taxa de Gordura Corporal',
      description: 'Estimativa baseada em medidas',
      icon: '📏',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: '1rm',
      title: 'Calculadora 1RM',
      description: 'Uma Repetição Máxima',
      icon: '💪',
      color: 'from-green-500 to-emerald-400'
    },
    {
      id: 'water',
      title: 'Necessidade de Água',
      description: 'Quantidade ideal de água por dia',
      icon: '💧',
      color: 'from-indigo-500 to-blue-400'
    },
    {
      id: 'macro',
      title: 'Calculadora de Macros',
      description: 'Distribuição de macronutrientes',
      icon: '🍎',
      color: 'from-yellow-500 to-orange-400'
    }
  ];

  const ImcCalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const calculateIMC = () => {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const imc = w / (h * h);
      
      let classification = '';
      let color = '';
      
      if (imc < 18.5) {
        classification = 'Abaixo do peso';
        color = '#3b82f6';
      } else if (imc < 25) {
        classification = 'Peso normal';
        color = '#10b981';
      } else if (imc < 30) {
        classification = 'Sobrepeso';
        color = '#f59e0b';
      } else {
        classification = 'Obesidade';
        color = '#ef4444';
      }

      setBmcResults({ imc: imc.toFixed(1), classification, color });
    };

    return (
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          marginBottom: '2rem',
          color: '#00f5ff',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          ⚖️ Calculadora de IMC
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              Altura (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="175"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              Peso (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem'
              }}
            />
          </div>
        </div>
        
        <button
          onClick={calculateIMC}
          disabled={!height || !weight}
          style={{
            background: height && weight ? 'linear-gradient(135deg, #00f5ff 0%, #0099cc 100%)' : 'rgba(255, 255, 255, 0.3)',
            color: height && weight ? '#000' : 'rgba(255, 255, 255, 0.5)',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '15px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: height && weight ? 'pointer' : 'not-allowed',
            width: '100%',
            marginBottom: '2rem'
          }}
        >
          Calcular IMC
        </button>
        
        {bmcResults && (
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '900',
              color: bmcResults.color,
              marginBottom: '0.5rem'
            }}>
              {bmcResults.imc}
            </div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: bmcResults.color
            }}>
              {bmcResults.classification}
            </div>
          </div>
        )}
      </div>
    );
  };

  const TdeeCalculator = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [activity, setActivity] = useState('1.55');

    const calculateTDEE = () => {
      const w = parseFloat(weight);
      const h = parseFloat(height);
      const a = parseFloat(age);
      const activityLevel = parseFloat(activity);

      let bmr;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
      } else {
        bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
      }

      const tdee = bmr * activityLevel;
      
      setTdeeResults({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        cutting: Math.round(tdee - 500),
        bulking: Math.round(tdee + 300)
      });
    };

    return (
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          marginBottom: '2rem',
          color: '#ff6b35',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          🔥 Calculadora TDEE
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              Idade
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="25"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              Sexo
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem'
              }}
            >
              <option value="male" style={{ background: '#1a1f3a' }}>Masculino</option>
              <option value="female" style={{ background: '#1a1f3a' }}>Feminino</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              Altura (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="175"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              Peso (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem'
              }}
            />
          </div>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
            Nível de Atividade
          </label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontSize: '1rem'
            }}
          >
            <option value="1.2" style={{ background: '#1a1f3a' }}>Sedentário (pouco/nenhum exercício)</option>
            <option value="1.375" style={{ background: '#1a1f3a' }}>Levemente ativo (exercício leve 1-3 dias/semana)</option>
            <option value="1.55" style={{ background: '#1a1f3a' }}>Moderadamente ativo (exercício moderado 3-5 dias/semana)</option>
            <option value="1.725" style={{ background: '#1a1f3a' }}>Muito ativo (exercício pesado 6-7 dias/semana)</option>
            <option value="1.9" style={{ background: '#1a1f3a' }}>Extremamente ativo (exercício muito pesado, trabalho físico)</option>
          </select>
        </div>
        
        <button
          onClick={calculateTDEE}
          disabled={!age || !height || !weight}
          style={{
            background: age && height && weight ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' : 'rgba(255, 255, 255, 0.3)',
            color: age && height && weight ? '#000' : 'rgba(255, 255, 255, 0.5)',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '15px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: age && height && weight ? 'pointer' : 'not-allowed',
            width: '100%',
            marginBottom: '2rem'
          }}
        >
          Calcular TDEE
        </button>
        
        {tdeeResults && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {[
              { label: 'TMB', value: tdeeResults.bmr, color: '#8b5cf6', desc: 'Taxa Metabólica Basal' },
              { label: 'TDEE', value: tdeeResults.tdee, color: '#ff6b35', desc: 'Gasto Total Diário' },
              { label: 'Cutting', value: tdeeResults.cutting, color: '#ef4444', desc: 'Para perder peso' },
              { label: 'Bulking', value: tdeeResults.bulking, color: '#10b981', desc: 'Para ganhar peso' }
            ].map((item) => (
              <div key={item.label} style={{
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '900',
                  color: item.color,
                  marginBottom: '0.25rem'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '0.25rem'
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .calculator-card {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>

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
          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              🔧 Ferramentas de Fitness
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Calculadoras essenciais para otimizar seu treino e nutrição
            </p>
          </div>

          {/* Calculator Grid */}
          {!activeCalculator && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {calculators.map((calc) => (
                <div
                  key={calc.id}
                  onClick={() => setActiveCalculator(calc.id)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 245, 255, 0.2)';
                    e.currentTarget.style.borderColor = '#00f5ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  <div style={{ 
                    fontSize: '3.5rem', 
                    marginBottom: '1rem'
                  }}>
                    {calc.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem',
                    color: '#fff'
                  }}>
                    {calc.title}
                  </h3>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.5',
                    fontSize: '0.95rem'
                  }}>
                    {calc.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Active Calculator */}
          {activeCalculator && (
            <div className="calculator-card">
              <div style={{ 
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <button
                  onClick={() => setActiveCalculator(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: '#fff',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600'
                  }}
                >
                  ← Voltar
                </button>
              </div>

              {activeCalculator === 'imc' && <ImcCalculator />}
              {activeCalculator === 'tdee' && <TdeeCalculator />}
              
              {!['imc', 'tdee'].includes(activeCalculator) && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚧</div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '1rem',
                    color: '#00f5ff'
                  }}>
                    Em Desenvolvimento
                  </h3>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '1.1rem',
                    marginBottom: '2rem'
                  }}>
                    Esta calculadora está sendo desenvolvida e estará disponível em breve!
                  </p>
                  <div style={{
                    background: 'rgba(0, 245, 255, 0.1)',
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                    borderRadius: '12px',
                    padding: '1rem',
                    color: '#00f5ff',
                    fontSize: '0.9rem'
                  }}>
                    💡 Sugestão: Use as calculadoras de IMC e TDEE que já estão funcionais!
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Additional Info */}
          {!activeCalculator && (
            <div style={{
              background: 'rgba(0, 245, 255, 0.1)',
              border: '1px solid rgba(0, 245, 255, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#00f5ff',
                marginBottom: '1rem'
              }}>
                💡 Mais ferramentas em breve!
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Estamos desenvolvendo mais calculadoras e ferramentas para tornar seu treino ainda mais eficiente.
                Calculadoras de gordura corporal, 1RM, necessidade de água e macros chegando em breve!
              </p>
            </div>
          )}
        </div>

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
              { icon: '🔧', label: 'Ferramentas', active: true, href: '/ferramentas' },
              { icon: '🏆', label: 'Classificação', active: false, href: '/gamificacao' },
              { icon: '👑', label: 'Premium', active: false, href: '/premium' }
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
    </>
  );
}
