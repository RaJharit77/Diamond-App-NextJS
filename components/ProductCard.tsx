type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Voir le détail
            </button>
        </div>
    );
}
