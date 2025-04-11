"use client";

import type React from "react";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  Heart,
  Share2,
  BarChart2,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import ProductDescription from "../ProductDescription/ProductDescription";
import type { ProductDetailsType } from "./ProductDetailsType";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductDetails: React.FC<ProductDetailsType> = ({
  productDetailsData,
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);

  // Calculate discount percentage
  const discountPercentage = productDetailsData.discountPrice
    ? Math.round(
        ((productDetailsData.price - productDetailsData.discountPrice) /
          productDetailsData.price) *
          100
      )
    : 0;

  // Handle image zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  // Handle quantity input
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  // Scroll thumbnails
  const scrollThumbnails = (direction: "left" | "right") => {
    if (!thumbnailsContainerRef.current) return;

    const scrollAmount = direction === "left" ? -100 : 100;
    thumbnailsContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Handle keyboard navigation for images
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentImg((prev) =>
          prev === 0 ? productDetailsData.productImages.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentImg((prev) =>
          prev === productDetailsData.productImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [productDetailsData.productImages.length]);

  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <span className="hover:text-[#f3982d] cursor-pointer">Home</span>{" "}
        {" > "}
        <span className="hover:text-[#f3982d] cursor-pointer">
          Laptops
        </span>{" "}
        {" > "}
        <span className="hover:text-[#f3982d] cursor-pointer">Apple</span>{" "}
        {" > "}
        <span className="text-gray-700">MacBook Pro</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images Section */}
        <div className="w-full lg:w-[45%]">
          {/* Main Image with Zoom */}
          <div
            ref={imageRef}
            className="relative overflow-hidden bg-white rounded-lg border border-gray-200 h-[400px] md:h-[500px] flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={`transition-transform duration-200 object-contain max-h-full max-w-full ${
                isZoomed ? "scale-150" : "scale-100"
              }`}
              src={
                productDetailsData.productImages[currentImg] ||
                "/placeholder.svg"
              }
              alt={productDetailsData.title}
              width={800}
              height={800}
              style={
                isZoomed
                  ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }
                  : undefined
              }
            />

            {/* Image navigation buttons */}
            <button
              onClick={() =>
                setCurrentImg((prev) =>
                  prev === 0
                    ? productDetailsData.productImages.length - 1
                    : prev - 1
                )
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() =>
                setCurrentImg((prev) =>
                  prev === productDetailsData.productImages.length - 1
                    ? 0
                    : prev + 1
                )
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Zoom instruction */}
            <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-full">
              Hover to zoom
            </div>

            {/* Discount badge */}
            {discountPercentage > 0 && (
              <Badge className="absolute top-3 left-3 bg-red-500 text-white font-medium px-2 py-1">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>

          {/* Thumbnails with horizontal scroll */}
          <div className="relative mt-4">
            <div
              ref={thumbnailsContainerRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide py-2 px-1"
            >
              {productDetailsData.productImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImg(index)}
                  className={`flex-shrink-0 cursor-pointer border-2 rounded-md overflow-hidden transition-all ${
                    currentImg === index
                      ? "border-[#f3982d]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ width: "80px", height: "80px" }}
                >
                  <Image
                    className="h-full w-full object-cover"
                    src={image || "/placeholder.svg"}
                    alt={`${productDetailsData.title}-${index}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>

            {/* Scroll buttons for thumbnails */}
            <button
              onClick={() => scrollThumbnails("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1 shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollThumbnails("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1 shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              {productDetailsData.title}
            </h1>

            {/* Product code/MPN */}
            <p className="text-sm text-gray-500 mb-4">
              Product Code:{" "}
              {productDetailsData.keyFeatures[0].replace("MPN: ", "")}
            </p>

            {/* Price section */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl md:text-3xl font-bold text-[#f3982d]">
                ${productDetailsData.discountPrice || productDetailsData.price}
              </span>

              {productDetailsData.discountPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${productDetailsData.price}
                </span>
              )}

              {discountPercentage > 0 && (
                <Badge className="bg-red-100 text-red-600 font-medium">
                  Save $
                  {productDetailsData.price -
                    (productDetailsData.discountPrice ?? 0)}
                </Badge>
              )}
            </div>

            {/* Availability & Shipping */}
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center text-sm">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-green-700 font-medium">In Stock</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">Free shipping</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {productDetailsData.keyFeatures
                  .slice(1)
                  .map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#f3982d] mr-2">•</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md w-fit">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center border-x border-gray-300 py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
                >
                  +
                </button>
              </div>

              <div className="flex flex-1 gap-3">
                <Button className="flex-1 bg-black hover:bg-[#f3982d] text-white transition-colors">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button className="flex-1 bg-[#f3982d] hover:bg-black text-white transition-colors">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 mb-6">
              <Button variant="outline" size="sm" className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Add to Wishlist
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <BarChart2 className="h-4 w-4 mr-2" />
                Compare
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Quick specs */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Quick Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                {productDetailsData.specification.slice(0, 4).map((spec) =>
                  spec.specificationData.slice(0, 1).map((item, idx) => (
                    <div
                      key={`${spec.specificationName}-${idx}`}
                      className="flex"
                    >
                      <span className="text-sm font-medium text-gray-500 min-w-[120px]">
                        {spec.specificationName}:
                      </span>
                      <span className="text-sm text-gray-700">
                        {item.value}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications and Description Tabs */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex border-b border-gray-200 mb-6">
          <button className="px-6 py-3 text-[#f3982d] border-b-2 border-[#f3982d] font-medium">
            Specifications
          </button>
          <button className="px-6 py-3 text-gray-500 hover:text-gray-700 font-medium">
            Description
          </button>
          <button className="px-6 py-3 text-gray-500 hover:text-gray-700 font-medium">
            Reviews
          </button>
        </div>

        <div className="mb-12">
          <ProductSpecification
            specification={productDetailsData.specification}
          />
        </div>

        <div>
          <ProductDescription description={productDetailsData.description} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
