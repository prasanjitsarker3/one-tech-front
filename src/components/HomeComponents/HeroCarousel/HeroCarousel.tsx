import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-custom";
import { BannerData } from "./HeroCarouselType";

export function HeroCarousel({ BannerData }: { BannerData: BannerData[] }) {
  return (
    <Carousel
      className="w-full"
      orientation="horizontal"
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent>
        {BannerData.map((banner, index) => (
          <CarouselItem key={index}>
            <div
              className="container mx-auto bg-cover bg-center flex items-center justify-start"
              style={{ backgroundImage: `url('${banner.imageUrl}')` }}
            >
              <div className="w-full py-20 md:py-48">
                <div className={`${banner.textColor} hidden text-center uppercase font-medium md:px-16 px-4`}>{banner.heading}</div>
                <h4 className={`${banner.textColor} hidden text-center font-bold text-xl md:text-5xl md:px-16 px-4 py-2`}>{banner.title}</h4>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={cn("ml-14 bg-gray-100 hover:bg-gray-200")} />
      <CarouselNext className={cn("mr-14 bg-gray-100 hover:bg-gray-200")} />
    </Carousel>
  )
}