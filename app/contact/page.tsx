"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("Message envoyé avec succès !");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                setStatus(result.error || "Erreur lors de l'envoi.");
            }
        } catch (error) {
            setStatus("Erreur serveur. Réessayez plus tard.");
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('/img/bgContact.jpg')",
            }}
        >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl p-4">
                <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg w-full lg:w-1/2 p-6 lg:p-10">
                    <h1 className="text-3xl font-extrabold text-center text-bleuDiamant mb-8">
                        Contactez-nous
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6 text-gray-100">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            className="w-full bg-gray-800 p-4 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-gray-700 focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre e-mail"
                            className="w-full bg-gray-800 p-4 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-gray-700 focus:outline-none"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Sujet"
                            className="w-full bg-gray-800 p-4 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-gray-700 focus:outline-none"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre message"
                            className="w-full bg-gray-800 p-4 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-gray-700 focus:outline-none h-40"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-bleuDiamant text-white rounded-md shadow-lg font-medium hover:bg-bleuTurquoise transition-all"
                        >
                            Envoyer
                        </button>
                    </form>
                    {status && <p className="text-center mt-4 text-red-500">{status}</p>}
                </div>
                <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg w-full lg:w-1/2 p-6 lg:p-10">
                    <h2 className="text-2xl font-bold text-center text-bleuDiamant mb-6">
                        Coordonnées
                    </h2>
                    <p className="text-gray-300 text-center mb-6">
                        Vous pouvez également nous contacter directement à notre adresse ou par
                        téléphone.
                    </p>
                    <div className="space-y-4 text-gray-100">
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-3xl text-bleuDiamant mr-4" />
                            <p className="text-lg font-medium">
                                Rue de la Haye, 101 Antananarivo Ville, Madagascar
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="text-3xl text-bleuDiamant mr-4" />
                            <p className="text-lg font-medium">
                                +261 034 00 000 00 ou +261 039 00 000 00
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-3xl text-bleuDiamant mr-4" />
                            <p className="text-lg font-medium">contact@diamond.store.mg</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-left text-bleuDiamant mb-4">
                            Localisation
                        </h3>
                        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/assets/carte.png"
                                alt="Carte de localisation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
