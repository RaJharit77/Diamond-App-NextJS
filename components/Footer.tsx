import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
                <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
                    <Link href="/" className="w-20 h-20 rounded-full overflow-hidden mb-4">
                        <Image
                            src="/img/diamond_blue_3.jpg"
                            alt="Diamond Store Logo"
                            width={120} // Augmenter la taille pour une meilleure qualité
                            height={120} // Ajuster la hauteur en fonction du ratio de l'image
                            className="w-full h-full object-cover"
                        />
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end space-x-6 items-center mb-6 lg:mb-0">
                    <a
                        href="https://www.facebook.com/"
                        className="text-bleuDiamant hover:text-bleuTurquoise"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={30} />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        className="text-bleuDiamant hover:text-bleuTurquoise"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href="https://x.com/"
                        className="text-bleuDiamant hover:text-bleuTurquoise"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter size={30} />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        className="text-bleuDiamant hover:text-bleuTurquoise"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={30} />
                    </a>
                    <a
                        href="https://web.whatsapp.com/"
                        className="text-bleuDiamant hover:text-bleuTurquoise"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp size={30} />
                    </a>
                    <a
                        href="mailto: contact@diamond.store.mg"
                        className="text-bleuDiamant hover:text-bleuTurquoise"
                    >
                        <MdEmail size={30} />
                    </a>
                </div>
            </div>

            <div className="text-center mt-6 px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/" className="text-bleuDiamant hover:text-bleuTurquoise hover:underline">
                        Accueil
                    </Link>
                    <Link href="/about" className="text-bleuDiamant hover:text-bleuTurquoise hover:underline">
                        À propos de Diamond Store
                    </Link>
                    <Link href="/hommes" className="text-bleuDiamant hover:text-bleuTurquoise hover:underline">
                        Hommes
                    </Link>
                    <Link href="/femmes" className="text-bleuDiamant hover:text-bleuTurquoise hover:underline">
                        Femmes
                    </Link>
                    <Link href="/enfants" className="text-bleuDiamant hover:text-bleuTurquoise hover:underline">
                        Enfants
                    </Link>
                    <Link href="/autres" className="text-bleuDiamant hover:text-bleuTurquoise hover:underline">
                        Autres
                    </Link>
                    <Link href="/contact" className="text-bleuDiamant hover:text-bleuTurquoise hover:underline">
                        Prendre contact
                    </Link>
                </div>
            </div>

            <div className="w-full text-center bg-black py-3 mt-6">
                <p className="text-bleuDiamant">
                    &copy; {new Date().getFullYear()} Diamond Store®. Created by RaJharit77. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
