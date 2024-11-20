"use client";

import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <h1 className="text-2xl font-bold mb-4">Connexion</h1>
            <form className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-menthe mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg bg-black text-white"
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
                <button className="bg-bleuDiamant text-white px-4 py-2 rounded-lg w-full">
                    Se connecter
                </button>
                <p className="mt-4 text-center text-menthe">
                    Pas de compte ?{" "}
                    <Link href="/signUp" className="text-bleuTurquoise hover:underline">
                        Inscrivez-vous
                    </Link>
                </p>
            </form>
        </div>
    );
}
