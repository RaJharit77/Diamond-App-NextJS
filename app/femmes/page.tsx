"use client";

import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Brassière de sport sans coûture", price: "103€", image: "/img/femme_1.jpg" },
        { id: 2, name: "Hummel set sport", price: "143.57€", image: "/img/femme_2.jpg" },
        { id: 3, name: "Danemark maillot Gardienne CDM Féminin 2023 taille (L, XL, XXL)", price: "193€", image: "/img/femme_3.jpg" },
        { id: 4, name: "Hummel first T-shirt sans coûture à manches longues noir jersey", price: "123.35€", image: "/img/femme_4.jpg" }, 
        { id: 5, name: "Hummel débardeur classique rose désert à logo", price: "113.77€", image: "/img/femme_5.jpg" }, 
        { id: 6, name: "Hummel Tif soutient gorge de sport sans coûture bleu", price: "133€", image: "/img/femme_6.jpg" }, 
    ];

    return (
        <div
            className="relative bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: `url('/img/bgFemale.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative max-w-6xl mx-auto p-6">
                <h1 className="text-4xl font-bold mb-6 text-center text-menthe">Femmes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
