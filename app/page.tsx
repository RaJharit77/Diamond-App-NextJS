"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [opacity, setOpacity] = useState<number>(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const newOpacity = 0.5 + scrollPos / 500;
      setOpacity(Math.min(newOpacity, 0.9));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section
        className="relative bg-cover bg-center w-full h-full top-0 bottom-0 min-h-screen flex flex-col items-center justify-center bg-transparent"
        style={{
          backgroundImage: `url('/images/diamant_2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}></div>

        <div className="relative text-center text-menthe space-y-5 px-4 z-10 w-full h-full">
          <h1
            className="text-4xl sm:text-4xl font-bold"
            data-aos="fade-down"
          >
            Bienvenue sur Diamond Store
          </h1>
          <p
            className="text-lg sm:text-xl"
            data-aos="fade-up"
          >
            Découvrez notre collection exclusive de vêtements et accessoires sportifs
            <br />de la célèbre marque Danois Hummel®.
          </p>
          <a
            href="#promotion"
            className="inline-block bg-bleuDiamant text-white px-6 py-2 rounded-lg text-lg hover:bg-bleuTurquoise transition-all"
            data-aos="fade-up"
          >
            Explorez les produits
          </a>
        </div>
      </section>

      <section
        id="promotion"
        className="relative w-full h-screen bg-cover bg-center flex items-center p-10"
        style={{
          backgroundImage: `url('/images/outfit.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div
          className="relative z-10 text-left max-w-md w-full text-white"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Vêtements de sport en promotion !
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Parfaits pour vos entraînements. Découvrez nos styles uniques.
          </p>
          <a
            href="#products"
            className="inline-block bg-bleuDiamant text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
          >
            Découvrir maintenant
          </a>
        </div>
      </section>

      <section
        id="products"
        className="relative bg-cover bg-center py-16"
        style={{
          backgroundImage: `url('/images/diamant.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hommes",
                image: "/images/hummel_homme.jpg",
                link: "/hommes",
              },
              {
                title: "Femmes",
                image: "/images/hummel_femme.jpg",
                link: "/femmes",
              },
              {
                title: "Enfants",
                image: "/images/hummel_enfant.jpg",
                link: "/enfants",
              },
              {
                title: "Autres",
                image: "/images/hummel_autre.jpg",
                link: "/autres",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-bleuDiamant text-black rounded-xl shadow-lg overflow-hidden hover:scale-105 z-50 transform transition-all duration-500 ease-in-out cursor-pointer"
                data-aos="flip-up"
                data-aos-delay={`${index * 100}`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <a
                    href={category.link}
                    className="bg-black text-white px-4 py-2 rounded-xl hover:bg-menthe hover:text-black transition-all hover:scale-105"
                  >
                    Explorer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
