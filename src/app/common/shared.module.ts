import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageModule } from './header/header.module';
import { ProductCard2PageModule } from './product-card2/product-card2.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderPageModule,
    ProductCard2PageModule,
    PipesModule
  ],
  exports:[
    HeaderPageModule,
    ProductCard2PageModule
  ]
})
export class SharedModule { }
