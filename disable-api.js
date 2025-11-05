import fs from 'fs';
import path from 'path';

if (process.env.GITHUB_PAGES === 'true') {
    const apiDir = path.join(__dirname, 'app/api');

    if (fs.existsSync(apiDir)) {
        console.log('🚫 Désactivation des routes API pour GitHub Pages...');

        fs.renameSync(apiDir, apiDir + '.disabled');
        console.log('✅ Dossier API désactivé avec succès');
    } else {
        console.log('ℹ️  Aucun dossier API trouvé à désactiver');
    }
}