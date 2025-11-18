"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ToolsPage() {
  const [activeCalculator, setActiveCalculator] = useState('imc');
  const [results, setResults] = useState<any>({});

  // Calculadora de IMC
  const [imcData, setImcData] = useState({ peso: '', altura: '' });

  // Calculadora de BF
  const [bfData, setBfData] = useState({
    genero: 'masculino',
    idade: '',
    cintura: '',
    pescoco: '',
    quadril: ''
  });

  // Calculadora de 1RM
  const [rmData, setRmData] = useState({ peso: '', repeticoes: '' });

  // Calculadora de TMB
  const [tmbData, setTmbData] = useState({
    genero: 'masculino',
    idade: '',
    peso: '',
    altura: '',
    atividade: '1.375'
  });

  // Calculadora de Macros
  const [macrosData, setMacrosData] = useState({
    calorias: '',
    objetivo: 'manutencao',
    proteina: '25',
    gordura: '25'
  });

  // Calculadora de Frequência Cardíaca
  const [fcData, setFcData] = useState({ idade: '' });

  const calculators = [
    { id: 'imc', name: 'IMC', icon: '⚖️', description: 'Índice de Massa Corporal' },
    { id: 'bf', name: 'Gordura Corporal', icon: '📏', description: 'Percentual de gordura' },
    { id: 'rm', name: '1RM', icon: '💪', description: 'Repetição Máxima' },
    { id: 'tmb', name: 'TMB', icon: '🔥', description: 'Taxa Metabólica Basal' },
    { id: 'macros', name: 'Macros', icon: '🍽️', description: 'Distribuição de macronutrientes' },
    { id: 'fc', name: 'Freq. Cardíaca', icon: '❤️', description: 'Zonas de frequência cardíaca' }
  ];

  const calculateIMC = () => {
    const peso = parseFloat(imcData.peso);
    const altura = parseFloat(imcData.altura) / 100;
    
    if (peso && altura) {
      const imc = peso / (altura * altura);
      let categoria = '';
      let cor = '';
      
      if (imc < 18.5) {
        categoria = 'Abaixo do peso';
        cor = '#3b82f6';
      } else if (imc < 24.9) {
        categoria = 'Peso normal';
        cor = '#10b981';
      } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
        cor = '#f59e0b';
      } else {
        categoria = 'Obesidade';
        cor = '#ef4444';
      }
      
      setResults(prev => ({
        ...prev,
        imc: { valor: imc.toFixed(1), categoria, cor }
      }));
    }
  };

  const calculateBF = () => {
    const { genero, idade, cintura, pescoco, quadril } = bfData;
    const { altura } = imcData;
    
    if (cintura && pescoco && (genero === 'masculino' || quadril)) {
      let bf = 0;
      
      if (genero === 'masculino') {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(parseFloat(cintura) - parseFloat(pescoco)) + 0.15456 * Math.log10(parseFloat(altura) || 170)) - 450;
      } else {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(parseFloat(cintura) + parseFloat(quadril || '0') - parseFloat(pescoco)) + 0.22100 * Math.log10(parseFloat(altura) || 160)) - 450;
      }
      
      let categoria = '';
      let cor = '';
      
      if (genero === 'masculino') {
        if (bf < 10) { categoria = 'Atlético'; cor = '#10b981'; }
        else if (bf < 15) { categoria = 'Fitness'; cor = '#10b981'; }
        else if (bf < 20) { categoria = 'Normal'; cor = '#f59e0b'; }
        else { categoria = 'Alto'; cor = '#ef4444'; }
      } else {
        if (bf < 16) { categoria = 'Atlético'; cor = '#10b981'; }
        else if (bf < 20) { categoria = 'Fitness'; cor = '#10b981'; }
        else if (bf < 25) { categoria = 'Normal'; cor = '#f59e0b'; }
        else { categoria = 'Alto'; cor = '#ef4444'; }
      }
      
      setResults(prev => ({
        ...prev,
        bf: { valor: bf.toFixed(1), categoria, cor }
      }));
    }
  };

  const calculate1RM = () => {
    const peso = parseFloat(rmData.peso);
    const reps = parseInt(rmData.repeticoes);
    
    if (peso && reps && reps <= 15) {
      const rm = peso * (1 + reps / 30);
      const percentages = [
        { percent: 100, peso: rm, reps: 1 },
        { percent: 95, peso: rm * 0.95, reps: 2 },
        { percent: 90, peso: rm * 0.90, reps: 3 },
        { percent: 85, peso: rm * 0.85, reps: 5 },
        { percent: 80, peso: rm * 0.80, reps: 8 },
        { percent: 75, peso: rm * 0.75, reps: 10 },
        { percent: 70, peso: rm * 0.70, reps: 12 }
      ];
      
      setResults(prev => ({
        ...prev,
        rm: { valor: rm.toFixed(1), percentages }
      }));
    }
  };

  const calculateTMB = () => {
    const { genero, idade, peso, altura, atividade } = tmbData;
    
    if (idade && peso && altura) {
      let tmb = 0;
      
      if (genero === 'masculino') {
        tmb = 88.362 + (13.397 * parseFloat(peso)) + (4.799 * parseFloat(altura)) - (5.677 * parseFloat(idade));
      } else {
        tmb = 447.593 + (9.247 * parseFloat(peso)) + (3.098 * parseFloat(altura)) - (4.330 * parseFloat(idade));
      }
      
      const tdee = tmb * parseFloat(atividade);
      
      setResults(prev => ({
        ...prev,
        tmb: { 
          tmb: tmb.toFixed(0), 
          tdee: tdee.toFixed(0),
          cutting: (tdee - 300).toFixed(0),
          bulking: (tdee + 300).toFixed(0)
        }
      }));
    }
  };

  const calculateMacros = () => {
    const calorias = parseFloat(macrosData.calorias);
    const proteinaPercent = parseFloat(macrosData.proteina);
    const gorduraPercent = parseFloat(macrosData.gordura);
    const carboidratoPercent = 100 - proteinaPercent - gorduraPercent;
    
    if (calorias) {
      const proteina = {
        calorias: (calorias * proteinaPercent / 100).toFixed(0),
        gramas: (calorias * proteinaPercent / 100 / 4).toFixed(0)
      };
      
      const gordura = {
        calorias: (calorias * gorduraPercent / 100).toFixed(0),
        gramas: (calorias * gorduraPercent / 100 / 9).toFixed(0)
      };
      
      const carboidrato = {
        calorias: (calorias * carboidratoPercent / 100).toFixed(0),
        gramas: (calorias * carboidratoPercent / 100 / 4).toFixed(0)
      };
      
      setResults(prev => ({
        ...prev,
        macros: { proteina, gordura, carboidrato }
      }));
    }
  };

  const calculateFC = () => {
    const idade = parseFloat(fcData.idade);
    
    if (idade) {
      const fcMax = 220 - idade;
      const zones = [
        { name: 'Zona 1 - Recuperação', min: (fcMax * 0.5).toFixed(0), max: (fcMax * 0.6).toFixed(0), color: '#3b82f6' },
        { name: 'Zona 2 - Aeróbico', min: (fcMax * 0.6).toFixed(0), max: (fcMax * 0.7).toFixed(0), color: '#10b981' },
        { name: 'Zona 3 - Limiar', min: (fcMax * 0.7).toFixed(0), max: (fcMax * 0.8).toFixed(0), color: '#f59e0b' },
        { name: 'Zona 4 - Anaeróbico', min: (fcMax * 0.8).toFixed(0), max: (fcMax * 0.9).toFixed(0), color: '#f97316' },
        { name: 'Zona 5 - Máximo', min: (fcMax * 0.9).toFixed(0), max: fcMax.toFixed(0), color: '#ef4444' }
      ];
      
      setResults(prev => ({
        ...prev,
        fc: { fcMax: fcMax.toFixed(0), zones }
      }));
    }
  };

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'imc':
        return (
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>
              ⚖️ Calculadora de IMC
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Peso (kg)
                </label>
                <input
                  type="number"
                  value={imcData.peso}
                  onChange={(e) => setImcData(prev => ({ ...prev, peso: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Ex: 75"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Altura (cm)
                </label>
                <input
                  type="number"
                  value={imcData.altura}
                  onChange={(e) => setImcData(prev => ({ ...prev, altura: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Ex: 175"
                />
              </div>
            </div>
            
            <button
              onClick={calculateIMC}
              style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
                color: '#000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                marginBottom: '1.5rem'
              }}
            >
              Calcular IMC
            </button>
            
            {results.imc && (
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '1.5rem',
                border: `2px solid ${results.imc.cor}`
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: results.imc.cor,
                    marginBottom: '0.5rem'
                  }}>
                    {results.imc.valor}
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: results.imc.cor
                  }}>
                    {results.imc.categoria}
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'bf':
        return (
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>
              📏 Calculadora de Gordura Corporal
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Gênero
                </label>
                <select
                  value={bfData.genero}
                  onChange={(e) => setBfData(prev => ({ ...prev, genero: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                >
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Cintura (cm)
                </label>
                <input
                  type="number"
                  value={bfData.cintura}
                  onChange={(e) => setBfData(prev => ({ ...prev, cintura: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Medida na altura do umbigo"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Pescoço (cm)
                </label>
                <input
                  type="number"
                  value={bfData.pescoco}
                  onChange={(e) => setBfData(prev => ({ ...prev, pescoco: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Circunferência do pescoço"
                />
              </div>
              
              {bfData.genero === 'feminino' && (
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    Quadril (cm)
                  </label>
                  <input
                    type="number"
                    value={bfData.quadril}
                    onChange={(e) => setBfData(prev => ({ ...prev, quadril: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '1rem'
                    }}
                    placeholder="Maior medida do quadril"
                  />
                </div>
              )}
            </div>
            
            <button
              onClick={calculateBF}
              style={{
                background: 'linear-gradient(135deg, #8a2be2 0%, #00f5ff 100%)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                marginBottom: '1.5rem'
              }}
            >
              Calcular Gordura Corporal
            </button>
            
            {results.bf && (
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '1.5rem',
                border: `2px solid ${results.bf.cor}`
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: results.bf.cor,
                    marginBottom: '0.5rem'
                  }}>
                    {results.bf.valor}%
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: results.bf.cor
                  }}>
                    {results.bf.categoria}
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'rm':
        return (
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>
              💪 Calculadora de 1RM
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Peso Levantado (kg)
                </label>
                <input
                  type="number"
                  value={rmData.peso}
                  onChange={(e) => setRmData(prev => ({ ...prev, peso: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Ex: 100"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Repetições Realizadas
                </label>
                <input
                  type="number"
                  max="15"
                  value={rmData.repeticoes}
                  onChange={(e) => setRmData(prev => ({ ...prev, repeticoes: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Máximo 15 repetições"
                />
              </div>
            </div>
            
            <button
              onClick={calculate1RM}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                marginBottom: '1.5rem'
              }}
            >
              Calcular 1RM
            </button>
            
            {results.rm && (
              <div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  border: '2px solid #10b981',
                  marginBottom: '1rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '900',
                      color: '#10b981',
                      marginBottom: '0.5rem'
                    }}>
                      1RM: {results.rm.valor} kg
                    </div>
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', color: '#fff' }}>
                    Tabela de Percentuais
                  </h4>
                  {results.rm.percentages.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0',
                      borderBottom: index < results.rm.percentages.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                    }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        {item.percent}% ({item.reps} rep{item.reps > 1 ? 's' : ''})
                      </span>
                      <span style={{ color: '#fff', fontWeight: '700' }}>
                        {item.peso.toFixed(1)} kg
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'tmb':
        return (
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>
              🔥 Calculadora de TMB/TDEE
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Gênero
                </label>
                <select
                  value={tmbData.genero}
                  onChange={(e) => setTmbData(prev => ({ ...prev, genero: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                >
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    Idade
                  </label>
                  <input
                    type="number"
                    value={tmbData.idade}
                    onChange={(e) => setTmbData(prev => ({ ...prev, idade: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '1rem'
                    }}
                    placeholder="Anos"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    value={tmbData.peso}
                    onChange={(e) => setTmbData(prev => ({ ...prev, peso: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    value={tmbData.altura}
                    onChange={(e) => setTmbData(prev => ({ ...prev, altura: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Nível de Atividade
                </label>
                <select
                  value={tmbData.atividade}
                  onChange={(e) => setTmbData(prev => ({ ...prev, atividade: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                >
                  <option value="1.2">Sedentário (sem exercício)</option>
                  <option value="1.375">Pouco ativo (1-3x/semana)</option>
                  <option value="1.55">Moderado (3-5x/semana)</option>
                  <option value="1.725">Muito ativo (6-7x/semana)</option>
                  <option value="1.9">Extremamente ativo (2x/dia)</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={calculateTMB}
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                marginBottom: '1.5rem'
              }}
            >
              Calcular TMB/TDEE
            </button>
            
            {results.tmb && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #3b82f6'
                }}>
                  <div style={{ color: '#3b82f6', fontSize: '0.9rem', marginBottom: '0.5rem' }}>TMB</div>
                  <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>
                    {results.tmb.tmb} cal
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #10b981'
                }}>
                  <div style={{ color: '#10b981', fontSize: '0.9rem', marginBottom: '0.5rem' }}>TDEE</div>
                  <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>
                    {results.tmb.tdee} cal
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #ef4444'
                }}>
                  <div style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Cutting</div>
                  <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>
                    {results.tmb.cutting} cal
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #8a2be2'
                }}>
                  <div style={{ color: '#8a2be2', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Bulking</div>
                  <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>
                    {results.tmb.bulking} cal
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'macros':
        return (
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>
              🍽️ Calculadora de Macronutrientes
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Calorias Diárias
                </label>
                <input
                  type="number"
                  value={macrosData.calorias}
                  onChange={(e) => setMacrosData(prev => ({ ...prev, calorias: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Ex: 2000"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Proteína (%)
                </label>
                <input
                  type="range"
                  min="15"
                  max="40"
                  value={macrosData.proteina}
                  onChange={(e) => setMacrosData(prev => ({ ...prev, proteina: e.target.value }))}
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                />
                <div style={{ color: '#00f5ff', fontWeight: '700' }}>{macrosData.proteina}%</div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Gordura (%)
                </label>
                <input
                  type="range"
                  min="15"
                  max="40"
                  value={macrosData.gordura}
                  onChange={(e) => setMacrosData(prev => ({ ...prev, gordura: e.target.value }))}
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                />
                <div style={{ color: '#ff6b35', fontWeight: '700' }}>{macrosData.gordura}%</div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Carboidrato (automático)
                </label>
                <div style={{ color: '#10b981', fontWeight: '700', fontSize: '1.2rem' }}>
                  {100 - parseInt(macrosData.proteina) - parseInt(macrosData.gordura)}%
                </div>
              </div>
            </div>
            
            <button
              onClick={calculateMacros}
              style={{
                background: 'linear-gradient(135deg, #8a2be2 0%, #ff6b35 100%)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                marginBottom: '1.5rem'
              }}
            >
              Calcular Macros
            </button>
            
            {results.macros && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #00f5ff'
                }}>
                  <div style={{ color: '#00f5ff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>🥩 Proteína</div>
                  <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700' }}>
                    {results.macros.proteina.gramas}g
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
                    {results.macros.proteina.calorias} cal
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #10b981'
                }}>
                  <div style={{ color: '#10b981', fontSize: '0.9rem', marginBottom: '0.5rem' }}>🍞 Carboidrato</div>
                  <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700' }}>
                    {results.macros.carboidrato.gramas}g
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
                    {results.macros.carboidrato.calorias} cal
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #ff6b35'
                }}>
                  <div style={{ color: '#ff6b35', fontSize: '0.9rem', marginBottom: '0.5rem' }}>🥑 Gordura</div>
                  <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700' }}>
                    {results.macros.gordura.gramas}g
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
                    {results.macros.gordura.calorias} cal
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'fc':
        return (
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>
              ❤️ Calculadora de Frequência Cardíaca
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Idade (anos)
                </label>
                <input
                  type="number"
                  value={fcData.idade}
                  onChange={(e) => setFcData(prev => ({ ...prev, idade: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Ex: 30"
                />
              </div>
            </div>
            
            <button
              onClick={calculateFC}
              style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                marginBottom: '1.5rem'
              }}
            >
              Calcular Zonas de FC
            </button>
            
            {results.fc && (
              <div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  border: '2px solid #ef4444'
                }}>
                  <div style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '0.5rem' }}>FC Máxima</div>
                  <div style={{ color: '#fff', fontSize: '2rem', fontWeight: '700' }}>
                    {results.fc.fcMax} bpm
                  </div>
                </div>
                
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {results.fc.zones.map((zone, index) => (
                    <div key={index} style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      padding: '1rem',
                      border: `2px solid ${zone.color}`
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ color: zone.color, fontSize: '0.9rem', fontWeight: '700' }}>
                            {zone.name}
                          </div>
                        </div>
                        <div style={{ color: '#fff', fontWeight: '700' }}>
                          {zone.min} - {zone.max} bpm
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

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
            }}>🔧</div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>Ferramentas</h1>
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
            fontWeight: '900',
            background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 50%, #8a2be2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            lineHeight: '1.1'
          }}>
            🔧 Ferramentas Fitness
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Calculadoras avançadas para otimizar seu treino e nutrição
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* Calculator Navigation */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            position: 'sticky',
            top: '120px'
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Calculadoras
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {calculators.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => setActiveCalculator(calc.id)}
                  style={{
                    background: activeCalculator === calc.id 
                      ? 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)'
                      : 'transparent',
                    border: activeCalculator === calc.id ? '2px solid #00f5ff' : '2px solid transparent',
                    borderRadius: '15px',
                    padding: '1rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCalculator !== calc.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCalculator !== calc.id) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{calc.icon}</span>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '1rem' }}>
                        {calc.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                        {calc.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Calculator Content */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2rem',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            minHeight: '500px'
          }}>
            {renderCalculator()}
          </div>
        </div>
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
            { icon: '🏆', label: 'Ranking', active: false, href: '/leaderboard' },
            { icon: '🛒', label: 'Loja', active: false, href: '/loja' },
            { icon: '🔧', label: 'Ferramentas', active: true, href: '/tools' }
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
