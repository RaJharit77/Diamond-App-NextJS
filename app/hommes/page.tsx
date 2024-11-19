"use client";

import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Produit A", price: "99€", image: "/images/product1.jpg" },
        { id: 2, name: "Produit B", price: "149€", image: "/images/product2.jpg" },
        { id: 3, name: "Produit C", price: "199€", image: "/images/product3.jpg" },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Nos Produits</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
