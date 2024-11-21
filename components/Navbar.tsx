"use client";

import { useEffect, useState } from "react";
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
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { href: "/", label: "Accueil", icon: <FaHome /> },
        { href: "/hommes", label: "Hommes", icon: <FaMale /> },
        { href: "/femmes", label: "Femmes", icon: <FaFemale /> },
        { href: "/enfants", label: "Enfants", icon: <FaChild /> },
        { href: "/autres", label: "Autres", icon: <FaGripHorizontal /> },
        { href: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`${isScrolled ? "bg-black" : "bg-gray-950"
                } text-white p-5 h-full sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 cursor-pointer">
                    <a href="/">
                        <img
                            src="/img/diamond_blue_3.jpg"
                            alt="Logo Diamond Blue"
                            className="w-16 h-16 rounded-full hover:scale-110 transition-all duration-500 ease-in-out transform"
                        />
                    </a>
                    <div className="text-xl font-bold text-neon-animation">
                        Diamond Store
                    </div>
                </div>

                <ul className="hidden md:flex space-x-6 items-center ml-auto">
                    {links.map(({ href, label, icon }, index) => (
                        <li key={index}>
                            <a
                                href={href}
                                className={`relative flex items-center group text-white hover:text-bleuDiamant`}
                            >
                                <span className="mr-2 text-bleuDiamant">{icon}</span>
                                {label}
                                <span
                                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-bleuDiamant group-hover:w-full transition-all duration-500 ease-in-out"
                                ></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block ml-6">
                    <a
                        href="/login"
                        className="bg-bleuDiamant px-4 py-2 rounded-lg hover:bg-bleuTurquoise relative group transition-all duration-500 ease-in-out glow-effect"
                    >
                        Se connecter
                    </a>
                </div>

                <button
                    className="block md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FaBars />
                </button>
            </div>

            {isMenuOpen && (
                <ul className="md:hidden mt-2 bg-gray-700 p-4 space-y-3">
                    {links.map(({ href, label, icon }, index) => (
                        <li key={index}>
                            <a
                                href={href}
                                className={`relative flex items-center group text-white hover:text-bleuDiamant`}
                            >
                                <span className="mr-2 text-bleuDiamant">{icon}</span>
                                {label}
                                <span
                                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-bleuDiamant group-hover:w-full transition-all duration-500 ease-in-out"
                                ></span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/login"
                            className="bg-bleuDiamant px-4 py-2 rounded-lg hover:bg-bleuTurquoise relative group transition-all duration-500 ease-in-out glow-effect"
                        >
                            Se connecter
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
