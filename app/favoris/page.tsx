"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState<Product[]>([]);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const showMessage = (msg: string) => {
        setMessage(msg);
        setTimeout(() => setMessage(''), 3000);
    };

    const removeFavorite = (id: number) => {
        const updatedFavorites = favorites.filter((product) => product.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        window.dispatchEvent(new Event("storage-update"));

        showMessage('Produit supprimé des favoris.');
    };

    const handleBuy = (product: Product) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.dispatchEvent(new Event('storage-update'));

        showMessage(`Produit ${product.name} ajouté au panier !`);
    };

    useEffect(() => {
        const updatedFavorites = () => {
            const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            setFavorites(storedFavorites);
        };

        updatedFavorites();
        window.addEventListener("storage-update", updatedFavorites);

        return () => {
            window.removeEventListener("storage-update", updatedFavorites);
        };
    }, []);

    return (
        <div className="relative p-6 bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/img/bgFavoris.jpg')" }}>

            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            <div className="relative z-10 text-center text-bleuDiamant">
                <h1 className="text-3xl font-bold">Vos Favoris</h1>
                <p className="mt-2 z-10">Voici les articles que vous avez ajoutés à vos favoris.</p>
            </div>
            {message && (
                <div className="relative z-10 mt-4 text-center text-menthe font-semibold">{message}</div>
            )}
            {favorites.length === 0 ? (
                <div className="relative z-10 text-center text-menthe mt-40 text-2xl mb-40">Votre favoris est vide !</div>
            ) : (
                <div className="relative z-10 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((product) => (
                        <div key={product.id} className="rounded-lg p-4 shadow-md bg-bleuDiamant text-gray-900">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={400}
                                className="w-full h-96 object-cover rounded mb-3"
                            />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p>{product.price}</p>
                            <div className="mt-2 flex justify-between items-center">
                                <button
                                    onClick={() => handleBuy(product)}
                                    className="py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-950"
                                >
                                    Ajouter au panier
                                </button>
                                <button
                                    onClick={() => removeFavorite(product.id)}
                                    className="py-2 px-4 bg-gray-900 text-red-500 rounded-md hover:bg-red-500 hover:text-gray-900"
                                >
                                    Supprimer du favoris
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
