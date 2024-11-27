"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            window.location.href = "/"; // Rediriger vers la page d'accueil ou dashboard
        } else {
            setError(data.message || "Erreur lors de la connexion");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="relative z-10">
                <h1 className="text-2xl font-bold mb-4 text-center text-corail">Se connecter</h1>
                <form onSubmit={handleSubmit} className="bg-gray-800 p-7 rounded-xl shadow-md w-96">
                    <div className="mb-4">
                        <label className="block text-menthe mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg bg-black text-white"
                            placeholder="Entrez votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-menthe mb-2">Mot de passe</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg bg-black text-white"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <button className="bg-bleuTurquoise text-white px-4 py-2 rounded-lg w-full">Se connecter</button>
                    <p className="mt-4 text-center text-menthe">
                        Pas encore de compte ?{" "}
                        <Link href="/signup" className="text-bleuDiamant hover:underline">
                            Inscrivez-vous
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
