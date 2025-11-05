import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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