import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListoParaComerPageRoutingModule } from './listo-para-comer-routing.module';

import { ListoParaComerPage } from './listo-para-comer.page';
import { HeaderPage } from 'src/app/common/header/header.page';
import { ListSelectableItemsComponent } from '../../common/list-selectable-items/list-selectable-items.component';
import { SharedModule } from 'src/app/common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListoParaComerPageRoutingModule, 
    SharedModule
  ],
  declarations: [ListoParaComerPage, ListSelectableItemsComponent, HeaderPage]
})
export class ListoParaComerPageModule {}
