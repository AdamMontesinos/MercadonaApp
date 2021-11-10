import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayoutPageRoutingModule } from './payout-routing.module';

import { PayoutPage } from './payout.page';
import { SharedModule } from '../../common/shared.module';
import { HeaderPage } from 'src/app/common/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayoutPageRoutingModule,
    SharedModule
  ],
  declarations: [PayoutPage, HeaderPage]
})
export class PayoutPageModule {}
