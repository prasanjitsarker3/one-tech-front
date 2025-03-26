import ProductDetails from "@/components/SingleProductComponents/ProductDetails/ProductDetails";
import product_1 from "@/assets/images/product_1.png";
import product_2 from "@/assets/images/product_2.png";
import product_3 from "@/assets/images/product_3.png";

const page = () => {
    const productDetailsData = {
        id: 1,
        title: "Apple MacBook Pro 2021",
        price: 2499,
        discountPrice: 2299,
        keyFeatures: [
            "MPN: MX2Y3LL/A",
            "Model: MacBook Pro M4 Pro",
            "Processor: Apple M4 Pro chip with 14-core CPU, 20-core GPU, 16-core Neural Engine",
            "RAM: 48GB, Storage: 512GB SSD",
            `Display: 16.2" Liquid Retina XDR display (3456x2234)`,
            `Features: Backlit Magic Keyboard, Touch ID, Wi-Fi 6E, Bluetooth 5.3`
        ],
        productImages: [product_1.src, product_2.src, product_3.src],
        specification: {
            specificationName: "Technical Specifications",
            specificationData: [
                { name: "Processor", value: "M1 Pro" },
                { name: "RAM", value: "16GB" },
                { name: "Storage", value: "512GB SSD" },
                { name: "Display", value: "14-inch Retina" }
            ]
        },
        description: [
            {
                title: "Overview",
                description: "The Apple MacBook Pro 2021 is a powerful laptop with the new M1 Pro chip, offering exceptional performance and battery life."
            },
            {
                title: "Design",
                description: "The MacBook Pro 2021 features a sleek design with a 14-inch Retina display, providing stunning visuals and vibrant colors."
            }
        ]
    };
    return (
        <div className="container mx-auto px-4">
            <ProductDetails productDetailsData={productDetailsData} />
        </div>
    );
};

export default page;