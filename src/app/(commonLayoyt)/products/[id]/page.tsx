import React from "react";
import { ProductDetail } from "./ProductDetails";
import SimilarLaptopProducts from "../TopProduct";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 pt-[5rem]">
      <ProductDetail productId={id} />
      <div className="mt-8">
        <SimilarLaptopProducts />
      </div>
    </div>
  );
};

export default page;
