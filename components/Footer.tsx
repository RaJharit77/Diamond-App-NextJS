import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
                <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
                    <a
                        href="/"
                        className="w-16 h-16 rounded-full overflow-hidden mb-4"
                    >
                        <Image
                            src="/img/diamond_blue_3.jpg"
                            alt="Diamond Store Logo"
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                        />
                    </a>
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
                    <a
                        href="/"
                        className="text-bleuDiamant hover:text-bleuTurquoise hover:underline"
                    >
                        Accueil
                    </a>
                    <a
                        href="/about"
                        className="text-bleuDiamant hover:text-bleuTurquoise hover:underline"
                    >
                        À propos de Diamond Store
                    </a>
                    <a
                        href="/hommes"
                        className="text-bleuDiamant hover:text-bleuTurquoise hover:underline"
                    >
                        Hommes
                    </a>
                    <a
                        href="/femmes"
                        className="text-bleuDiamant hover:text-bleuTurquoise hover:underline"
                    >
                        Femmes
                    </a>
                    <a
                        href="/enfants"
                        className="text-bleuDiamant hover:text-bleuTurquoise hover:underline"
                    >
                        Enfants
                    </a>
                    <a
                        href="/autres"
                        className="text-bleuDiamant hover:text-bleuTurquoise hover:underline"
                    >
                        Autres
                    </a>
                    <a
                        href="/contact"
                        className="text-bleuDiamant hover:text-bleuTurquoise hover:underline"
                    >
                        Prendre contact
                    </a>
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
