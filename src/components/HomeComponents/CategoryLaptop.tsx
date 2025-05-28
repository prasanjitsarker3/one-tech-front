"use client";

import {
  Laptop,
  Gamepad2,
  Apple,
  Briefcase,
  GraduationCap,
  Tablet,
  Feather,
  Palette,
  DollarSign,
  Cpu,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const categories = [
  {
    id: 1,
    name: "Ultrabooks",
    icon: Laptop,
  },
  {
    id: 2,
    name: "Apple",
    icon: Apple,
  },
  {
    id: 3,
    name: "Gaming",
    icon: Gamepad2,
  },
  {
    id: 4,
    name: "Business",
    icon: Briefcase,
  },
  {
    id: 7,
    name: "Student",
    icon: GraduationCap,
  },
  {
    id: 8,
    name: "2-in-1",
    icon: Tablet,
  },
  {
    id: 9,
    name: "Ultralight",
    icon: Feather,
  },
  {
    id: 10,
    name: "Creator",
    icon: Palette,
  },
  {
    id: 11,
    name: "Budget",
    icon: DollarSign,
  },
  {
    id: 12,
    name: "Processors",
    icon: Cpu,
  },
];

export default function CategoryNavigation() {
  const handleCategoryClick = (categoryId: number) => {
    console.log(`Category ${categoryId} clicked`);
  };

  return (
    <div className="w-full bg-white py-6">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="relative">
          <h2 className="text-xl font-medium primaryColor mb-6">Categories</h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {categories.map((category) => (
                <CarouselItem
                  key={category.id}
                  className="pl-4 basis-1/4 md:basis-1/6 lg:basis-1/8"
                >
                  <div
                    className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg cursor-pointer transition-all duration-300 "
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-amber-50 rounded-full mb-3">
                      <category.icon className="h-6 w-6  primaryColor" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 text-center">
                      {category.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
