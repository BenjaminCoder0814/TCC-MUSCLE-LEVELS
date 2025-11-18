const fs = require('fs');
const path = require('path');

console.log('🧹 Limpeza de arquivos debug/teste...\n');

try {
  // 1. Remove arquivo de teste específico
  const testFile = path.join(process.cwd(), 'src/utils/language-test.ts');
  if (fs.existsSync(testFile)) {
    fs.unlinkSync(testFile);
    console.log('🗑️  Deletado: src/utils/language-test.ts');
  }

  // 2. Limpa comentários debug específicos
  const cleanups = [
    {
      file: 'src/features/auth/signup/model/signup.action.ts',
      replacements: [
        {
          from: 'console.log("SignUp attempt:", {',
          to: '// console.log("SignUp attempt:", {'
        }
      ]
    }
  ];

  cleanups.forEach(({file, replacements}) => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      replacements.forEach(({from, to}) => {
        if (content.includes(from)) {
          content = content.replace(from, to);
          modified = true;
        }
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Limpo: ${file}`);
      }
    }
  });

  console.log('\n✨ Limpeza concluída!');

} catch (error) {
  console.error('❌ Erro:', error.message);
}