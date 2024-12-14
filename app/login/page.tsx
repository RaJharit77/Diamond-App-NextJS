"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

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
                setErrorMessage(data.message || "Erreur lors de la connexion");
                return;
            }

            const data = await res.json();
            localStorage.setItem("user", JSON.stringify(data.user));
            window.location.href = "/profile";
        } catch {
            setErrorMessage("Erreur lors de la connexion");
        }
    };

    return (
        <div
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('/img/bgLogin.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <form
                onSubmit={handleSubmit}
                className="relative bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg w-96 z-10 text-menthe bottom-20"
            >
                <h2 className="text-xl font-bold text-center mb-6">Connexion</h2>
                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="john.doe@gmail.com"
                        className="w-full p-2 rounded-md bg-gray-800 text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="password" className="block mb-2">Mot de passe</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="votre mot de passe"
                        className="w-full p-2 rounded-md bg-gray-800 text-white pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="absolute top-3/4 right-3 transform -translate-y-1/2 text-gray-300 hover:text-gray-100"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-bleuDiamant hover:bg-bleuTurquoise text-white hover:text-black rounded-lg"
                >
                    Se connecter
                </button>
                <div className="mt-4 text-center">
                    <Link href="/signup" className="text-corail hover:underline">
                        Créer un compte
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
