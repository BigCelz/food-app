import Image from "next/image";
import React from "react";
import { Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Easy to Use",
    description:
      "Browse restaurants, pick your meal, and place an order in just a few taps. No stress, no confusion.",
  },
  {
    number: "02",
    title: "Fast Delivery",
    description:
      "We work with riders near you to make sure your food gets to your door while it's still hot.",
  },
  {
    number: "03",
    title: "Delicious Options",
    description:
      "From local favourites to international cuisine, there's always something worth ordering.",
  },
];

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* image content */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="flex justify-center"
        >
          <Truck className="w-64 h-64 text-pink-600 opacity-80" />
        </div>

        {/* text content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            We deliver super fast
          </h1>
          <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
            We partner with the best local restaurants to bring your favourite
            meals straight to your door quickly, reliably, and always fresh.
          </p>

          {/* the list of stuffs */}
          <div className="mt-8">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex mt-8 items-center space-x-6">
                <p className="text-3xl md:text-5xl opacity-40 font-bold">{number}</p>
                <div>
                  <h1 className="text-base font-extrabold sm:text-lg">{title}</h1>
                  <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-small sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
