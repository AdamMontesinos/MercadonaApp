import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QreventoPage } from './qrevento.page';

const routes: Routes = [
  {
    path: '',
    component: QreventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QreventoPageRoutingModule {}
