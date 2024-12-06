"use client";

import { useEffect, useState } from "react";

type CartItem = {
    name: string;
    price: string;
};

export default function AchatPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const cartItems: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(cartItems);
    }, []);

    const handlePurchase = async () => {
        if (!email) {
            setMessage("Veuillez entrer un email pour effectuer l'achat.");
            return;
        }

        try {
            const response = await fetch("/api/achat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, cart }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Achat effectué avec succès !");
                localStorage.removeItem("cart");
                setCart([]);
            } else {
                setMessage(`Erreur : ${data.message}`);
            }
        } catch (error) {
            console.error(error);
            setMessage("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    const handleCancel = () => {
        localStorage.removeItem("cart");
        setCart([]);
        setMessage("Achat annulé avec succès.");
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Page Achat</h1>

            <input
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />

            <ul className="border p-4 rounded mb-4">
                {cart.map((item, index) => (
                    <li key={index} className="flex justify-between mb-2">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={handlePurchase}
                className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
            >
                Achèter
            </button>
            <button
                onClick={handleCancel}
                className="bg-red-500 text-white py-2 px-4 rounded"
            >
                Annuler
            </button>

            {message && <p className="mt-4 text-red-600">{message}</p>}
        </div>
    );
}
