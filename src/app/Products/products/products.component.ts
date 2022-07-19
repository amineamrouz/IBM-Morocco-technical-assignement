import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/Types/app.state.interface';
import * as productActions from "../products/store/actions";
import { errorSelector, isLoadingSelector, productsSelector } from './store/selectors';
import { Products } from './types/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isLoading$: Observable<Boolean>;
  products$: Observable<Products[]>;
  error$: Observable<string|null>;
  product:any
  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.isLoading$=this.store.pipe(select(isLoadingSelector))
    this.products$=this.store.pipe(select(productsSelector))
    this.error$=this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(productActions.getProducts())
    console.log();
    this.store.select(productsSelector).subscribe((prod:any)=>{
      console.log(prod);

      this.product=prod
    })
  }

}
