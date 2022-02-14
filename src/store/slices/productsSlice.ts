import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchProducts } from "../thunks/fetchProducts";

type ProductsSliceState = {
  status: "loading" | "idle";
  error: string | null;
  data: Product[];
};

type Product = {
  name: string;
  price: number;
  categoryId: number;
};

const productsSlice = createSlice<
  ProductsSliceState,
  SliceCaseReducers<ProductsSliceState>
>({
  name: "products",
  initialState: {
    error: null,
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.data.push(...payload);
      state.status = "idle";
    });
  },
});

export const selectProducts = (state: RootState) => state.products.data;
export default productsSlice.reducer;
