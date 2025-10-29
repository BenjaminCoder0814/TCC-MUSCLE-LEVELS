const fs = require('fs');
const path = require('path');

// Função para parsear linha CSV com quotes
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

// Ler o CSV
const csvPath = path.join(__dirname, '..', 'data', 'sample-exercises.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const lines = csvContent.split('\n').slice(1); // Pular header

// Processar exercícios
const exercisesMap = new Map();

lines.forEach((line, index) => {
  if (!line.trim()) return;
  
  const parts = parseCSVLine(line);
  if (parts.length < 13) {
    console.log(`Skipping line ${index}: not enough parts (${parts.length})`);
    return;
  }
  
  const id = parts[0];
  const name = parts[1];
  const nameEn = parts[2];
  const description = parts[3];
  const descriptionEn = parts[4];
  const fullVideoUrl = parts[5];
  const fullVideoImageUrl = parts[6];
  const introduction = parts[7];
  const introductionEn = parts[8];
  const attributeName = parts[12];
  const attributeValue = parts[13] ? parts[13].trim() : '';
  
  if (!id || !name) return;
  
  if (!exercisesMap.has(id)) {
    exercisesMap.set(id, {
      id,
      name,
      nameEn,
      description,
      descriptionEn,
      fullVideoUrl,
      fullVideoImageUrl,
      introduction,
      introductionEn,
      attributes: []
    });
  }
  
  exercisesMap.get(id).attributes.push({
    attributeName: { name: attributeName },
    attributeValue: { value: attributeValue }
  });
});

// Converter para array
const exercises = Array.from(exercisesMap.values());

// Limitar a 200 exercícios para não ficar muito pesado
const limitedExercises = exercises.slice(0, 200);

// Gerar código TypeScript
let tsCode = `// Mock service para exercícios - Gerado automaticamente do CSV
export interface MockExercise {
  id: string;
  name: string;
  nameEn: string;
  description?: string;
  descriptionEn?: string;
  fullVideoUrl?: string;
  fullVideoImageUrl?: string;
  introduction?: string;
  introductionEn?: string;
  attributes: {
    attributeName: {
      name: string;
    };
    attributeValue: {
      value: string;
    };
  }[];
}

export const mockExercises: MockExercise[] = [\n`;

limitedExercises.forEach((ex, index) => {
  tsCode += `  {\n`;
  tsCode += `    id: "${ex.id}",\n`;
  tsCode += `    name: ${JSON.stringify(ex.name)},\n`;
  tsCode += `    nameEn: ${JSON.stringify(ex.nameEn)},\n`;
  if (ex.description) tsCode += `    description: ${JSON.stringify(ex.description)},\n`;
  if (ex.descriptionEn) tsCode += `    descriptionEn: ${JSON.stringify(ex.descriptionEn)},\n`;
  if (ex.fullVideoUrl) tsCode += `    fullVideoUrl: ${JSON.stringify(ex.fullVideoUrl)},\n`;
  if (ex.fullVideoImageUrl) tsCode += `    fullVideoImageUrl: ${JSON.stringify(ex.fullVideoImageUrl)},\n`;
  if (ex.introduction) tsCode += `    introduction: ${JSON.stringify(ex.introduction)},\n`;
  if (ex.introductionEn) tsCode += `    introductionEn: ${JSON.stringify(ex.introductionEn)},\n`;
  tsCode += `    attributes: [\n`;
  ex.attributes.forEach(attr => {
    tsCode += `      { attributeName: { name: "${attr.attributeName.name}" }, attributeValue: { value: "${attr.attributeValue.value}" } },\n`;
  });
  tsCode += `    ]\n`;
  tsCode += `  }${index < limitedExercises.length - 1 ? ',' : ''}\n`;
});

tsCode += `];\n\n`;
tsCode += `export const getMockExercises = (equipment?: string[], muscles?: string[], limit?: number) => {\n`;
tsCode += `  let filtered = mockExercises;\n`;
tsCode += `  \n`;
tsCode += `  if (equipment && equipment.length > 0) {\n`;
tsCode += `    filtered = filtered.filter(ex => {\n`;
tsCode += `      const exEquipment = ex.attributes.find(a => a.attributeName.name === 'EQUIPMENT')?.attributeValue.value;\n`;
tsCode += `      return equipment.includes(exEquipment || '');\n`;
tsCode += `    });\n`;
tsCode += `  }\n`;
tsCode += `  \n`;
tsCode += `  if (muscles && muscles.length > 0) {\n`;
tsCode += `    filtered = filtered.filter(ex => {\n`;
tsCode += `      const primaryMuscle = ex.attributes.find(a => a.attributeName.name === 'PRIMARY_MUSCLE')?.attributeValue.value;\n`;
tsCode += `      return muscles.includes(primaryMuscle || '');\n`;
tsCode += `    });\n`;
tsCode += `  }\n`;
tsCode += `  \n`;
tsCode += `  if (limit) {\n`;
tsCode += `    filtered = filtered.slice(0, limit);\n`;
tsCode += `  }\n`;
tsCode += `  \n`;
tsCode += `  return filtered.map(ex => ({\n`;
tsCode += `    ...ex,\n`;
tsCode += `    fullVideoImageUrl: ex.fullVideoImageUrl || null,\n`;
tsCode += `  }));\n`;
tsCode += `};\n`;

// Escrever arquivo
const outputPath = path.join(__dirname, '..', 'src', 'features', 'workout-builder', 'services', 'mock-exercises.service.ts');
fs.writeFileSync(outputPath, tsCode, 'utf-8');

console.log(`✅ Generated ${limitedExercises.length} exercises to ${outputPath}`);
