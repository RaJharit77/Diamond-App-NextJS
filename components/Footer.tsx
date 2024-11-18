// components/Footer.tsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Section gauche : Informations */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">Diamond</h2>
                    <p className="text-gray-400 mt-2">
                        &copy; {new Date().getFullYear()} Diamond. Tous droits réservés.
                    </p>
                </div>

                {/* Section droite : Liens sociaux */}
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
