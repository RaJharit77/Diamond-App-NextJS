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
    dob: string;
    birthCity: string;
    postalCode: string;
    gender: string;
    country: string;
    address: string;
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState<string | null>(null);
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser && storedUser !== "undefined") {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setNotification(`Bienvenue, M. ${parsedUser.name}!`);
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

        const updateCounts = () => {
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            setFavoritesCount(favorites.length);
            setCartCount(cart.length);
        };

        updateCounts();
        window.addEventListener("storage", updateCounts);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("storage", updateCounts);
        };
    }, []);

    const handleLogout = () => {
        if (user) {
            const userToSave = {
                name: user.name,
                email: user.email,
                dob: user.dob,
                birthCity: user.birthCity,
                postalCode: user.postalCode,
                gender: user.gender,
                country: user.country,
                address: user.address,
            };
            localStorage.setItem('previousUser', JSON.stringify(userToSave));
        }

        localStorage.removeItem('user');
        setUser(null);
        window.location.href = '/login';
    };

    useEffect(() => {
        const handleStorageUpdate = () => {
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            setFavoritesCount(favorites.length);
            setCartCount(cart.length);
        };

        window.addEventListener("storage-update", handleStorageUpdate);

        handleStorageUpdate();

        return () => {
            window.removeEventListener("storage-update", handleStorageUpdate);
        };
    }, []);

    const links = [
        { href: "/", label: "Accueil", icon: <FaHome /> },
        { href: "/hommes", label: "Hommes", icon: <FaMale /> },
        { href: "/femmes", label: "Femmes", icon: <FaFemale /> },
        { href: "/enfants", label: "Enfants", icon: <FaChild /> },
        { href: "/autres", label: "Autres", icon: <FaGripHorizontal /> },
        { href: "/contacts", label: "Contact", icon: <FaPhoneAlt /> },
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

                {/**Notifications*/}
                {notification && (
                    <div className="mt-36 absolute left-0 right-0 flex justify-center p-4 bg-menthe text-black rounded-sm">
                        <span>{notification}</span>
                    </div>
                )}

                {/**Chargement*/}
                {loading && (
                    <div className="flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-menthe">
                        <span>Chargement...</span>
                    </div>
                )}

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
                    <li className="relative">
                        <Link href="/favoris" className="flex items-center hover:text-bleuDiamant">
                            <FaHeart className="mr-1" />
                        </Link>
                        {favoritesCount >= 0 && (
                            <span className="absolute top-[-10px] right-[-10px] bg-bleuDiamant text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {favoritesCount}
                            </span>
                        )}
                    </li>
                    <li className="relative">
                        <Link href="/panier" className="flex items-center hover:text-bleuDiamant">
                            <FaShoppingCart className="mr-1" />
                        </Link>
                        {cartCount >= 0 && (
                            <span className="absolute top-[-10px] right-[-10px] bg-bleuDiamant text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </li>
                </ul>

                <div className="hidden md:block ml-5">
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-white">{user.name}</span>
                            <Link href="/profile" className="bg-bleuDiamant w-10 h-10 rounded-full flex items-center justify-center hover:bg-bleuTurquoise relative group transition-all duration-500 ease-in-out glow-effect">
                                <FaUser className="text-white text-lg group-hover:text-black" />
                            </Link>
                            <button onClick={handleLogout} className="bg-bleuDiamant w-10 h-10 rounded-full flex items-center justify-center hover:bg-bleuTurquoise relative group transition-all duration-500 ease-in-out glow-effect">
                                <FaSignOutAlt className="text-white text-lg group-hover:text-black" />
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
        </nav>
    );
};

export default Navbar;
