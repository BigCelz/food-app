'use client'

import FoodCard from "../components/FoodCard"

const foodItems = [
  { id: 1, name: 'Jollof Rice', price: 1500, image: '/images/jollof.png' },
  { id: 2, name: 'Eba & Egusi', price: 1800, image: '/images/eba.jpg' },
  { id: 3, name: 'Fried Rice', price: 1600, image: '/images/friedrice.jpg' },
  { id: 4, name: 'Amala & Ewedu', price: 1700, image: '/images/amala.jpg' },
  { id: 5, name: 'Moi Moi & Pap', price: 1000, image: '/images/moinmoin.jpg' },
  { id: 6, name: 'White Rice & Stew', price: 1400, image: '/images/whiterice.png' },
]

export default function RestaurantsPage() {
  return (
    <div className="pt-16 pb-16">
      {/* Heading */}
      <div className="text-xl sm:text-2xl font-extrabold text-center mt-16">
        Available Meals Around You
      </div>

      {/* Grid of Food Cards */}
      <div className="w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        {foodItems.map(item => (
          <div key={item.id}>
            <FoodCard item={item} />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <button className="px-9 text-white py-2.5 sm:px-12 sm:py-3.5 rounded-full font-bold text-base sm:text-lg bg-cyan-700 hover:bg-cyan-950 transition-all duration-300 dark:hover:bg-cyan-200 dark:text-black ">
          Discover More &rarr;
        </button>
      </div>
    </div>
  )
}


