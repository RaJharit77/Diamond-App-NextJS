"use client";

import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Brassière de sport sans coûture taille (M, S, L, XL, XXL) en jersey", price: "103€", image: "/img/femme_1.jpg" },
        { id: 2, name: "Hummel set sport sans coûture taille (S, M, L, XL, XXL) en jersey", price: "143.57€", image: "/img/femme_2.jpg" },
        { id: 3, name: "Danemark maillot Gardienne CDM Féminin 2023 taille (S, M, L, XL, XXL)", price: "193€", image: "/img/femme_3.jpg" },
        { id: 4, name: "Hummel first T-shirt sans coûture à manches longues noir jersey", price: "123.35€", image: "/img/femme_4.jpg" }, 
        { id: 5, name: "Hummel débardeur classique rose désert à logo taille medium", price: "113.77€", image: "/img/femme_5.jpg" }, 
        { id: 6, name: "Hummel Tif soutient gorge de sport sans coûture bleu taille medium", price: "133€", image: "/img/femme_6.jpg" }, 
        { id: 7, name: "Hummel Core Short Noir en jersey", price: "127€", image: "/img/femme_7.jpg" }, 
        { id: 8, name: "Hummel Legging de sport sans coûture Rose", price: "153€", image: "/img/femme_8.jpg" }, 
        { id: 9, name: "Hummel Legging taille haute sans coûture", price: "107€", image: "/img/femme_9.jpg" }, 
        { id: 10, name: "Hummel Seamless T-shirt à manches longues Vert Kaki", price: "100€", image: "/img/femme_10.jpg" }, 
        { id: 11, name: "Hummel Cuissard Cyclisme sans coûture", price: "125€", image: "/img/femme_11.jpg" }, 
        { id: 12, name: "Hummel first Legging de sport sans coûtures Rose", price: "144€", image: "/img/femme_12.jpg" }, 
        { id: 13, name: "Hummel Sweat à capuche doux Noir", price: "139€", image: "/img/femme_13.jpg" }, 
        { id: 14, name: "Hummel First T-shirt sans coûture à manches courtes", price: "109€", image: "/img/femme_14.jpg" }, 
        { id: 15, name: "Hummel Sweat à logo à manches long Crème Blanc", price: "175€", image: "/img/femme_15.jpg" }, 
        { id: 16, name: "Hummel Brassière de sport à maintient lèger deep litchen green", price: "173€", image: "/img/femme_16.jpg" }, 
        { id: 17, name: "Hummel CamiSeamless sport athletic noir melange crème blanc", price: "132€", image: "/img/femme_17.jpg" }, 
        { id: 18, name: "Hummel Tif soutient gorge de sport sans coûture Noir en jersey", price: "122€", image: "/img/femme_18.jpg" }, 
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
