import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscribirPage } from './inscribir.page';

const routes: Routes = [
  {
    path: '',
    component: InscribirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscribirPageRoutingModule {}
