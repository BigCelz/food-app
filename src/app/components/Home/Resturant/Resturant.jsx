import React from "react";
import ResturantCard from "./ResturantCard";

const Resturant = () => {
  return (
    <div className="pt-16 pb-16" id="restaurant">
      <div className="text-xl sm:text-2xl font-extrabold text-center">
        Available Resturant nearby Area
      </div>

      <div className="w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14" >
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100" >
          <ResturantCard image="/images/pizza.png" title="Pizza" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ResturantCard image="/images/burger.png" title="Burger" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ResturantCard image="/images/pasta.png" title="Pasta" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <ResturantCard image="/images/sushi.png" title="Sushi" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
          <ResturantCard image="/images/salad.png" title="Salad" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
          <ResturantCard image="/images/steak.png" title="Steak" />
        </div>
      </div>

      <div className="mt-16 text-center">
        <button className="px-9 text-white py-2.5 sm:px-12 sm:py-3.5  rounded-full font-bold text-base sm:text-lg bg-cyan-700 hover:bg-cyan-950 transition-all duration-300 dark:hover:bg-cyan-200 dark:text-black ">
          Discover More &rarr;
        </button>
      </div>
    </div>
  );
};

export default Resturant;
