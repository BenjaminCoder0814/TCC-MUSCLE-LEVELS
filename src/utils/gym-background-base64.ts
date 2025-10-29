// Imagem de fundo em base64 para garantir que sempre carregue
export const gymBackgroundBase64 = "data:image/svg+xml;base64," + btoa(`
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#7c3aed;stop-opacity:0.9" />
      <stop offset="100%" style="stop-color:#dc2626;stop-opacity:0.8" />
    </linearGradient>
    <radialGradient id="overlay1" cx="30%" cy="30%" r="70%">
      <stop offset="0%" style="stop-color:#000000;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0.7" />
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg1)"/>
  
  <!-- Equipment silhouettes -->
  <g opacity="0.15" fill="#ffffff">
    <!-- Dumbbells -->
    <ellipse cx="300" cy="200" rx="40" ry="15"/>
    <rect x="260" y="190" width="80" height="20" rx="10"/>
    <ellipse cx="1600" cy="800" rx="35" ry="12"/>
    <rect x="1565" y="794" width="70" height="16" rx="8"/>
    
    <!-- Barbells -->
    <rect x="500" y="400" width="400" height="12" rx="6"/>
    <ellipse cx="490" cy="406" rx="25" ry="40"/>
    <ellipse cx="910" cy="406" rx="25" ry="40"/>
    
    <!-- Weight plates -->
    <circle cx="800" cy="600" r="80" stroke="#ffffff" stroke-width="6" fill="none"/>
    <circle cx="800" cy="600" r="60" stroke="#ffffff" stroke-width="4" fill="none"/>
    <circle cx="800" cy="600" r="40" fill="#ffffff" opacity="0.3"/>
    
    <circle cx="1200" cy="300" r="60" stroke="#ffffff" stroke-width="4" fill="none"/>
    <circle cx="1200" cy="300" r="45" stroke="#ffffff" stroke-width="3" fill="none"/>
    
    <!-- Kettlebells -->
    <circle cx="200" cy="700" r="35"/>
    <rect x="185" y="665" width="30" height="35" rx="15"/>
    
    <circle cx="1500" cy="500" r="30"/>
    <rect x="1488" y="470" width="24" height="30" rx="12"/>
    
    <!-- Abstract gym equipment -->
    <rect x="1000" y="150" width="120" height="80" rx="10" opacity="0.4"/>
    <rect x="1020" y="130" width="80" height="40" rx="5" opacity="0.6"/>
    
    <path d="M 400 800 Q 500 750 600 800 Q 500 850 400 800" opacity="0.3"/>
    <path d="M 1300 200 Q 1400 150 1500 200 Q 1400 250 1300 200" opacity="0.3"/>
  </g>
  
  <!-- Texture dots -->
  <g opacity="0.08" fill="#ffffff">
    <circle cx="150" cy="150" r="4"/>
    <circle cx="450" cy="250" r="3"/>
    <circle cx="750" cy="180" r="5"/>
    <circle cx="1050" cy="220" r="3"/>
    <circle cx="1350" cy="160" r="4"/>
    <circle cx="1650" cy="200" r="3"/>
    <circle cx="250" cy="450" r="3"/>
    <circle cx="550" cy="380" r="4"/>
    <circle cx="850" cy="420" r="3"/>
    <circle cx="1150" cy="460" r="5"/>
    <circle cx="1450" cy="400" r="3"/>
    <circle cx="1750" cy="440" r="4"/>
    <circle cx="100" cy="750" r="3"/>
    <circle cx="400" cy="680" r="4"/>
    <circle cx="700" cy="720" r="3"/>
    <circle cx="1000" cy="760" r="5"/>
    <circle cx="1300" cy="700" r="3"/>
    <circle cx="1600" cy="740" r="4"/>
  </g>
  
  <rect width="100%" height="100%" fill="url(#overlay1)"/>
</svg>
`);

// Função para aplicar background com fallbacks
export const getGymBackground = () => {
  return `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('/images/gym-hero-bg.jpg'), url('/images/fitness-bg.jpg'), url('/images/workout-bg.jpg'), ${gymBackgroundBase64}`;
};