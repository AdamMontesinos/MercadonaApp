import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketdigitalPage } from './ticketdigital.page';

const routes: Routes = [
  {
    path: '',
    component: TicketdigitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketdigitalPageRoutingModule {}
