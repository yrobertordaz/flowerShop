import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import Category from "../../types/Category";
import { fetchCategories } from "../thunks/fetchCategories";

type CategorySliceState = {
  current?: number;
  data: Category[];
  error: string | null;
  status: "loading" | "idle";
};
const categoriesSlice = createSlice<
  CategorySliceState,
  SliceCaseReducers<CategorySliceState>
>({
  name: "categories",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.data = [...payload];
    });
  },
});

export const selectCategories = (state: RootState) => state.categories.data;
export default categoriesSlice.reducer;
