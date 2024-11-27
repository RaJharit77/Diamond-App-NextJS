"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            window.location.href = "/login"; // Rediriger vers la page de connexion
        } else {
            setError(data.message || "Erreur lors de l'inscription");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="relative z-10">
                <h1 className="text-2xl font-bold mb-4 text-center text-corail">Créer un compte</h1>
                <form onSubmit={handleSubmit} className="bg-gray-800 p-7 rounded-xl shadow-md w-96">
                    <div className="mb-4">
                        <label className="block text-menthe mb-2">Nom complet</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg bg-black text-white"
                            placeholder="Entrez votre nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button className="bg-bleuTurquoise text-white px-4 py-2 rounded-lg w-full">S&apos;inscrire</button>
                    <p className="mt-4 text-center text-menthe">
                        Déjà un compte ?{" "}
                        <Link href="/login" className="text-bleuDiamant hover:underline">
                            Connectez-vous
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
