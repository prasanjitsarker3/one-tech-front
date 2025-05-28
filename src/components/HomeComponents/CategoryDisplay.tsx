import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CategoryDisplay() {
  // Room categories
  const rooms = [
    { id: "01", name: "Gaming Laptop", href: "#" },
    { id: "02", name: "Business Laptop", href: "#" },
    { id: "03", name: "Student Laptop", href: "#" },
    { id: "04", name: "2-in-1 Laptop", href: "#" },
    { id: "05", name: "Ultrabook", href: "#" },
  ];

  return (
    <div className=" bg-[#f8f8f8] py-16 w-full ">
      <div className=" max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl primaryColor font-bold text-[#222]mb-5 nd:mb-8 leading-tight">
          EXPLORE
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Room categories */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="space-y-0">
              {rooms.map((room) => (
                <Link
                  key={room.id}
                  href={room.href}
                  className="flex items-center justify-between py-2 md:py-4 border-b border-gray-300 group"
                >
                  <div className="flex items-center gap-6">
                    <span className=" text-base md:text-lg font-medium text-gray-700">
                      {room.id}
                    </span>
                    <span className=" text-base md:text-lg font-medium text-gray-900">
                      {room.name}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-orange-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Stats grid */}
          <div className="w-full md:w-1/2 lg:w-3/5 border-none ">
            <div className="grid grid-cols-3 bg-[#FF7200]">
              {/* Top row */}
              <div className="relative bg-[#f8f8f8] h-28 md:h-36  rounded-br-3xl  p-1.5 flex items-end justify-between overflow-hidden">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid&w=740"
                  }
                  alt=""
                  width={200}
                  height={300}
                  className=" h-full w-full object-contain "
                />
              </div>
              <div className="bg-[#f8f8f8]  w-full">
                <div className="w-full text-center  bg-[#FF7200] h-28 md:h-36  rounded-t-3xl flex  flex-col justify-center items-center  ">
                  <span className="text-2xl md:text-5xl font-bold text-white">
                    89+
                  </span>
                  <p className="text-white text-xs md:text-base">
                    Product Items
                  </p>
                </div>
              </div>

              {/* Bottom row */}
              <div className="relative bg-[#f8f8f8] h-28 md:h-36  rounded-bl-3xl p-1 md:p-0 flex items-end justify-between overflow-hidden">
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/workplace-concept-with-laptop_698812-136.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid&w=740"
                  }
                  alt=""
                  width={200}
                  height={300}
                  className=" h-full w-full py-4 md:py-2 object-contain"
                />
              </div>

              <div className="bg-[#f8f8f8] w-full ">
                <div className="w-full  bg-[#FF7200] rounded-tl-3xl h-28 md:h-36  rounded-bl-3xl rounded-br-3xl flex  flex-col justify-center items-center">
                  <div className="z-10 text-center">
                    <span className="text-2xl md:text-5xl font-bold text-white">
                      74+
                    </span>
                    <p className="text-white text-xs md:text-base">Client</p>
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="relative bg-[#f8f8f8] rounded-t-3xl h-28 md:h-36  p-1 md:p-3 flex items-end justify-between overflow-hidden">
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/desktop-image-background-copy-space_1179130-544635.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid&w=740"
                  }
                  alt=""
                  width={200}
                  height={300}
                  className=" h-full w-full p-2 md:p-0 object-contain"
                />
              </div>

              <div className=" bg-[#f8f8f8] w-full  h-28 md:h-36 ">
                <div className=" w-full h-full bg-[#FF7200] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl flex  flex-col justify-center items-center  ">
                  <div className="z-10 text-center">
                    <span className="text-2xl md:text-5xl font-bold text-white">
                      04+
                    </span>
                    <p className="text-white text-xs md:text-base">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
