
import { createReducer, on } from "@ngrx/store";
import { ProductsStateInterface } from "../types/products-state";
import * as productsAction from "./actions";
export const initialState: ProductsStateInterface={
  isLoading:false,
  isLoadingDetails:false,
  products:[],
  productsDetails:{},
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
  }) ),
  on(productsAction.setProductsDetails, (state) =>({
    ...state, isLoadingDetails:true
  }) ),
  on(productsAction.setProductsDetailsSuccess, (state, actions) =>({
    ...state, isLoadingDetails:false,productsDetails:actions.productsDetails
  }) ),
  on(productsAction.setProductsDetailsFailed, (state, actions) =>({
    ...state, isLoadingDetails:false, error:actions.error
  }) )
);
