import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketdigitalPageRoutingModule } from './ticketdigital-routing.module';

import { TicketdigitalPage } from './ticketdigital.page';
import { HeaderPage } from 'src/app/common/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketdigitalPageRoutingModule
  ],
  declarations: [TicketdigitalPage, HeaderPage]
})
export class TicketdigitalPageModule {}
