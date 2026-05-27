import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Smartphone } from "lucide-react";

const MobileApp = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* image section */}
        {/* <Image
          src="/images/download2.png"
          alt="image"
          width={800}
          height={800}
          className="object-cover"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        /> */}

        <div className="flex justify-center"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <Smartphone className="w-56 h-56 text-pink-600 opacity-80" />
        </div>

        {/* text section */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold leading-8 sm:leading-12">
            Order your favourite meals right from your phone.
          </h1>

          <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400">
            Download our app and get access to hundreds of restaurants, exclusive deals, and real-time order tracking all in one place. Whether you're at home, at work, or on the go, great food is just a few taps away.
          </p>

          {/* download buttons */}
          <div className="sm:flex space-y-3 sm:space-y-0 space-x-4 mt-8">
            <a
              href="#"
              className="flex w-fit items-center group border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300"
            >
              <FaApple className="text-white text-2xl mr-2 transition-all duration-300" />
              <div>
                <p className="text-white text-xs transition-all duration-300 whitespace-nowrap">
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
              <FaGooglePlay className="text-white text-2xl mr-2 transition-all duration-300" />
              <div>
                <p className="text-white text-xs transition-all duration-300 whitespace-nowrap">
                  Get it on
                </p>
                <p className="text-white font-semibold text-sm transition-all duration-300">
                  Google Play
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