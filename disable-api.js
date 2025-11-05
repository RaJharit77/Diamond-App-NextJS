const fs = require('fs');
const path = require('path');

if (process.env.GITHUB_PAGES === 'true') {
    console.log('🔧 Mode GitHub Pages - Configuration des routes API...');

    const apiDir = path.join(__dirname, 'app/api');

    if (fs.existsSync(apiDir)) {
        console.log('📁 Désactivation du dossier API...');

        const apiRoutes = fs.readdirSync(apiDir, { withFileTypes: true });

        apiRoutes.forEach(route => {
            if (route.isDirectory()) {
                const routePath = path.join(apiDir, route.name);
                const routeFile = path.join(routePath, 'route.js');

                const staticContent = `
const { NextResponse } = require('next/server');

module.exports = {
    GET: function() {
    return NextResponse.json({
        error: 'API non disponible en version statique',
        message: 'Cette fonctionnalité nécessite un déploiement Vercel'
    }, { status: 404 });
    },
    dynamic: 'error'
};
`;
                fs.writeFileSync(routeFile, staticContent);
                console.log(`✅ Route ${route.name} configurée pour GitHub Pages`);
            }
        });
    }
};