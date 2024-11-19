"use client";

import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Connexion</h1>
            <form className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Entrez votre email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Mot de passe</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Entrez votre mot de passe"
                    />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                    Se connecter
                </button>
                <p className="mt-4 text-center text-gray-600">
                    Pas de compte ?{" "}
                    <Link href="/signUp" className="text-blue-500">
                        Inscrivez-vous
                    </Link>
                </p>
            </form>
        </div>
    );
}
