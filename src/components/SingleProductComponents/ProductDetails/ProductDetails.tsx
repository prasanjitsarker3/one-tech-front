"use client";
import Image from "next/image";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import ProductDescription from "../ProductDescription/ProductDescription";
import { ProductDetailsType } from "./ProductDetailsType";
import { useState, useRef } from "react";

const ProductDetails: React.FC<ProductDetailsType> = ({ productDetailsData }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const imageRef = useRef<HTMLImageElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        const image = imageRef.current;
        if (!image) return;

        const { left, top, width, height } = image.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        image.style.transformOrigin = `${x}% ${y}%`;
    };

    return (
        <div className="py-12">
            <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="w-full md:w-1/2">
                    <div className="relative overflow-hidden group">
                        <figure className="flex justify-center">
                            <Image
                                ref={imageRef}
                                className="transition-transform duration-300 max-h-96 max-w-96 group-hover:scale-150"
                                src={productDetailsData.productImages[currentImg]}
                                alt="Product Image"
                                width={1200}
                                height={750}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={() => {
                                    if (imageRef.current) {
                                        imageRef.current.style.transformOrigin = 'center center';
                                    }
                                }}
                            />
                        </figure>
                    </div>
                    <div className="flex justify-center pt-4">
                        {productDetailsData.productImages.map((image, index) => (
                            <figure
                                onClick={() => setCurrentImg(index)}
                                key={index}
                                className={`border cursor-pointer border-gray-100 h-[80px] w-[80px] ${currentImg === index ? 'border-gray-400' : ''}`}
                            >
                                <Image
                                    className="h-full w-full object-cover"
                                    src={image}
                                    alt={`${productDetailsData.title}-${index}`}
                                    width={500}
                                    height={500}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <h2 className="font-medium text-base md:text-xl text-[#3749bb]">{productDetailsData.title}</h2>
                    <div className="flex gap-2">
                        <p className="px-4 py-0.5 flex items-center bg-[#3749bb1a] rounded-xl">
                            <span className="text-black font-light pr-1">Price: </span>
                            <span className="font-bold">{productDetailsData?.discountPrice ? productDetailsData?.discountPrice : productDetailsData.price}৳</span>
                            {
                                productDetailsData?.discountPrice && <span className="line-through font-bold text-gray-600">{productDetailsData.price}৳</span>
                            }
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">Key Features</p>
                        {
                            productDetailsData.keyFeatures.map((feature, index) => (
                                <p key={index} className="text-sm">{feature}</p>
                            ))
                        }
                    </div>
                    <div className="flex gap-4">
                        <div className="flex">
                            <button onClick={() => setQuantity(quantity => quantity <= 1 ? 1 : quantity - 1)} className="border-gray-200 font-bold text-lg cursor-pointer border h-10 w-10">-</button>
                            <input className="border-gray-200 text-center outline-0 border h-10 w-16" defaultValue={quantity} type="text" />
                            <button onClick={() => setQuantity(quantity => quantity + 1)} className="border-gray-200 font-bold text-lg cursor-pointer border h-10 w-10">+</button>
                        </div>
                        <button className="bg-[#3749bb] text-white md:px-8 px-4 py-2 rounded-xs font-bold cursor-pointer">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="pt-12">
                <ProductSpecification specification={productDetailsData.specification} />
            </div>
            <div className="pt-12">
                <ProductDescription description={productDetailsData.description} />
            </div>
        </div>
    );
};

export default ProductDetails;