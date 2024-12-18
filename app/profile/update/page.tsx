"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ProfilePageUpdate = () => {
    const [name, setName] = useState<string>("");
    const [dob, setDob] = useState<string>("05/08/2004");
    const [birthCity, setBirthCity] = useState<string>("Barcelone");
    const [postalCode, setPostalCode] = useState<string>("08007");
    const [gender, setGender] = useState<string>("Femme");
    const [country, setCountry] = useState<string>("Espagne");
    const [address, setAddress] = useState<string>("Carrer de Pau Claris, Barcelona");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        const previousUser = JSON.parse(localStorage.getItem("previousUser") || "{}");

        if (storedUser.email) {
            setName(storedUser.name || "");
            setDob(storedUser.dob || "05/08/2004");
            setBirthCity(storedUser.birthCity || "Barcelone");
            setPostalCode(storedUser.postalCode || "08007");
            setGender(storedUser.gender || "Femme");
            setCountry(storedUser.country || "Espagne");
            setAddress(storedUser.address || "Carrer de Pau Claris, Barcelona");
        } else if (previousUser.email) {
            setName(previousUser.name || "");
            setDob(previousUser.dob || "05/08/2004");
            setBirthCity(previousUser.birthCity || "Barcelone");
            setPostalCode(previousUser.postalCode || "08007");
            setGender(previousUser.gender || "Femme");
            setCountry(previousUser.country || "Espagne");
            setAddress(previousUser.address || "Carrer de Pau Claris, Barcelona");
        }
    }, []);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setDob(formatDateToDMY(date));
    };

    const formatDateToDMY = (date: string): string => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !dob || !birthCity || !postalCode || !gender || !country || !address) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        const storedEmail = localStorage.getItem("userEmail");
        if (!storedEmail) {
            alert("Email non trouvé.");
            return;
        }

        const updatedUser = { email: storedEmail, name, dob: convertDMYtoDate(dob), birthCity, postalCode, gender, country, address };

        try {
            const res = await fetch("/api/user/update", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser),
            });

            if (res.ok) {
                const user = await res.json();
                localStorage.setItem("user", JSON.stringify(user)); 
                localStorage.setItem("previousUser", JSON.stringify(user));
                window.location.href = "/profile";
            } else {
                const errorData = await res.json().catch(() => ({}));
                alert(errorData.message || "Une erreur s'est produite.");
            }
        } catch (error) {
            alert("Une erreur réseau s'est produite.");
        }
    };

    const convertDMYtoDate = (date: string): string => {
        const [day, month, year] = date.split("/");
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="flex justify-center items-center h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/img/bgUpdate.jpg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 bg-gray-950 bg-opacity-60 p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 bottom-12">
                <h1 className="text-2xl font-bold text-menthe mb-4 text-center">Éditer votre profil</h1>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full md:w-1/2 pr-2">
                            <label className="block text-menthe">Nom d&apos;utilisateur</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-800 rounded-md text-gray-200"
                                placeholder="Votre nom"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 pl-2">
                            <label className="block text-menthe">Date de naissance</label>
                            <input
                                type="date"
                                value={convertDMYtoDate(dob)}
                                onChange={handleDateChange}
                                className="w-full p-2 mt-2 bg-gray-800 rounded-md text-gray-200"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full md:w-1/2 pr-2">
                            <label className="block text-menthe">Ville de naissance</label>
                            <input
                                type="text"
                                value={birthCity}
                                onChange={(e) => setBirthCity(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-800 rounded-md text-gray-200"
                                placeholder="Votre ville de naissance"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 pl-2">
                            <label className="block text-menthe">Code Postal</label>
                            <input
                                type="text"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-800 rounded-md text-gray-200"
                                placeholder="Votre code postal"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full md:w-1/2 pr-2">
                            <label className="block text-menthe">Sexe</label>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-800 text-gray-200 rounded-md"
                                required
                            >
                                <option value="">Sélectionner</option>
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 pl-2">
                            <label className="block text-menthe">Pays</label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-800 text-gray-200 rounded-md"
                                placeholder="Votre pays"
                                required
                            />
                        </div>
                        <div className="w-full pl-2">
                            <label className="block text-menthe">Adresse</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-800 rounded-md text-gray-200"
                                placeholder="Votre adresse"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center space-x-3 relative">
                        <button type="submit" className="bg-bleuDiamant text-white hover:bg-bleuTurquoise hover:text-black w-1/2 p-2 rounded-lg mr-0">
                            Mettre à jour mon profil
                        </button>
                        <Link href="/profile">
                            <button className="bg-bleuDiamant text-white hover:bg-bleuTurquoise hover:text-black w-full p-2 rounded-lg mr-28">
                                Annuler
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePageUpdate;
