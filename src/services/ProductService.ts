import Product from "../types/Product";
import axios from "axios";
import Category from "../types/Category";

export default class ProductService {
  static async products(): Promise<Product[]> {
    let uri = `http://localhost:3001/products`;
    let products = await axios.get<Product[]>(uri);
    return products.data;
  }
  static async categories(): Promise<Category[]> {
    let uri = `http://localhost:3001/categories`;
    let categories = await axios.get<Category[]>(uri);
    return categories.data;
  }
}
