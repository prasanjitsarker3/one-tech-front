"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import { CarouselType } from "./CarouselType";

const CarouselMain: React.FC<CarouselType> = ({ carousalData }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      swipeable
      showStatus={false}
      showThumbs={false}
      emulateTouch
      showIndicators={false}
    >
      {carousalData.map((img) => (
        <div key={img.id} className="overflow-hidden md:h-[480px]">
          <Image
            width={950}
            height={550}
            className=" w-full h-full object-cover"
            src={
              "https://img.freepik.com/premium-psd/black-friday-sale-banner-template-with-3d-red-laptop-gift-box_438535-146.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
            }
            alt={img.title}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMain;
