import Image from "next/image";
import React from "react";

const ResturantCard = ({ image, title, tags }) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-full h-[250px] object-cover rounded-lg"
      />
      <h1 className="mt-4 w-fit text-base sm:text-lg font-bold cursor-pointer dark:hover:text-amber-300 hover:text-blue-950 transition-all duration-300">
        {title}
      </h1>
      <div className="flex items-center flex-wrap font-medium mt-3 gap-2">
        {tags.map((tag) => (
          <p key={tag} className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResturantCard;