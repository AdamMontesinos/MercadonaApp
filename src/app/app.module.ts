import { PipesModule } from './pipes/pipes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMatomoTrackerModule } from '@ngx-matomo/tracker';
import { HeaderPageModule } from './common/header/header.module';
import { ProductsPageModule } from './Pages/products/products.module';
import { RecogidaPageModule } from './Pages/recogida/recogida.module';

export var indices={
  indice:"5",
};

@NgModule({
  declarations: [AppComponent,  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NgxMatomoTrackerModule.forRoot({
      siteId: indices.indice, // your Matomo's site ID (find it in your Matomo's settings)
      trackerUrl: 'https://tsystems.matomo.cloud', // your matomo server root url
    }),
    AppRoutingModule,
    PipesModule,
    HttpClientModule,
    FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

}
