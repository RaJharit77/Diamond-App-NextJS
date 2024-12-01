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
    FaSignOutAlt,
    FaTimes,
    FaUser
} from "react-icons/fa";

interface User {
    name: string;
    email: string;
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser && storedUser !== "undefined") {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setNotification(`Bienvenue, ${parsedUser.name}!`);
                // Disparition de la notification après 7 secondes
                setTimeout(() => {
                    setNotification(null);
                }, 7000);
            } catch (error) {
                console.error("Erreur lors de l'analyse des données utilisateur:", error);
                localStorage.removeItem('user');
            }
        } else {
            setUser(null);
        }
        setLoading(false);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setNotification(null);
        window.location.href = '/login';
    };

    const links = [
        { href: "/", label: "Accueil", icon: <FaHome /> },
        { href: "/hommes", label: "Hommes", icon: <FaMale /> },
        { href: "/femmes", label: "Femmes", icon: <FaFemale /> },
        { href: "/enfants", label: "Enfants", icon: <FaChild /> },
        { href: "/autres", label: "Autres", icon: <FaGripHorizontal /> },
        { href: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
    ];

    return (
        <nav className={`${isScrolled ? "bg-black" : "bg-gray-950"} text-white p-5 sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out`}>
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
                    <div className="text-xl font-bold text-neon-animation">Diamond Store®</div>
                </div>

                {notification && (
                    <div className="mt-20 absolute left-0 right-0 flex justify-center p-4 bg-green-600 text-white rounded-md">
                        <span>{notification}</span>
                    </div>
                )}

                {/**{user && !loading && (
                    <div className="absolute top-0 left-0 right-0 flex justify-end p-4">
                        <div className="flex items-center text-white space-x-2">
                            <span>{user.name}</span>
                            <Link href="/profile" className="text-blue-500 hover:underline">
                                Profil
                            </Link>
                            <FaUser className="text-white" />
                        </div>
                    </div>
                )}*/}

                <ul className="hidden md:flex space-x-6 items-center ml-auto">
                    {links.map(({ href, label, icon }, index) => (
                        <li key={index}>
                            <Link href={href} className="relative flex items-center group text-white hover:text-bleuDiamant">
                                <span className="mr-2 text-bleuDiamant">{icon}</span>
                                {label}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-bleuDiamant group-hover:w-full transition-all duration-500 ease-in-out"></span>
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
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-white">{user.name}</span>
                            <Link href="/profile" className="bg-bleuDiamant w-10 h-10 rounded-full flex items-center justify-center hover:bg-bleuTurquoise relative group transition-all duration-500 ease-in-out glow-effect">
                                <FaUser className="text-white text-lg group-hover:text-black" />
                            </Link>
                            <button onClick={handleLogout} className="bg-bleuDiamant w-10 h-10 rounded-full flex items-center justify-center hover:bg-bleuTurquoise">
                                <FaSignOutAlt className="text-white text-lg" />
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" className="bg-bleuDiamant w-10 h-10 rounded-full flex items-center justify-center hover:bg-bleuTurquoise relative group transition-all duration-500 ease-in-out glow-effect">
                            <FaUser className="text-white text-lg group-hover:text-black" />
                        </Link>
                    )}
                </div>

                <button className="block md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isMenuOpen && (
                <ul className="md:hidden mt-4 flex flex-col space-y-4 items-center bg-gray-950 p-4 rounded-lg shadow-lg">
                    {links.map(({ href, label, icon }, index) => (
                        <li key={index}>
                            <Link href={href} className="flex items-center text-white hover:text-bleuDiamant" onClick={() => setIsMenuOpen(false)}>
                                <span className="mr-2">{icon}</span>
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/favoris" className="flex items-center text-white hover:text-bleuDiamant" onClick={() => setIsMenuOpen(false)}>
                            <FaHeart className="mr-1" />
                            Favoris
                        </Link>
                    </li>
                    <li>
                        <Link href="/panier" className="flex items-center text-white hover:text-bleuDiamant" onClick={() => setIsMenuOpen(false)}>
                            <FaShoppingCart className="mr-1" />
                            Panier
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" className="bg-bleuDiamant w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-bleuTurquoise transition-all duration-500 ease-in-out">
                            <FaUser className="text-xl" />
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
