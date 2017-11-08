import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './shop/productList.component';
import { CartComponent } from './shop/cart.component';


import { DataService } from './shared/dataService';

let routes = [
    { path: "", component: ShopComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      ShopComponent,
      LoginComponent,
      CheckoutComponent,
      ProductListComponent,
      CartComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false // for Debugging of the Routes
      })
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
