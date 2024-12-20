import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: "Hummel sûrvêtement Coton", price: "90€", image: "/img/homme_1.jpg" },
        { id: 2, name: "Hummel blouse sportif Poly", price: "56€", image: "/img/homme_2.jpg" },
        { id: 3, name: "Danemark sweat blue travel", price: "79€", image: "/img/homme_3.jpg" },
        { id: 4, name: "Danemark Maillot Noir Pro d'Entraînement CDM 2022", price: "29.99€", image: "/img/homme_4.jpg" },
        { id: 5, name: "Maillot Everton Extérieur 2023-2024 taille (L, XL, XXL)", price: "30.77€", image: "/img/homme_5.jpg" },
        { id: 6, name: "Hummel T-shirt classique à chevron rouge", price: "45€", image: "/img/homme_6.jpg" },
        { id: 7, name: "Hummel Maillot Denmark Qualification Euro 2024 avec Christian Eriksen", price: "49€", image: "/img/homme_7.jpg" },
        { id: 8, name: "Hummel HMLLGC DEVOTION World Wide SportGear - T-shirt print black", price: "29€", image: "/img/homme_8.jpg" },
        { id: 9, name: "Hummel CORE L/S - T-shirt pro à manches longues men Ever Green", price: "39€", image: "/img/homme_9.jpg" },
        { id: 10, name: "Hummel First Performance Baselayer manches longues blanc pointures X_large", price: "58€", image: "/img/homme_10.jpg" },
        { id: 11, name: "Hummel Denmark PREGAME - Valsts izlases Frejas Sal black and white", price: "27€", image: "/img/homme_11.jpg" },
        { id: 12, name: "Hummel hive Sport shirt Football with Sidelinerd FC XXL black and red", price: "45€", image: "/img/homme_12.jpg" },
        { id: 13, name: "Hummel Sweat à capuche à logo Blue Marine", price: "88€", image: "/img/homme_13.jpg" },
        { id: 14, name: "Hummel Sweat shirt Classique à chevrons Noir", price: "77€", image: "/img/homme_14.jpg" },
        { id: 15, name: "Hummel T-Shirt classique à chevrons Blanc", price: "65€", image: "/img/homme_15.jpg" },
        { id: 16, name: "Hummel Virgil T-Shirt Noir L/S/XL/M", price: "80€", image: "/img/homme_16.jpg" },
        { id: 17, name: "Hummel CORE Kit Black & Yellow Sport", price: "73€", image: "/img/homme_17.jpg" },
        { id: 18, name: "Hummel Denmark Kit Away 2016-2017 released", price: "60€", image: "/img/homme_18.jpg" },
        { id: 19, name: "Hummel Everton Kit Third Shirt gray", price: "75.55€", image: "/img/homme_19.jpg" },
        { id: 20, name: "Hummel HMLISAM 20 T-Shirt print Black", price: "63.77€", image: "/img/homme_20.jpg" },
        { id: 21, name: "Hummel Denmark Diversity T-Shirt 2024", price: "66.43€", image: "/img/homme_21.jpg" },
        { id: 22, name: "Hummel Denmark Sweat à Capuche Travel World Cup 2022 Noir XX_Large", price: "45.55€", image: "/img/homme_22.jpg" },
        { id: 23, name: "Hummel Denmark T-Shirt Fan Football Black & Red 2022 pointure Small", price: "53.77€", image: "/img/homme_23.jpg" },
        { id: 24, name: "Hummel Denmark Euro 2020 Home Kit 2021-2022 Long Sleeve Red & White", price: "76.43€", image: "/img/homme_24.jpg" },
        { id: 25, name: "Hummel Denmark Home Kit Red 134 years of the DBU", price: "75.55€", image: "/img/homme_25.jpg" },
        { id: 26, name: "Hummel HMLISAM 2.0 T-Shirt imprimé true Blue", price: "33.77€", image: "/img/homme_26.jpg" },
        { id: 27, name: "Hummel CIMA XK T-Shirt imprimé Black", price: "46.43€", image: "/img/homme_27.jpg" },
        { id: 28, name: "Hummel CORE L/S POLY Red Jersey Jacket", price: "57.35€", image: "/img/homme_28.jpg" },
        { id: 29, name: "Hummel CORE Maillot Bordeaux pointure XX_Large", price: "23.77€", image: "/img/homme_29.jpg" },
        { id: 30, name: "Hummel CORE SPRAY Training true Blue", price: "37.83€", image: "/img/homme_30.jpg" },
    ];

    return NextResponse.json(products);
}
