"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular login para demonstração do TCC
    setTimeout(() => {
      const userData = {
        id: 1,
        name: "Desenvolvedor TCC",
        email: email,
        level: 15,
        points: 2450,
        streak: 7,
        totalWorkouts: 89,
        isPremium: true,
        avatar: "👨‍💻",
        joinedDate: "2024-01-15"
      };

      localStorage.setItem('muscleLevel_user', JSON.stringify(userData));
      router.push('/treinos');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .login-container {
          background: linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 25%, #2d1b69 50%, #1a1f3a 75%, #0a0e1a 100%);
        }
      `}</style>

      <div className="login-container min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 3s ease-in-out infinite 1s'
        }}></div>

        {/* Login Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '25px',
          padding: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          maxWidth: '400px',
          width: '100%',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 1rem',
              boxShadow: '0 10px 30px rgba(0, 245, 255, 0.3)'
            }}>💪</div>
            
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 0 0.5rem 0'
            }}>MuscleLevel</h1>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1rem',
              margin: 0
            }}>Acesse sua conta</p>
          </div>

          {/* Demo Accounts */}
          <div style={{
            background: 'rgba(0, 245, 255, 0.1)',
            border: '1px solid rgba(0, 245, 255, 0.3)',
            borderRadius: '15px',
            padding: '1rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#00f5ff',
              fontSize: '0.9rem',
              fontWeight: '600',
              margin: '0 0 0.5rem 0'
            }}>🚀 Demo para TCC</p>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.8rem',
              margin: 0
            }}>Use qualquer email/senha para entrar</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dev@musclelevel.com"
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '1rem',
                  backdropFilter: 'blur(10px)'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '1rem',
                  backdropFilter: 'blur(10px)'
                }}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '1.2rem',
                borderRadius: '15px',
                border: 'none',
                background: isLoading 
                  ? 'rgba(255, 255, 255, 0.3)'
                  : 'linear-gradient(135deg, #00f5ff 0%, #0099cc 100%)',
                color: isLoading ? 'rgba(255, 255, 255, 0.7)' : '#000',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(0, 245, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              {isLoading ? (
                <>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '2px solid #fff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Entrando...
                </>
              ) : (
                <>
                  <span>🚀</span>
                  Entrar no MuscleLevel
                </>
              )}
            </button>
          </form>

          {/* OAuth Options */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              margin: '1.5rem 0',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
              <span style={{ margin: '0 1rem', fontSize: '0.9rem' }}>ou</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
            </div>

            <button
              type="button"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              <span>🌐</span>
              Continuar com Google
            </button>

            <button
              type="button"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <span>📘</span>
              Continuar com Facebook
            </button>
          </div>

          {/* Links */}
          <div style={{ textAlign: 'center' }}>
            <a href="/auth/reset" style={{
              color: '#00f5ff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              Esqueceu a senha?
            </a>
            
            <div style={{ margin: '1rem 0', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
              Não tem conta? {' '}
              <span style={{ color: '#00f5ff', cursor: 'pointer', fontWeight: '600' }}>
                Criar conta
              </span>
            </div>

            <a href="/" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>←</span> Voltar ao início
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
