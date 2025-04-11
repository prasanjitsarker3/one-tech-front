"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LaptopProduct {
  id: number;
  name: string;
  price: number;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
  };
  image: string;
  brand: string;
  isNew: boolean;
  isHot?: boolean;
}

const NewArrivals = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newProducts: LaptopProduct[] = [
    {
      id: 1,
      name: "MacBook Pro M3 Pro",
      price: 1999,
      specs: {
        processor: "Apple M3 Pro",
        ram: "16GB",
        storage: "512GB SSD",
        display: "14.2-inch Liquid Retina XDR",
      },
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
      brand: "Apple",
      isNew: true,
      isHot: true,
    },
    {
      id: 2,
      name: "Dell XPS 13 Plus",
      price: 1499,
      specs: {
        processor: "Intel Core i7-13700H",
        ram: "16GB",
        storage: "1TB SSD",
        display: "13.4-inch 4K UHD+",
      },
      image:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000&auto=format&fit=crop",
      brand: "Dell",
      isNew: true,
    },
    {
      id: 3,
      name: "Asus ROG Zephyrus G16",
      price: 2299,
      specs: {
        processor: "Intel Core i9-14900H",
        ram: "32GB",
        storage: "2TB SSD",
        display: "16-inch QHD 240Hz",
      },
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop",
      brand: "Asus",
      isNew: true,
      isHot: true,
    },
    {
      id: 4,
      name: "Lenovo ThinkPad X1 Carbon Gen 11",
      price: 1799,
      specs: {
        processor: "Intel Core i7-1370P",
        ram: "16GB",
        storage: "1TB SSD",
        display: "14-inch WUXGA",
      },
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop",
      brand: "Lenovo",
      isNew: true,
    },
    {
      id: 5,
      name: "HP Spectre x360 14",
      price: 1649,
      specs: {
        processor: "Intel Core i7-13700H",
        ram: "16GB",
        storage: "1TB SSD",
        display: "14-inch 3K2K OLED",
      },
      image:
        "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=1000&auto=format&fit=crop",
      brand: "HP",
      isNew: true,
    },
    {
      id: 6,
      name: "Razer Blade 16",
      price: 2999,
      specs: {
        processor: "Intel Core i9-14900HX",
        ram: "32GB",
        storage: "2TB SSD",
        display: "16-inch UHD+ 240Hz",
      },
      image:
        "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1000&auto=format&fit=crop",
      brand: "Razer",
      isNew: true,
      isHot: true,
    },
    {
      id: 7,
      name: "Microsoft Surface Laptop Studio 2",
      price: 2399,
      specs: {
        processor: "Intel Core i7-13700H",
        ram: "32GB",
        storage: "1TB SSD",
        display: "14.4-inch PixelSense Flow",
      },
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
      brand: "Microsoft",
      isNew: true,
    },
    {
      id: 8,
      name: "Acer Swift Edge 16",
      price: 1299,
      specs: {
        processor: "AMD Ryzen 7 7840U",
        ram: "16GB",
        storage: "1TB SSD",
        display: "16-inch 4K OLED",
      },
      image:
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1000&auto=format&fit=crop",
      brand: "Acer",
      isNew: true,
    },
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      // Initial check
      checkScrollButtons();

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <p className="text-gray-600 mt-2">
              Check out our latest and hottest laptop releases
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="rounded-full border-gray-300 hover:bg-[#f3982d] hover:text-white disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="rounded-full border-gray-300 hover:bg-[#f3982d] hover:text-white disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] lg:min-w-[280px] flex-shrink-0 snap-start"
            >
              <div className="border border-gray-200 rounded-xl p-2 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-[#f3982d] hover:bg-[#f3982d] text-black font-medium">
                        New
                      </Badge>
                    )}
                    {product.isHot && (
                      <Badge className="bg-red-500 hover:bg-red-500 text-white font-medium">
                        Hot
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="outline"
                      className="bg-white/80 backdrop-blur-sm border-0"
                    >
                      {product.brand}
                    </Badge>
                  </div>
                </div>

                <div className="p-0 flex flex-col flex-grow ">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#f3982d] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-[#f3982d]">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicators */}
        <div className="flex justify-center gap-1 mt-6">
          {Array.from({ length: Math.ceil(newProducts.length / 4) }).map(
            (_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === 0 ? "w-6 bg-[#f3982d]" : "w-3 bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
