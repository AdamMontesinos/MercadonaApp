import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPagoPageRoutingModule } from './datos-pago-routing.module';

import { DatosPagoPage } from './datos-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPagoPageRoutingModule
  ],
  declarations: [DatosPagoPage]
})
export class DatosPagoPageModule {}
