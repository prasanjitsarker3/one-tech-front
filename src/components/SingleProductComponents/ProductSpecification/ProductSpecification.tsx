import { ProductSpecificationType } from "./ProductSpecificationType";


const ProductSpecification: React.FC<ProductSpecificationType> = ({ specification }) => {
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-100">
            <div>
                <p className="text-xl font-bold">Specification</p>
            </div>
            {
                specification.map((feature, ind) => <div className="pt-5" key={ind}>
                    <div className="p-2 md:px-5 px-2 bg-[#3749bb1a] rounded">
                        <p className="text-[#3749bb] font-bold">{feature.specificationName}</p>
                    </div>
                    {
                        feature.specificationData.map((featureData, ind) => <div key={ind} className="flex flex-col md:flex-row gap-1 md:gap-4 hover:bg-gray-100 border-b border-gray-300 p-2 md:p-5">
                            <p className="w-full md:w-1/5 text-sm md:text-base text-gray-600">{featureData.name}</p>
                            <p className="w-full text-sm md:text-base md:w-4/5">{featureData.value}</p>
                        </div>)
                    }
                </div>)
            }
        </div>
    );
};

export default ProductSpecification;