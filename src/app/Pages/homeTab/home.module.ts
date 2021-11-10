import { PipesModule } from './../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderPage } from 'src/app/common/header/header.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ProductsPageModule } from '../products/products.module';
import { RecogidaPageModule } from '../recogida/recogida.module';
import { SharedModule } from 'src/app/common/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    ProductsPageModule,
    RecogidaPageModule,
    SharedModule,
    PipesModule
  ],
  declarations: [HomePage, HeaderPage]
})
export class HomePageModule { }
