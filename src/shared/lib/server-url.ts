export function getServerUrl(): string {
  // Verifica se está rodando no servidor ou no cliente
  if (typeof window !== 'undefined') {
    // Cliente: usa a URL atual do navegador
    return window.location.origin;
  }
  
  // Servidor: usa variáveis de ambiente ou fallback
  return process.env.NEXT_PUBLIC_SITE_URL || 
         process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
         'http://localhost:3000';
}