import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPaymentPageRoutingModule } from './confirm-payment-routing.module';

import { ConfirmPaymentPage } from './confirm-payment.page';
import { SharedModule } from 'src/app/common/shared.module';
import { HeaderPage } from 'src/app/common/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmPaymentPageRoutingModule,
    SharedModule
  ],
  declarations: [ConfirmPaymentPage, HeaderPage]
})
export class ConfirmPaymentPageModule {}
