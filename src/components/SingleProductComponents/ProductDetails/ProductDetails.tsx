"use client";
import Image from "next/image";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import ProductDescription from "../ProductDescription/ProductDescription";
import { ProductDetailsType } from "./ProductDetailsType";
import { useState } from "react";


const ProductDetails: React.FC<ProductDetailsType> = ({ productDetailsData }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="py-12">
            <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="w-full md:w-2/5">
                    <div className="border rounded border-gray-100">
                        <figure>
                            <Image className="transition-all duration-300" src={productDetailsData.productImages[currentImg]} alt="Product Image" width={950} height={750} />
                        </figure>
                    </div>
                    <div className="flex justify-center gap-2 pt-4">
                        {
                            productDetailsData.productImages.map((image, index) => (
                                <figure onClick={() => setCurrentImg(index)} key={index} className="border cursor-pointer rounded border-gray-100 h-[80px] w-[80px]">
                                    <Image className="h-full w-full" src={image} alt={`${productDetailsData.title}-${index}`} width={500} height={500} />
                                </figure>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full md:w-3/5 flex flex-col gap-5">
                    <h2 className="font-semibold text-base md:text-lg text-[#3749bb]">{productDetailsData.title}</h2>
                    <div className="flex gap-2">
                        <p className="font-semibold text-lg">Price: </p>
                        <h2 className="font-bold text-lg px-4  border rounded-lg border-gray-100">{productDetailsData?.discountPrice ? productDetailsData?.discountPrice : productDetailsData.price}৳</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-medium">Key Features</p>
                        {
                            productDetailsData.keyFeatures.map((feature, index) => (
                                <p key={index} className="text-sm md:text-base">{feature}</p>
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
                <ProductSpecification />
            </div>
            <div className="pt-12">
                <ProductDescription />
            </div>
        </div>
    );
};

export default ProductDetails;