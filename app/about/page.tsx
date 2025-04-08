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
            className="bg-cover bg-center relative min-h-screen"
            style={{ backgroundImage: 'url("/img/bgAbout.jpg")' }}
            data-aos="fade-up"
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-12">
                <h1 className="text-5xl font-bold mb-6 tracking-wider leading-tight text-corail">
                    À propos de Diamond Store
                </h1>
                <p className="text-lg leading-8 mb-8 text-gray-300">
                    Diamond est une plateforme dédiée à la présentation de produits exclusifs. 
                    Nous mettons en avant des articles uniques avec un design moderne et une expérience utilisateur de qualité. 
                    Chaque produit sélectionné est minutieusement choisi pour son excellence et sa singularité, garantissant ainsi une offre inégalée.
                </p>
                <p className="text-lg leading-8 mb-8 text-gray-300">
                    Que vous soyez un amateur de mode, un passionné de design ou simplement à la recherche de produits haut de gamme, Diamond a quelque chose à offrir pour tous. 
                    Notre équipe travaille sans relâche pour rechercher, découvrir et présenter des articles qui sont non seulement fonctionnels mais aussi esthétiques, offrant ainsi une expérience qui va au-delà des simples attentes des clients.
                </p>

                <div className="mt-12">
                    <h2 className="text-3xl font-semibold mb-4 text-menthe">Notre Mission</h2>
                    <p className="text-lg leading-7 mb-6 text-gray-300">
                        Fournir une expérience d&apos;achat en ligne inégalée en mettant l&apos;accent sur l&apos;innovation, l&apos;élégance et le style. Nous croyons en la simplicité et en la clarté, en offrant une plateforme intuitive qui permet à nos utilisateurs de naviguer facilement entre nos produits.
                    </p>
                    <p className="text-lg leading-7 text-gray-300">
                        Notre objectif est d&apos;apporter à chacun une expérience de shopping immersive et personnalisée. Nous combinons technologie et art pour offrir à nos utilisateurs un accès privilégié à des produits qui incarnent l&apos;excellence.
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className="text-3xl font-semibold mb-4 text-menthe">Notre Histoire</h3>
                    <p className="text-lg leading-7 mb-6 text-gray-300">
                        Ça fait 1 an qu&apos;on vend les produits de la célèbre marque danoise Hummel. Nous avons commencé avec une passion commune pour le design innovant et l&apos;engagement vers des produits de qualité. Au fil des années, nous avons élargi notre gamme et affiné notre sélection pour répondre aux besoins de notre clientèle fidèle.
                    </p>
                    <p className="text-lg leading-7 text-gray-300">
                        En intégrant des marques prestigieuses et en collaborant avec des créateurs avant-gardistes, Diamond s&apos;est imposé comme un acteur incontournable dans l&apos;industrie du luxe accessible. Nous aspirons à continuer cette aventure, en apportant toujours plus d&apos;inspiration et d&apos;originalité à nos clients.
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className="text-3xl font-semibold mb-4 text-menthe">Nos Valeurs</h3>
                    <p className="text-lg leading-7 mb-6 text-gray-300">
                        Nous nous engageons à promouvoir des valeurs de transparence, d&apos;intégrité et de respect de l&apos;environnement. Nous croyons fermement que chaque produit que nous vendons doit non seulement apporter de la valeur à nos clients mais aussi respecter les standards éthiques et environnementaux.
                    </p>
                    <p className="text-lg leading-7 text-gray-300">
                        Chez Diamond, l&apos;innovation ne se limite pas seulement à nos produits, mais aussi à notre manière de concevoir l&apos;expérience client. Nous nous efforçons d&apos;être à la pointe de la technologie et de l&apos;esthétique pour offrir une expérience d&apos;achat en ligne sans précédent.
                    </p>
                </div>
            </div>
        </div>
    );
}
