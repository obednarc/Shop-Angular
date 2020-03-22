import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopComponent } from './shop/shop.component';
import { ShippingComponent } from './shop/shipping/shipping.component';
import { ProductsComponent } from './shop/products/products.component';
import { UsersComponent } from './shop/users/users.component';
import { ProductComponent } from './shop/products/product/product.component';
import { EditorComponent } from './shop/product/editor/editor.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserEditorComponent} from "./shop/user/user-editor/user-editor.component";
import {UserComponent} from "./shop/users/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShopComponent,
    ShippingComponent,
    ProductsComponent,
    ProductComponent,
    EditorComponent,
    UsersComponent,
    UserComponent,
    UserEditorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
