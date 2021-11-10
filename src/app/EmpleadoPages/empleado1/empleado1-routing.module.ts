import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Empleado1Page } from './empleado1.page';

const routes: Routes = [
  {
    path: '',
    component: Empleado1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Empleado1PageRoutingModule {}
