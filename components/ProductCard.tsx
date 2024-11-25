import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

export default function ProductCard({ product }: { product: Product }) {
    const [liked, setLiked] = useState(false);
    const [inCart, setInCart] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const toggleCart = () => {
        setInCart(!inCart);
    };

    return (
        <div className="rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 bg-bleuDiamant">
            <img
                src={product.image}
                alt={product.name}
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
                    <span>{liked ? "Liked" : "Like"}</span>
                </button>

                <button
                    onClick={toggleCart}
                    className={`flex items-center gap-2 text-gray-900 hover:text-menthe transition ${inCart ? "text-menthe" : ""
                        }`}
                >
                    <FaShoppingCart />
                    <span>{inCart ? "In Cart" : "Add to Cart"}</span>
                </button>

                <button className="py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-950 hover:text-menthe">
                    Acheter
                </button>
            </div>
        </div>
    );
}
