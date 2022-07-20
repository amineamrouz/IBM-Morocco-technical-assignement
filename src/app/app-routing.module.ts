import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Products/products/product-details/product-details.component';
import { ProductsComponent } from './Products/products/products.component';

const routes: Routes = [

    {path: '', component: ProductsComponent},
    {path: 'details/:id', component: ProductDetailsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
