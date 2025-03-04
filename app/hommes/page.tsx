"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(6);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/hommes");
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const data: Product[] = await response.json();
                setProducts(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                    console.error("Erreur API:", error.message);
                } else {
                    setError("Erreur inconnue");
                    console.error("Erreur inconnue:", error);
                }
                alert("Erreur lors du chargement des produits");
            }
        };

        fetchProducts();
    }, []);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    const handleShowLess = () => {
        setVisibleCount(6);
    };

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
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                    {products.slice(0, visibleCount).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    {visibleCount < products.length && (
                        <button
                            onClick={handleShowMore}
                            className="px-6 py-2 bg-bleuDiamant text-white hover:bg-gray-800 hover:text-bleuDiamant rounded-md hover:bg-opacity-90"
                        >
                            Voir Plus
                        </button>
                    )}
                    {visibleCount > 6 && (
                        <button
                            onClick={handleShowLess}
                            className="ml-4 px-6 py-2 bg-bleuTurquoise text-black hover:bg-black hover:text-bleuTurquoise rounded-md hover:bg-opacity-90"
                        >
                            Voir Moins
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
