import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: "Hummel", price: "99€", image: "/img/autre_1.jpg" },
        { id: 2, name: "Hummel", price: "149€", image: "/img/autre_2.jpg" },
        { id: 3, name: "Hummel", price: "199€", image: "/img/autre_3.jpg" },
        { id: 4, name: "Hummel", price: "129€", image: "/img/autre_4.jpg" },
        { id: 5, name: "Hummel", price: "110.77€", image: "/img/autre_5.jpg" },
        { id: 6, name: "Hummel", price: "139€", image: "/img/autre_6.jpg" },
    ];

    return NextResponse.json(products);
}
