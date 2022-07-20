import { Products } from "./products";

export interface ProductsStateInterface {
  isLoading:Boolean;
  isLoadingDetails:Boolean;
  products:Products[];
  productsDetails:Products;
  error: string | null;
}
