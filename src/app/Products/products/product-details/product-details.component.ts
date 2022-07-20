import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppStateInterface } from './../../../Models/app.state.interface';
import { productsDetailsSelector } from '../store/selectors';
import { Products } from '../models/products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  detailsProduct: Products ={};
  subscription: Subscription = new Subscription();
  constructor(private store: Store<AppStateInterface>,
    private router:Router) {

  }

  ngOnInit(): void {
    this.subscription.add(this.store.select(productsDetailsSelector).subscribe((prod:Products)=>{
      this.detailsProduct =  prod
    })
    )
  }

  onClose(){
    this.router.navigate(['/'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
