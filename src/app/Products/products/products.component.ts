import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { delay, Observable, Subscription, timeout } from 'rxjs';
import { AppStateInterface } from './../../Models/app.state.interface';
import * as productActions from "../products/store/actions";
import { errorSelector, isLoadingSelector, productsSelector } from './store/selectors';
import { Products } from './models/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public page = 1;
  public pageSize = 10
  isLoading$: Observable<Boolean>;
  error$: Observable<string|null>;
  products:Products[]=[];
  totalRecords:number=0;
  subscription: Subscription = new Subscription();
  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLoading$=this.store.pipe(select(isLoadingSelector))
    this.error$=this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.subscription.add(this.store.select(productsSelector).subscribe((prod:any)=>{
        this.products=prod
        this.totalRecords=prod.length
        if(prod.length == 0 ){
          this.store.dispatch(productActions.getProducts())
        }
      }))
  }

  onleftClick(event:Products) {
    this.store.dispatch(productActions.setProductsDetailsSuccess({productsDetails:event}))
    this.router.navigate(['details/' + event.id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
