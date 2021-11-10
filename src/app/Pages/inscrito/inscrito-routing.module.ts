import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscritoPage } from './inscrito.page';

const routes: Routes = [
  {
    path: '',
    component: InscritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscritoPageRoutingModule {}
