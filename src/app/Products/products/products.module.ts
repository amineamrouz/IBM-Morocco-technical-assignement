import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ProductsService } from './services/products.service';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsModule { }
