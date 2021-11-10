import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCard2PageRoutingModule } from './product-card2-routing.module';

import { ProductCard2Page } from './product-card2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCard2PageRoutingModule
  ],
  declarations: [ProductCard2Page],
  exports:[
    ProductCard2Page
  ]
})
export class ProductCard2PageModule {}
