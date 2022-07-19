import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/Types/app.state.interface";

export const selectFeature = (state: AppStateInterface) => state.products;

export const isLoadingSelector = createSelector(selectFeature, (state)=>state.isLoading);
export const productsSelector = createSelector(selectFeature, (state)=>state.products)
export const errorSelector = createSelector(selectFeature, (state)=>state.error)
