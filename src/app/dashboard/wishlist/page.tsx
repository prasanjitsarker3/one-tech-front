import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShoppingCart, FaChevronLeft, FaRegHeart } from 'react-icons/fa';

const WishlistPage = () => {

    const wishlistItems = [
        {
            id: 1,
            name: "Asus ROG Zephyrus G14",
            price: "$1,899.00",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
            specs: "AMD Ryzen 9, 16GB RAM, 1TB SSD, RTX 3060"
        },
        {
            id: 2,
            name: "HP Spectre x360",
            price: "$1,299.00",
            image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000&auto=format&fit=crop",
            specs: "Intel Core i7, 12GB RAM, 512GB SSD"
        },
        {
            id: 3,
            name: "Lenovo ThinkPad X1 Carbon",
            price: "$1,599.00",
            image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop",
            specs: "Intel Core i5, 8GB RAM, 256GB SSD"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 md:pt-16 pt-28">
            {/* Dashboard Header */}
            <div className="bg-gray-800 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">My Wishlist</h1>
                            <p className="text-gray-300 mt-1">Saved items for later</p>
                        </div>
                        <Link
                            href="/dashboard"
                            className="flex items-center text-sm text-[#f3982d] hover:text-[#e08a27]"
                        >
                            <FaChevronLeft className="mr-1" /> Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative">
                                    <figure>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-48 object-cover"
                                            width={500}
                                            height={450}
                                        />
                                    </figure>
                                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-[#f3982d] hover:text-red-500">
                                        <FaHeart className="text-lg" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{item.specs}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="font-bold text-[#f3982d]">{item.price}</span>
                                        <button className="flex items-center space-x-1 bg-[#f3982d] hover:bg-[#e08a27] text-white px-3 py-2 rounded text-sm font-medium transition-colors">
                                            <FaShoppingCart className="text-xs" />
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <FaRegHeart className="mx-auto text-4xl text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-700">Your wishlist is empty</h3>
                        <p className="mt-1 text-gray-500">Save your favorite laptops here for easy access</p>
                        <Link
                            href="/products"
                            className="mt-4 inline-block bg-[#f3982d] hover:bg-[#e08a27] text-white px-4 py-2 rounded-md font-medium transition-colors"
                        >
                            Browse Laptops
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;