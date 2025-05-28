import { useAppSelector } from "@/redux/hooks";
import { toggleDrawer } from "@/redux/Slice/drawerReducer";
import { RootState } from "@/redux/store";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";

const ShoppingBagCard = () => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleToggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <div
      className=" bg-amber-400 flex flex-col justify-center items-center p-2 md:p-3 2xl:p-6 text-white fixed top-1/2 right-0 transform -translate-y-1/2 rounded-l-xl z-10 cursor-pointer"
      onClick={handleToggle}
    >
      <FiShoppingBag size={24} />
      <h1>Your Bag</h1>
      <h1>{cartItems.length || 0}</h1>
    </div>
  );
};

export default ShoppingBagCard;
