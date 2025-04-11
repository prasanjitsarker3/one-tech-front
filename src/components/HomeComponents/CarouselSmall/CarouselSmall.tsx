"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import { CarouselType } from "./CarouselType";

const CarouselSmall: React.FC<CarouselType> = ({ carousalData }) => {
  return (
    <div className="space-y-2 h-[480px]">
      <div className="border h-[240px]">
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          swipeable
          showStatus={false}
          showThumbs={false}
          emulateTouch
          axis="vertical"
          showIndicators={false}
        >
          {carousalData.map((img) => (
            <div key={img.id} className="overflow-hidden h-[240px]">
              <Image
                width={500}
                height={300} // Set a valid height
                className="object-cover w-full h-full"
                src={
                  "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                }
                alt={img.title}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="border h-[240px]">
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          swipeable
          showStatus={false}
          showThumbs={false}
          emulateTouch
          axis="vertical"
          showIndicators={false}
        >
          {carousalData.map((img) => (
            <div key={img.id} className="overflow-hidden h-[240px]">
              <Image
                width={500}
                height={300} // Set a valid height
                className="object-cover w-full h-full"
                src={img.imageUrl}
                alt={img.title}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSmall;
