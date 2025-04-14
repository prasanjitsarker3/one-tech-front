"use client"
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUser, FaShoppingCart, FaHeart, FaCog, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 focus:outline-none"
            >
                <div className="w-8 h-8 rounded-full bg-[#f3982d] flex items-center justify-center text-white">
                    <FaUser className="text-sm" />
                </div>
                {/* <span className="hidden md:inline text-gray-700">John Doe</span> */}
                <FaChevronDown className={`hidden md:inline text-gray-500 text-xs transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    {/* User Info */}
                    <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-800">John Doe</p>
                        <p className="text-xs text-gray-500">john@example.com</p>
                    </div>

                    {/* Dashboard Links */}
                    <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaUser className="mr-3 text-gray-400" />
                        My Profile
                    </Link>

                    <Link
                        href="/dashboard/orders"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaShoppingCart className="mr-3 text-gray-400" />
                        My Orders
                    </Link>

                    <Link
                        href="/dashboard/wishlist"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaHeart className="mr-3 text-gray-400" />
                        Wishlist
                    </Link>

                    <Link
                        href="/dashboard/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaCog className="mr-3 text-gray-400" />
                        Account Settings
                    </Link>

                    {/* Logout */}
                    <button
                        className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <FaSignOutAlt className="mr-3 text-gray-400" />
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;