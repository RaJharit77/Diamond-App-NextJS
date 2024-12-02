"use client";

import { useEffect, useState } from "react";

const ProfilePageUpdate = () => {
    const [name, setName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [birthCity, setBirthCity] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setName(storedUser.name || "");
        setDob(storedUser.dob || "");
        setBirthCity(storedUser.birthCity || "");
        setPostalCode(storedUser.postalCode || "");
        setGender(storedUser.gender || "");
        setCountry(storedUser.country || "");
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const storedEmail = localStorage.getItem("userEmail");
        if (!storedEmail) {
            alert("Email non trouvé.");
            return;
        }
    
        const updatedUser = { email: storedEmail, name, dob, birthCity, postalCode, gender, country };
    
        try {
            const res = await fetch("/api/user/update", {
                method: "POST",
                body: JSON.stringify(updatedUser),
                headers: { "Content-Type": "application/json" },
            });
    
            if (res.ok) {
                const user = await res.json();
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "/profile";
            } else {
                const errorData = await res.json();
                console.error("Erreur lors de la mise à jour :", errorData.message);
                alert(errorData.message || "Une erreur s'est produite.");
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
            alert("Une erreur réseau s'est produite.");
        }
    };    

    return (
        <div className="flex justify-center items-center h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/img/bgUpdate.jpg)' }}>

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

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
                            />
                        </div>
                        <div className="w-full md:w-1/2 pl-2">
                            <label className="block text-menthe">Date de naissance</label>
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-800 rounded-md text-gray-200"
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
                            >
                                <option value="">Sélectionner</option>
                                <option value="Male">Homme</option>
                                <option value="Female">Femme</option>
                                <option value="Other">Autre</option>
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
                            />
                        </div>
                    </div>

                    <button type="submit" className="bg-bleuDiamant text-gray-200 hover:bg-bleuTurquoise hover:text-black w-full p-2 rounded mt-4">
                        Mettre à jour
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePageUpdate;
