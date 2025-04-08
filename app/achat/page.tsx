"use client";

import { useEffect, useState } from "react";

type CartItem = {
    id: number;
    name: string;
    price: string;
};

export default function AchatPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "cancel" | "error" | "">("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cartItems: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
            setCart(cartItems);

            const storedUserEmail = localStorage.getItem("userEmail");
            if (storedUserEmail) {
                setEmail(storedUserEmail);
            }
        }
    }, []);

    const handlePurchase = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !cardNumber || !phone || !city || !address || !country || cart.length === 0) {
            setMessage("Veuillez remplir tous les champs pour effectuer l'achat.");
            setMessageType("error");
            return;
        }

        try {
            const response = await fetch("/api/achat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, cardNumber, phone, city, address, country, cart }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Achat effectué avec succès !");
                setMessageType("success");
                localStorage.removeItem("cart");
                setCart([]);
            } else {
                setMessage(`Erreur : ${data.message}`);
                setMessageType("error");
            }
        } catch (error) {
            console.error("Erreur lors de l'achat:", error);
            setMessage("Une erreur est survenue. Veuillez réessayer.");
            setMessageType("error");
        }
    };

    const handleCancel = () => {
        localStorage.removeItem("cart");
        setCart([]);
        window.dispatchEvent(new Event("storage-update"));
        setMessage("Achat des articles annulé.");
        setMessageType("cancel");
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/img/bgAchat.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <form
                onSubmit={handlePurchase}
                className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-lg mb-20 z-10"
            >
                <h1 className="text-2xl font-bold mb-6 text-center text-menthe">Achat de vos articles</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded-md w-full mb-4 bg-gray-800 text-gray-100"
                    readOnly
                />
                <input
                    type="text"
                    placeholder="Numéro de carte Visa/Mastercard/PayPal"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="border p-2 rounded-md w-full mb-4 bg-gray-800 text-gray-100"
                />
                <input
                    type="tel"
                    placeholder="Numéro de téléphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border p-2 rounded-md w-full mb-4 bg-gray-800 text-gray-100"
                />
                <input
                    type="text"
                    placeholder="Ville"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border p-2 rounded-md w-full mb-4 bg-gray-800 text-gray-100"
                />
                <input
                    type="text"
                    placeholder="Adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border p-2 rounded-md w-full mb-4 bg-gray-800 text-gray-100"
                />
                <input
                    type="text"
                    placeholder="Pays"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="border p-2 rounded-md w-full mb-4 bg-gray-800 text-gray-100"
                />
                <ul className="border p-4 rounded-md mb-4 bg-gray-800 text-gray-100">
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between mb-2">
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between mt-7">
                    <button
                        type="submit"
                        className="bg-bleuDiamant text-white py-2 px-7 ml-24 rounded-lg hover:bg-bleuTurquoise hover:text-black"
                    >
                        Achèter
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-bleuDiamant text-white py-2 px-7 mr-20 rounded-lg hover:bg-bleuTurquoise hover:text-black"
                    >
                        Annuler
                    </button>
                </div>
                {message && (
                    <p className={`mt-4 text-center ${messageType === "success" ? "text-menthe" : "text-red-500"}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
