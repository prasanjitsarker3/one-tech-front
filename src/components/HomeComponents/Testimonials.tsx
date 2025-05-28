"use client";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { useMediaQuery } from "@/lib/useMobile";

const Testimonials = () => {
  const isMdScreen = useMediaQuery("(min-width: 768px)");

  const testimonials2 = [
    {
      id: 7,
      quote:
        "The dining set we purchased has become the centerpiece of our home. We love entertaining guests around it.",
      name: "Sophia Martinez",
      role: "Homeowner",
      avatar: "/placeholder.svg?height=40&width=40",
      img: "/Testimonial/curatinBedRoom",
      rating: 5,
    },
    {
      id: 8,
      quote:
        "I was hesitant to buy furniture online, but the quality exceeded my expectations. Absolutely beautiful craftsmanship.",
      name: "Robert Kim",
      role: "Customer",
      avatar: "/placeholder.svg?height=40&width=40",
      img: "/Testimonial/luxaryBedw",
      rating: 5,
    },
    {
      id: 9,
      quote:
        "The bedroom furniture has improved my sleep quality. Elegant, sturdy, and incredibly well-designed.",
      name: "Emily Davis",
      role: "Health Professional",
      avatar: "/placeholder.svg?height=40&width=40",
      img: "/Testimonial/rollerBlindLong",
      rating: 4,
    },
    {
      id: 10,
      quote:
        "As someone who works from home, my ergonomic desk and chair have been life-changing. Worth every penny.",
      name: "Thomas Wright",
      role: "Remote Worker",
      avatar: "/placeholder.svg?height=40&width=40",
      img: "/Testimonial/roundSofa",
      rating: 5,
    },
    {
      id: 11,
      quote:
        "The outdoor furniture set has transformed our patio into a second living room. Durable through all seasons.",
      name: "Natalie Brown",
      role: "Landscape Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      img: "/Testimonial/luxaryBedw",
      rating: 5,
    },
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="pb-16 pt-8 text-white">
      <section className="relative overflow-hidden max-w-6xl mx-auto">
        <div className="container mx-auto px-4 mb-5 md:mb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold primaryColor mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don t just take our word for it. Hear from our satisfied customers
              about their experience with our furniture.
            </p>
          </div>
        </div>

        {/* Second marquee - right to left */}
        <div className="">
          <Marquee speed={30} direction="right" gradient={isMdScreen}>
            {testimonials2.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="min-w-[300px] max-w-[350px] mx-4 overflow-hidden relative h-[220px]"
              >
                <CardContent className="absolute inset-0 px-4 py-3 flex flex-col justify-center z-10">
                  <div className="flex justify-between items-start mb-3">
                    <Quote className="text-gray-800 h-8 w-8 opacity-70" />
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  <p className="text-gray-800 text-xs line-clamp-4">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center mt-2">
                    <Avatar className="h-10 w-10 mr-3 border border-gray-500">
                      <AvatarImage
                        src={
                          "https://img.freepik.com/premium-photo/portrait-young-successful-indian-woman-worker-employee-stand-isolated-grey-studio-background-feel-confident-millennial-mixed-race-female-intern-show-motivation-employment-hr-concept_656932-3758.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid&w=740"
                        }
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-gray-800 text-gray-200">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
