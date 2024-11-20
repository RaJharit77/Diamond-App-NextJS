"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/diamond_blue.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative text-center text-menthe space-y-5 px-4 bottom-20">
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
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-end p-10 text-white"
        style={{
          backgroundImage: `url('/images/vitality.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-5" data-aos="zoom-in">
            Vêtements de sport en promotion !
          </h2>
          <p className="text-lg mb-5" data-aos="fade-up">
            Parfaits pour vos entraînements. Découvrez nos styles uniques.
          </p>
          <a
            href="#products"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
            data-aos="fade-up"
          >
            Découvrir maintenant
          </a>
        </div>
      </section>

      {/* Section Produits */}
      <section id="products" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-10 text-gray-800"
            data-aos="fade-down"
          >
            Nos Catégories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hommes",
                image: "/images/homme.jpg",
                link: "/hommes",
              },
              {
                title: "Femmes",
                image: "/images/femme.jpg",
                link: "/femmes",
              },
              {
                title: "Enfants",
                image: "/images/enfants.jpg",
                link: "/enfants",
              },
              {
                title: "Autres",
                image: "/images/autres.jpg",
                link: "/autres",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
                data-aos="flip-up"
                data-aos-delay={`${index * 100}`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <a
                    href={category.link}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
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
