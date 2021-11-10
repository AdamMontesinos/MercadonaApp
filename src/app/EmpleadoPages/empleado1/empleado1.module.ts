import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Empleado1PageRoutingModule } from './empleado1-routing.module';

import { Empleado1Page } from './empleado1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Empleado1PageRoutingModule
  ],
  declarations: [Empleado1Page]
})
export class Empleado1PageModule {}
