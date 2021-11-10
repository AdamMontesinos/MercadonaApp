import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'recogida',
        loadChildren: () => import('../recogida/recogida.module').then(m => m.RecogidaPageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Home/productos',
        pathMatch: 'full'
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

