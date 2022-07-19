import { Products } from "./products";

export interface ProductsStateInterface {
  isLoading:Boolean;
  products:Products[];
  error: string | null;
}
