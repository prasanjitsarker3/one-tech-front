"use client"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import { CarouselType } from './CarouselType';


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
            {
                carousalData.map(img => <div key={img.id} className="overflow-hidden md:h-[480px]" >
                    <Image width={950} height={550} className="object-cover w-full h-full" src={img.imageUrl} alt={img.title} />
                </div>)
            }
        </Carousel>

    );
};

export default CarouselMain;