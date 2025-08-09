import React from "react";

const categories = [
  { name: "Pizza" },
  { name: "Burger" },
  { name: "Pasta" },
  { name: "Sushi" },
  { name: "Salad" },
  { name: "Steak" },
];

const Category = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Popular Categories by food
      </h1>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-300 dark:bg-gray-800 dark:text-white text-gray-900 font-semibold text-lg"
              data-aos="zoom-in-up"
              data-aos-duration="600"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={index * 150}
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
