"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { laptopData } from "../JsonData/laptopdata";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { addToCart, removeFromCart } from "@/redux/Slice/cartSlice";

export default function ProductCollection() {
  const [currentProducts] = useState(laptopData);
  const dispatch = useAppDispatch();
  const cardItems = useAppSelector((state: RootState) => state.cart.items);

  const isInCart = (productId: string) => {
    return cardItems.some((item) => item.id === productId);
  };

  const handleAddToCartToggle = (product: any) => {
    if (isInCart(product.id)) {
      dispatch(removeFromCart({ id: product.id }));
    } else {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          photo: product.images[0] || "/placeholder.svg",
          quantity: 1,
        })
      );
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
        {currentProducts.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group cursor-pointer border border-amber-200 rounded-md p-2 flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.discountPercentage > 0 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discountPercentage}% OFF
                </div>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white font-medium px-3 py-1 bg-black bg-opacity-60 rounded">
                    Out of Stock
                  </span>
                </div>
              )}

              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddToCartToggle(product);
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
            </div>

            {/* Details and Button Section */}
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
                <h3 className="text-sm font-medium text-gray-700">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                {product.brand} • {product.category}
              </p>

              {/* Order Now Button at Bottom */}
              <div className="mt-auto px-2 pt-2">
                <button className="border border-amber-100 text-xs text-[#FF7200]  hover:bg-[#FF7200] hover:text-white w-full py-1 rounded-full flex justify-center items-center cursor-pointer gap-2">
                  Order Now <ShoppingBag size={12} />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
