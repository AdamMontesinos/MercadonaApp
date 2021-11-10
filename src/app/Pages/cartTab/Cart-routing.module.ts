import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecogidaPage } from '../recogida/recogida.page';
import {  CartPage } from './Cart.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage,
  },{
    path:"Details",
    component: RecogidaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartPageRoutingModule {}
