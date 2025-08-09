import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, title }) => {
  return (
    <div>
      <Image
        src={icon}
        alt="img"
        width={100}
        height={100}
        className="mx-auto object-contain"
      />
      <h1 className="mt-8 text-lg font-bold text-center">{title}</h1>
      <p className="text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, esse!
        Labore at facere numquam consequuntur expedita commodi corporis sunt
        explicabo!
      </p>
    </div>
  );
};

export default FeatureCard;
