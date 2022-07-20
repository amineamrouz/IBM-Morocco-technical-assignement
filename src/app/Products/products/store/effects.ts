import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map, mergeMap, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import * as productsActions from "./actions"

@Injectable()

export class ProductsEffects{
  constructor(private actions$:Actions, private productsService : ProductsService ){}

  getProducts$ = createEffect( ()=>
  this.actions$.pipe(delay(2500),
    ofType(productsActions.getProducts),
    mergeMap(()=>{
    return this.productsService.getProducts().pipe(
      map((products)=>productsActions.getProductsSuccess({products})),
      catchError((error)=>
      of(productsActions.getProductsFailed({error: error.message})))
    )
  })
  )
  )

}
