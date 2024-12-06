"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface User {
    name: string;
    email: string;
    dob: string;
    birthCity: string;
    postalCode: string;
    gender: string;
    country: string;
    address: string;
}

const ProfilePage = () => {
    const defaultUser = useMemo(() => ({
        name: "",
        email: "",
        dob: "05/08/2004",
        birthCity: "Barcelone",
        postalCode: "08007",
        gender: "Femme",
        country: "Espagne",
        address: "Carrer de Pau Claris, Barcelona",
    }), []);

    const [user, setUser] = useState<User | null>(defaultUser);

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
                setUser({
                    ...defaultUser,
                    ...storedUser,
                });
                localStorage.setItem("userEmail", storedUser.email || "");
            } catch (e) {
                console.error("Erreur de parsing JSON :", e);
                setUser(defaultUser);
            }
        }
    }, [defaultUser]);

    return (
        <div
            className="flex justify-center items-center h-screen bg-cover bg-center text-white relative"
            style={{ backgroundImage: 'url(/img/bgProfile.jpg)' }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 bg-gray-900 bg-opacity-60 p-8 rounded-lg shadow-lg w-[40rem] bottom-12">
                <h2 className="text-2xl font-bold text-center mb-6 text-menthe">Mon Profil</h2>
                {user ? (
                    <div className="space-y-6">
                        <div className="flex">
                            <div className="w-1/2 pr-4">
                                <label htmlFor="name" className="block mb-2 text-menthe">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={user?.name || ""}
                                    readOnly
                                    className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
                                />
                            </div>
                            <div className="w-1/2 pl-4">
                                <label htmlFor="email" className="block mb-2 text-menthe">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={user.email}
                                    readOnly
                                    className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 pr-4">
                                <label htmlFor="dob" className="block mb-2 text-menthe">Date de naissance</label>
                                <input
                                    type="text"
                                    id="dob"
                                    value={user.dob}
                                    readOnly
                                    className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
                                />
                            </div>
                            <div className="w-1/2 pl-4">
                                <label htmlFor="birthCity" className="block mb-2 text-menthe">Ville de naissance</label>
                                <input
                                    type="text"
                                    id="birthCity"
                                    value={user.birthCity}
                                    readOnly
                                    className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 pr-4">
                                <label htmlFor="postalCode" className="block mb-2 text-menthe">Code Postal</label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    value={user.postalCode}
                                    readOnly
                                    className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
                                />
                            </div>
                            <div className="w-1/2 pl-4">
                                <label htmlFor="gender" className="block mb-2 text-menthe">Sexe</label>
                                <input
                                    type="text"
                                    id="gender"
                                    value={user.gender}
                                    readOnly
                                    className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 pr-4">
                                <label htmlFor="country" className="block mb-2 text-menthe">Pays</label>
                                <input
                                    type="text"
                                    id="country"
                                    value={user.country}
                                    readOnly
                                    className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
                                />
                            </div>
                            <div className="w-1/2 pl-4">
                                <label htmlFor="address" className="block mb-2 text-menthe">Adresse</label>
                                <input
                                    type="text"
                                    id="address"
                                    value={user.address}
                                    readOnly
                                    className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center space-x-3">
                            <Link href="/profile/update">
                                <button className="bg-bleuDiamant text-white hover:bg-bleuTurquoise hover:text-black w-full p-2 rounded-lg mr-3">
                                    Mettre à jour mes informations
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="bg-bleuDiamant text-white hover:bg-bleuTurquoise hover:text-black w-full p-2 rounded-lg mr-20">
                                    Annuler la mise à jour
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-white">Utilisateur non trouvé</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;