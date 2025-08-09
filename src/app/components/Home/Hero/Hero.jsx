import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { FaApple, FaGooglePlay, FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const DownloadButton = ({ icon: Icon, title, store }) => (
  <a
    href="#_"
    className="flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:border-green-950 transition-all duration-300"
  >
    <Icon className="text-2xl mr-2 group-hover:text-gray-700 transition-all duration-300" />
    <div>
      <p className="text-xs group-hover:text-gray-700 transition-all duration-300">
        {title}
      </p>
      <p className="text-sm font-semibold group-hover:text-gray-700 transition-all duration-300">
        {store}
      </p>
    </div>
  </a>
);

const Hero = () => {
  return (
    <div id="home" className="relative w-full h-screen flex justify-center flex-col" data-aos="fade-up">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
        {/* text content */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-6 mb-6 font-extrabold leading-[2.5rem] md:leading-[4rem] ">
            Your favourite food <span className="text-pink-600">delivered</span>{" "}
            your home.
          </h1>

          <p className="text-sm md:text-base font-medium text-gray dark:text-ggray-400">
            Food, Snacks, and more available for delivery.
          </p>

          {/* address box */}
          <div className="w-full mt-8 mb-8 max-w-md">
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
          </div>

          {/* download text */}
          <p className="text-gray-800 dark:text-gray-400 text-sm mb-6">
            Apps available to download on
          </p>

          {/* app download buttons */}
          <div className="flex space-x-4">
            <DownloadButton icon={FaApple} title="Download on the" store="Appstore" />
            <DownloadButton icon={FaGooglePlay} title="Download on the" store="GooglePlay" />
          </div>
        </div>

        {/* image content */}
        <div className="mx-auto hidden xl:block" data-aos="fade-left" data-aos-delay="150">
          <Image src="/images/hero1.png" alt="img" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;


