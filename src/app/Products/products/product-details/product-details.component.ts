import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/Types/app.state.interface';
import { productsDetailsSelector } from '../store/selectors';
import { Products } from '../types/products';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  detailsProduct: Products ={};
  constructor(private store: Store<AppStateInterface>) {

  }

  ngOnInit(): void {
    this.store.select(productsDetailsSelector).subscribe((prod:Products)=>{
      console.log(prod);
      this.detailsProduct =  prod
    })
  }

}
