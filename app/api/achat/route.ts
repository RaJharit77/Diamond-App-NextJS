import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type CartItem = {
    id: number;
    name: string;
    price: string;
};

export async function POST(req: Request) {
    try {
        const { email, cardNumber, phone, city, address, country, cart } = await req.json();

        if (!email || !cardNumber || !phone || !city || !address || !country || !cart || cart.length === 0) {
            return NextResponse.json({ message: "Données invalides." }, { status: 400 });
        }

        const purchases = await prisma.$transaction(
            cart.map((product: CartItem) =>
                prisma.purchase.create({
                    data: {
                        email,
                        productId: product.id,
                        productName: product.name,
                        productPrice: product.price,
                        cardNumber,
                        phone,
                        city,
                        address,
                        country,
                    },
                })
            )
        );

        return NextResponse.json({ message: "Achat effectué avec succès.", purchases });
    } catch (error) {
        console.error("Erreur lors de l'achat:", error);
        return NextResponse.json({ message: "Erreur interne du serveur." }, { status: 500 });
    }
}
