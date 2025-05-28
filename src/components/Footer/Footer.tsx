import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">OT</span>
              </div>
              <h2 className="text-xl font-bold">One Tech</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your trusted destination for premium laptops and tech accessories.
              Quality products, exceptional service.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-amber-500">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-500">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-500">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-500">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-500">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-amber-500 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-amber-500 text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-amber-500 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-amber-500 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/gaming"
                  className="text-gray-600 hover:text-amber-500 text-sm"
                >
                  Gaming Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/category/business"
                  className="text-gray-600 hover:text-amber-500 text-sm"
                >
                  Business Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/category/ultrabooks"
                  className="text-gray-600 hover:text-amber-500 text-sm"
                >
                  Ultrabooks
                </Link>
              </li>
              <li>
                <Link
                  href="/category/2-in-1"
                  className="text-gray-600 hover:text-amber-500 text-sm"
                >
                  2-in-1 Laptops
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-amber-500 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  123 Tech Street, Silicon Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-amber-500 mr-2" />
                <span className="text-gray-600 text-sm">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-amber-500 mr-2" />
                <span className="text-gray-600 text-sm">
                  support@onetech.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} One Tech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-amber-500 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-amber-500 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/shipping"
                className="text-gray-500 hover:text-amber-500 text-sm"
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
