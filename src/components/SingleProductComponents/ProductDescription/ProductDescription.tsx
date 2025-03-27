import { ProductDescriptionType } from "./ProductDescriptionType";

const ProductDescription: React.FC<ProductDescriptionType> = ({ description }) => {
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-100">
            <div>
                <p className="text-xl font-bold">Description</p>
            </div>
            {
                description.map((desc, index) => <div key={index}>
                    <h2 className="text-lg font-bold pt-4 pb-1">{desc.title}</h2>
                    <p className="text-black font-light">{desc.description}</p>
                </div>)
            }
        </div>
    );
};

export default ProductDescription;