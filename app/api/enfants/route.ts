import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const products = await prisma.enfants.findMany();
        return NextResponse.json(products);
    } catch {
        return NextResponse.json({ error: 'Erreur lors de la récupération des produits' }, { status: 500 });
    }
}