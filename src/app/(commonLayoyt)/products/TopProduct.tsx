"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { laptopProducts } from "./data";

export default function SimilarLaptopProducts() {
  const [productsState, setProductsState] = useState(
    laptopProducts.map((laptop) => ({
      ...laptop,
      currentImageIndex: 0,
    }))
  );

  const cycleProductImage = (productId: number) => {
    setProductsState((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const nextIndex =
            (product.currentImageIndex + 1) % product.images.length;
          return { ...product, currentImageIndex: nextIndex };
        }
        return product;
      })
    );
  };

  return (
    <section className=" bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold primaryColor">
              Top Laptops
            </h2>
            <p className="text-gray-600 mt-1">
              You might also like these high-performance laptops
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-5">
            {productsState.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
              >
                <div className="h-full border border-amber-100 p-1 rounded-md">
                  <div className="rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 ">
                    <div className="relative aspect-[4/3] overflow-hidden group">
                      <Image
                        src={
                          product.images[product.currentImageIndex] ||
                          "/placeholder.svg"
                        }
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 p-2 rounded-2xl"
                      />

                      {/* Image navigation dots */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                        {product.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === product.currentImageIndex
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setProductsState((prevProducts) =>
                                prevProducts.map((p) =>
                                  p.id === product.id
                                    ? { ...p, currentImageIndex: index }
                                    : p
                                )
                              );
                            }}
                          />
                        ))}
                      </div>

                      {/* Quick actions */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="rounded-full bg-white/80 hover:bg-white shadow-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            cycleProductImage(product.id);
                          }}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* New badge */}
                      {product.isNew && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-amber-400 text-white hover:bg-amber-500">
                            New
                          </Badge>
                        </div>
                      )}

                      {/* Out of Stock Overlay */}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
                          <span className="text-white font-medium px-3 py-1 bg-black bg-opacity-60 rounded">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="px-4 py-1 flex-grow flex flex-col">
                      <div className="mb-1">
                        <Badge
                          variant="outline"
                          className="text-xs font-normal text-gray-600"
                        >
                          {product.category}
                        </Badge>
                      </div>

                      <div className="flex justify-between items-center mt-1">
                        <h3 className="text-sm font-medium text-gray-700 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-900">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-auto px-2 pt-2">
                        <button className="border border-amber-100 text-xs text-amber-400 hover:bg-amber-400 hover:text-white w-full py-1 rounded-full flex justify-center items-center gap-2 transition-all duration-300">
                          Order Now <ShoppingBag size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="relative inset-auto rounded-full bg-amber-400 text-white border-none" />
            <CarouselNext className="relative inset-auto rounded-full bg-amber-400 text-white border-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
