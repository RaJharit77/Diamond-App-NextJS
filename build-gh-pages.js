const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Démarrage du build GitHub Pages...');

const apiDir = path.join(__dirname, 'app/api');
if (fs.existsSync(apiDir)) {
    console.log('🗑️  Suppression du dossier API...');
    fs.rmSync(apiDir, { recursive: true, force: true });
}

console.log('🏗️  Lancement du build Next.js...');
try {
    execSync('next build', { stdio: 'inherit' });
    console.log('✅ Build réussi !');
} catch (error) {
    console.error('❌ Erreur lors du build:', error);
    process.exit(1);
}
