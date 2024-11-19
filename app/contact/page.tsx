"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Contactez-nous</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                    <FaPhone className="text-3xl text-blue-500 mr-4" />
                    <p className="text-lg">+33 1 23 45 67 89</p>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="text-3xl text-green-500 mr-4" />
                    <p className="text-lg">contact@diamond.com</p>
                </div>
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-3xl text-red-500 mr-4" />
                    <p className="text-lg">123 Avenue des Champs, Paris</p>
                </div>
            </div>
            <div className="mt-10">
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full p-3 border rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Votre e-mail"
                        className="w-full p-3 border rounded-md"
                    />
                    <textarea
                        placeholder="Votre message"
                        className="w-full p-3 border rounded-md h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}
