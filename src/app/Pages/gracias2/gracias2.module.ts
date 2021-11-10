import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gracias2PageRoutingModule } from './gracias2-routing.module';

import { Gracias2Page } from './gracias2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gracias2PageRoutingModule
  ],
  declarations: [Gracias2Page]
})
export class Gracias2PageModule {}
