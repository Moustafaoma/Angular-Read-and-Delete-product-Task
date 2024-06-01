import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MasterOrderComponent } from './Components/master-order/master-order.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';

const routes: Routes = [
{path:"",redirectTo:"order",pathMatch:'full'},
{path:"home",component:HomeComponent},
{path:"order",component:MasterOrderComponent},
{path:"order/:id",component:ProductDetailsComponent},
{path:"Shopping",component:ShoppingComponent},
{path:"Shopping/:id",component:ShoppingDetailsComponent},
{path:"**",component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
