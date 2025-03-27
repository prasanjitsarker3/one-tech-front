import ProductDetails from "@/components/SingleProductComponents/ProductDetails/ProductDetails";
import product_1 from "@/assets/images/product_1.png";
import product_2 from "@/assets/images/product_2.png";
import product_3 from "@/assets/images/product_3.png";

const page = () => {
    const productDetailsData = {
        id: 1,
        title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD Space Black #MX2Y3LL/A",
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
        specification: [
            {
                specificationName: "Processor",
                specificationData: [
                    { name: "Processor Brand", value: "Apple" },
                    { name: "Processor Model", value: "M4 Pro chip" },
                    { name: "Processor Core", value: "14 Core CPU with 10 performance cores and 4 efficiency cores 16-core Neural Engine 273GB/s memory bandwidth" }
                ]
            },
            {
                specificationName: "Display",
                specificationData: [
                    { name: "Display Size", value: "16.2-inch" },
                    { name: "Display Type", value: "Liquid Retina XDR Display" },
                    { name: "Display Resolution", value: "3456×2234" },
                    { name: "Touch Screen", value: "No" },
                    { name: "Refresh Rate", value: "ProMotion technology for adaptive refresh rates up to 120Hz Fixed refresh rates: 47.95Hz, 48.00Hz, 50.00Hz, 59.94Hz, 60.00Hz" },
                ]
            },
            {
                specificationName: "Memory",
                specificationData: [
                    { name: "RAM", value: "48GB" },
                    { name: "RAM Type", value: "Unified memory" },
                    { name: "Removable", value: "Non-Removable" }
                ]
            },
            {
                specificationName: "Storage",
                specificationData: [
                    { name: "Storage Type", value: "SSD" },
                    { name: "Storage Capacity", value: "512GB" },
                    { name: "Storage Upgrade", value: "Configurable to: 1TB, 2TB or 4 TB" }
                ]
            },
            {
                specificationName: "Graphics",
                specificationData: [
                    { name: "Graphics Model", value: "Apple 20-core GPU (Hardware-accelerated ray tracing)" },
                    { name: "Graphics Memory", value: "Shared" }
                ]
            },
            {
                specificationName: "Keyboard & TouchPad",
                specificationData: [
                    { name: "Keyboard Type", value: "Backlit Magic Keyboard" },
                    { name: "Keyboard Features", value: "78 (U.S.) keys including 12 full-height function keys and 4 arrow keys in an inverted‑T arrangement Touch ID Ambient light sensor" },
                    { name: "TouchPad", value: "Force Touch trackpad for precise cursor control and pressure-sensing capabilities; enables Force clicks, accelerators, pressure-sensitive drawing, and Multi-Touch gestures" }
                ]
            },
        ],
        description: [
            {
                title: "Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD Space Black",
                description: `The Apple MacBook Pro 16-inch, powered by the formidable M4 Pro Chip, is crafted to deliver exceptional performance and stunning visuals, making it an ideal choice for professionals and creatives. This Apple laptop features a 16-inch Liquid Retina XDR Display that offers vibrant colors, deep blacks, and incredible detail, perfect for enjoying HDR content and ensuring every visual element is rendered with precision. With 48GB of RAM, the Apple MacBook Pro ensures seamless multitasking and handles intensive workflows effortlessly, allowing you to run multiple applications simultaneously without any lag. The 512GB SSD provides ample storage space for all your files, projects, and media, ensuring fast access and quick boot times, so you can get to work without any delays. Encased in a sleek Space Black aluminum body, this Apple MacBook combines style and durability, making it not only a powerful tool but also a stylish accessory. Whether you're editing high-resolution videos, designing intricate graphics, or coding complex software, the Apple MacBook Pro 16-inch with M4 Pro Chip is your ultimate tool for creativity and productivity, offering a blend of power, speed, and elegance that elevates your work and play to new heights. This Apple laptop is engineered to meet the demands of the most challenging tasks, providing a smooth and efficient user experience that enhances your workflow and boosts your productivity. With its advanced features and robust performance, the Apple MacBook Pro 16-inch is more than just a laptop; it's a powerhouse that empowers you to achieve your best work. Whether you're a professional seeking a reliable Apple laptop or a creative looking for a high-performance device, the Apple MacBook Pro 16-inch with M4 Pro Chip is designed to exceed your expectations.`
            },
            {
                title: "Unleashing Power with the M4 Pro Chip",
                description: `The Apple MacBook Pro 16-inch, equipped with the powerful M4 Pro Chip, is engineered to deliver unmatched performance and efficiency. This advanced chip features a 12-core CPU with 8 performance cores and 4 efficiency cores, ensuring that even the most demanding tasks are handled with ease. The 16-core GPU provides stunning graphics performance, making it ideal for video editing, 3D rendering, and gaming. Additionally, the 16-core Neural Engine accelerates machine learning tasks, enhancing everything from image processing to natural language recognition. With support for up to 48GB of unified memory and 273GB/s memory bandwidth, the Apple MacBook Pro with M4 Pro Chip is built to handle large projects and complex workflows effortlessly.`
            },
            {
                title: "Stunning Visuals with Liquid Retina XDR Display and ProMotion Technology",
                description: `The Apple MacBook Pro 16-inch features a breathtaking Liquid Retina XDR Display with ProMotion Technology, offering an unparalleled visual experience. This display boasts a native resolution of 3456-by-2234 and a 1,000,000:1 contrast ratio, delivering incredibly sharp and vibrant images. The high dynamic range (HDR) capabilities ensure deeper blacks and brighter whites, making it perfect for viewing and editing HDR content. ProMotion Technology provides adaptive refresh rates up to 120Hz, ensuring smooth and responsive visuals whether you're scrolling through documents or playing high-frame-rate games. With True Tone technology and a wide color (P3) gamut, the Apple MacBook Pro's display offers accurate and lifelike colors, making it a top choice for creative professionals.`
            },
            {
                title: "Transforming Workflows with Apple Intelligence",
                description: `The Apple MacBook Pro 16-inch is equipped with Apple Intelligence, a groundbreaking personal intelligence system that transforms how users work, communicate, and express themselves. Apple Intelligence integrates seamlessly with macOS, providing advanced AI-powered tools for writing, image generation, and organization. It enhances productivity by offering smart suggestions, automating repetitive tasks, and ensuring privacy with robust security features. Whether you're drafting emails, organizing your calendar, or editing photos, Apple Intelligence makes every task more intuitive and efficient. This innovative system is designed to protect your data, giving you peace of mind while you work on your Apple MacBook Pro.`
            },
            {
                title: "Long-Lasting Battery Life for All-Day Productivity",
                description: `The Apple MacBook Pro 16-inch is engineered to keep up with your busiest days, thanks to its impressive battery life. With up to 22 hours of video playback and up to 15 hours of wireless web usage, this Apple laptop ensures you can work, create, and play without constantly searching for a power outlet. The 100-watt-hour lithium-polymer battery, combined with the energy-efficient M4 Pro Chip, provides exceptional endurance. Fast-charge capability allows you to quickly recharge your MacBook Pro, so you can get back to your tasks in no time. Whether you're on the go or working from home, the Apple MacBook Pro's battery life ensures you stay productive throughout the day.`
            },
            {
                title: "Buy Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD Space Black from Star Tech",
                description: `In Bangladesh, you can get original Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD Space Black From Star Tech. We have a large collection of latest Apple MacBook to purchase. Order Online Or Visit your Nearest Star Tech Shop to get yours at lowest price. The Apple MacBook Pro 16 inch M4 Pro Chip Liquid Retina XDR Display 48GB RAM 512GB SSD Space Black comes with 1 year warranty.`
            },
        ]
    };
    return (
        <div className="container mx-auto px-4">
            <ProductDetails productDetailsData={productDetailsData} />
        </div>
    );
};

export default page;