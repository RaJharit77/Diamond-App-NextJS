import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, cart } = await req.json();

        if (!email || !cart || cart.length === 0) {
            return NextResponse.json({ message: "Données invalides." }, { status: 400 });
        }

        const purchases = await prisma.$transaction(
            cart.map((product: any) =>
                prisma.purchase.create({
                    data: {
                        email,
                        productId: product.id,
                        productName: product.name,
                        productPrice: product.price,
                    },
                })
            )
        );

        return NextResponse.json({ message: "Achat effectué avec succès.", purchases });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Erreur lors de l'achat." }, { status: 500 });
    }
}
