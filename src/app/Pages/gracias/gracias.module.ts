import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraciasPageRoutingModule } from './gracias-routing.module';

import { GraciasPage } from './gracias.page';
import { SharedModule } from 'src/app/common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraciasPageRoutingModule,
  ],
  declarations: [GraciasPage],
  exports: [GraciasPage,]

})
export class GraciasPageModule { }
