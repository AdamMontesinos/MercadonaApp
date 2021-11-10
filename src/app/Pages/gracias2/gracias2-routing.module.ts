import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gracias2Page } from './gracias2.page';

const routes: Routes = [
  {
    path: '',
    component: Gracias2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gracias2PageRoutingModule {}
