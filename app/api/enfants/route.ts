import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
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
    ];

    return NextResponse.json(products);
}
