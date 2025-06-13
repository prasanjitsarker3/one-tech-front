import React from "react";

type CustomInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div className="w-full">
        <label className="block mb-2">{label}</label>
        <input
          ref={ref}
          className="w-full border focus:outline focus:outline-amber-400 px-4 py-2 rounded-md"
          {...rest}
        />
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
