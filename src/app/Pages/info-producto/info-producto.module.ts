import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoProductoPageRoutingModule } from './info-producto-routing.module';
import { InfoProductoPage } from './info-producto.page';
import { HeaderPage } from 'src/app/common/header/header.page';
import { SharedModule } from 'src/app/common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoProductoPageRoutingModule,
    SharedModule,

  ],
  declarations: [InfoProductoPage, HeaderPage]
})
export class InfoProductoPageModule {}
