import FeaturedCategory from "@/components/HomeComponents/FeaturedCategory/FeaturedCategory";
import FeaturedProducts from "@/components/HomeComponents/FeaturedProducts/FeaturedProducts";
import { HeroCarousel } from "@/components/HomeComponents/HeroCarousel/HeroCarousel";
import project_1 from "@/assets/images/banner_1.png";

export default function Home() {
  const BannerData = [
    {
      imageUrl: project_1.src,
      heading: "Nothing",
      title: "Nothing title",
      textColor: "green"
    },
    {
      imageUrl: project_1.src,
      heading: "Nothing",
      title: "Nothing title",
      textColor: "green"
    },
    {
      imageUrl: project_1.src,
      heading: "Nothing",
      title: "Nothing title",
      textColor: "green"
    },
    {
      imageUrl: project_1.src,
      heading: "Nothing",
      title: "Nothing title",
      textColor: "green"
    },
  ]
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-5 justify-between pt-3">
        <div className="w-full md:w-3/4 rounded-xs overflow-hidden">
          <HeroCarousel BannerData={BannerData} />
        </div>
        <div className="w-full md:w-1/4 border border-gray-200 rounded-xs overflow-hidden">

        </div>
      </div>
      <div className="mt-10">
        <FeaturedCategory />
        <FeaturedProducts />
      </div>
    </div>
  );
}
