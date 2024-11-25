import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: "Hummel", price: "99€", image: "/img/autre_1.jpg" },
        { id: 2, name: "Hummel", price: "59€", image: "/img/autre_2.jpg" },
        { id: 3, name: "Hummel", price: "89€", image: "/img/autre_3.jpg" },
        { id: 4, name: "Hummel", price: "70€", image: "/img/autre_4.jpg" },
        { id: 5, name: "Hummel", price: "60.77€", image: "/img/autre_5.jpg" },
        { id: 6, name: "Hummel", price: "29€", image: "/img/autre_6.jpg" },
        { id: 7, name: "Hummel", price: "25€", image: "/img/autre_7.jpg" },
        { id: 8, name: "Hummel", price: "20.77€", image: "/img/autre_8.jpg" },
        { id: 9, name: "Hummel", price: "38€", image: "/img/autre_9.jpg" },
        { id: 10, name: "Hummel", price: "21€", image: "/img/autre_10.jpg" },
        { id: 11, name: "Hummel", price: "20.57€", image: "/img/autre_11.jpg" },
        { id: 12, name: "Hummel", price: "42€", image: "/img/autre_12.jpg" },
    ];

    return NextResponse.json(products);
}
