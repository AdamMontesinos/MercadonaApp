import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QreventoPageRoutingModule } from './qrevento-routing.module';

import { QreventoPage } from './qrevento.page';
import { HeaderPage } from 'src/app/common/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QreventoPageRoutingModule
  ],
  declarations: [QreventoPage, HeaderPage]
})
export class QreventoPageModule {}
