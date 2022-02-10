import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";
import Product from "../../types/Product";

export const fetchProducts = createAsyncThunk<Product[]>(
  "product/fetch",
  async () => {
    let products = await ProductService.products();
    return products;
  }
);
