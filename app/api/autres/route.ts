import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: "Hummel CORE - Sporta soma Marina Blue & Sky blue", price: "49€", image: "/img/autre_1.jpg" },
        { id: 2, name: "Hummel ballon de Handball Bleu marine étoilé", price: "59€", image: "/img/autre_2.jpg" },
        { id: 3, name: "Hummel Baskets Rouge et Or pointure 27 à 43", price: "89€", image: "/img/autre_3.jpg" },
        { id: 4, name: "Hummel brassard Storrelse One Size til holdsport Gris", price: "70€", image: "/img/autre_4.jpg" },
        { id: 5, name: "Hummel Core - Sweat short Unisexe Black", price: "60.77€", image: "/img/autre_5.jpg" },
        { id: 6, name: "Hummel Chaussettes Elite Indoor Low Black - Red", price: "29€", image: "/img/autre_6.jpg" },
        { id: 7, name: "Hummel Unisex Core Armelloses Jersey TragerTop", price: "25€", image: "/img/autre_7.jpg" },
        { id: 8, name: "Hummel Thor Baskets Unisexes Gray", price: "20.77€", image: "/img/autre_8.jpg" },
        { id: 9, name: "Hummel LEGACY T-Shirt à manches longues Blue nights", price: "38€", image: "/img/autre_9.jpg" },
        { id: 10, name: "Hummel NET Browse sportwear White", price: "21€", image: "/img/autre_10.jpg" },
        { id: 11, name: "Hummel NET Browse sportwear sweat Gray", price: "20.57€", image: "/img/autre_11.jpg" },
        { id: 12, name: "Hummel Pantalon Jogging Unisexe Bleu", price: "42€", image: "/img/autre_12.jpg" },
        { id: 13, name: "Hummel Ballon Blade Pro Match FIFA Quality Pro Blanc_Noir_Doré Taille Ball SZ", price: "32.77€", image: "/img/autre_13.jpg" },
        { id: 14, name: "Hummel 4Pack Triple Stripe CREW SportSocken Blue & Red & Yellow & Green", price: "15.57€", image: "/img/autre_14.jpg" },
        { id: 15, name: "Hummel 7Pack Triple Stripe CREW SportSocken Green & Blue & Red & Yellow", price: "27.33€", image: "/img/autre_15.jpg" },
        { id: 16, name: "Hummel Legacy Sweat à chevron noir Black", price: "52.87€", image: "/img/autre_16.jpg" },
        { id: 17, name: "Hummel Chaussure aero Fly Blanc & Rosé", price: "65.87€", image: "/img/autre_17.jpg" },
        { id: 18, name: "Hummel HMLPRECISION football White and Green", price: "19.43€", image: "/img/autre_18.jpg" },
        { id: 19, name: "Hummel ", price: "52.87€", image: "/img/autre_19.jpg" },
        { id: 20, name: "Hummel ", price: "65.87€", image: "/img/autre_20.jpg" },
        { id: 21, name: "Hummel ", price: "19.43€", image: "/img/autre_21.jpg" },
    ];

    return NextResponse.json(products);
}
