import FeaturedCategory from "@/components/HomeComponents/FeaturedCategory/FeaturedCategory";
import FeaturedProducts from "@/components/HomeComponents/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <div className="py-14">

      </div>
      <div className="container mx-auto px-4">
        <FeaturedCategory />
        <FeaturedProducts />
      </div>
    </div>
  );
}
