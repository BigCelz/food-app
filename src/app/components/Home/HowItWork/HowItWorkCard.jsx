import { Utensils, Smartphone, Truck } from "lucide-react";
import React from "react";

const iconMap = {
  utensils: Utensils,
  smartphone: Smartphone,
  truck: Truck,
};

const HowItWorkCard = ({ icon, title, description, num }) => {
  const Icon = iconMap[icon];

  return (
    <div>
      <div className="relative">
        <div className="flex justify-center">
          {Icon && <Icon className="w-32 h-32 text-pink-600 opacity-80" />}
        </div>

        <div className="w-14 h-14 bg-gray-700 text-white text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full">
          {num}
        </div>

        <h1 className="mt-6 sm:text-xl text-lg text-center font-bold">
          {title}
        </h1>

        <p className="text-center font-medium sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorkCard;
