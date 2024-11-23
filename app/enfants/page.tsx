"use client";

import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Hummel sweat pour enfant avec un tennis offert", price: "77€", image: "/img/enfant_1.jpg" },
        { id: 2, name: "Hummel Pullover taille S kapuco black", price: "47€", image: "/img/enfant_2.jpg" },
        { id: 3, name: "Maillot d'entraînement diamond taille S", price: "97€", image: "/img/enfant_3.jpg" },
        { id: 4, name: "Hummel", price: "37€", image: "/img/enfant_4.jpg" }, 
        { id: 5, name: "Hummel", price: "57.77€", image: "/img/enfant_5.jpg" }, 
        { id: 6, name: "Hummel", price: "87€", image: "/img/enfant_6.jpg" }, 
    ];

    return (
        <div
            className="relative bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: `url('/img/bgChildren.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative max-w-6xl mx-auto p-6">
                <h1 className="text-4xl font-bold mb-6 text-center text-menthe">Enfants</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
