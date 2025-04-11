"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  LogOut,
  Package,
  Settings,
  X,
} from "lucide-react";
import MobileMenu from "./MobileMenu/MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(3);

  const allMenus = [
    {
      id: 1,
      title: "Desktop",
      subMenus: [
        {
          id: 1,
          title: "Start PC",
          slag: "/",
        },
        {
          id: 2,
          title: "Gaming PC",
          slag: "/",
        },
        {
          id: 3,
          title: "Barnd PC",
          slag: "/",
        },
      ],
    },
    {
      id: 2,
      title: "Laptop",
      subMenus: [
        {
          id: 1,
          title: "Asus",
          slag: "/",
        },
        {
          id: 2,
          title: "Dell",
          slag: "/",
        },
        {
          id: 3,
          title: "HP",
          slag: "/",
        },
        {
          id: 4,
          title: "Lenavo",
          slag: "/",
        },
      ],
    },
    {
      id: 3,
      title: "Computer",
      subMenus: [
        {
          id: 1,
          title: "Processor",
          slag: "/",
        },
        {
          id: 2,
          title: "Motherboard",
          slag: "/",
        },
        {
          id: 3,
          title: "Graphics Card",
          slag: "/",
        },
        {
          id: 4,
          title: "SSD",
          slag: "/",
        },
      ],
    },
  ];

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setAtTop(currentScrollPos < 10);
      const isScrollingDown = currentScrollPos > prevScrollPos;
      setVisible(!isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div
      className={`py-3 fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        atTop
          ? "bg-white border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 gap-4 flex justify-between items-center">
        <div>
          <Link href="/">
            <h2 className="font-bold text-4xl">One Tech</h2>
          </Link>
        </div>

        <div className="hidden md:block">
          <NavLinks allMenus={allMenus} />
        </div>

        <div className="flex items-center justify-center gap-3">
          {/* Enhanced Search Input */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="w-full md:w-[200px] lg:w-[300px] pl-9 pr-8 h-9 focus-visible:ring-[#f3982d]"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <button type="submit" className="sr-only">
              Search
            </button>
          </form>

          {/* Wishlist */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex relative rounded-full h-9 w-9 cursor-pointer"
          >
            <Heart className="h-5 w-5" />
          </Button>

          {/* Cart with Dropdown */}
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full h-9 w-9 cursor-pointer "
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#f3982d] text-black text-xs font-bold rounded-full">
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 cursor-pointer"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Package className="mr-2 h-4 w-4" />
                <span>Orders</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                <span>Wishlist</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <MobileMenu links={allMenus} />
      </div>
    </div>
  );
};

export default Header;
