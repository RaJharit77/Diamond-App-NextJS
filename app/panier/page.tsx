"use client";

import { useEffect, useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

export default function PanierPage() {
    const [cart, setCart] = useState<Product[]>([]);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    const removeFromCart = (id: number) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setMessage('Produit supprimé du panier.');
    };

    const handleBuy = (product: Product) => {
        setMessage(`Achat du produit ${product.name} effectué !`);
    };

    return (
        <div className="p-8 bg-cover bg-center bg-black bg-opacity-50" style={{ backgroundImage: "url('/img/bgPanier.jpg')" }}>

            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="text-center text-corail">
                <h1 className="text-4xl font-bold mb-4 ">Mon Panier</h1>
                <p>Liste des produits ajoutés à votre panier.</p>
            </div>

            {message && (
                <div className="mt-4 text-center text-menthe font-semibold">{message}</div>
            )}

            {cart.length === 0 ? (
                <div className="text-center text-gray-900 mt-20 text-2xl mb-20">Votre panier est vide !</div>
            ) : (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cart.map((product) => (
                        <div key={product.id} className="rounded-lg p-4 shadow-md bg-bleuDiamant text-gray-900">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-96 object-cover rounded mb-3"
                            />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p>{product.price}</p>
                            <div className="mt-2 flex justify-between items-center">
                                <button
                                    onClick={() => handleBuy(product)}
                                    className="py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-950"
                                >
                                    Acheter
                                </button>
                                <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="py-2 px-4 bg-gray-900 text-red-500 rounded-md hover:bg-red-500 hover:text-gray-900"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
