import Image from "next/image";
import React from "react";

const HowItWorkCard = ({ image, title, description, num }) => {
  return (
    <div>
      <div className="relative ">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="object-contain mx-auto"
        />

        <div className="w-24 h-14 bg-pink-600 text-white text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full">
          {num}
        </div>

        <h1 className="mt-6 sm:text-xl text-lg text-center font-bold">
          {title}
        </h1>

        <p className="text-center font-medium sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3 ">
          {description}
        </p>

        <p className="mt-4 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-150 cursor-pointer text-center">
            Start Earning &rarr;
        </p>
      </div>
    </div>
  );
};

export default HowItWorkCard;
