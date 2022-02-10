import Product from "../types/Product";
import axios from "axios";

export default class ProductService {
  static async products(): Promise<Product[]> {
    let uri = `/products`;
    let products = await axios.get<Product[]>(uri);
    return products.data;
  }
}
