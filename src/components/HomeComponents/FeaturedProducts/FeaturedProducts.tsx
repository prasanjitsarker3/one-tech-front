import ProductCard from "./ProductCard/ProductCard";

import product_1 from "@/assets/images/product_1.png";
import product_2 from "@/assets/images/product_2.png";
import product_3 from "@/assets/images/product_3.png";

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 2,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 3,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 4,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 5,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 6,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 7,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 8,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 9,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 10,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
        {
            id: 11,
            title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD",
            price: 180000,
            discountPrice: 93000,
            discountPercentage: 10,
            imageUrl: [product_1.src, product_2.src,product_3.src],
        },
    ]

    return (
        <div className="container mx-auto px-4">
            <div>
                <h3 className="text-center text-lg font-bold text-black">Featured Products</h3>
                <p className="text-center text-sm py-2">Check & Get Your Desired Product!</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10">
                {
                    products.map((product) => (<ProductCard key={product.id} productCardData={product} />
                    ))
                }
            </div>
            <div className="flex justify-center items-center gap-1 py-5">
                <button className="px-4 py-1 border rounded bg-[#f3982d] text-white text-sm font-bold cursor-pointer">Prev</button>
                <button className="px-4 py-1 border rounded bg-[#f3982d] text-white text-sm font-bold cursor-pointer">1</button>
                <button className="px-4 py-1 border rounded bg-[#f3982d] text-white text-sm font-bold cursor-pointer">2</button>
                <button className="px-4 py-1 border rounded bg-[#f3982d] text-white text-sm font-bold cursor-pointer">3</button>
                <button className="px-4 py-1 border rounded bg-[#f3982d] text-white text-sm font-bold cursor-pointer">Next</button>
            </div>
        </div>
    );
};

export default FeaturedProducts;