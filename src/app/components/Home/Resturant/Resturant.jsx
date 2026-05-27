import React from "react";
import ResturantCard from "./ResturantCard";

const restaurants = [
  {
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=800",
    title: "Pizza",
    tags: ["Italian", "Fast Food", "Takeaway"],
  },
  {
    image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?w=800",
    title: "Burger",
    tags: ["American", "Fast Food", "Grill"],
  },
  {
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?w=800",
    title: "Pasta",
    tags: ["Italian", "Comfort Food", "Dine-in"],
  },
  {
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?w=800",
    title: "Sushi",
    tags: ["Japanese", "Seafood", "Healthy"],
  },
  {
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?w=800",
    title: "Salad",
    tags: ["Healthy", "Vegan", "Light"],
  },
  {
    image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?w=800",
    title: "Steak",
    tags: ["Grill", "Premium", "Dine-in"],
  },
];

const Resturant = () => {
  return (
    <div className="pt-16 pb-16" id="restaurant">
      <div className="text-xl sm:text-2xl font-extrabold text-center">
        Available Restaurants Nearby
      </div>

      <div className="w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        {restaurants.map((r, i) => (
          <div
            key={r.title}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={(i + 1) * 100}
          >
            <ResturantCard image={r.image} title={r.title} tags={r.tags} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-9 text-white py-2.5 sm:px-12 sm:py-3.5 rounded-full font-bold text-base sm:text-lg bg-pink-600 hover:bg-pink-700 transition-all duration-300">
          Discover More &rarr;
        </button>
      </div>
    </div>
  );
};

export default Resturant;
