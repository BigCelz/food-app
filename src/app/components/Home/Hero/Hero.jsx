import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { FaApple, FaGooglePlay, FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const DownloadButton = ({ icon: Icon, title, store }) => (
  <a
    href="#_"
    className="flex items-center justify-center group border border-gray-400 px-4 py-3 rounded-md hover:border-green-950 transition-all duration-300 w-full sm:w-auto"
  >
    <Icon className="text-2xl mr-2 group-hover:text-gray-700 transition-all duration-300" />
    <div>
      <p className="text-xs group-hover:text-gray-700 transition-all duration-300">{title}</p>
      <p className="text-sm font-semibold group-hover:text-gray-700 transition-all duration-300">{store}</p>
    </div>
  </a>
);

const Hero = () => {
  return (
    <div id="home" className="relative w-full min-h-screen flex flex-col justify-center" data-aos="fade-up">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-10 mt-6">

        {/* Text Content */}
        <div className="flex flex-col gap-6 items-center text-center xl:items-start xl:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-[550px]">
            Your favourite food{" "}
            <span className="text-pink-600">delivered</span>{" "}
            to your home.
          </h1>

          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-[550px]">
            Fast delivery for everything you're craving right now.
          </p>

          {/* Address Box */}
          {/* <div className="w-full max-w-md">
            <div className="flex items-center h-14 overflow-hidden shadow-md bg-gray-100">
              <div className="text-gray-500 px-4">
                <GrMapLocation className="w-5 h-5 text-black" />
              </div>
              <input
                type="text"
                placeholder="Enter your address"
                className="flex-1 px-2 text-sm text-black bg-transparent outline-none h-full"
              />
              <button className="bg-gray-900 text-white px-4 h-full hover:bg-gray-900 flex items-center justify-center cursor-pointer">
                <FaLocationArrow className="w-4 h-4" />
              </button>
            </div>
          </div> */}

          <div className="w-full max-w-md xl:max-w-none">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Available to download on
            </p>
            <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
              <DownloadButton icon={FaApple} title="Download on the" store="App Store" />
              <DownloadButton icon={FaGooglePlay} title="Get it on" store="Google Play" />
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="hidden xl:flex justify-center xl:justify-end" data-aos="fade-left" data-aos-delay="150">
          <Image src="/images/food.png" alt="Hero food illustration" width={500} height={500} className="w-full max-w-[500px] h-auto" />
        </div>

      </div>
    </div>
  );
};

export default Hero;


