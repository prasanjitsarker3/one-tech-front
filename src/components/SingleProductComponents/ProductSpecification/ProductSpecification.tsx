

const ProductSpecification = () => {
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-100">
            <div className="pb-5">
                <p className="text-xl font-bold">Specification</p>
            </div>

            <div className="p-2 md:px-5 px-2 bg-[#3749bb1a] rounded">
                <p className="text-[#3749bb] font-bold">Processor</p>
            </div>

            <div>
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 hover:bg-gray-100 border-b border-gray-300 p-2 md:p-5">
                    <p className="w-full md:w-1/5 text-sm md:text-base text-gray-600">Processor Brand</p>
                    <p className="w-full text-sm md:text-base md:w-4/5">Apple</p>
                </div>
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 hover:bg-gray-100 border-b border-gray-300 p-2 md:p-5">
                    <p className="w-full md:w-1/5 text-sm md:text-base text-gray-600">Processor Model</p>
                    <p className="w-full text-sm md:text-base md:w-4/5">M4 Pro chip</p>
                </div>
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 hover:bg-gray-100 border-b border-gray-300 p-2 md:p-5">
                    <p className="w-full md:w-1/5 text-sm md:text-base text-gray-600">Processor Core</p>
                    <p className="w-full text-sm md:text-base md:w-4/5">14 Core CPU with 10 performance cores and 4 efficiency cores 16-core Neural Engine 273GB/s memory bandwidth.</p>
                </div>
            </div>

        </div>
    );
};

export default ProductSpecification;