import { create } from 'zustand';

export const useStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  cart: [],
  wishlist: [],
  isAuthenticated: !!localStorage.getItem('token'),

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    set({ token, isAuthenticated: !!token });
  },

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item._id === product._id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== productId),
    })),

  clearCart: () => set({ cart: [] }),

  addToWishlist: (product) =>
    set((state) => ({
      wishlist: state.wishlist.find((item) => item._id === product._id)
        ? state.wishlist
        : [...state.wishlist, product],
    })),

  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item._id !== productId),
    })),
}));