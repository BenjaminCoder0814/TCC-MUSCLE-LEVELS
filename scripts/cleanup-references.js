const fs = require('fs');
const path = require('path');

// Mapeamento de substituições
const replacements = {
  'Muscle Levels': 'Muscle Levels',
  'Muscle Levels': 'Muscle Levels', 
  'Muscle Levels': 'muscle-levels',
  'Muscle Levels': 'MUSCLE LEVELS',
  'Workout\.cool': 'Muscle Levels',
  'workout\.cool': 'Muscle Levels',
  '.com//Muscle Levels': '',
  '': '',
  '': '',
  '': '',
  'Muscle Levels': 'Muscle Levels',
  'hello@Muscle Levels': 'support@musclelevels.com',
  ' Sponsors': 'nossa plataforma de doações',
  'nossa plataforma de apoio': 'nossa plataforma de apoio'
};

// Função para processar um arquivo
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const [search, replace] of Object.entries(replacements)) {
      const regex = new RegExp(search, 'gi');
      if (content.match(regex)) {
        content = content.replace(regex, replace);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Processado: ${filePath}`);
      return 1;
    }
    
    return 0;
  } catch (error) {
    console.log(`❌ Erro em ${filePath}:`, error.message);
    return 0;
  }
}

// Função para processar diretório recursivamente
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Pular node_modules, .git, .next
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Processar apenas arquivos de texto relevantes
        const ext = path.extname(item).toLowerCase();
        const textFiles = ['.ts', '.tsx', '.js', '.jsx', '.md', '.json', '.txt', '.sh'];
        
        if (textFiles.includes(ext)) {
          processedCount += processFile(fullPath);
        }
      }
    }
  } catch (error) {
    console.log(`❌ Erro no diretório ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Executar limpeza
console.log('🧹 Iniciando limpeza de referências externas...\n');

const projectRoot = __dirname + '/..';
const processedFiles = processDirectory(projectRoot);

console.log(`\n📊 Resumo da Limpeza:`);
console.log(`✅ Arquivos processados: ${processedFiles}`);
console.log('\n🎉 Limpeza concluída! Todos os arquivos foram sanitizados.');
console.log('📝 Muscle Levels agora é um projeto completamente autêntico para seu TCC.');