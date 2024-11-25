import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: "Hummel sûrvêtement Coton", price: "90€", image: "/img/homme_1.jpg" },
        { id: 2, name: "Hummel blouse sportif Poly", price: "56€", image: "/img/homme_2.jpg" },
        { id: 3, name: "Danemark sweat blue travel", price: "79€", image: "/img/homme_3.jpg" },
        { id: 4, name: "Danemark Maillot Noir Pro d'Entraînement CDM 2022", price: "129€", image: "/img/homme_4.jpg" },
        { id: 5, name: "Maillot Everton Extérieur 2023-2024 taille (L, XL, XXL)", price: "110.77€", image: "/img/homme_5.jpg" },
        { id: 6, name: "Hummel T-shirt classique à chevron rouge", price: "45€", image: "/img/homme_6.jpg" },
        { id: 7, name: "Hummel", price: "49€", image: "/img/homme_7.jpg" },
        { id: 8, name: "Hummel", price: "29€", image: "/img/homme_8.jpg" },
        { id: 9, name: "Hummel", price: "39€", image: "/img/homme_9.jpg" },
        { id: 10, name: "Hummel", price: "58€", image: "/img/homme_10.jpg" },
        { id: 11, name: "Hummel", price: "27€", image: "/img/homme_11.jpg" },
        { id: 12, name: "Hummel", price: "45€", image: "/img/homme_12.jpg" },
    ];

    return NextResponse.json(products);
}
