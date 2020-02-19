import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductComponent } from './components/product/product.component';
import { PcComponentsComponent } from './components/pc-components/pc-components.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/login', pathMatch: 'full' 
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: 'home-page', component: HomePageComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'pc-components', component: PcComponentsComponent
  },
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
