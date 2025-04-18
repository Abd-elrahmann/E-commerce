import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== productId
          );
        }
      }
    },
    removeItemDirectly: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(
        (item) => item.id !== productId
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
    loadCartFromLocalStorage: (state) => {
      const savedCart = localStorage.getItem("shoppingCart");
      if (savedCart) {
        state.items = JSON.parse(savedCart);
      }
    },
    saveCartToLocalStorage: (state) => {
      localStorage.setItem("shoppingCart", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeItemDirectly,
  clearCart,
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
