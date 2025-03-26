import Image from "next/image";
import Link from "next/link";
import { ProductCardType } from "./ProductCardType";

const ProductCard: React.FC<ProductCardType> = ({ productCardData }) => {
    return (
        <div className="relative bg-white border border-gray-100 rounded-lg p-4">
            <Link href={`products/${productCardData.id}`}>
                <figure>
                    <Image src={productCardData.imageUrl} alt="product" width={200} height={200} />
                </figure>
                <h2 className="py-5 text-sm hover:underline hover:text-[#f3982d] transition-all duration-300">{productCardData.title}</h2>
            </Link>
            <div className="flex flex-wrap items-center gap-1 md:gap-4">
                <p className="font-bold text-lg text-[#f3982d]">{productCardData?.discountPrice ? productCardData.discountPrice : productCardData.price}৳</p>
                {productCardData?.discountPrice && <p className=" text-sm line-through text-gray-600 font-bold">{productCardData.price}৳</p>}
            </div>
            {productCardData?.discountPrice && <div className="absolute top-4 left-0 bg-[#f3982d] text-white px-3 py-0.5 rounded-br-lg rounded-tr-lg">
                <p className="text-xs font-medium">Save: 33,400৳ ({productCardData.discountPercentage}%)</p>
            </div>}
        </div>
    );
};

export default ProductCard;