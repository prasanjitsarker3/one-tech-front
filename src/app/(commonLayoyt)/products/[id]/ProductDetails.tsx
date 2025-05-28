/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ChevronRight,
  // Cpu,
  // MemoryStickIcon as Memory,
  // HardDrive,
  // Monitor,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { laptopProducts } from "../data";
import { LaptopSpecs } from "./LaptopSpecs";

export function ProductDetail({ productId }: { productId: string }) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState<any>(null);

  useEffect(() => {
    if (productId) {
      const foundProduct = laptopProducts.find(
        (data) => data.id === Number(productId)
      );
      setProductData(foundProduct || null);
    }
  }, [productId]);

  useEffect(() => {
    if (!mainApi || !thumbsApi) return;

    const handleMainSelect = () => {
      const index = mainApi.selectedScrollSnap();
      setCurrentIndex(index);
      thumbsApi.scrollTo(index);
    };

    mainApi.on("select", handleMainSelect);
    return () => {
      mainApi.off("select", handleMainSelect);
    };
  }, [mainApi, thumbsApi]);

  // Handle thumbnail click
  const handleThumbClick = (index: number) => {
    if (mainApi) {
      mainApi.scrollTo(index);
    }
  };

  // Handle quantity changes
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!productData) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-wrap items-center text-sm text-gray-500 ">
        <ChevronRight className="h-4 w-4 mx-2" />
        <a
          href={`/category/${productData.category.toLowerCase()}`}
          className="hover:text-amber-500"
        >
          {productData.category}
        </a>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-700">{productData.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Left side - Product Images */}
        <div className="space-y-4 h-[40vh] md:h-[80vh] ">
          <Carousel
            setApi={setMainApi}
            className="w-full rounded-lg overflow-hidden bg-gray-100"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {productData.images.map((image: any, index: number) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[30vh] md:h-[80vh]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${productData.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-amber-400 text-white  border-none" />
            <CarouselNext className="right-4 bg-amber-400 text-white  border-none" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-10">
              {currentIndex + 1} / {productData.images.length}
            </div>
          </Carousel>

          {/* Mobile device show */}
          <div className="w-full block md:hidden">
            <Carousel
              setApi={setThumbsApi}
              className="w-full"
              opts={{
                containScroll: "keepSnaps",
                dragFree: true,
              }}
            >
              <CarouselContent className="-ml-2">
                {productData.images.map((image: string, index: number) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 basis-1/4 md:basis-1/5 lg:basis-1/6"
                  >
                    <div
                      className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                        currentIndex === index
                          ? "border-amber-500 opacity-100"
                          : "border-transparent hover:border-gray-300 opacity-70 hover:opacity-100"
                      }`}
                      onClick={() => handleThumbClick(index)}
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Right side - Product Information */}
        <div className="flex flex-col h-[40vh] md:h-[80vh]">
          <div className="flex-grow">
            {productData.isNew && (
              <Badge className="bg-amber-500 text-white mb-2">
                New Arrival
              </Badge>
            )}

            <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(productData.rating)
                        ? "fill-amber-500 text-amber-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {productData.rating} ({productData.reviews} reviews)
              </span>
            </div>

            <div className="mb-4">
              {productData.discountPrice < productData.price ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">
                    ${productData.discountPrice.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through">
                    ${productData.price.toFixed(2)}
                  </span>
                  <Badge className="bg-red-500 text-white ml-2">
                    {Math.round(
                      (1 - productData.discountPrice / productData.price) * 100
                    )}
                    % OFF
                  </Badge>
                </div>
              ) : (
                <span className="text-2xl font-bold">
                  ${productData.price.toFixed(2)}
                </span>
              )}
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                {productData.specs.processor} processor with{" "}
                {productData.specs.ram} RAM and {productData.specs.storage}{" "}
                storage. Features a {productData.specs.display} and{" "}
                {productData.specs.graphics} graphics.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <Cpu className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Processor</h3>
                  <p className="text-gray-600 text-sm">
                    {productData.specs.processor}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Memory className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Memory</h3>
                  <p className="text-gray-600 text-sm">
                    {productData.specs.ram}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <HardDrive className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Storage</h3>
                  <p className="text-gray-600 text-sm">
                    {productData.specs.storage}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Monitor className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Display</h3>
                  <p className="text-gray-600 text-sm">
                    {productData.specs.display}
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div className="mb-6">
              <h3 className="font-medium mb-2">Availability:</h3>
              <p
                className={`font-medium ${
                  productData.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {productData.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div> */}

            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-medium">Quantity:</h3>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 border-r hover:bg-gray-100"
                  disabled={!productData.inStock}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 border-l hover:bg-gray-100"
                  disabled={!productData.inStock}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Button
                size="lg"
                className="w-fit px-6 rounded-full bg-amber-500 text-white hover:bg-amber-600"
                disabled={!productData.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:bg-amber-500 hover:text-white hover:border-none"
              >
                <Heart className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:bg-amber-500 hover:text-white hover:border-none"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* <div className="border-t pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Brand:</span>
                <Badge variant="outline" className="font-normal">
                  {productData.brand}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <span>Category:</span>
                <Badge variant="outline" className="font-normal">
                  {productData.category}
                </Badge>
              </div>
            </div> */}
          </div>

          {/* Desktop thumbnails */}
          <div className="w-full hidden md:block mt-6">
            <Carousel
              setApi={setThumbsApi}
              className="w-full"
              opts={{
                containScroll: "keepSnaps",
                dragFree: true,
              }}
            >
              <CarouselContent className="-ml-2">
                {productData.images.map((image: string, index: number) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 basis-1/4 md:basis-1/5 lg:basis-1/6"
                  >
                    <div
                      className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                        currentIndex === index
                          ? "border-amber-500 opacity-100"
                          : "border-transparent hover:border-gray-300 opacity-70 hover:opacity-100"
                      }`}
                      onClick={() => handleThumbClick(index)}
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <LaptopSpecs specs={productData.specs} />
    </div>
  );
}
