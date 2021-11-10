import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecogidaPageRoutingModule } from './recogida-routing.module';

import { RecogidaPage } from './recogida.page';
import { SharedModule } from 'src/app/common/shared.module';
import { HeaderPage } from 'src/app/common/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecogidaPageRoutingModule, 
    SharedModule
  ],
  declarations: [RecogidaPage, HeaderPage]
})
export class RecogidaPageModule {}
