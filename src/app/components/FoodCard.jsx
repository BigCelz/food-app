'use client'

import { useCartStore } from "../store/cartStore"


const FoodCard = ({ item }) => {
  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{item.name}</h2>
      <p className="text-gray-600">₦{item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default FoodCard
