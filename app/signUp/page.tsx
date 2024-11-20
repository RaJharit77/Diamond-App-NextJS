"use client";

import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <h1 className="text-2xl font-bold mb-4">Créer un compte</h1>
            <form className="bg-gray-800 bg-opacity-50 p-6 shadow-md w-80 rounded-xl">
                <div className="mb-4">
                    <label className="block text-menthe mb-2">Nom complet</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg bg-black"
                        placeholder="Entrez votre nom"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-menthe mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg bg-black"
                        placeholder="Entrez votre email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-menthe mb-2">Mot de passe</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg bg-black"
                        placeholder="Entrez votre mot de passe"
                    />
                </div>
                <button className="bg-bleuTurquoise text-white px-4 py-2 rounded-lg w-full">
                    S'inscrire
                </button>
                <p className="mt-4 text-center text-menthe">
                    Déjà un compte ?{" "}
                    <Link href="/login" className="text-bleuDiamant hover:underline">
                        Connectez-vous
                    </Link>
                </p>
            </form>
        </div>
    );
}
