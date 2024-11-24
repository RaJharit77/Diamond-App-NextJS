import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: "Hummel sûrvêtement Coton", price: "109€", image: "/img/homme_1.jpg" },
        { id: 2, name: "Hummel blouse sportif Poly", price: "149€", image: "/img/homme_2.jpg" },
        { id: 3, name: "Danemark sweat blue travel", price: "199€", image: "/img/homme_3.jpg" },
        { id: 4, name: "Danemark Maillot Noir Pro d'Entraînement CDM 2022", price: "129€", image: "/img/homme_4.jpg" },
        { id: 5, name: "Maillot Everton Extérieur 2023-2024 taille (L, XL, XXL)", price: "110.77€", image: "/img/homme_5.jpg" },
        { id: 6, name: "Hummel T-shirt classique à chevron rouge", price: "139€", image: "/img/homme_6.jpg" },
    ];

    return NextResponse.json(products);
}
