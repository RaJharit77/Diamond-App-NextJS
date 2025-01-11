import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const products = await prisma.hommes.findMany();
        return NextResponse.json(products);
    } catch {
        return NextResponse.json({ error: 'Erreur lors de la récupération des produits' }, { status: 500 });
    }
}
