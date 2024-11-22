"use client";

import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Hummel", price: "99€", image: "/img/autre_1.jpg" },
        { id: 2, name: "Hummel ", price: "149€", image: "/img/autre_2.jpg" },
        { id: 3, name: "Hummel ", price: "199€", image: "/img/autre_3.jpg" },
        { id: 4, name: "Hummel", price: "129€", image: "/img/autre_4.jpg" }, 
        { id: 5, name: "Hummel", price: "110.77€", image: "/img/autre_5.jpg" }, 
        { id: 6, name: "Hummel", price: "139€", image: "/img/autre_6.jpg" }, 
    ];

    return (
        <div
            className="relative bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: `url('/img/other.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative max-w-6xl mx-auto p-6">
                <h1 className="text-4xl font-bold mb-6 text-center text-menthe">Autres</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
