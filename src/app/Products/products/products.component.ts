import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { delay, Observable, timeout } from 'rxjs';
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
  public clickedRow:any;
  public contextmenu = false;
  public page = 1;
  public pageSize = 10
  isLoading$: Observable<Boolean>;
  products$: Observable<Products[]>;
  error$: Observable<string|null>;
  products:Products[]=[];
  totalRecords:number=0;
  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLoading$=this.store.pipe(select(isLoadingSelector))
    this.products$=this.store.pipe(select(productsSelector))
    this.error$=this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(productActions.getProducts())
    console.log();
    this.store.select(productsSelector).subscribe((prod:any)=>{
      console.log(prod.length);
      this.products=prod
      this.totalRecords=prod.length
    })
  }
  onleftClick(event:any) {
    console.log(event);
    this.store.dispatch(productActions.getProductsDetailsSuccess({productsDetails:event}))
    this.router.navigate(['details/' + event.id]);
  }

}
