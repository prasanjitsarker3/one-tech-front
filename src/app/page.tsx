import FeaturedCategory from "@/components/HomeComponents/FeaturedCategory/FeaturedCategory";
import FeaturedProducts from "@/components/HomeComponents/FeaturedProducts/FeaturedProducts";
import slider_1 from "@/assets/images/banner_1.png";
import slider_2 from "@/assets/images/banner_2.png";
import slider_3 from "@/assets/images/banner_3.png";
import CarouselMain from "@/components/HomeComponents/CarouselMain/CarouselMain";
import CarouselSmall from "@/components/HomeComponents/CarouselSmall/CarouselSmall";

export default function Home() {
  const carouselData = [
    {
      id: 1,
      imageUrl: slider_1.src,
      title: "Nothing",
    },
    {
      id: 2,
      imageUrl: slider_2.src,
      title: "Nothing",
    },
    {
      id: 3,
      imageUrl: slider_1.src,
      title: "Nothing",
    },
    {
      id: 4,
      imageUrl: slider_2.src,
      title: "Nothing",
    },
  ];
  
  const smallCarouselData = [
    {
      id: 1,
      imageUrl: slider_3.src,
      title: "Nothing",
    },
    {
      id: 2,
      imageUrl: slider_3.src,
      title: "Nothing",
    },
    {
      id: 3,
      imageUrl: slider_3.src,
      title: "Nothing",
    },
  ]
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-5 justify-between pt-3">
        <div className="w-full md:w-3/4 rounded-xs overflow-hidden">
          <CarouselMain carousalData={carouselData} />
        </div>
        <div className="w-full md:w-1/4 border border-gray-200 rounded-xs overflow-hidden">
          <CarouselSmall carousalData={smallCarouselData} />
        </div>
      </div>
      <div className="mt-10">
        <FeaturedCategory />
        <FeaturedProducts />
      </div>
    </div>
  );
}
