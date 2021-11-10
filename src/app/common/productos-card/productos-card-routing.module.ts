import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosCardPage } from './productos-card.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosCardPageRoutingModule {}
