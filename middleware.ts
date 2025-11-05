import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (process.env.GITHUB_PAGES && request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.json(
            {
                error: 'API non disponible',
                message: 'Cette fonctionnalité est désactivée en version statique'
            },
            { status: 404 }
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
};