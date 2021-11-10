import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Empleado2PageRoutingModule } from './empleado2-routing.module';

import { Empleado2Page } from './empleado2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Empleado2PageRoutingModule
  ],
  declarations: [Empleado2Page]
})
export class Empleado2PageModule {}
