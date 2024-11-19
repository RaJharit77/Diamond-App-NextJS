"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-5">Bienvenue sur Diamond</h1>
      <p className="text-lg text-center mb-5">Découvrez notre collection exclusive de la marque Hummel®.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      </div>
    </div>
  );
}
