/**
 * scripts/transform-to-csv.js
 * Converte data/exercises_raw.json -> data/exercises-for-import.csv
 *
 * Uso:
 *   node scripts/transform-to-csv.js
 */

const fs = require('fs').promises;
const path = require('path');

const INPUT_FILE = 'data/exercises_raw.json';
const OUTPUT_FILE = 'data/exercises-for-import.csv';

// Função para escapar campos CSV
function escapeCsvField(field) {
  if (field === null || field === undefined) {
    return '';
  }
  
  const str = String(field);
  
  // Se contém vírgula, aspas ou quebra de linha, precisa ser quoted
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    // Duplicar aspas internas e envolver em aspas
    return `"${str.replace(/"/g, '""')}"`;
  }
  
  return str;
}

// Função para converter JSON para CSV
async function transformToCsv() {
  console.log('🔄 Iniciando conversão JSON → CSV...');
  
  try {
    // Ler arquivo JSON
    console.log(`📖 Lendo arquivo: ${INPUT_FILE}`);
    const rawData = await fs.readFile(INPUT_FILE, 'utf-8');
    const exercises = JSON.parse(rawData);
    
    console.log(`📊 Encontrados ${exercises.length} registros para conversão`);
    
    if (exercises.length === 0) {
      throw new Error('Nenhum exercício encontrado no arquivo JSON');
    }
    
    // Cabeçalho CSV (ordem exata esperada pelo importador)
    const headers = [
      'id',
      'name',
      'name_en', 
      'description',
      'description_en',
      'full_video_url',
      'full_video_image_url',
      'introduction',
      'introduction_en',
      'slug',
      'slug_en',
      'attribute_name',
      'attribute_value'
    ];
    
    console.log('📝 Construindo CSV...');
    
    // Construir linhas CSV
    const csvLines = [headers.join(',')];
    
    exercises.forEach((exercise, index) => {
      try {
        const row = headers.map(header => {
          const value = exercise[header];
          return escapeCsvField(value);
        });
        
        csvLines.push(row.join(','));
        
        if ((index + 1) % 100 === 0) {
          console.log(`  ✅ Processados ${index + 1}/${exercises.length} registros...`);
        }
      } catch (error) {
        console.log(`  ⚠️ Erro ao processar registro ${index + 1}: ${error.message}`);
      }
    });
    
    // Escrever arquivo CSV
    console.log(`💾 Salvando CSV em: ${OUTPUT_FILE}`);
    const csvContent = csvLines.join('\n');
    await fs.writeFile(OUTPUT_FILE, csvContent, 'utf-8');
    
    console.log('🎉 Conversão concluída com sucesso!');
    console.log(`📊 Estatísticas:`);
    console.log(`  📄 Linhas totais: ${csvLines.length} (incluindo cabeçalho)`);
    console.log(`  🏋️ Registros de exercícios: ${csvLines.length - 1}`);
    console.log(`  📁 Arquivo de saída: ${OUTPUT_FILE}`);
    
    // Validação rápida
    const uniqueExercises = [...new Set(exercises.map(e => e.id))].length;
    const attributeTypes = [...new Set(exercises.map(e => e.attribute_name))];
    
    console.log(`  🆔 Exercícios únicos: ${uniqueExercises}`);
    console.log(`  🏷️ Tipos de atributos: ${attributeTypes.join(', ')}`);
    
    // Verificar se arquivo foi criado corretamente
    const stats = await fs.stat(OUTPUT_FILE);
    console.log(`  📦 Tamanho do arquivo: ${(stats.size / 1024).toFixed(2)} KB`);
    
    return {
      success: true,
      inputFile: INPUT_FILE,
      outputFile: OUTPUT_FILE,
      recordsProcessed: exercises.length,
      uniqueExercises,
      attributeTypes,
      fileSizeKB: (stats.size / 1024).toFixed(2)
    };
    
  } catch (error) {
    console.error('💥 Erro na conversão:', error);
    
    // Se o arquivo de entrada não existir, criar um CSV de exemplo
    if (error.code === 'ENOENT') {
      console.log('📝 Arquivo JSON não encontrado, gerando CSV de exemplo...');
      await generateExampleCsv();
      return { success: false, error: 'Arquivo de entrada não encontrado, CSV de exemplo gerado' };
    }
    
    throw error;
  }
}

// Função para gerar CSV de exemplo se o scraping falhou
async function generateExampleCsv() {
  console.log('🔧 Gerando CSV de exemplo...');
  
  const exampleExercises = [
    {
      id: '1',
      name: 'Push-ups',
      name_en: 'Push-ups',
      description: '<p>A classic bodyweight exercise that targets the chest, shoulders, and triceps.</p>',
      description_en: '<p>A classic bodyweight exercise that targets the chest, shoulders, and triceps.</p>',
      full_video_url: 'https://www.youtube.com/embed/IODxDxX7oi4?autoplay=1',
      full_video_image_url: 'https://img.youtube.com/vi/IODxDxX7oi4/hqdefault.jpg',
      introduction: '<p>The <strong>Push-up</strong> is a fundamental bodyweight exercise that builds upper body strength.</p>',
      introduction_en: '<p>The <strong>Push-up</strong> is a fundamental bodyweight exercise that builds upper body strength.</p>',
      slug: 'push-ups',
      slug_en: 'push-ups',
      attribute_name: 'TYPE',
      attribute_value: 'STRENGTH'
    },
    {
      id: '1',
      name: 'Push-ups',
      name_en: 'Push-ups', 
      description: '<p>A classic bodyweight exercise that targets the chest, shoulders, and triceps.</p>',
      description_en: '<p>A classic bodyweight exercise that targets the chest, shoulders, and triceps.</p>',
      full_video_url: 'https://www.youtube.com/embed/IODxDxX7oi4?autoplay=1',
      full_video_image_url: 'https://img.youtube.com/vi/IODxDxX7oi4/hqdefault.jpg',
      introduction: '<p>The <strong>Push-up</strong> is a fundamental bodyweight exercise that builds upper body strength.</p>',
      introduction_en: '<p>The <strong>Push-up</strong> is a fundamental bodyweight exercise that builds upper body strength.</p>',
      slug: 'push-ups',
      slug_en: 'push-ups',
      attribute_name: 'PRIMARY_MUSCLE',
      attribute_value: 'CHEST'
    }
  ];
  
  // Salvar como CSV
  const headers = [
    'id', 'name', 'name_en', 'description', 'description_en',
    'full_video_url', 'full_video_image_url', 'introduction', 'introduction_en',
    'slug', 'slug_en', 'attribute_name', 'attribute_value'
  ];
  
  const csvLines = [headers.join(',')];
  
  exampleExercises.forEach(exercise => {
    const row = headers.map(header => escapeCsvField(exercise[header]));
    csvLines.push(row.join(','));
  });
  
  await fs.writeFile(OUTPUT_FILE, csvLines.join('\n'), 'utf-8');
  console.log(`✅ CSV de exemplo gerado: ${OUTPUT_FILE}`);
}

// Executar se chamado diretamente
if (require.main === module) {
  transformToCsv().then(result => {
    if (result.success) {
      console.log('✅ Transformação concluída com sucesso!');
      process.exit(0);
    } else {
      console.log('⚠️ Transformação concluída com avisos');
      process.exit(0);
    }
  }).catch(error => {
    console.error('💥 Falha na transformação:', error);
    process.exit(1);
  });
}

module.exports = { transformToCsv, generateExampleCsv };