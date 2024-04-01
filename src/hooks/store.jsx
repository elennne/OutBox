import axios from "axios";
import { create } from "zustand";

const initialStates = {
  cart: [],
};

const useProductStore = create((set) => ({
  productCategory: [],
  setCart: (newCart) => set({ cart: newCart }),

  fetchProductCategory: async () => {
    try {
      const productCategory = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}product-category`
      );
      set({ productCategory: productCategory.data });
    } catch (error) {
      console.error("error occured", error);
    }
  },

  ...initialStates,
  addItemToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, { ...product, quantity: 1 }].map(
        (item, index) => {
          return { ...item, id: index };
        }
      );
      return { cart: updatedCart };
    }),
  removeFromCart: (cartId) =>
    set((state) => ({
      cart: state.cart.filter((cart) => cart.id !== cartId),
    })),

  updateCartItemQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + quantity }
          : product
      ),
    })),
}));

export default useProductStore;
