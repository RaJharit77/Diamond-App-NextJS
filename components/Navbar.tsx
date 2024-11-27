"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    FaBars,
    FaChild,
    FaFemale,
    FaGripHorizontal,
    FaHeart,
    FaHome,
    FaMale,
    FaPhoneAlt,
    FaShoppingCart,
    FaTimes,
    FaUser,
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
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${
                isScrolled ? "bg-black" : "bg-gray-950"
            } text-white p-5 sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 cursor-pointer">
                    <Link href="/">
                        <Image
                            src="/img/diamond_blue_3.jpg"
                            alt="Logo Diamond Blue"
                            width={200}
                            height={200}
                            className="rounded-full hover:scale-110 transition-all duration-500 ease-in-out transform object-cover w-16 h-16"
                            priority
                        />
                    </Link>
                    <div className="text-xl font-bold text-neon-animation">
                        Diamond Store®
                    </div>
                </div>

                <ul className="hidden md:flex space-x-6 items-center ml-auto">
                    {links.map(({ href, label, icon }, index) => (
                        <li key={index}>
                            <Link
                                href={href}
                                className="relative flex items-center group text-white hover:text-bleuDiamant"
                            >
                                <span className="mr-2 text-bleuDiamant">{icon}</span>
                                {label}
                                <span
                                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-bleuDiamant group-hover:w-full transition-all duration-500 ease-in-out"
                                ></span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/favoris" className="flex items-center hover:text-bleuDiamant">
                            <FaHeart className="mr-1" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/panier" className="flex items-center hover:text-bleuDiamant">
                            <FaShoppingCart className="mr-1" />
                        </Link>
                    </li>
                </ul>

                <div className="hidden md:block ml-5">
                    <Link
                        href="/login"
                        className="bg-bleuDiamant w-10 h-10 rounded-full flex items-center justify-center hover:bg-bleuTurquoise relative group transition-all duration-500 ease-in-out glow-effect"
                    >
                        <FaUser className="text-white text-lg group-hover:text-black" />
                    </Link>
                </div>

                <button
                    className="block md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isMenuOpen && (
                <ul className="md:hidden mt-4 flex flex-col space-y-4 items-center bg-gray-950 p-4 rounded-lg shadow-lg">
                    {links.map(({ href, label, icon }, index) => (
                        <li key={index}>
                            <Link
                                href={href}
                                className="flex items-center text-white hover:text-bleuDiamant"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="mr-2">{icon}</span>
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/favoris"
                            className="flex items-center text-white hover:text-bleuDiamant"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaHeart className="mr-1" />
                            Favoris
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/panier"
                            className="flex items-center text-white hover:text-bleuDiamant"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaShoppingCart className="mr-1" />
                            Panier
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className="bg-bleuDiamant w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-bleuTurquoise transition-all duration-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaUser className="text-lg" />
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
