import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListoParaComerPage } from './listo-para-comer.page';

const routes: Routes = [
  {
    path: '',
    component: ListoParaComerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListoParaComerPageRoutingModule {}
