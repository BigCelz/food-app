"use client";

import { useState } from "react";
import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [phone, setPhone] = useState("");
  const [lodge, setLodge] = useState("");
  const [room, setRoom] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePlaceOrder = () => {
    if (!phone || !lodge || !room) {
      alert("Please fill all fields");
      return;
    }

    // Example: Save to Firebase or trigger payment
    console.log({
      cart,
      phone,
      lodge,
      room,
      total,
    });

    // Simulate success and clear cart
    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="pt-16 pb-16 ">
      {/* Heading */}
      <div className="text-xl sm:text-2xl font-extrabold hidden lg:block text-center mt-16">
        Your Cart
      </div>

      {/* Cart Items */}
      <div className="w-[80%] mx-auto mt-10">
        {cart.length === 0 && !submitted ? (
          <p className="text-center text-gray-600 text-lg">
            Your cart is empty
          </p>
        ) : submitted ? (
          <p className="text-center text-green-600 text-lg font-bold">
            Order placed successfully!
          </p>
        ) : (
          <div className="space-y-6 sm:mt-10">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex  sm:items-center justify-between border-b pb-4"
              >
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ₦{item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 sm:mt-0 text-red-600 hover:text-red-800 font-medium text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <div className="text-center mt-10">
              <p className="text-xl font-bold mb-4">Total: ₦{total}</p>
            </div>

            {/* Delivery Info Form */}
            <div className="mt-8 grid gap-4 max-w-md mx-auto">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 py-3 border rounded-md"
              />

              <input
                type="text"
                placeholder="Lodge Name"
                value={lodge}
                onChange={(e) => setLodge(e.target.value)}
                className="px-4 py-3 border rounded-md"
              />

              <input
                type="text"
                placeholder="Room Number"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="px-4 py-3 border rounded-md"
              />
            </div>

            {/* Place Order Button */}
            <div className="text-center mt-6">
              <button
                onClick={handlePlaceOrder}
                className="px-9 text-white py-2.5 sm:px-12 sm:py-3.5 rounded-full font-bold text-base sm:text-lg bg-cyan-700 hover:bg-cyan-950 transition-all duration-300 dark:hover:bg-cyan-200 dark:text-black"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
