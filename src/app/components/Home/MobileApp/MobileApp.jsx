import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* image section */}
        <Image
          src="/images/download2.png"
          alt="image"
          width={800}
          height={800}
          className="object-cover"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        />

        {/* text section */}
        <div >
          <h1 className="text-2xl lg:text-4xl font-bold leading-8 sm:leading-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore qui
            ab eos, doloremque necessitatibus delectus.
          </h1>

          <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            facere doloribus nemo vero, eaque quisquam, ex eos, suscipit
            corporis voluptatibus assumenda illo. Illum, necessitatibus eius
            iste consectetur voluptatibus sed tempore delectus hic rerum
            placeat, deleniti beatae dolorum, perspiciatis excepturi fugit.
          </p>

          {/* download buttons */}
          <div className="sm:flex space-y-3 sm:space-y-0 space-x-4 mt-8">
            <a
              href="#"
              className="flex w-fit items-center group border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300"
            >
              <FaApple className="text-white text-2xl  mr-2 transition-all duration-300" />
              <div>
                <p className="text-white text-xs transition-all duration-300 whitespace-nowrap
">
                  Download on the
                </p>
                <p className="text-white font-semibold text-sm transition-all duration-300">
                  App Store
                </p>
              </div>
            </a>

            <a
              href="#"
              className="flex w-fit items-center group border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300"
            >
              <FaGooglePlay className="text-white text-2xl  mr-2 transition-all duration-300" />
              <div>
                <p className="text-white text-xs transition-all duration-300 whitespace-nowrap
">
                  Download on the
                </p>
                <p className="text-white font-semibold text-sm transition-all duration-300">
                 Googleplay
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
