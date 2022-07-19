import { createAction, props } from "@ngrx/store";
import { Products } from "../types/products";

export const getProducts = createAction('[Products] Get Products')
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{products : Products[]}>())
export const getProductsFailed = createAction('[Products] Get Products Failed', props<{error : string}>())
