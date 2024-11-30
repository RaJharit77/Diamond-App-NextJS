"use client";

import Image from "next/image";
import { useState } from "react";

const ProfilePage = () => {
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        if (image) {
            formData.append("image", image);
        }

        const res = await fetch("/api/user/update", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            window.location.href = "/";
        } else {
            console.error("Erreur lors de la mise à jour du profil");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-white mb-4">Éditer votre profil</h1>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                    <label className="block text-white">Nom d&apos;utilisateur</label> {/* Escaped apostrophe */}
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 mt-2 bg-gray-700 text-white rounded"
                        placeholder="Votre nom"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white">Image de profil</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="w-full mt-2 text-sm text-white"
                    />
                    {image && (
                        <div className="mt-2">
                            <Image
                                src={URL.createObjectURL(image)}
                                alt="Prévisualisation"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                        </div>
                    )}
                </div>

                <button type="submit" className="bg-bleuDiamant text-white w-full p-2 rounded mt-4">
                    Mettre à jour
                </button>
            </form>
        </div>
    );
};

export default ProfilePage;
