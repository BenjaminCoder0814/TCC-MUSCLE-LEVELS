const fs = require('fs');
const path = require('path');

// Lista de arquivos com códigos debug/mock/teste para limpeza
const filesToClean = {
  // Arquivo de teste específico que pode ser removido completamente
  'src/utils/language-test.ts': 'delete',
  
  // Arquivos com mock/debug que devem ser limpos (mantendo funcionalidade)
  'src/features/ai-premium/components/AIPremiumPage.tsx': {
    remove: [
      '// Remover imports desnecessários temporariamente',
      'Chat IA temporariamente desabilitado para correções'
    ]
  },
  
  'src/features/premium/ui/premium-upgrade-card.tsx': {
    remove: [
      '  // Log debug info in development',
      '      if (plansData.debug) {',
      '        // console.log("🔍 Debug headers:", plansData.debug.headers);',
      '      }'
    ]
  },
  
  'src/shared/lib/premium/providers/stripe-provider.ts': {
    remove: [
      '            // Example: await sendEmail.welcome(user.email, subscription);',
      '            // Example: await analytics.track("subscription_created", { planId, userId });',
      '            // Example: await sendEmail.receipt(user.email, invoice);',
      '            // Example: await updateUserCredits(userId, plan.credits);',
      '          // Example: await sendEmail.cancelled(user.email);',
      '          // Example: if (subscription.cancel_at_period_end) { scheduleRevoke(userId, subscription.current_period_end) }',
      '            // Example: await sendEmail.paymentFailed(user.email, updatePaymentUrl);',
      '            // Example: if (invoice.attempt_count > 3) { await pausePremiumFeatures(userId) }',
      '          // Example: await sendEmail.abandonedCart(user.email, checkoutUrl);'
    ]
  },
  
  'src/features/auth/signup/model/signup.action.ts': {
    replace: [
      {
        old: 'console.log("SignUp attempt:", {',
        new: '// console.log("SignUp attempt:", {'
      },
      {
        old: '    // TODO: Código original - descomentar quando o banco estiver funcionando',
        new: '    // TODO: Database integration pending'
      }
    ]
  }
};

// Lista de comentários debug para remover de qualquer arquivo
const debugCommentsToRemove = [
  '// Mock data for development - remove when database is setup',
  '// console.log("Using mock data for programs - database not connected");',
  '// console.log("Using mock data for program detail - database not connected");',
  '// console.log("Using mock data for program progress - database not connected");',
  '// console.log(`Using mock leaderboard data for period: ${period}`);',
  '// Mock professional elite data for demonstration',
  '// If developer, add some mock orders for demonstration',
  '// Return mock data for non-authenticated users',
  '// Simular progresso baseado no tempo',
  '// Mock implementation for now'
];

function cleanFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Arquivo não encontrado: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const cleanConfig = filesToClean[filePath.replace(/\\/g, '/')];

    if (cleanConfig === 'delete') {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Deletado: ${filePath}`);
      return true;
    }

    // Remove comentários debug padrão
    debugCommentsToRemove.forEach(comment => {
      const regex = new RegExp(comment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (content.includes(comment)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    // Aplica limpezas específicas do arquivo
    if (cleanConfig && typeof cleanConfig === 'object') {
      if (cleanConfig.remove) {
        cleanConfig.remove.forEach(text => {
          if (content.includes(text)) {
            content = content.replace(text, '');
            modified = true;
          }
        });
      }
      
      if (cleanConfig.replace) {
        cleanConfig.replace.forEach(({old, new: newText}) => {
          if (content.includes(old)) {
            content = content.replace(old, newText);
            modified = true;
          }
        });
      }
    }

    // Remove linhas vazias excessivas
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Limpo: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Erro ao processar ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🧹 Iniciando limpeza de código debug/mock...\n');

  const projectRoot = process.cwd();
  let totalCleaned = 0;

  // Processa arquivos específicos
  Object.keys(filesToClean).forEach(relativeFile => {
    const fullPath = path.join(projectRoot, relativeFile);
    console.log(`🔍 Verificando: ${fullPath}`);
    if (cleanFile(fullPath)) {
      totalCleaned++;
    }
  });

  console.log(`\n✨ Limpeza concluída! ${totalCleaned} arquivos processados.`);
  
  if (totalCleaned > 0) {
    console.log('\n📋 Próximos passos recomendados:');
    console.log('1. Verificar se o projeto ainda compila: npm run build');
    console.log('2. Testar funcionalidades básicas');
    console.log('3. Executar testes se disponíveis: npm test');
  }
}

if (require.main === module) {
  main();
}

module.exports = { cleanFile, filesToClean, debugCommentsToRemove };