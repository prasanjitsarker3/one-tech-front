import type React from "react";
import Link from "next/link";
import { CategoryCardType } from "./CategoryCardType";

const CategoryCard: React.FC<CategoryCardType> = ({ categoryData }) => {
  return (
    <Link
      className="group flex justify-center items-center p-4 rounded-2xl border border-gray-200 bg-white hover:border-[#f3982d] hover:shadow-lg transition-all duration-300 ease-in-out"
      href={categoryData.categoryUrl}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="h-[60px] w-[60px] relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 bg-black/5 rounded-full group-hover:bg-[#f3982d]/10 transition-colors duration-300"></div>
          <div className="relative z-10 h-[50px] w-[50px] flex items-center justify-center">
            {categoryData.svg}
          </div>
        </div>
        <p className="group-hover:text-[#f3982d] text-center font-medium text-wrap transition-colors duration-300">
          {categoryData.title}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
