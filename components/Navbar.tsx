import { FaContao, FaHome, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Diamond</div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className="hover:text-gray-400">
                            <FaHome /> Accueil
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-400">
                            <FaInfoCircle /> À propos
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-400">
                            <FaContao /> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
