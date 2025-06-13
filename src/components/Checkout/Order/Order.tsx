/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const Order = () => {
  const { register } = useFormContext();
  const cartItemData = useAppSelector((state) => state.cart.items);

//   console.log("cartItemData", cartItemData);

  return (
    <div className="border border-border-color rounded-lg py-5 px-[18px] xl:p-6">
      {/* heading */}
      <h1 className="text-xl font-medium text-[#1A1A1A]">Order Summary</h1>

      {/* ordered items */}
      <section className="space-y-3 mt-5 lg:mt-4">
        {cartItemData?.map((item: any) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-2.5"
          >
            <div className="flex items-center gap-2 ">
              <Image
                width={40}
                height={40}
                src={
                  item?.photo ||
                  "https://res.cloudinary.com/dp4jxt1xr/image/upload/v1745175940/neoshop-category/bpidg7qubdimte5yj93p.jpg"
                }
                alt={item?.name}
              />
              <p className="text-sm">
                {item?.name} <span>x {item?.quantity}</span>
              </p>
            </div>
            <p className="text-sm font-medium">
              ${(item?.price * item?.quantity)?.toFixed(2)}
            </p>
          </div>
        ))}
      </section>

      {/* pricing section */}
      <section className="text-sm mt-3">
        {[
          {
            label: "Subtotal",
            value:
              cartItemData?.reduce(
                (acc: any, item: any) => acc + item.price * item.quantity,
                0
              ) ?? 0,
          },
          { label: "Shipping", value: 0 },
          {
            label: "Total",
            value:
              (cartItemData?.reduce(
                (acc: any, item: any) => acc + item.price * item.quantity,
                0
              ) ?? 0) + 0,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between gap-1 py-3 ${
              idx !== 2 && "border-b border-border-color"
            }`}
          >
            <p className="text-[#4D4D4D]">{item.label}</p>
            {item.label === "Shipping" && item.value === 0 ? (
              <p className="font-medium">Free</p>
            ) : (
              <p className="font-medium">${item.value.toFixed(2)}</p>
            )}
          </div>
        ))}
      </section>

      {/* payment method */}
      <section className="mt-6">
        <h1 className="text-xl font-medium text-[#1A1A1A]">Payment Method</h1>

        <div className="grid grid-cols-1 gap-1 mt-4">
          {paymentMethods?.map((paymentMethod, index) => (
            <label
              key={paymentMethod?.id}
              htmlFor={paymentMethod?.method}
              className="flex items-center gap-2"
            >
              <input
                type="radio"
                id={paymentMethod?.method}
                value={paymentMethod?.method}
                {...register("paymentMethod", { required: true })}
                className="sr-only peer"
                defaultChecked={index === 0}
              />
              <div className="w-4 h-4 rounded-full border border-green-600 peer-checked:bg-green-600 transition-colors duration-200"></div>
              <span className="cursor-pointer text-sm text-[#4D4D4D]">
                {paymentMethod?.method}
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* submit btn */}
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="py-2.5 md:py-2 cursor-pointer rounded-full bg-amber-400 text-white font-semibold w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;

// Dummy Items
// export const items = [
//   {
//     id: 1,
//     quantity: 5,
//     price: 20,
//     product: {
//       title: "Apple Watch",
//     },
//   },
//   {
//     id: 2,
//     quantity: 2,
//     price: 15,
//     product: {
//       title: "Lenovo laptop",
//     },
//   },
//   {
//     id: 3,
//     quantity: 2,
//     price: 70,
//     product: {
//       title: "Airbus Pro",
//     },
//   },
// ];

const paymentMethods = [
  {
    id: 1,
    method: "Cash on Delivery",
  },
  {
    id: 2,
    method: "BKash/Nagad",
  },
  {
    id: 3,
    method: "Paypal",
  },
];
