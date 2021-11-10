import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscribirPageRoutingModule } from './inscribir-routing.module';

import { InscribirPage } from './inscribir.page';
import { HeaderPage } from 'src/app/common/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscribirPageRoutingModule
  ],
  declarations: [InscribirPage, HeaderPage]
})
export class InscribirPageModule {}
