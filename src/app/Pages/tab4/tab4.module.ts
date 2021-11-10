import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { HeaderPage } from 'src/app/common/header/header.page';
import { SharedModule } from 'src/app/common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule, 
    SharedModule
  ],
  declarations: [Tab4Page, HeaderPage]
})
export class Tab4PageModule {}
