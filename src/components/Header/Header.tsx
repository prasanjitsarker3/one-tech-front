"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Search, User, Menu, X, ShoppingCart } from "lucide-react";
import { toggleDrawer } from "@/redux/Slice/drawerReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Header = () => {
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const cartItem = useAppSelector(state=>state.cart.items)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Category", href: "/category" },
    { name: "Product", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // const cartCount = 3;
  const handleToggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <header
      className={`py-4 fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${atTop ? "bg-gray-50" : "bg-gray-50 backdrop-blur-sm"}`}
    >
      <div className=" max-w-6xl mx-auto px-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center h-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/white bg letter logo.png"
              alt="Mina Curtains & Furnishings"
              width={200}
              height={60}
              className=""
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-[#5d4037]" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm md:text-base font-medium transition-colors hover:text-[#FF7200] ${
                pathname === link.href
                  ? "primaryColor after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:bg-[#FF7200]"
                  : "text-[#5d4037]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className=" hidden md:block">
          <div className="flex items-center space-x-4 ">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="relative flex items-center justify-center h-8 w-8 text-[#5d4037] hover:text-[#8b5e3c] transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <div
              onClick={handleToggle}
              className="relative cursor-pointer flex items-center justify-center h-8 w-8 text-[#5d4037] hover:text-[#8b5e3c] transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItem.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItem.length}
                </span>
              )}
            </div>

            {/* Account */}
            <div className="flex items-center justify-center h-8 w-8 text-[#5d4037] hover:text-[#8b5e3c] transition-colors">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#f5efe9] border-b border-[#e5d9cf] p-4 shadow-md transition-all">
          <div className="container mx-auto">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-10 pr-4 bg-white border border-[#e5d9cf] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8b5e3c] focus:border-[#8b5e3c]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5d4037] h-5 w-5" />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5d4037] hover:text-[#8b5e3c]"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )} */}
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-0 h-[100vh] bg-[#f5efe9] shadow-lg z-40 w-60 left-0 md:hidden">
          <div className="  w-full p-3 ">
            <div className=" flex justify-between items-center p-1 primaryColor">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/logo.png"
                  alt="Mina Curtains & Furnishings"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <div className="">
                  <h1 className="text-[#5d4037] font-serif text-sm font-semibold leading-none">
                    MINA CURTAINS
                  </h1>
                  <p className="text-[#5d4037] text-xs tracking-wider">
                    STYLE YOUR SPACE
                  </p>
                </div>
              </Link>
              <div
                onClick={() => setMobileMenuOpen(false)}
                className=" bg-red-500 text-white cursor-pointer"
              >
                <X />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-3 space-y-1">
            <nav className="px-3">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`block py-2 text-base font-medium transition-colors hover:text-[#8b5e3c] ${
                        pathname === link.href
                          ? "text-[#8b5e3c]"
                          : "text-[#5d4037]"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
