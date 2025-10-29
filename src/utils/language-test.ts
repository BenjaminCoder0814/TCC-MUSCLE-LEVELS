// Script de teste para validar todos os idiomas
export const testAllLanguages = () => {
  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh-CN', name: '中文 (简体)', flag: '🇨🇳' }
  ];

  const baseUrl = 'http://localhost:3001';
  
  console.log('🧪 Testando todos os idiomas...');
  
  languages.forEach(lang => {
    const url = `${baseUrl}/${lang.code}`;
    console.log(`${lang.flag} ${lang.name}: ${url}`);
    
    // Teste de navegação
    if (typeof window !== 'undefined') {
      // Para usar no browser console
      fetch(url)
        .then(response => {
          if (response.ok) {
            console.log(`✅ ${lang.name} - Status: ${response.status}`);
          } else {
            console.error(`❌ ${lang.name} - Status: ${response.status}`);
          }
        })
        .catch(error => {
          console.error(`❌ ${lang.name} - Erro:`, error);
        });
    }
  });
  
  return languages;
};

// Função para testar mudança de idioma
export const testLanguageSwitch = (fromLocale: string, toLocale: string) => {
  const currentPath = window.location.pathname;
  const localeRegex = /^\/[a-z]{2}(-[A-Z]{2})?/;
  
  let pathWithoutLocale = currentPath;
  if (localeRegex.test(pathWithoutLocale)) {
    pathWithoutLocale = pathWithoutLocale.replace(localeRegex, '') || '/';
  }
  
  if (!pathWithoutLocale.startsWith('/')) {
    pathWithoutLocale = '/' + pathWithoutLocale;
  }
  
  const newPath = `/${toLocale}${pathWithoutLocale}`;
  
  console.log('🔄 Teste de mudança de idioma:', {
    from: fromLocale,
    to: toLocale,
    currentPath,
    pathWithoutLocale,
    newPath,
    expectedUrl: `${window.location.origin}${newPath}`
  });
  
  return newPath;
};

// Para usar no browser console
if (typeof window !== 'undefined') {
  (window as any).testAllLanguages = testAllLanguages;
  (window as any).testLanguageSwitch = testLanguageSwitch;
}