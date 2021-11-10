import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPagoPage } from './datos-pago.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPagoPageRoutingModule {}
