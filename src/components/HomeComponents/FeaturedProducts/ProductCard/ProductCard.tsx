"use client"
import Image from "next/image";
import Link from "next/link";
import { ProductCardType } from "./ProductCardType";
import { useEffect, useState } from "react";

const ProductCard: React.FC<ProductCardType> = ({ productCardData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isHovered && productCardData.imageUrl.length > 1) {
            interval = setInterval(() => {
                setCurrentImageIndex(prev => 
                    (prev + 1) % productCardData.imageUrl.length
                );
            }, 2000); // Change image every 2 seconds
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovered, productCardData.imageUrl.length]);

    return (
        <div 
            className="relative group bg-white border border-gray-100 rounded-lg p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImageIndex(0); // Reset to first image when mouse leaves
            }}
        >
            <Link href={`products/${productCardData.id}`}>
                <div className="overflow-hidden relative h-[200px]">
                    <div className="relative w-full h-full">
                        {productCardData.imageUrl.map((image, index) => (
                            <div 
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                                    index === currentImageIndex 
                                        ? 'translate-x-0' 
                                        : index < currentImageIndex 
                                            ? '-translate-x-full' 
                                            : 'translate-x-full'
                                }`}
                            >
                                <Image
                                    className="w-full h-full object-cover"
                                    src={image}
                                    alt={`product ${index + 1}`}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className="py-5 text-sm hover:underline hover:text-[#f3982d] transition-all duration-300">
                    {productCardData.title}
                </h2>
            </Link>
            <div className="flex flex-wrap items-center gap-1 md:gap-4">
                <p className="font-bold text-lg text-[#f3982d]">
                    {productCardData?.discountPrice ? productCardData.discountPrice : productCardData.price}৳
                </p>
                {productCardData?.discountPrice && (
                    <p className="text-sm line-through text-gray-600 font-bold">
                        {productCardData.price}৳
                    </p>
                )}
            </div>
            {productCardData?.discountPrice && (
                <div className="absolute top-4 left-0 bg-[#f3982d] text-white px-3 py-0.5 rounded-br-lg rounded-tr-lg">
                    <p className="text-xs font-medium">
                        Save: 33,400৳ ({productCardData.discountPercentage}%)
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductCard;