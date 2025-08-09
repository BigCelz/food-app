import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ reviewTitle, role, userName, userImage }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mr-4">
      <h1 className="text-xl font-bold">{reviewTitle}</h1>

      <div className="flex items-center mt-3">
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
      </div>

      <p className="text-base mt-4 font-medium text-gray-800 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-6 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aut,
        deleniti nesciunt, ipsa sunt natus amet assumenda laborum rem odio
        dolorem! Aperiam iure odio ipsum.
      </p>

      {/* <p className="block w-full h-[1px] bg-gray-300 dark:bg-gray-300 mt-6 mb-6"></p> */}

      <div className="flex items-center space-x-4 mt-6">
        <Image src={userImage} alt={userName} width={60} height={60} className="rounded-full" />
        <div>
            <h1 className="text-lg font-bold">{userName}</h1>
            <p className="text-sm sm:text-base">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
