import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
