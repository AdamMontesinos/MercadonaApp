import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Empleado2Page } from './empleado2.page';

const routes: Routes = [
  {
    path: '',
    component: Empleado2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Empleado2PageRoutingModule {}
