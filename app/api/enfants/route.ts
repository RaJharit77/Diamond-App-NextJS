import { NextResponse } from 'next/server';

export async function GET() {
    const enfants = [
        { id: 1, name: "Hummel sweat pour enfant avec un tennis offert", price: "77€", image: "/img/enfant_1.jpg" },
        { id: 2, name: "Hummel Pullover taille S kapuco black", price: "47€", image: "/img/enfant_2.jpg" },
        { id: 3, name: "Maillot d'entraînement diamond taille S bleu diamant", price: "27.33€", image: "/img/enfant_3.jpg" },
        { id: 4, name: "Hummel CUATRO Pull - Dark olive", price: "39.39€", image: "/img/enfant_4.jpg" },
        { id: 5, name: "Hummel RUNNER PANTS Unisex Jogging black", price: "57.77€", image: "/img/enfant_5.jpg" },
        { id: 6, name: "Hummel Everton L/S Sport shirt kids Maat 128", price: "87.20€", image: "/img/enfant_6.jpg" },
        { id: 7, name: "Hummel Denmark 2018 Home jersey Shirt Red Size boys kid S Football", price: "12.12€", image: "/img/enfant_7.jpg" },
        { id: 8, name: "Hummel AUTHENTIC 1_4Zip Sporttrui Kids Maat 128 Black and Green", price: "40.87€", image: "/img/enfant_8.jpg" },
        { id: 9, name: "Hummel Denmark 1995 Away kit shirt Match Football Shirt culture white", price: "22.22€", image: "/img/enfant_9.jpg" },
        { id: 10, name: "Hummel CLUB L_S Sport shirt kids Maat 116 Black", price: "16.17€", image: "/img/enfant_10.jpg" },
        { id: 11, name: "Hummel CLUB S_S Sport shirt kids Maat 164 Green", price: "17.07€", image: "/img/enfant_11.jpg" },
        { id: 12, name: "Hummel Denmark DBU Pro Kids Valsts Marina Blue", price: "29.29€", image: "/img/enfant_12.jpg" },
        { id: 13, name: "Hummel Promo Poly sweat à capuche Bleu Enfant", price: "36.10€", image: "/img/enfant_13.jpg" },
        { id: 14, name: "Hummel Paris Sport shirt kids Maat 116 Red", price: "20.70€", image: "/img/enfant_14.jpg" },
        { id: 15, name: "Hummel Paris TTS Top Full Zip Sport vest Maat 128 Kids Yellow", price: "21.55€", image: "/img/enfant_15.jpg" },
        { id: 16, name: "Hummel HMLLead Jersey Polyester orange Enfant pointure 140cm", price: "17.17€", image: "/img/enfant_16.jpg" },
        { id: 17, name: "Hummel Lead Sweat à Capuche Rouge enfant pointure 128cm", price: "25.25€", image: "/img/enfant_17.jpg" },
        { id: 18, name: "Hummel Lead Veste & Capuche FZ Rouge Enfant pointure 128cm", price: "21.01€", image: "/img/enfant_18.jpg" },
        { id: 19, name: "Hummel Leeds S_S Sport shirt Kids Maat 164", price: "37.78€", image: "/img/enfant_19.jpg" },
        { id: 20, name: "Hummel Maillot Core Vert_blanc Enfant 176cm", price: "20.70€", image: "/img/enfant_20.jpg" },
        { id: 21, name: "Hummel hmlCORE XK Poly zip Blue Marine Enfant", price: "28.55€", image: "/img/enfant_21.jpg" },
        { id: 22, name: "Hummel HMLSET Polo & short 100% polyester Bleu turquoise & Bleu Marine", price: "63.30€", image: "/img/enfant_22.jpg" },
        { id: 23, name: "Hummel HMLLogo t-shirt multisport unisex pour enfant Vert emeraude", price: "67.23€", image: "/img/enfant_23.jpg" },
        { id: 24, name: "Hummel HMLRun t-shirt de course pour enfant Bleu diamant 100% coton lèger", price: "88.48€", image: "/img/enfant_24.jpg" },
        { id: 25, name: "Hummel HMLAUTHENTIC sweat pour enfant Bleu cyan", price: "33.47€", image: "/img/enfant_25.jpg" },
        { id: 26, name: "Hummel HMLCORE T-shirt pour enfant volley-ball Blanc", price: "27.80€", image: "/img/enfant_26.jpg" },
        { id: 27, name: "Hummel HMLStaltic T-shirt en coton pour enfant Bleu Marine", price: "40.40€", image: "/img/enfant_27.jpg" },
        { id: 28, name: "Hummel HMLLongrid t-shirt multisport enfiler noir pour enfant", price: "20.10€", image: "/img/enfant_28.jpg" },
        { id: 29, name: "Hummel HMLCORE XK sweatshirt à capuche pour enfant Blue", price: "30.40€", image: "/img/enfant_29.jpg" },
        { id: 30, name: "Hummel HMLEssential sweatshirt multisport unisex vert pour enfant", price: "22.59€", image: "/img/enfant_30.jpg" },
        { id: 31, name: "Hummel ", price: "20.10€", image: "/img/enfant_31.jpg" },
        { id: 32, name: "Hummel ", price: "30.40€", image: "/img/enfant_32.jpg" },
        { id: 33, name: "Hummel ", price: "22.59€", image: "/img/enfant_33.jpg" },
    ];

    return NextResponse.json(enfants);
}
