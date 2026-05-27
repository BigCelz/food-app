import React from "react";
import { FaStar } from "react-icons/fa";
import { UserCircle } from "lucide-react";

const ReviewCard = ({ reviewTitle, review, role, userName }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mr-4">
      <h1 className="text-xl font-bold">{reviewTitle}</h1>

      <div className="flex items-center mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="text-yellow-500 w-5 h-5" />
        ))}
      </div>

      <p className="text-base mt-4 font-medium text-gray-800 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-6">
        {review}
      </p>

      {/* <p className="block w-full h-[1px] bg-gray-300 dark:bg-gray-300 mt-6 mb-6"></p> */}

      <div className="flex items-center space-x-4 mt-6">
        <UserCircle className="w-14 h-14 text-pink-600 opacity-80" />
        <div>
          <h1 className="text-lg font-bold">{userName}</h1>
          <p className="text-sm sm:text-base">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;