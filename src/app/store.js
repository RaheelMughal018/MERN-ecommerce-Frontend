import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/product/productSlice";
import authReducer from "../features/auth/AuthSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: authReducer,
    cart: cartReducer
  },
});
