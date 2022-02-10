import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./store/slices/categoriesSlice";
import productsSlice from "./store/slices/productsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
