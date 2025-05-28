"use client";
import React from "react";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { closeDrawer } from "@/redux/Slice/drawerReducer";
import { removeFromCart } from "@/redux/Slice/cartSlice";
import Image from "next/image";
import { Trash } from "lucide-react";

const Drawer = () => {
  const isDrawerOpen = useAppSelector(
    (state: RootState) => state.drawer.isOpen
  );
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDrawer());
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart({ id: itemId }));
  };
  return (
    <div className="">
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-[100vh] bg-white shadow-lg z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-60 md:w-72 2xl:w-80`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-2">
            <h1 className="text-lg font-semibold">Your Cart</h1>
            <button className=" text-red-600" onClick={handleClose}>
              ✖
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto mt-2">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className=" relative border-b py-2 flex gap-5">
                  <Image
                    src={
                      item.photo ||
                      "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022044.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                    }
                    alt="i"
                    width={100}
                    height={100}
                    className=" h-12 w-12"
                  />
                  <div className=" w-full text-sm">
                    <div className=" flex justify-between items-center">
                      <h2 className="font-medium primaryColor">{item.name}</h2>
                    </div>
                    <div className=" flex justify-between items-center">
                      <h2 className="font-medium ">Qty: {item.quantity}</h2>
                      <p className=" font-medium">TK: {item.price}</p>
                    </div>
                  </div>
                  <button
                    className=" h-5 w-5 rounded-full flex justify-center items-center absolute top-1.5 right-0 bg-red-100 text-red-500  p-0.5 cursor-pointer "
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash size={12} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">
                Your cart is empty.
              </p>
            )}
          </div>

          {/* Checkout Button */}
          {cartItems.length > 0 ? (
            <>
              <Link href={"/checkout"}>
                <button className="bg-amber-400 text-white py-2 px-4 rounded-full w-full">
                  Checkout
                </button>
              </Link>
            </>
          ) : (
            <>
              <button className="bg-amber-400 text-white py-2 px-4 rounded-full w-full">
                Add Some Plants
              </button>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0  z-10" onClick={handleClose}></div>
      )}
    </div>
  );
};

export default Drawer;
