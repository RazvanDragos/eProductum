import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { MaterialModule } from './material';
import { MatFormFieldModule, MatButtonModule, MatFormFieldControl, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { EndingPageComponent } from './components/ending-page/ending-page.component';
import { PcComponentsComponent } from './components/pc-components/pc-components.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsComponent,
    LoginComponent,
    ErrorComponent,
    ProductComponent,
    NavigationBarComponent,
    EndingPageComponent,
    PcComponentsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
