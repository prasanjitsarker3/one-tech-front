import FeaturedCategory from "@/components/HomeComponents/FeaturedCategory/FeaturedCategory";
import slider_1 from "@/assets/images/banner_1.png";
import slider_2 from "@/assets/images/banner_2.png";
import CarouselMain from "@/components/HomeComponents/CarouselMain/CarouselMain";
import CarouselSmall from "@/components/HomeComponents/CarouselSmall/CarouselSmall";
import ProductShowPage from "@/components/Fake/FakeData";
import NewArrivals from "@/components/Fake/NewArrival";
import TopProducts from "@/components/Fake/TopProdcut";

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
      imageUrl:
        "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      title: "Nothing",
    },
    {
      id: 2,
      imageUrl:
        "https://img.freepik.com/free-photo/programming-background-concept_23-2150170143.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      title: "Nothing",
    },
    {
      id: 3,
      imageUrl:
        "https://img.freepik.com/free-photo/laptop-nature-concept_23-2150246074.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      title: "Nothing",
    },
  ];
  return (
    <div className="container mx-auto px-4 pt-20">
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
        {/* <FeaturedProducts /> */}
        <ProductShowPage />
        <NewArrivals />
        <TopProducts />
      </div>
    </div>
  );
}
