"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, Check } from "lucide-react";
import { Slider } from "../ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ProductShowPage = () => {
  // JSON data for 16 laptop products
  const products = [
    {
      id: 1,
      name: "HP Spectre x360",
      price: 1299,
      display: "13.5-inch 4K OLED",
      generation: "11th Gen Intel Core i7",
      category: "Ultrabook",
      image: "/images/hp-spectre.jpg",
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch",
      price: 2399,
      display: "16-inch Retina Display",
      generation: "Apple M1 Pro",
      category: "Professional",
      image: "/images/macbook-pro.jpg",
    },
    {
      id: 3,
      name: "Dell XPS 13",
      price: 1199,
      display: "13.4-inch FHD+",
      generation: "11th Gen Intel Core i5",
      category: "Ultrabook",
      image: "/images/dell-xps.jpg",
    },
    {
      id: 4,
      name: "Lenovo ThinkPad X1 Carbon",
      price: 1499,
      display: "14-inch 4K UHD",
      generation: "11th Gen Intel Core i7",
      category: "Business",
      image: "/images/thinkpad-x1.jpg",
    },
    {
      id: 5,
      name: "Asus ROG Zephyrus G14",
      price: 1449,
      display: "14-inch QHD",
      generation: "AMD Ryzen 9 5900HS",
      category: "Gaming",
      image: "/images/asus-rog.jpg",
    },
    {
      id: 6,
      name: "Acer Swift 3",
      price: 699,
      display: "14-inch FHD",
      generation: "AMD Ryzen 5 5500U",
      category: "Budget",
      image: "/images/acer-swift.jpg",
    },
    {
      id: 7,
      name: "Microsoft Surface Laptop 4",
      price: 1299,
      display: "13.5-inch PixelSense",
      generation: "AMD Ryzen 7 4980U",
      category: "Ultrabook",
      image: "/images/surface-laptop.jpg",
    },
    {
      id: 8,
      name: "Razer Blade 15",
      price: 2499,
      display: "15.6-inch QHD",
      generation: "11th Gen Intel Core i7",
      category: "Gaming",
      image: "/images/razer-blade.jpg",
    },
    {
      id: 9,
      name: "MSI GS66 Stealth",
      price: 1999,
      display: "15.6-inch FHD",
      generation: "11th Gen Intel Core i9",
      category: "Gaming",
      image: "/images/msi-gs66.jpg",
    },
    {
      id: 10,
      name: "Samsung Galaxy Book Pro",
      price: 1099,
      display: "15.6-inch AMOLED",
      generation: "11th Gen Intel Core i7",
      category: "Ultrabook",
      image: "/images/samsung-galaxy.jpg",
    },
    {
      id: 11,
      name: "LG Gram 17",
      price: 1699,
      display: "17-inch WQXGA",
      generation: "11th Gen Intel Core i7",
      category: "Ultrabook",
      image: "/images/lg-gram.jpg",
    },
    {
      id: 12,
      name: "Toshiba Portégé X30",
      price: 1899,
      display: "13.3-inch FHD",
      generation: "11th Gen Intel Core i7",
      category: "Business",
      image: "/images/toshiba-portege.jpg",
    },
    {
      id: 13,
      name: "HP Envy 13",
      price: 999,
      display: "13.3-inch FHD",
      generation: "11th Gen Intel Core i5",
      category: "Budget",
      image: "/images/hp-envy.jpg",
    },
    {
      id: 14,
      name: "MacBook Air M2",
      price: 1199,
      display: "13.6-inch Retina",
      generation: "Apple M2",
      category: "Ultrabook",
      image: "/images/macbook-air.jpg",
    },
    {
      id: 15,
      name: "Dell Alienware m15",
      price: 2199,
      display: "15.6-inch QHD",
      generation: "11th Gen Intel Core i9",
      category: "Gaming",
      image: "/images/dell-alienware.jpg",
    },
    {
      id: 16,
      name: "Lenovo Yoga 9i",
      price: 1599,
      display: "14-inch 4K UHD",
      generation: "11th Gen Intel Core i7",
      category: "2-in-1",
      image: "/images/lenovo-yoga.jpg",
    },
  ];

  // Extract unique categories
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  // State for filters
  const [priceRange, setPriceRange] = useState<number[]>([0, 2500]);
  const [sortOrder, setSortOrder] = useState<string>("default");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categoryPopoverOpen, setCategoryPopoverOpen] = useState(false);

  // Handle price range change
  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
  };

  // Handle sort order change
  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
  };

  // Handle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((current) => {
      if (current.includes(category)) {
        return current.filter((c) => c !== category);
      } else {
        return [...current, category];
      }
    });
  };

  // Apply filters
  useEffect(() => {
    let result = products;

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.generation.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    if (sortOrder === "price-low-high") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high-low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [priceRange, sortOrder, selectedCategories, searchQuery]);

  return (
    <div className="w-full container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Laptop Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {/* Price Range Filter */}
        <div className="md:col-span-3 p-4 border rounded-lg">
          <div className="space-y-2">
            <h3 className="font-medium text-lg">Price Range</h3>
            <Slider
              defaultValue={[0, 2500]}
              max={2500}
              step={100}
              value={priceRange}
              onValueChange={handlePriceRangeChange}
              className="my-4"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="md:col-span-3 p-4 border rounded-lg flex justify-center items-center">
          {/* <h3 className="font-medium text-lg mb-2">Category</h3> */}
          <Popover
            open={categoryPopoverOpen}
            onOpenChange={setCategoryPopoverOpen}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between"
                role="combobox"
              >
                {selectedCategories.length > 0
                  ? `${selectedCategories.length} selected`
                  : "Select categories"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command>
                <CommandInput placeholder="Search categories..." />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((category) => (
                      <CommandItem
                        key={category}
                        value={category}
                        onSelect={() => {
                          toggleCategory(category);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedCategories.includes(category)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {category}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {/* Display selected categories as badges */}
          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedCategories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => toggleCategory(category)}
                >
                  {category} ×
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="md:col-span-3 p-4 border rounded-lg space-y-4 flex justify-center items-center">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        {/* Search and Sort */}
        <div className="md:col-span-3 p-4 border rounded-lg space-y-4 flex items-center">
          {/* Search input */}

          {/* Sort dropdown */}
          <Select value={sortOrder} onValueChange={handleSortOrderChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-100 rounded-lg p-4 hover:shadow transition-all duration-300 ease-in-out"
          >
            <Image
              src={
                "https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
              }
              alt={product.name}
              width={400}
              height={350}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-1">Price: ${product.price}</p>
            <p className="text-gray-600 mb-1">Display: {product.display}</p>
            <p className="text-gray-600 mb-1">
              Generation: {product.generation}
            </p>
            <Badge className="mt-2">{product.category}</Badge>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No products match your filters.</p>
        </div>
      )}
    </div>
  );
};

export default ProductShowPage;
