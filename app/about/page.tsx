"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4">À propos de Diamond</h1>
            <p className="text-lg leading-7 text-gray-700">
                Diamond est une plateforme dédiée à la présentation de produits exclusifs.
                Nous mettons en avant des articles uniques avec un design moderne et une expérience utilisateur de qualité.
            </p>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-2">Notre Mission</h2>
                <p className="text-gray-700 leading-6">
                    Fournir une expérience d'achat en ligne inégalée en mettant l'accent sur l'innovation et le style.
                </p>
            </div>
        </div>
    );
}
