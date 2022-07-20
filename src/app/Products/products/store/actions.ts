import { createAction, props } from "@ngrx/store";
import { Products } from "../types/products";

export const getProducts = createAction('[Products] Get Products')
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{products : Products[]}>())
export const getProductsFailed = createAction('[Products] Get Products Failed', props<{error : string}>())

export const setProductsDetails = createAction('[ProductsDetails] Set Products Details')
export const setProductsDetailsSuccess = createAction('[ProductsDetails] Set Products Details Success', props<{productsDetails : Products}>())
export const setProductsDetailsFailed = createAction('[ProductsDetails] Set Products DetailsFailed', props<{error : string}>())
