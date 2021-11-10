import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/event';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})

export class EventsPage implements OnInit {
  events:Evento[];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.events = this.companyService.getEvents();
  }

}
