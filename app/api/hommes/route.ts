import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: "Hummel sûrvêtement Coton", price: "90€", image: "/img/homme_1.jpg" },
        { id: 2, name: "Hummel blouse sportif Poly", price: "56€", image: "/img/homme_2.jpg" },
        { id: 3, name: "Danemark sweat blue travel", price: "79€", image: "/img/homme_3.jpg" },
        { id: 4, name: "Danemark Maillot Noir Pro d'Entraînement CDM 2022", price: "129€", image: "/img/homme_4.jpg" },
        { id: 5, name: "Maillot Everton Extérieur 2023-2024 taille (L, XL, XXL)", price: "110.77€", image: "/img/homme_5.jpg" },
        { id: 6, name: "Hummel T-shirt classique à chevron rouge", price: "45€", image: "/img/homme_6.jpg" },
        { id: 7, name: "Hummel Maillot Denmark Qualification Euro 2024 avec Christian Eriksen", price: "49€", image: "/img/homme_7.jpg" },
        { id: 8, name: "Hummel HMLLGC DEVOTION World Wide SportGear - T-shirt print black", price: "29€", image: "/img/homme_8.jpg" },
        { id: 9, name: "Hummel CORE L/S - T-shirt pro à manches longues men Ever Green", price: "39€", image: "/img/homme_9.jpg" },
        { id: 10, name: "Hummel First Performance Baselayer manches longues blanc pointures X_large", price: "58€", image: "/img/homme_10.jpg" },
        { id: 11, name: "Hummel Denmark PREGAME - Valsts izlases Frejas Sal black and white", price: "27€", image: "/img/homme_11.jpg" },
        { id: 12, name: "Hummel hive Sport shirt Football with Sidelinerd FC XXL black and red", price: "45€", image: "/img/homme_12.jpg" },
        { id: 13, name: "Hummel", price: "88€", image: "/img/homme_13.jpg" },
        { id: 14, name: "Hummel", price: "77€", image: "/img/homme_14.jpg" },
        { id: 15, name: "Hummel", price: "65€", image: "/img/homme_15.jpg" },
    ];

    return NextResponse.json(products);
}
