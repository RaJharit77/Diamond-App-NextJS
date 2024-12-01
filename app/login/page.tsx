"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || "Erreur lors de la connexion");
                return;
            }

            const data = await res.json();
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = '/profile';
        } catch (error) {
            setError("Erreur lors de la connexion");
        }
    };

    return (
        <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/img/bgLogin.jpg')" }}>

            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <form onSubmit={handleSubmit} className="relative bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg w-96 z-10 text-menthe bottom-20">
                <h2 className="text-xl font-bold text-center mb-6">Connexion</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 rounded-md bg-gray-800 text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 rounded-md bg-gray-800 text-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-bleuDiamant hover:bg-bleuTurquoise text-white hover:text-black rounded-lg">
                    Se connecter
                </button>
                <div className="mt-4 text-center">
                    <Link href="/signup" className="text-corail hover:underline">Créer un compte</Link>
                </div>
            </form>
        </div>
    );
}
