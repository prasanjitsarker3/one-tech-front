import CategoryCard from "./CategoryCard/CategoryCard";
import drone from "@/assets/images/logo/drone.png";

const FeaturedCategory = () => {
    const categories = [
        {
            id: 1,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "Drone"
        },
        {
            id: 2,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "Gimbal"
        },
        {
            id: 3,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "Charging Fan"
        },
        {
            id: 4,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "TV"
        },
        {
            id: 5,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "Phone"
        },
        {
            id: 6,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "Mobile Accessories"
        },
        {
            id: 7,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "TV"
        },
        {
            id: 8,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "Phone"
        },
        {
            id: 9,
            categoryUrl: "/",
            imageUrl: drone.src,
            title: "Mobile Accessories"
        },
    ]
    return (
        <div className="container mx-auto px-4">
            <div>
                <h3 className="text-center text-lg font-bold text-black">Featured Category</h3>
                <p className="text-center text-sm py-2">Get Your Desired Product from Featured Category!</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 py-10">
                {
                    categories.map((category) => (<CategoryCard key={category.id} categoryData={category} />))
                }
            </div>
        </div>
    );
};

export default FeaturedCategory;