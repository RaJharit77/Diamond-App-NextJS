"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="max-w-5xl mx-auto p-6 bg-cover bg-center"
            style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
            data-aos="fade-up"
        >
            <h1 className="text-4xl font-bold mb-4 text-white">À propos de Diamond</h1>
            <p className="text-lg leading-7 text-gray-200">
                Diamond est une plateforme dédiée à la présentation de produits exclusifs.
                Nous mettons en avant des articles uniques avec un design moderne et une expérience utilisateur de qualité.
            </p>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-2 text-white">Notre Mission</h2>
                <p className="text-gray-200 leading-6">
                    Fournir une expérience d&apos;achat en ligne inégalée en mettant l&apos;accent sur l&apos;innovation et le style.
                </p>
            </div>
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Notre Histoire</h3>
                <p className="text-gray-200 leading-6">
                    Ça fait 1 ans qu&apos;on vend les produits de la célèbre marque danoise Hummel.
                </p>
            </div>
        </div>
    );
}
