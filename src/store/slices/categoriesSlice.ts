import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type CategorySliceState = {
  current?: string;
  data?: Category[];
};
type Category = {
  name: string;
  key: string;
};
const categoriesSlice = createSlice<
  CategorySliceState,
  SliceCaseReducers<CategorySliceState>
>({
  name: "categories",
  initialState: {
    data: [
      { name: "Category 1", key: "c1" },
      { name: "Category 2", key: "c2" },
      { name: "Category 3", key: "c3" },
      { name: "Category 4", key: "c4" },
      { name: "Category 5", key: "c5" },
    ],
  },
  reducers: {},
});

export const selectCategories = (state: RootState) => state.categories.data;
export default categoriesSlice.reducer;
