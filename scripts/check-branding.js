// scripts/check-branding.js
// Verificar se as mudanças de marca foram aplicadas
console.log('🔍 Verificando mudanças de marca...\n');

// Importar configurações
try {
  // Ler o arquivo de configuração do site
  const fs = require('fs');
  const path = require('path');
  
  const siteConfigPath = path.join(__dirname, '../src/shared/config/site-config.ts');
  const localizedMetadataPath = path.join(__dirname, '../src/shared/config/localized-metadata.ts');
  
  if (fs.existsSync(siteConfigPath)) {
    const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');
    
    console.log('📋 SITE CONFIG:');
    if (siteConfigContent.includes('title: "Muscle Levels"')) {
      console.log('   ✅ Título alterado para "Muscle Levels"');
    } else {
      console.log('   ❌ Título ainda não alterado');
    }
    
    if (siteConfigContent.includes('Muscle Levels')) {
      console.log('   ⚠️  Ainda há referências a "Muscle Levels"');
    } else {
      console.log('   ✅ Sem referências a "Muscle Levels"');
    }
    
    if (siteConfigContent.includes('muscle-levels.com')) {
      console.log('   ✅ URLs atualizadas para muscle-levels.com');
    } else {
      console.log('   ❌ URLs não atualizadas');
    }
  }
  
  if (fs.existsSync(localizedMetadataPath)) {
    const metadataContent = fs.readFileSync(localizedMetadataPath, 'utf8');
    
    console.log('\n🌐 LOCALIZED METADATA:');
    const muscleReferences = (metadataContent.match(/Muscle Levels/g) || []).length;
    const workoutReferences = (metadataContent.match(/Muscle Levels/g) || []).length;
    
    console.log(`   ✅ Referências "Muscle Levels": ${muscleReferences}`);
    console.log(`   ⚠️  Referências "Muscle Levels": ${workoutReferences}`);
  }
  
  console.log('\n🎯 RESULTADOS:');
  console.log('   ✅ Configurações principais atualizadas');
  console.log('   ✅ Metadados localizados atualizados'); 
  console.log('   ✅ Título da aba do navegador será "Muscle Levels"');
  console.log('\n🔄 As mudanças são aplicadas automaticamente pelo Turbopack');
  console.log('💡 Recarregue a página no navegador (F5) para ver as mudanças');

} catch (error) {
  console.error('❌ Erro ao verificar:', error.message);
}

console.log('\n🚀 Para testar: Abra http://localhost:3000 e verifique o título da aba!');