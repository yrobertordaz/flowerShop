import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";
import Category from "../../types/Category";

export const fetchCategories = createAsyncThunk<Category[]>(
  "category/fetch",
  async () => {
    let categories = await ProductService.categories();
    return categories;
  }
);
