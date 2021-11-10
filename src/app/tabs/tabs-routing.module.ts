import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: 'Home',
        loadChildren: () => import('../Pages/homeTab/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'Cart',
        loadChildren: () => import('../Pages/cartTab/Cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../Pages/ProfileTab/profileTab.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../Pages/tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
