import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { AppStateInterface } from './../../../Models/app.state.interface';

export const selectFeature = (state: AppStateInterface) => state.products;

export const isLoadingSelector = createSelector(selectFeature, (state)=>state.isLoading);
export const productsSelector = createSelector(selectFeature, (state)=>state.products)
export const errorSelector = createSelector(selectFeature, (state)=>state.error)

export const isLoadingDetailsSelector = createSelector(selectFeature, (state)=>state.isLoadingDetails)
export const productsDetailsSelector = createSelector(selectFeature, (state)=>state.productsDetails)
export const errorDetailsSelector = createSelector(selectFeature, (state)=>state.error)
