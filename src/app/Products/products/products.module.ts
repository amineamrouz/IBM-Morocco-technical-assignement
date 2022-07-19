import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ProductsService } from './services/products.service';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('products',reducers),
    EffectsModule.forFeature([ProductsEffects]),
    NgxPaginationModule,
  ],
  exports:[
    ProductsComponent
  ],
  providers:[
    ProductsService
  ]
})
export class ProductsModule { }
