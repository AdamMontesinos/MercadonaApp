import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosCardPageRoutingModule } from './productos-card-routing.module';

import { ProductosCardPage } from './productos-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosCardPageRoutingModule
  ],
  exports: [ProductosCardPage],
  declarations: [ProductosCardPage]
})
export class ProductosCardPageModule { }
