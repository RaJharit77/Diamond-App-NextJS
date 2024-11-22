type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 bg-bleuDiamant">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded mb-3"
            />
            <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
            <p className="text-gray-900">{product.price}</p>
            <button className="mt-4 w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-950 hover:text-menthe">
                Achèter
            </button>
        </div>
    );
}
