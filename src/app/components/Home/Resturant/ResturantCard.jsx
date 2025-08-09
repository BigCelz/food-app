import Image from "next/image";
import React from "react";

const ResturantCard = ({ image, title }) => {
  return (
    <div>
      <Image
        src={image}
        alt="img"
        width={400}
        height={400}
        className="w-full h-[250px] object-cover"
      />
      <h1 className="mt-4 w-fit text-base sm:text-lg font-bold cursor-pointer dark:hover:text-amber-300 hover:text-blue-950 transition-all duration-300">
        {title}
      </h1>
      <div className="flex items-center font-medium mt-3 space-x-3">
        <p className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white">American</p>
        <p className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white">FastFood</p>
        <p className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white">Burger</p>
      </div>
    </div>
  );
};

export default ResturantCard;
