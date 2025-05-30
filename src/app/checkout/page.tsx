"use client";

import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

type cartItem = {
  id: number;
  name: string;
  price: number;
  photo: string;
  quantity: number;
};
const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Calculation Section (col-span-4 on large screens) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-lg shadow h-fit">
          {cartItems.length > 0 && (
            <div
              className={`grid grid-cols-1 sm:grid-cols-1 ${
                cartItems.length === 2
                  ? "lg:grid-cols-2"
                  : cartItems.length >= 3
                  ? "lg:grid-cols-3"
                  : "lg:grid-cols-1"
              } gap-6`}
            >
              {cartItems.map((items: cartItem) => (
                <div
                  key={items.id}
                  className="w-full bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <Image
                    src={items.photo}
                    className="w-full h-48 object-cover"
                    alt={items.name}
                    width={500}
                    height={300}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {items.name}
                    </h2>
                    <p className="text-green-600 font-bold mt-2">
                      ${items.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {items.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Form Section (col-span-7 on large screens) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Checkout Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Postcode</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
