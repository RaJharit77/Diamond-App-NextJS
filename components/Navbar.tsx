"use client";

import { useState } from "react";
import {
    FaBars,
    FaChild,
    FaFemale,
    FaGripHorizontal,
    FaHome,
    FaMale,
    FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-zinc-800 text-white p-4 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 cursor-pointer">
                    <img
                        src="/images/diamond.jpg"
                        alt="Logo Diamond"
                        className="h-12 rounded-full"
                    />
                    <div className="text-xl font-bold">Diamond Store</div>
                </div>

                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <a href="/" className="hover:text-gray-400 flex items-center">
                            <FaHome className="mr-2" /> Accueil
                        </a>
                    </li>
                    <li>
                        <a href="/hommes" className="hover:text-gray-400 flex items-center">
                            <FaMale className="mr-2" /> Hommes
                        </a>
                    </li>
                    <li>
                        <a href="/femmes" className="hover:text-gray-400 flex items-center">
                            <FaFemale className="mr-2" /> Femmes
                        </a>
                    </li>
                    <li>
                        <a href="/enfants" className="hover:text-gray-400 flex items-center">
                            <FaChild className="mr-2" /> Enfants
                        </a>
                    </li>
                    <li>
                        <a href="/autres" className="hover:text-gray-400 flex items-center">
                            <FaGripHorizontal className="mr-2" /> Autres
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-400 flex items-center">
                            <FaPhoneAlt className="mr-2" /> Contact
                        </a>
                    </li>
                </ul>

                <div className="hidden md:block">
                    <a
                        href="/login"
                        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </a>
                </div>

                <button
                    className="block md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FaBars />
                </button>
            </div>

            {/* Navigation Mobile */}
            {isMenuOpen && (
                <ul className="md:hidden mt-2 bg-gray-700 p-4 space-y-3">
                    <li>
                        <a href="/" className="flex items-center">
                            <FaHome className="mr-2" /> Accueil
                        </a>
                    </li>
                    <li>
                        <a href="/hommes" className="flex items-center">
                            <FaMale className="mr-2" /> Hommes
                        </a>
                    </li>
                    <li>
                        <a href="/femmes" className="flex items-center">
                            <FaFemale className="mr-2" /> Femmes
                        </a>
                    </li>
                    <li>
                        <a href="/enfants" className="flex items-center">
                            <FaChild className="mr-2" /> Enfants
                        </a>
                    </li>
                    <li>
                        <a href="/autres" className="flex items-center">
                            <FaGripHorizontal className="mr-2" /> Autres
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="flex items-center">
                            <FaPhoneAlt className="mr-2" /> Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="/login"
                            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Login
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
