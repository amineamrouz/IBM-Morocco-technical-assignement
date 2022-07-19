
import { createReducer, on } from "@ngrx/store";
import { ProductsStateInterface } from "../types/products-state";
import * as productsAction from "./actions";
export const initialState: ProductsStateInterface={
  isLoading:false,
  products:[],
  error:null
};
export const reducers = createReducer(
  initialState,
  on(productsAction.getProducts, (state) =>({
    ...state, isLoading:true
  }) ),
  on(productsAction.getProductsSuccess, (state, actions) =>({
    ...state, isLoading:false,products:actions.products
  }) ),
  on(productsAction.getProductsFailed, (state, actions) =>({
    ...state, isLoading:false, error:actions.error
  }) )
);