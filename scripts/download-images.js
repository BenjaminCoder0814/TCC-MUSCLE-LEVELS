const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Criar diretório de imagens se não existir
const imageDir = path.join(__dirname, '..', 'public', 'images', 'exercises');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
  console.log('📁 Diretório de imagens criado:', imageDir);
}

// Lista de exercícios com imagens placeholder
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

// Função para gerar imagem placeholder usando uma API gratuita
async function downloadPlaceholderImage(exerciseName) {
  try {
    // Usar picsum.photos para imagens placeholder
    const imageUrl = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;
    
    const response = await axios.get(imageUrl, { 
      responseType: 'stream',
      timeout: 10000 
    });
    
    const fileName = `${exerciseName}.jpg`;
    const filePath = path.join(imageDir, fileName);
    
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log(`✅ Imagem baixada: ${fileName}`);
        resolve(filePath);
      });
      writer.on('error', reject);
    });
    
  } catch (error) {
    console.log(`❌ Erro ao baixar imagem para ${exerciseName}:`, error.message);
    return null;
  }
}

// Função principal
async function downloadAllImages() {
  console.log('🚀 Iniciando download de imagens...');
  console.log(`📊 Total de exercícios: ${exercises.length}`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const exercise of exercises) {
    console.log(`🔄 Processando: ${exercise}`);
    
    const result = await downloadPlaceholderImage(exercise);
    
    if (result) {
      successCount++;
    } else {
      errorCount++;
    }
    
    // Aguardar um pouco entre downloads para não sobrecarregar
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n📊 Resumo do Download:');
  console.log(`✅ Sucessos: ${successCount}`);
  console.log(`❌ Erros: ${errorCount}`);
  console.log(`📁 Imagens salvas em: ${imageDir}`);
  
  console.log('\n🎉 Download de imagens concluído!');
}

// Executar o script
downloadAllImages().catch(console.error);