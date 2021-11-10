import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecogidaPage } from './recogida.page';

const routes: Routes = [
  {
    path: '',
    component: RecogidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecogidaPageRoutingModule {}
