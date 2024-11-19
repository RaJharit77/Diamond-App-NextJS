import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-4 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex flex-col items-center sm:items-start sm:ml-7 mb-2 sm:mb-0">
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full overflow-hidden mb-2"
                    >
                        <Image
                            src="/images/diamond.jpg"
                            alt="Diamond Store Logo"
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                        />
                    </a>
                </div>

                <div className="flex space-x-6 justify-center sm:justify-end sm:mr-8 mt-1 sm:mt-0 items-center mb-2 sm:mb-1">
                    <a
                        href="https://www.facebook.com/"
                        className="text-white hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={30} />  
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        className="text-white hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={30} /> 
                    </a>
                    <a
                        href="https://x.com/"
                        className="text-white hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter size={30} />  
                    </a>
                    <a
                        href="https://linkedin.com/"
                        className="text-white hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={30} /> 
                    </a>
                    <a
                        href="https://web.whatsapp.com/"
                        className="text-white hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp size={30} />  
                    </a>
                    <a
                        href="mailto: diamond.store@gmail.com"
                        className="text-white hover:text-white"
                    >
                        <MdEmail size={30} />
                    </a>
                </div>
            </div>

            <div className="w-full text-center bg-black py-2">
                <p className="text-creme">
                    &copy; {new Date().getFullYear()} Diamond Store®. All rights reserved. Created by RaJharit77
                </p>
            </div>
        </footer>
    );
};

export default Footer;
