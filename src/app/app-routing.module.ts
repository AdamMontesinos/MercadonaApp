import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login/:stylo',
    loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'recogida',
    loadChildren: () => import('./Pages/recogida/recogida.module').then(m => m.RecogidaPageModule)
  },

  {
    path: 'tab4',
    loadChildren: () => import('./Pages/tab4/tab4.module').then(m => m.Tab4PageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./Pages/products/products.module').then(m => m.ProductsPageModule)
  },

  {
    path: 'gracias',
    loadChildren: () => import('./Pages/gracias/gracias.module').then(m => m.GraciasPageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'datos-pago',
    loadChildren: () => import('./Pages/datos-pago/datos-pago.module').then( m => m.DatosPagoPageModule)
  },
  {
    path: 'productos-card',
    loadChildren: () => import('./common/productos-card/productos-card.module').then(m => m.ProductosCardPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./common/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'info-producto',
    loadChildren: () => import('./Pages/info-producto/info-producto.module').then( m => m.InfoProductoPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./Pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'listo',
    loadChildren: () => import('./Pages/listo-para-comer/listo-para-comer.module').then( m => m.ListoParaComerPageModule)
  },
  {
    path: 'product-card2',
    loadChildren: () => import('./common/product-card2/product-card2.module').then( m => m.ProductCard2PageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./Pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./common/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./Pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'payout',
    loadChildren: () => import('./Pages/payout/payout.module').then( m => m.PayoutPageModule)
  },
  {
    path: 'confirm-payment',
    loadChildren: () => import('./Pages/confirm-payment/confirm-payment.module').then( m => m.ConfirmPaymentPageModule)
  },
  {
    path: 'inscribir',
    loadChildren: () => import('./Pages/inscribir/inscribir.module').then( m => m.InscribirPageModule)
  },
  {
    path: 'ticketdigital',
    loadChildren: () => import('./Pages/ticketdigital/ticketdigital.module').then( m => m.TicketdigitalPageModule)
  },
  {
    path: 'gracias2',
    loadChildren: () => import('./Pages/gracias2/gracias2.module').then( m => m.Gracias2PageModule)
  },
  {
    path: 'inscrito',
    loadChildren: () => import('./Pages/inscrito/inscrito.module').then( m => m.InscritoPageModule)
  },
  {
    path: 'qrevento',
    loadChildren: () => import('./Pages/qrevento/qrevento.module').then( m => m.QreventoPageModule)
  },
  {
    path: 'pruebas',
    loadChildren: () => import('./Pages/pruebas/pruebas.module').then( m => m.PruebasPageModule)
  },
  {
    path: 'empleado1',
    loadChildren: () => import('./EmpleadoPages/empleado1/empleado1.module').then( m => m.Empleado1PageModule)
  },
  {
    path: 'empleado2',
    loadChildren: () => import('./EmpleadoPages/empleado2/empleado2.module').then( m => m.Empleado2PageModule)
  },

  {
    path: '**',
    redirectTo: '/login/dona',
    pathMatch: 'full'
    },
 

  

  

 

 

  




  
  



    

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
