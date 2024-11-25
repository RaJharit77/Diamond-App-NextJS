import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: "Hummel sweat pour enfant avec un tennis offert", price: "77€", image: "/img/enfant_1.jpg" },
        { id: 2, name: "Hummel Pullover taille S kapuco black", price: "47€", image: "/img/enfant_2.jpg" },
        { id: 3, name: "Maillot d'entraînement diamond taille S", price: "97€", image: "/img/enfant_3.jpg" },
        { id: 4, name: "Hummel", price: "37€", image: "/img/enfant_4.jpg" },
        { id: 5, name: "Hummel", price: "57.77€", image: "/img/enfant_5.jpg" },
        { id: 6, name: "Hummel", price: "87€", image: "/img/enfant_6.jpg" },
        { id: 7, name: "Hummel", price: "37€", image: "/img/enfant_7.jpg" },
        { id: 8, name: "Hummel", price: "57.77€", image: "/img/enfant_8.jpg" },
        { id: 9, name: "Hummel", price: "87€", image: "/img/enfant_9.jpg" },
        { id: 10, name: "Hummel", price: "37€", image: "/img/enfant_10.jpg" },
        { id: 11, name: "Hummel", price: "57.77€", image: "/img/enfant_11.jpg" },
        { id: 12, name: "Hummel", price: "87€", image: "/img/enfant_12.jpg" },
    ];

    return NextResponse.json(products);
}
