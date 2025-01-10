import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

const useStyles = makeStyles({
    card: {
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        },
    },
});

export default function ProductCard({ product }: { product: Product }) {
    const [liked, setLiked] = useState(false);
    const [inCart, setInCart] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const classes = useStyles();

    useEffect(() => {
        AOS.init();
    }, []);

    const toggleLike = () => {
        setLiked(!liked);
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (!liked) {
            favorites.push(product);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setMessage("Produit ajouté aux favoris !");
        } else {
            const updatedFavorites = favorites.filter(
                (fav: Product) => fav.id !== product.id
            );
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            setMessage("Produit retiré des favoris.");
        }

        window.dispatchEvent(new Event("storage-update"));
        setTimeout(() => setMessage(null), 3000);
    };

    const toggleCart = () => {
        setInCart(!inCart);
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (!inCart) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            setMessage("Produit ajouté au panier !");
        } else {
            const updatedCart = cart.filter((item: Product) => item.id !== product.id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setMessage("Produit retiré du panier.");
        }

        window.dispatchEvent(new Event("storage-update"));
        setTimeout(() => setMessage(null), 3000);
    };

    const handleBuy = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.href = "/achat";
    };

    return (
        <div>
            {message && (
                <div className="fixed top-0 left-0 w-full bg-gray-900 text-white text-center py-2 z-50">
                    {message}
                </div>
            )}

            <div
                data-aos="zoom-in"
                data-aos-duration="800"
            >
                <div
                    className={`rounded-lg p-4 shadow-md bg-bleuDiamant ${classes.card}`}
                    data-aos-duration="800"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-96 object-cover rounded mb-3"
                    />
                    <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                    <p className="text-gray-900">{product.price}</p>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={toggleLike}
                            className={`flex items-center gap-2 text-gray-900 hover:text-red-500 transition ${liked ? "text-red-500" : ""
                                }`}
                        >
                            <FaHeart />
                            <span>{liked ? "Liké" : "Like"}</span>
                        </button>

                        <button
                            onClick={toggleCart}
                            className={`flex items-center gap-2 text-gray-900 hover:text-menthe transition ${inCart ? "text-menthe" : ""
                                }`}
                        >
                            <FaShoppingCart />
                            <span>{inCart ? "Dans le panier" : "Ajout au panier"}</span>
                        </button>

                        <button
                            onClick={handleBuy}
                            className="py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-950 hover:text-menthe"
                        >
                            Achèter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
