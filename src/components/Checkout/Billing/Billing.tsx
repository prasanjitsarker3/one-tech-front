"use client";
import CustomInput from "@/components/ui/custom-input";
import { useFormContext } from "react-hook-form";

const Billing = () => {
  const { register } = useFormContext();

  return (
    <div>
      {/* Heading */}
      <h2 className="text-xl font-medium text-[#1A1A1A] pb-6">
        Billing Information
      </h2>

      {/* Inputs */}
      <div className="grid grid-cols-1 gap-4 text-sm">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomInput
            label="First Name"
            placeholder="First Name"
            required
            {...register("firstName")}
          />
          <CustomInput
            label="Last Name"
            placeholder="Last Name"
            required
            {...register("lastName")}
          />
        </div>

        {/* Street Address */}
        <CustomInput
          label="Street Address"
          placeholder="Street Address"
          required
          {...register("street")}
        />

        {/* City + Region + ZipCode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomInput
            label="City"
            placeholder="City"
            required
            {...register("city")}
          />
          <CustomInput
            label="Region"
            placeholder="Region"
            required
            {...register("region")}
          />
          <CustomInput
            label="Zip Code"
            type="number"
            placeholder="Zip Code"
            {...register("zipCode")}
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomInput
            label="Email"
            type="email"
            required
            placeholder="Email"
            {...register("email")}
          />
          <CustomInput
            label="Phone"
            type="number"
            required
            placeholder="(123) 456-7890"
            {...register("phoneNumber")}
          />
        </div>
      </div>

      {/* custom hr line */}
      <div className="md:col-span-3 pt-4 pb-6">
        <hr
          className="mt-4 mb-2 lg:mb-5"
          style={{
            background: "#E6E6E6",
            height: "1px",
            width: "100%",
            border: "none",
          }}
        />
      </div>

      {/* additional info */}
      <div className="md:col-span-3">
        <h1 className="block mb-4 lg:mb-5 text-xl font-medium text-[#1A1A1A]">
          Additional Info
        </h1>
        <label className="block mb-3.5">Order Notes (Optional)</label>
        <textarea
          {...register("orderNotes")}
          rows={3}
          className="w-full border border-[#E6E6E6] focus:outline focus:outline-amber-400 px-4 py-[10px] rounded-md"
          placeholder="Notes about your order, e.g. special notes for delivery"
        ></textarea>
      </div>
    </div>
  );
};

export default Billing;
