/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import laptop_1 from "@/assets/images/productImages/product_1.png";
import laptop_2 from "@/assets/images/productImages/product_2.png";
import laptop_3 from "@/assets/images/productImages/product_3.png";
import laptop_4 from "@/assets/images/productImages/product_4.png";
import laptop_5 from "@/assets/images/productImages/product_5.png";
import laptop_6 from "@/assets/images/productImages/product_6.png";
import laptop_7 from "@/assets/images/productImages/product_7.png";
import laptop_8 from "@/assets/images/productImages/product_8.png";
import laptop_9 from "@/assets/images/productImages/product_9.jpg";
import laptop_10 from "@/assets/images/productImages/product_10.png";
import laptop_11 from "@/assets/images/productImages/product_11.png";
import laptop_12 from "@/assets/images/productImages/product_12.png";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
const products = [
  {
    id: 1,
    name: "UltraBook Pro X1",
    price: 1299,
    image: laptop_1,
    category: "Ultrabooks",
    specs: "Intel i7, 16GB RAM, 512GB SSD",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 1199,
    image: laptop_2,
    category: "Apple",
    specs: "M2 chip, 8GB RAM, 256GB SSD",
  },
  {
    id: 3,
    name: "Gaming Titan RTX",
    price: 1899,
    image: laptop_3,
    category: "Gaming",
    specs: "RTX 4070, i9, 32GB RAM, 1TB SSD",
  },
  {
    id: 4,
    name: "Business Elite 15",
    price: 1099,
    image: laptop_4,
    category: "Business",
    specs: "Intel i5, 16GB RAM, 512GB SSD",
  },
  {
    id: 5,
    name: "Chromebook Flex",
    price: 449,
    image: laptop_5,
    category: "Chromebooks",
    specs: "Intel Celeron, 4GB RAM, 64GB eMMC",
  },
  {
    id: 6,
    name: "MacBook Pro 16",
    price: 2499,
    image: laptop_6,
    category: "Apple",
    specs: "M2 Pro, 32GB RAM, 1TB SSD",
  },
  {
    id: 7,
    name: "Developer Workstation",
    price: 1799,
    image: laptop_7,
    category: "Workstations",
    specs: "AMD Ryzen 9, 64GB RAM, 2TB SSD",
  },
  {
    id: 8,
    name: "Student Essentials",
    price: 699,
    image: laptop_8,
    category: "Student",
    specs: "Intel i3, 8GB RAM, 256GB SSD",
  },
  {
    id: 9,
    name: "Convertible Touch Pro",
    price: 1299,
    image: laptop_9,
    category: "2-in-1",
    specs: "Intel i7, 16GB RAM, 512GB SSD, Touch",
  },
  {
    id: 10,
    name: "Ultralight Travel",
    price: 899,
    image: laptop_10,
    category: "Ultrabooks",
    specs: "Intel i5, 8GB RAM, 256GB SSD",
  },
  {
    id: 11,
    name: "Creator Studio Pro",
    price: 2199,
    image: laptop_11,
    category: "Creator",
    specs: "Intel i9, 32GB RAM, 1TB SSD, RTX 3080",
  },
  {
    id: 12,
    name: "Budget Performer",
    price: 549,
    image: laptop_12,
    category: "Budget",
    specs: "AMD Ryzen 5, 8GB RAM, 256GB SSD",
  },
];

export default function FeatureProduct() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const updateMaxScroll = () => {
      if (scrollContainerRef.current) {
        const newMaxScroll =
          scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth;
        setMaxScroll(newMaxScroll);
      }
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const position = scrollContainerRef.current.scrollLeft;
      setScrollPosition(position);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);

      document.body.style.cursor = "grabbing";
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = "grabbing";
        scrollContainerRef.current.style.userSelect = "none";
      }
    }
  };

  const handleMouseLeaveOrUp = () => {
    if (isDragging) {
      setIsDragging(false);

      document.body.style.cursor = "default";
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = "grab";
        scrollContainerRef.current.style.userSelect = "auto";
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    e.preventDefault();
    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleView = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="w-full bg-white py-8">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="relative">
          <h2 className="text-xl font-medium primaryColor border-b-amber-500 mb-6">
            New Arrived
          </h2>

          <div>
            <div
              className={cn(
                "absolute left-0 top-[3.7rem] rounded-l-md bottom-4 w-6 md:w-12 bg-gradient-to-r from-[#f5f2ee] to-transparent z-10 pointer-events-none"
              )}
            />

            <div
              className={cn(
                "absolute right-0 top-[3.7rem] rounded-r-md bottom-4 w-6 md:w-12 bg-gradient-to-l from-[#f5f2ee] to-transparent z-10 pointer-events-none"
              )}
            />
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x cursor-grab select-none"
            style={{ scrollBehavior: "smooth" }}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[220px] flex-shrink-0 snap-start transition-transform duration-300 hover:scale-[1.02] relative"
              >
                <div
                  onClick={() => handleView(product.id)}
                  className="relative pt-[70px]"
                >
                  <div className="absolute top-0 left-6 right-6 h-[140px] z-10">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain rounded-t-2xl rounded-b-3xl"
                    />
                  </div>
                  <div className="bg-[#1e1e1e] rounded-lg overflow-hidden text-white p-3 pt-[70px]">
                    <div className="text-xs text-gray-400 mb-1">
                      {product.category}
                    </div>
                    <h3 className="font-medium text-sm mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
