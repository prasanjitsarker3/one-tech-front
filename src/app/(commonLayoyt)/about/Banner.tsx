"use client";
import { Target, Telescope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutBanner = () => {
  return (
    <div className="  w-full max-w-6xl mx-auto pt-[5rem] px-4">
      <div className="relative h-[70vh] w-full overflow-hidden ">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/LaptopAbout.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Innovation Meets Excellence
          </h1>

          <p className="text-lg md:text-xl text-amber-400 font-medium mb-6">
            Discover the One Tech Difference
          </p>

          <Link
            href="/our-story"
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-1.5 rounded-full transition-colors duration-300 inline-flex items-center"
          >
            Our Story
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 pt-0 md:pt-0">
          <div className="h-full">
            <Image
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern laptop workspace"
              width={500}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" bg-white p-8">
            <h2 className="text-amber-500 leading-tight tracking-wide font-bold text-xl md:text-3xl mb-6 uppercase">
              We are a premium laptop and tech solutions provider
            </h2>
            <p className=" text-xs md:text-base mb-2">
              We strive to curate and deliver cutting-edge technology products
              that set the standard for performance, innovation, and
              personalized service to help you create a digital ecosystem that
              enhances your life and work.
            </p>
            <p className=" text-sm md:text-base">
              We believe in the power of technology and how it can transform
              your productivity and creativity. That is why everything we do is
              centered around providing devices that reflect your unique needs,
              with products built to last and perform for years to come. Our
              commitment to excellence is reflected in every laptop we offer.
              From our high-performance gaming rigs, ultralight business
              laptops, creative workstations to our range of accessories
              designed to enhance your computing experience, we take pride in
              our technical expertise and dedication to customer satisfaction.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1C2544] p-8 text-white">
            <h2 className="font-bold text-2xl mb-8">WHY CHOOSE US?</h2>
            <ul className="space-y-1.5 md:space-y-6">
              <li className="flex items-start gap-2">
                <div className="min-w-4">•</div>
                <h3 className="font-semibold mb-1">
                  Fast Shipping Nationwide with Tracking
                </h3>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4">•</div>
                <h3 className="font-semibold mb-1">
                  Extended Warranty & Technical Support
                </h3>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4">•</div>
                <h3 className="font-semibold mb-1">
                  Competitive Pricing on Premium Brands
                </h3>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4">•</div>
                <h3 className="font-semibold mb-1">
                  30-Day Hassle-Free Returns
                </h3>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4">•</div>
                <h3 className="font-semibold mb-1">
                  Expert Tech Advice and Custom Configuration
                </h3>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-0 md:gap-6">
            <div className="p-1 md:p-6 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-amber-500" />
                </div>
                <h2 className="font-bold text-amber-500 text-xl md:text-2xl">
                  Our Mission
                </h2>
              </div>
              <p className="text-sm md:text-base ">
                To empower individuals and businesses with cutting-edge
                technology solutions that enhance productivity, creativity, and
                digital experiences.
              </p>
            </div>
            <div className="p-1 md:p-6">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Telescope className="h-6 w-6 text-amber-500" />
                </div>
                <h2 className="font-bold text-amber-500 text-xl md:text-2xl">
                  Our Vision
                </h2>
              </div>
              <p className="text-sm md:text-base ">
                To be the leading destination for premium tech products, where
                innovation meets exceptional customer experience, making
                advanced technology accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}

      <div className="">
        <div className="container mx-auto px-4 py-8 max-w-6xl md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Gaming Laptops Feature */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 ">
                  <svg
                    className="w-10 h-10 text-amber-500 border border-dashed rounded-full p-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 8.5H6.5C5.94772 8.5 5.5 8.94772 5.5 9.5V16.5C5.5 17.0523 5.94772 17.5 6.5 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5V9.5C18.5 8.94772 18.0523 8.5 17.5 8.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17.5V8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.5 13H18.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 21.5L5.5 17.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5 21.5L18.5 17.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 5.5L9.5 2.5H14.5L20.5 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className=" text-amber-400 text-lg md:text-xl font-medium mb-2">
                  Gaming Laptops
                </h3>
                <p className=" text-sm md:text-base">
                  Our gaming laptops deliver more than just high FPS—they
                  provide immersive experiences with cutting-edge graphics and
                  performance.
                </p>
              </div>

              {/* Business Laptops Feature */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <svg
                    className="w-10 h-10 text-amber-500 border border-dashed rounded-full p-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.5V16.5C20 17.0523 19.5523 17.5 19 17.5H5C4.44772 17.5 4 17.0523 4 16.5V7.5C4 6.94772 4.44772 6.5 5 6.5H19C19.5523 6.5 20 6.94772 20 7.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17.5V20.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 20.5H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 13.5H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className=" text-amber-400 text-lg md:text-xl font-medium mb-2">
                  Business Laptops
                </h3>
                <p className=" text-sm md:text-base">
                  From ultralight portables to powerful workstations, our
                  business laptops combine reliability, security, and
                  performance.
                </p>
              </div>

              {/* Accessories Feature */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <svg
                    className="w-10 h-10 text-amber-500 border border-dashed rounded-full p-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 8.5H4C3.44772 8.5 3 8.94772 3 9.5V14.5C3 15.0523 3.44772 15.5 4 15.5H7C7.55228 15.5 8 15.0523 8 14.5V9.5C8 8.94772 7.55228 8.5 7 8.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 8.5H17C16.4477 8.5 16 8.94772 16 9.5V14.5C16 15.0523 16.4477 15.5 17 15.5H20C20.5523 15.5 21 15.0523 21 14.5V9.5C21 8.94772 20.5523 8.5 20 8.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2.5V5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18.5V21.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className=" text-amber-400 text-lg md:text-xl font-medium mb-2">
                  Accessories
                </h3>
                <p className=" text-sm md:text-base">
                  Enhance your computing experience with our premium
                  accessories—from high-performance peripherals to ergonomic
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
