import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { HeaderPage } from 'src/app/common/header/header.page';
import { SharedModule } from 'src/app/common/shared.module';
import { EventComponent } from 'src/app/common/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    SharedModule  
  ],
  declarations: [EventsPage, EventComponent, HeaderPage]
})
export class EventsPageModule {}
