import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const existing = get().cart.find(i => i.id === item.id)
        if (existing) {
          set({
            cart: get().cart.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          })
        } else {
          set({ cart: [...get().cart, { ...item, quantity: 1 }] })
        }
      },
      removeFromCart: (id) => {
        set({ cart: get().cart.filter(i => i.id !== id) })
      },
      clearCart: () => set({ cart: [] }),
    }),
    { name: 'kaida-cart' }
  )
)
