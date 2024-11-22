"use client";

import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Hummel sûrvêtement Coton", price: "109€", image: "/img/homme_1.jpg" },
        { id: 2, name: "Hummel blouse sportif Poly", price: "149€", image: "/img/homme_2.jpg" },
        { id: 3, name: "Danemark sweat blue travel", price: "199€", image: "/img/homme_3.jpg" },
        { id: 4, name: "Danemark Maillot Noir Pro d'Entraînement CDM 2022", price: "129€", image: "/img/homme_4.jpg" }, 
        { id: 5, name: "Maillot Everton Extérieur 2023-2024 taille (L, XL, XXL)", price: "110.77€", image: "/img/homme_5.jpg" }, 
        { id: 6, name: "Hummel T-shirt classique à chevron rouge", price: "139€", image: "/img/homme_6.jpg" }, 
    ];

    return (
        <div
            className="relative bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: `url('/img/bgMale.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative max-w-6xl mx-auto p-6">
                <h1 className="text-4xl font-bold mb-6 text-center text-menthe">Hommes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
