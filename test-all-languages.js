// Teste automatizado para todas as 6 línguas do Muscle Levels
const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', name: '中文 (简体)', flag: '🇨🇳' }
];

async function testLanguage(lang) {
  const baseUrl = 'http://localhost:3001';
  const url = `${baseUrl}/${lang.code}`;
  
  try {
    console.log(`\n🧪 Testando ${lang.flag} ${lang.name} (${lang.code})`);
    console.log(`📍 URL: ${url}`);
    
    // Simulate basic fetch test
    const response = await fetch(url);
    const status = response.status;
    
    console.log(`✅ Status: ${status} ${status === 200 ? 'OK' : 'ERROR'}`);
    
    if (status === 200) {
      console.log(`✨ ${lang.name} está funcionando perfeitamente!`);
    } else {
      console.log(`❌ Problema com ${lang.name} - Status: ${status}`);
    }
    
    return { lang: lang.code, status, success: status === 200 };
  } catch (error) {
    console.log(`❌ Erro ao testar ${lang.name}:`, error.message);
    return { lang: lang.code, status: 'ERROR', success: false, error: error.message };
  }
}

async function testAllLanguages() {
  console.log('🚀 Iniciando teste completo das línguas do Muscle Levels\n');
  console.log('🎯 Testando todas as 6 línguas suportadas:\n');
  
  const results = [];
  
  for (const lang of languages) {
    const result = await testLanguage(lang);
    results.push(result);
    
    // Pequena pausa entre os testes
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('\n📊 RESUMO DOS TESTES:');
  console.log('='.repeat(50));
  
  const successCount = results.filter(r => r.success).length;
  const totalCount = results.length;
  
  results.forEach(result => {
    const langInfo = languages.find(l => l.code === result.lang);
    const status = result.success ? '✅ OK' : '❌ ERRO';
    console.log(`${langInfo.flag} ${langInfo.name} (${result.lang}): ${status}`);
  });
  
  console.log('='.repeat(50));
  console.log(`🎉 RESULTADO FINAL: ${successCount}/${totalCount} línguas funcionando`);
  
  if (successCount === totalCount) {
    console.log('🏆 SUCESSO TOTAL! Todas as línguas estão funcionando perfeitamente!');
    console.log('✨ O sistema multilíngue do Muscle Levels está 100% operacional!');
  } else {
    console.log('⚠️  Algumas línguas precisam de ajustes.');
  }
  
  return { total: totalCount, success: successCount, results };
}

// Executar o teste se este arquivo for chamado diretamente
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  testAllLanguages().then(() => {
    console.log('\n✅ Teste concluído!');
  }).catch(error => {
    console.error('❌ Erro durante os testes:', error);
  });
}

module.exports = { testAllLanguages, testLanguage, languages };