import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const { name, email, subject, message } = data;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis.' },
                { status: 400 }
            );
        }

        console.log('Données reçues :', { name, email, subject, message });

        return NextResponse.json({ success: true, message: 'Message envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
    }
}
