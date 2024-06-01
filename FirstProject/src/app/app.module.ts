import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrderComponent } from './Components/order/order.component';
import { HostListnerDirective } from './Directive/host-listner.directive';
import { FormsModule } from '@angular/forms';
import { MasterOrderComponent } from './Components/master-order/master-order.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';
import{HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    HostListnerDirective,
    MasterOrderComponent,
    ErrorComponent,
    ProductDetailsComponent,
    ShoppingComponent,
    ShoppingDetailsComponent,
    

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
