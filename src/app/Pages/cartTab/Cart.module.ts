import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  CartPage } from './Cart.page';
import { HeaderPage } from 'src/app/common/header/header.page';

import { CartPageRoutingModule } from './Cart-routing.module';
import { SharedModule } from 'src/app/common/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CartPageRoutingModule,
    SharedModule
  ],
  declarations: [CartPage,HeaderPage]
})
export class CartPageModule {}
