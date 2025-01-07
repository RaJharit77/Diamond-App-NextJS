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
        { id: 17, name: "Hummel Chaussure aeroFly Blanc & Grisé_orangé", price: "65.87€", image: "/img/autre_17.jpg" },
        { id: 18, name: "Hummel HMLPRECISION Light 350 football White_Green", price: "19.43€", image: "/img/autre_18.jpg" },
        { id: 19, name: "Hummel Handball chaussures Algiz White", price: "53.78€", image: "/img/autre_19.jpg" },
        { id: 20, name: "Hummel HMLAEROFLY Light 290 Pink & Black", price: "21.87€", image: "/img/autre_20.jpg" },
        { id: 21, name: "Hummel Home Kit Football Vitality Black & Yellow", price: "69.79€", image: "/img/autre_21.jpg" },
        { id: 22, name: "Hummel CORE Sac à dos biking red_rasperry sorbet", price: "15.13€", image: "/img/autre_22.jpg" },
        { id: 23, name: "Hummel Slimmer Stadil Baskets basses unisexes Noir", price: "33.80€", image: "/img/autre_23.jpg" },
        { id: 24, name: "Hummel CORE BALL Sac à dos true blue and black", price: "19.99€", image: "/img/autre_24.jpg" },
        { id: 25, name: "Hummel Home Kit Collection Football Vitality Black & Yellow", price: "87.87€", image: "/img/autre_25.jpg" },
        { id: 26, name: "Hummel Vintage Football boots Black and Yellow", price: "63.09€", image: "/img/autre_26.jpg" },
        { id: 27, name: "Hummel Home Kit, Away Kit & Third Kit Football  Blue, Marina Blue & Purple", price: "25.69€", image: "/img/autre_27.jpg" },
        { id: 28, name: "Hummel Chaussette Football Stanno Victory VBLK Black", price: "37.37€", image: "/img/autre_28.jpg" },
        { id: 29, name: "Hummel Valise à roulettes pour voyage Noire", price: "73.78€", image: "/img/autre_29.jpg" },
        { id: 30, name: "Hummel CORE Sac de Sport biking red_rasperry sorbet", price: "50.50€", image: "/img/autre_30.jpg" },
        { id: 31, name: "Hummel CORE Short Unisexe Rouge", price: "42.51€", image: "/img/autre_31.jpg" },
        { id: 32, name: "Hummel Denmark DBU Away Kids Unisex White", price: "62.72€", image: "/img/autre_32.jpg" },
        { id: 33, name: "Hummel HMLEASY Kids Blue and White active play pro", price: "32.62€", image: "/img/autre_33.jpg" },
    ];

    return NextResponse.json(products);
}
