import { createAction, props } from "@ngrx/store";
import { Products } from "../types/products";

export const getProducts = createAction('[Products] Get Products')
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{products : Products[]}>())
export const getProductsFailed = createAction('[Products] Get Products Failed', props<{error : string}>())

export const getProductsDetails = createAction('[ProductsDetails] Get Products Details')
export const getProductsDetailsSuccess = createAction('[ProductsDetails] Get Products Details Success', props<{productsDetails : Products}>())
export const getProductsDetailsFailed = createAction('[ProductsDetails] Get Products DetailsFailed', props<{error : string}>())

// export const getProductsDetails = createAction('[ProductsDetails] Get Products Details')
// export const getProductsDetailsSuccess = createAction('[ProductsDetails] Get Products Details Success',  (payload: Products) => ({ payload }))
// export const getProductsDetailsFailed = createAction('[ProductsDetails] Get Products DetailsFailed', props<{error : string}>())
