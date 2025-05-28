"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const bannerData = [
    {
      id: 1,
      title: "High-Performance Laptops",
      subtitle: "Power and speed for every task",
      imageUrl:
        "https://images.unsplash.com/photo-1642953796133-65b1ca9c1bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      ctaText: "Shop Now",
    },
    {
      id: 2,
      title: "Gaming Laptops Collection",
      subtitle: "Dominate the game with top-tier specs",
      imageUrl:
        "https://images.unsplash.com/photo-1583273501748-4fea50c1b4c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      ctaText: "Explore",
    },
    {
      id: 3,
      title: "Business-Class Devices",
      subtitle: "Reliable performance for professionals",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664194583917-e2ca85efc15e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      ctaText: "View Collection",
    },
    {
      id: 4,
      title: "Ultra-Lightweight Laptops",
      subtitle: "Perfect for on-the-go productivity",
      imageUrl:
        "https://images.unsplash.com/photo-1582993960106-20fb1755f556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
      ctaText: "Discover",
    },
    {
      id: 5,
      title: "Back to School Deals",
      subtitle: "Save big on student essentials",
      imageUrl:
        "https://images.unsplash.com/photo-1694444714389-7f641074dfab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
      ctaText: "Shop Sale",
    },
  ];

  return (
    <div className="bg-white pt-[5rem]">
      <div className="w-full h-[50vh] md:h-[84vh] overflow-hidden max-w-6xl mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-[50vh] md:h-[84vh]">
            {bannerData.map((item) => (
              <CarouselItem key={item.id} className="h-full pl-0">
                <div className="relative w-full h-full overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                  {/* Image with overlay */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6 z-10">
                    <div className="max-w-2xl space-y-2.5 md:space-y-4 px-4">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        {item.title}
                      </h2>
                      <p className="text-lg md:text-xl">{item.subtitle}</p>
                      <Link href={"/product"}>
                        <Button
                          variant="outline"
                          className="text-[#f5efe9] border-[#f5efe9] cursor-pointer rounded-full hover:text-primary mt-6 px-8 py-4 text-lg"
                        >
                          {item.ctaText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 hidden md:flex text-white border-white bg-black/30 hover:bg-black/50 hover:text-white" />
          <CarouselNext className="right-4 hidden md:flex text-white border-white bg-black/30 hover:bg-black/50 hover:text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
