import Link from "next/link";
import type { CategoryCardType } from "./CategoryCardType";
import Image from "next/image";


const CategoryCard: React.FC<CategoryCardType> = ({ categoryData }) => {
    return (
        <Link className="group flex justify-center items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white" href={categoryData.categoryUrl}>
            <div className="flex flex-col items-center justify-center gap-4">
                <figure className="h-[50px] w-[50px]">
                    <Image className="h-full w-full" src={categoryData.imageUrl} alt={categoryData.title} height={50} width={50} />
                </figure>
                <p className="group-hover:text-[#f3982d] text-center font-medium text-wrap">{categoryData.title}</p>
            </div>
        </Link>
    );
};

export default CategoryCard;