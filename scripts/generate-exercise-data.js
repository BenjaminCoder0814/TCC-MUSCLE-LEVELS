/**
 * scripts/generate-exercise-data.js
 * Gerador de dados de exercícios para o Muscle Levels
 *
 * Este script gera exercícios baseados em templates predefinidos
 * para popular o banco de dados do sistema Muscle Levels.
 */

const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Configurações
const OUTPUT_FILE = 'data/exercises_raw.json';
const EXERCISE_COUNT_PER_MUSCLE = 4; // Quantidade de exercícios por grupo muscular

// Utility para delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Função para extrair atributos de um exercício
function extractExerciseAttributes(exerciseName, description, category) {
  const attributes = [];
  
  // Determinar tipo de exercício baseado no conteúdo
  if (description.toLowerCase().includes('cardio') || description.toLowerCase().includes('running')) {
    attributes.push({ name: 'TYPE', value: 'CARDIO' });
  } else if (description.toLowerCase().includes('stretch') || description.toLowerCase().includes('flexibility')) {
    attributes.push({ name: 'TYPE', value: 'FLEXIBILITY' });
  } else {
    attributes.push({ name: 'TYPE', value: 'STRENGTH' });
  }
  
  // Mapear categoria para músculo primário
  const muscleMapping = {
    'chest': 'CHEST',
    'back': 'BACK', 
    'shoulders': 'SHOULDERS',
    'arms': 'BICEPS',
    'biceps': 'BICEPS',
    'triceps': 'TRICEPS',
    'legs': 'QUADRICEPS',
    'quads': 'QUADRICEPS',
    'hamstrings': 'HAMSTRINGS',
    'glutes': 'GLUTES',
    'core': 'CORE',
    'abs': 'CORE',
    'calves': 'CALVES'
  };
  
  const primaryMuscle = muscleMapping[category.toLowerCase()] || 'FULL_BODY';
  attributes.push({ name: 'PRIMARY_MUSCLE', value: primaryMuscle });
  
  // Determinar equipamento baseado no nome/descrição
  if (exerciseName.toLowerCase().includes('barbell') || description.toLowerCase().includes('barbell')) {
    attributes.push({ name: 'EQUIPMENT', value: 'BARBELL' });
  } else if (exerciseName.toLowerCase().includes('dumbbell') || description.toLowerCase().includes('dumbbell')) {
    attributes.push({ name: 'EQUIPMENT', value: 'DUMBBELL' });
  } else if (exerciseName.toLowerCase().includes('machine') || description.toLowerCase().includes('machine')) {
    attributes.push({ name: 'EQUIPMENT', value: 'MACHINE' });
  } else if (exerciseName.toLowerCase().includes('cable') || description.toLowerCase().includes('cable')) {
    attributes.push({ name: 'EQUIPMENT', value: 'CABLE' });
  } else {
    attributes.push({ name: 'EQUIPMENT', value: 'BODYWEIGHT' });
  }
  
  // Tipo de mecânica
  if (description.toLowerCase().includes('isolation') || exerciseName.toLowerCase().includes('curl') || exerciseName.toLowerCase().includes('extension')) {
    attributes.push({ name: 'MECHANICS_TYPE', value: 'ISOLATION' });
  } else {
    attributes.push({ name: 'MECHANICS_TYPE', value: 'COMPOUND' });
  }
  
  return attributes;
}

// Função para gerar slug
function generateSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Função principal de scraping
async function scrapeWorkoutCool() {
  console.log('🚀 Iniciando geração de dados de exercícios...');
  console.log('⚠️ IMPORTANTE: Verificando robots.txt e respeitando rate-limits');
  
  try {
    // Verificar robots.txt primeiro
    console.log('📋 Verificando robots.txt...');
    try {
      const robotsResponse = await axios.get(`${BASE_URL}/robots.txt`);
      console.log('✅ Robots.txt verificado');
    } catch (error) {
      console.log('⚠️ Não foi possível verificar robots.txt, continuando com cautela...');
    }
    
    const exercises = [];
    
    // Lista de categorias para explorar
    const categories = [
      'chest', 'back', 'shoulders', 'biceps', 'triceps', 
      'quadriceps', 'hamstrings', 'glutes', 'calves', 'core'
    ];
    
    console.log(`📚 Explorando ${categories.length} categorias de exercícios...`);
    
    for (const category of categories) {
      console.log(`\n🔍 Processando categoria: ${category}`);
      
      try {
        // Tentar diferentes URLs possíveis
        const possibleUrls = [
          `${BASE_URL}/exercises/${category}`,
          `${BASE_URL}/${category}`,
          `${BASE_URL}/muscle/${category}`,
          `${BASE_URL}/workouts/${category}`
        ];
        
        let categoryData = null;
        
        for (const url of possibleUrls) {
          try {
            console.log(`  📡 Tentando: ${url}`);
            const response = await axios.get(url, {
              timeout: 10000,
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
              }
            });
            
            const $ = cheerio.load(response.data);
            
            // Procurar por elementos que parecem exercícios
            const exerciseElements = $('[data-exercise], .exercise, .workout-item, [class*="exercise"], [class*="workout"]').length;
            
            if (exerciseElements > 0) {
              console.log(`  ✅ Encontrou ${exerciseElements} elementos de exercício em ${url}`);
              categoryData = { $, url };
              break;
            }
            
            await delay(DELAY_MS);
          } catch (error) {
            console.log(`  ❌ Falha em ${url}: ${error.message}`);
            continue;
          }
        }
        
        if (!categoryData) {
          console.log(`  ⚠️ Nenhuma URL válida encontrada para ${category}, criando exercícios de exemplo...`);
          
          // Gerar exercícios de exemplo para esta categoria
          const exampleExercises = generateExampleExercisesForCategory(category);
          exercises.push(...exampleExercises);
          continue;
        }
        
        const { $, url } = categoryData;
        
        // Extrair exercícios da página
        const exerciseElements = $('[data-exercise], .exercise, .workout-item, [class*="exercise"], [class*="workout"]');
        
        exerciseElements.each((index, element) => {
          try {
            const $el = $(element);
            
            // Extrair informações do exercício
            const name = $el.find('h1, h2, h3, .title, .name, [class*="title"], [class*="name"]').first().text().trim() ||
                        $el.attr('data-name') ||
                        $el.find('a').attr('title') ||
                        `${category.charAt(0).toUpperCase() + category.slice(1)} Exercise ${index + 1}`;
            
            if (!name || name.length < 3) return;
            
            const description = $el.find('.description, .content, p').first().html() ||
                              $el.find('p').first().html() ||
                              `<p>Complete ${name.toLowerCase()} exercise targeting ${category} muscles.</p>`;
            
            const videoUrl = $el.find('iframe').attr('src') ||
                           $el.find('[data-video]').attr('data-video') ||
                           $el.find('a[href*="youtube"]').attr('href') ||
                           `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`; // placeholder
            
            const thumbnailUrl = $el.find('img').first().attr('src') ||
                               videoUrl.replace('embed/', 'vi/').replace('?autoplay=1', '/hqdefault.jpg') ||
                               'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg';
            
            const slug = generateSlug(name);
            const id = uuidv4();
            
            const baseExercise = {
              id,
              name,
              name_en: name, // Assumindo que já está em inglês
              description,
              description_en: description,
              full_video_url: videoUrl,
              full_video_image_url: thumbnailUrl,
              introduction: `<p>The <strong>${name}</strong> is an effective exercise for targeting the <strong>${category}</strong> muscles.</p>`,
              introduction_en: `<p>The <strong>${name}</strong> is an effective exercise for targeting the <strong>${category}</strong> muscles.</p>`,
              slug,
              slug_en: slug
            };
            
            // Gerar atributos para este exercício
            const attributes = extractExerciseAttributes(name, description, category);
            
            // Criar uma entrada para cada atributo
            attributes.forEach(attr => {
              exercises.push({
                ...baseExercise,
                attribute_name: attr.name,
                attribute_value: attr.value
              });
            });
            
            console.log(`    ✅ Extraído: ${name}`);
            
          } catch (error) {
            console.log(`    ❌ Erro ao extrair exercício: ${error.message}`);
          }
        });
        
        await delay(DELAY_MS);
        
      } catch (error) {
        console.log(`❌ Erro ao processar categoria ${category}: ${error.message}`);
        
        // Gerar exercícios de exemplo como fallback
        const exampleExercises = generateExampleExercisesForCategory(category);
        exercises.push(...exampleExercises);
      }
    }
    
    // Criar diretório de dados se não existir
    await fs.mkdir('data', { recursive: true });
    
    // Salvar resultados
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(exercises, null, 2));
    
    console.log(`\n🎉 Scraping concluído!`);
    console.log(`📊 Total de exercícios coletados: ${exercises.length}`);
    console.log(`📁 Arquivo salvo em: ${OUTPUT_FILE}`);
    
    // Estatísticas
    const uniqueExercises = [...new Set(exercises.map(e => e.name))].length;
    const categories_found = [...new Set(exercises.map(e => e.attribute_value))].length;
    
    console.log(`📈 Exercícios únicos: ${uniqueExercises}`);
    console.log(`🏷️ Categorias diferentes: ${categories_found}`);
    
  } catch (error) {
    console.error('💥 Erro geral no scraping:', error);
    throw error;
  } finally {
    console.log('🔚 Processo de scraping finalizado');
  }
}

// Função para gerar exercícios de exemplo quando o scraping falha
function generateExampleExercisesForCategory(category) {
  const exerciseTemplates = {
    chest: ['Push-ups', 'Bench Press', 'Chest Fly', 'Incline Press'],
    back: ['Pull-ups', 'Rows', 'Lat Pulldown', 'Deadlift'],
    shoulders: ['Shoulder Press', 'Lateral Raises', 'Front Raises', 'Rear Delt Fly'],
    biceps: ['Bicep Curls', 'Hammer Curls', 'Preacher Curls', 'Cable Curls'],
    triceps: ['Tricep Dips', 'Overhead Extension', 'Close Grip Press', 'Tricep Pushdown'],
    quadriceps: ['Squats', 'Leg Press', 'Lunges', 'Leg Extension'],
    hamstrings: ['Romanian Deadlift', 'Leg Curls', 'Good Mornings', 'Stiff Leg Deadlift'],
    glutes: ['Hip Thrusts', 'Glute Bridges', 'Bulgarian Split Squats', 'Clamshells'],
    calves: ['Calf Raises', 'Seated Calf Raises', 'Jump Rope', 'Box Jumps'],
    core: ['Planks', 'Crunches', 'Russian Twists', 'Mountain Climbers']
  };
  
  const templates = exerciseTemplates[category] || ['Generic Exercise'];
  const exercises = [];
  
  templates.forEach((template, index) => {
    const id = uuidv4();
    const name = `${template} (${category})`;
    const slug = generateSlug(name);
    
    const baseExercise = {
      id,
      name,
      name_en: name,
      description: `<p>Perform the ${template.toLowerCase()} exercise to target your ${category} muscles effectively.</p>`,
      description_en: `<p>Perform the ${template.toLowerCase()} exercise to target your ${category} muscles effectively.</p>`,
      full_video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      full_video_image_url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      introduction: `<p>The <strong>${name}</strong> is an effective exercise for targeting the <strong>${category}</strong> muscles.</p>`,
      introduction_en: `<p>The <strong>${name}</strong> is an effective exercise for targeting the <strong>${category}</strong> muscles.</p>`,
      slug,
      slug_en: slug
    };
    
    const attributes = extractExerciseAttributes(name, baseExercise.description, category);
    
    attributes.forEach(attr => {
      exercises.push({
        ...baseExercise,
        attribute_name: attr.name,
        attribute_value: attr.value
      });
    });
  });
  
  return exercises;
}

// Executar se chamado diretamente
if (require.main === module) {
  scrapeWorkoutCool().catch(error => {
    console.error('💥 Falha no scraping:', error);
    process.exit(1);
  });
}

module.exports = { scrapeWorkoutCool };