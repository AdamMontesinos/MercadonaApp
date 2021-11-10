import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCard2Page } from './product-card2.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCard2PageRoutingModule {}
