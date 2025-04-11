"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  BarChart2,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMobile } from "../hooks/useMobile";

interface TopProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  brand: string;
  brandLogo: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
  };
  discount?: number;
  isBestSeller?: boolean;
  isTopRated?: boolean;
}

const TopProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMobile = useMobile();

  const topProducts: TopProduct[] = [
    {
      id: 1,
      name: "Apple MacBook Air M2",
      price: 999,
      originalPrice: 1199,
      rating: 4.8,
      reviewCount: 1245,
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
      brand: "Apple",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      specs: {
        processor: "Apple M2 chip",
        ram: "8GB unified memory",
        storage: "256GB SSD",
        display: "13.6-inch Liquid Retina",
      },
      discount: 17,
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Dell XPS 15",
      price: 1499,
      originalPrice: 1699,
      rating: 4.7,
      reviewCount: 856,
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop",
      brand: "Dell",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png",
      specs: {
        processor: "Intel Core i7-12700H",
        ram: "16GB DDR5",
        storage: "512GB SSD",
        display: "15.6-inch 4K UHD+",
      },
      discount: 12,
      isTopRated: true,
    },
    {
      id: 3,
      name: "Lenovo ThinkPad X1 Carbon",
      price: 1299,
      originalPrice: 1499,
      rating: 4.6,
      reviewCount: 723,
      image:
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1000&auto=format&fit=crop",
      brand: "Lenovo",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Lenovo_logo.svg",
      specs: {
        processor: "Intel Core i7-1260P",
        ram: "16GB LPDDR5",
        storage: "512GB SSD",
        display: "14-inch WUXGA IPS",
      },
      discount: 13,
    },
    {
      id: 4,
      name: "HP Spectre x360",
      price: 1399,
      originalPrice: 1599,
      rating: 4.5,
      reviewCount: 542,
      image:
        "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=1000&auto=format&fit=crop",
      brand: "HP",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
      specs: {
        processor: "Intel Core i7-1255U",
        ram: "16GB DDR4",
        storage: "1TB SSD",
        display: "13.5-inch OLED Touch",
      },
      discount: 12,
    },
    {
      id: 5,
      name: "ASUS ROG Zephyrus G14",
      price: 1349,
      originalPrice: 1549,
      rating: 4.7,
      reviewCount: 912,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop",
      brand: "ASUS",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
      specs: {
        processor: "AMD Ryzen 9 6900HS",
        ram: "16GB DDR5",
        storage: "1TB SSD",
        display: "14-inch QHD 120Hz",
      },
      discount: 13,
      isBestSeller: true,
    },
    {
      id: 6,
      name: "Microsoft Surface Laptop 5",
      price: 1299,
      originalPrice: 1399,
      rating: 4.5,
      reviewCount: 487,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
      brand: "Microsoft",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      specs: {
        processor: "Intel Core i7-1255U",
        ram: "16GB LPDDR5X",
        storage: "512GB SSD",
        display: "13.5-inch PixelSense",
      },
      discount: 7,
    },
    {
      id: 7,
      name: "Acer Swift 5",
      price: 999,
      originalPrice: 1199,
      rating: 4.4,
      reviewCount: 356,
      image:
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1000&auto=format&fit=crop",
      brand: "Acer",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg",
      specs: {
        processor: "Intel Core i7-1260P",
        ram: "16GB LPDDR5",
        storage: "512GB SSD",
        display: "14-inch FHD IPS",
      },
      discount: 17,
    },
    {
      id: 8,
      name: "Razer Blade 15",
      price: 1799,
      originalPrice: 1999,
      rating: 4.6,
      reviewCount: 623,
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
      brand: "Razer",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png",
      specs: {
        processor: "Intel Core i7-12800H",
        ram: "16GB DDR5",
        storage: "1TB SSD",
        display: "15.6-inch QHD 240Hz",
      },
      discount: 10,
      isTopRated: true,
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

  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? "text-yellow-400 fill-yellow-400"
                : i === fullStars && hasHalfStar
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  const renderProductCard = (product: TopProduct) => (
    <div
      key={product.id}
      className={`border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white relative ${
        isMobile ? "min-w-[280px] flex-shrink-0 snap-start" : ""
      }`}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Discount badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-red-500 hover:bg-red-500 text-white font-medium">
            {product.discount}% OFF
          </Badge>
        </div>
      )}

      {/* Best seller or top rated badge */}
      {(product.isBestSeller || product.isTopRated) && (
        <div className="absolute top-3 right-3 z-10">
          <Badge
            className={`${
              product.isBestSeller ? "bg-[#f3982d]" : "bg-purple-600"
            } hover:bg-[#f3982d] text-white font-medium`}
          >
            {product.isBestSeller ? "Best Seller" : "Top Rated"}
          </Badge>
        </div>
      )}

      {/* Product image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-700 ${
              hoveredProduct === product.id ? "scale-110" : "scale-100"
            }`}
          />
        </Link>

        {/* Brand logo */}
        <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm p-1 rounded-md">
          <Image
            src={product.brandLogo || "/placeholder.svg"}
            alt={product.brand}
            width={24}
            height={24}
            className="h-6 w-auto object-contain"
          />
        </div>

        {/* Quick action buttons */}
        <div
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 transition-opacity duration-300 ${
            hoveredProduct === product.id ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white hover:bg-[#f3982d] hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white hover:bg-[#f3982d] hover:text-white"
          >
            <BarChart2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product details */}
      <div className="p-4 flex flex-col flex-grow">
        <Link
          href={`/product/${product.id}`}
          className="hover:text-[#f3982d] transition-colors"
        >
          <h3 className="font-medium text-lg mb-1 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mb-2 flex items-center">
          {renderRatingStars(product.rating)}
          <span className="text-xs text-gray-500 ml-2">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mb-3 flex items-center">
          <span className="text-xl font-bold text-[#f3982d]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Key specs */}
        <div className="text-xs text-gray-600 space-y-1 mb-4 flex-grow">
          <p>• {product.specs.processor}</p>
          <p>• {product.specs.ram}</p>
          <p>• {product.specs.storage}</p>
          <p>• {product.specs.display}</p>
        </div>

        {/* Add to cart button */}
        <div className="flex gap-2 mt-auto">
          <Button className="flex-1 bg-black hover:bg-[#f3982d] text-white transition-colors">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Top Selling Laptops</h2>
            <p className="text-gray-600 mt-2">
              Our most popular laptops loved by customers
            </p>
          </div>

          {/* Desktop view all link */}
          <div className="hidden md:flex items-center">
            <Link
              href="/products/laptops"
              className="text-[#f3982d] font-medium hover:underline flex items-center"
            >
              View all laptops
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile scroll buttons */}
          <div className="flex md:hidden gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="rounded-full border-gray-300 hover:bg-[#f3982d] hover:text-white disabled:opacity-50 h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="rounded-full border-gray-300 hover:bg-[#f3982d] hover:text-white disabled:opacity-50 h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile horizontal scroll view */}
        {isMobile ? (
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {topProducts.map(renderProductCard)}
          </div>
        ) : (
          // Desktop grid view
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topProducts.map(renderProductCard)}
          </div>
        )}

        {/* Mobile scroll indicators */}
        {isMobile && (
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: Math.ceil(topProducts.length / 2) }).map(
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
        )}

        {/* Mobile view all link */}
        <div className="mt-6 text-center md:hidden">
          <Link
            href="/products/laptops"
            className="text-[#f3982d] font-medium hover:underline inline-flex items-center"
          >
            View all laptops
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
