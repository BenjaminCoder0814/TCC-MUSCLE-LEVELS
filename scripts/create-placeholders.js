const fs = require('fs');
const path = require('path');

// Criar diretório de imagens se não existir
const imageDir = path.join(__dirname, '..', 'public', 'images', 'exercises');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
  console.log('📁 Diretório de imagens criado:', imageDir);
}

// Lista de exercícios
const exercises = [
  'push-ups-chest',
  'bench-press-chest', 
  'chest-fly-chest',
  'incline-press-chest',
  'pull-ups-back',
  'rows-back',
  'lat-pulldown-back',
  'deadlift-back',
  'shoulder-press-shoulders',
  'lateral-raises-shoulders',
  'front-raises-shoulders',
  'rear-delt-fly-shoulders',
  'bicep-curls-biceps',
  'hammer-curls-biceps',
  'preacher-curls-biceps',
  'cable-curls-biceps',
  'tricep-dips-triceps',
  'overhead-extension-triceps',
  'close-grip-press-triceps',
  'tricep-pushdown-triceps',
  'squats-quadriceps',
  'leg-press-quadriceps',
  'lunges-quadriceps',
  'leg-extension-quadriceps',
  'romanian-deadlift-hamstrings',
  'leg-curls-hamstrings',
  'good-mornings-hamstrings',
  'stiff-leg-deadlift-hamstrings',
  'hip-thrusts-glutes',
  'glute-bridges-glutes',
  'bulgarian-split-squats-glutes',
  'clamshells-glutes',
  'calf-raises-calves',
  'seated-calf-raises-calves',
  'jump-rope-calves',
  'box-jumps-calves',
  'planks-core',
  'crunches-core',
  'russian-twists-core',
  'mountain-climbers-core'
];

// Criar um arquivo SVG placeholder simples
function createPlaceholderSVG(exerciseName, width = 400, height = 300) {
  const muscleName = exerciseName.split('-').pop().toUpperCase();
  const exerciseTitle = exerciseName.split('-').slice(0, -1).map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)"/>
    <rect x="20" y="20" width="${width-40}" height="${height-40}" 
          fill="none" stroke="white" stroke-width="2" rx="10"/>
    
    <!-- Ícone do exercício -->
    <circle cx="${width/2}" cy="${height/2-30}" r="40" fill="rgba(255,255,255,0.2)"/>
    <text x="${width/2}" y="${height/2-25}" font-family="Arial, sans-serif" 
          font-size="30" fill="white" text-anchor="middle">💪</text>
    
    <!-- Nome do exercício -->
    <text x="${width/2}" y="${height/2+20}" font-family="Arial, sans-serif" 
          font-size="16" font-weight="bold" fill="white" text-anchor="middle">${exerciseTitle}</text>
    
    <!-- Grupo muscular -->
    <text x="${width/2}" y="${height/2+40}" font-family="Arial, sans-serif" 
          font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle">${muscleName}</text>
    
    <!-- Marca d'água -->
    <text x="${width-10}" y="${height-10}" font-family="Arial, sans-serif" 
          font-size="10" fill="rgba(255,255,255,0.5)" text-anchor="end">Muscle Levels</text>
  </svg>`;
}

// Função para criar imagem placeholder local
function createLocalPlaceholder(exerciseName) {
  try {
    const svgContent = createPlaceholderSVG(exerciseName);
    const fileName = `${exerciseName}.svg`;
    const filePath = path.join(imageDir, fileName);
    
    fs.writeFileSync(filePath, svgContent, 'utf8');
    console.log(`✅ Placeholder criado: ${fileName}`);
    return filePath;
    
  } catch (error) {
    console.log(`❌ Erro ao criar placeholder para ${exerciseName}:`, error.message);
    return null;
  }
}

// Função principal
function createAllPlaceholders() {
  console.log('🚀 Criando placeholders locais...');
  console.log(`📊 Total de exercícios: ${exercises.length}`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const exercise of exercises) {
    console.log(`🔄 Processando: ${exercise}`);
    
    const result = createLocalPlaceholder(exercise);
    
    if (result) {
      successCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log('\n📊 Resumo da Criação:');
  console.log(`✅ Sucessos: ${successCount}`);
  console.log(`❌ Erros: ${errorCount}`);
  console.log(`📁 Placeholders salvos em: ${imageDir}`);
  
  console.log('\n🎉 Criação de placeholders concluída!');
  console.log('ℹ️  As imagens são SVGs com gradiente e informações do exercício');
}

// Executar o script
createAllPlaceholders();