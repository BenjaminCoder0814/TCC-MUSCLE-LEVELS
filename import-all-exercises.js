const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function importExercises() {
  try {
    console.log('🚀 Starting exercise import from CSV...');
    
    const csvPath = path.join(__dirname, 'data', 'sample-exercises.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const lines = csvContent.split('\n').slice(1); // Skip header
    
    console.log(`📄 Found ${lines.length} lines in CSV`);
    
    let imported = 0;
    let skipped = 0;
    
    for (const line of lines) {
      if (!line.trim()) continue;
      
      // Simple CSV parsing - split by comma but respect quotes
      const matches = line.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g);
      if (!matches || matches.length < 4) {
        console.log(`⚠️  Skipping invalid line: ${line.substring(0, 50)}...`);
        skipped++;
        continue;
      }
      
      const [id, name, fullVideoImageUrl, shortVideoUrl] = matches.map(m => m.replace(/^"|"$/g, '').trim());
      
      try {
        // Check if exercise already exists
        const existing = await prisma.exercise.findUnique({
          where: { id }
        });
        
        if (existing) {
          console.log(`⏭️  Exercise already exists: ${name}`);
          skipped++;
          continue;
        }
        
        // Create exercise
        await prisma.exercise.create({
          data: {
            id,
            name,
            nameEn: name,
            fullVideoImageUrl: fullVideoImageUrl || null,
            shortVideoUrl: shortVideoUrl || null,
          }
        });
        
        imported++;
        console.log(`✅ Imported: ${name}`);
        
      } catch (error) {
        console.error(`❌ Error importing ${name}:`, error.message);
        skipped++;
      }
    }
    
    console.log('\n📊 Import Summary:');
    console.log(`   ✅ Successfully imported: ${imported}`);
    console.log(`   ⏭️  Skipped: ${skipped}`);
    console.log(`   📝 Total in CSV: ${lines.length}`);
    
    // Count total exercises in database
    const totalInDb = await prisma.exercise.count();
    console.log(`   🗄️  Total in database: ${totalInDb}`);
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importExercises();
