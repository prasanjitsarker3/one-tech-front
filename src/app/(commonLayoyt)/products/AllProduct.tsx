/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { laptopData } from "@/components/JsonData/laptopdata";
import ShoppingBagCard from "@/components/common/ShopingBag";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/Slice/cartSlice";
import { RootState } from "@/redux/store";

const AllProduct = () => {
  const [currentProducts] = useState(laptopData);
  const dispatch = useAppDispatch();
  const cardItems = useAppSelector((state: RootState) => state.cart.items);
  console.log("Card Items:", cardItems);

  const isInCart = (productId: string) => {
    return cardItems.some((item) => item.id === productId);
  };

  const handleAddToCard = (product: any) => {
    console.log(product);
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        photo: product.images[0] || "/placeholder.svg",
        quantity: 1,
      })
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 pt-[6rem]">
      <ShoppingBagCard />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
        {currentProducts.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="group cursor-pointer border border-amber-200 rounded-md p-2 flex flex-col h-full transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Discount Badge */}
              {product.discountPercentage > 0 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  {product.discountPercentage}% OFF
                </div>
              )}

              {/* Heart Icon on Hover */}
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddToCard(product);
                }}
                className={` absolute top-2 left-2 ${
                  isInCart(product.id)
                    ? " opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                } transition-opacity duration-300 z-10`}
              >
                <Heart
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isInCart(product.id)
                      ? "text-red-500 fill-red-500 bg-black/40"
                      : "text-white bg-black/40 hover:text-red-500 hover:fill-red-500"
                  } rounded-full p-1.5 hover:scale-110`}
                />
              </div>

              {/* Out of Stock Overlay */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
                  <span className="text-white font-medium px-3 py-1 bg-black bg-opacity-60 rounded">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="mt-2 flex flex-col flex-grow">
              <div className="flex">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <div className="flex justify-between items-center mt-1">
                <h3 className="text-sm font-medium text-gray-700 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                {product.brand} • {product.category}
              </p>

              {/* Order Now Button */}
              <div className="mt-auto px-2 pt-2">
                <button className="border border-amber-100 text-xs text-amber-400 hover:bg-amber-400 hover:text-white w-full py-1 rounded-full flex justify-center items-center gap-2 transition-all duration-300">
                  Order Now <ShoppingBag size={12} />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
