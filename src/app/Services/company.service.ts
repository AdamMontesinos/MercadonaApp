import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Evento } from '../models/event';
import { News } from '../models/news';
import { Place } from '../models/place';
import { TimeDelivery } from '../models/timeDelivery';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private Places: Location[];
  PlacesSubject: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { 
    // this.Places=
    // [
      // {street: "Av larraona 1", postal: parseInt("08030"), city: "Barcelona",},
      // {street: "Av larraona 2", postal: parseInt("08030"), city: "Barcelona",},
      // {street: "Av larraona 3", postal: parseInt("08030"), city: "Barcelona",},
    // ]
  }
  ngOnInit(){
    this.PlacesSubject.next(this.Places);
  }
  
  /**
   * Consult the possible deliver times
   * @output array of the times
   * each element of time has an id, mintime and maxtime
   */
  getDeliveryHour(): TimeDelivery[]{
    return [
      { id: 1, mintime: "07:00", maxtime: "08:00", day: new Date().getDate()+7},
      { id: 2, mintime: "08:00", maxtime: "09:00", day: new Date().getDate()+4},
      { id: 3, mintime: "15:00", maxtime: "16:00", day: new Date().getDate()+5},
    ]
  }
  async getDeliveryLocation(): Promise<Place[]>{
    // Search for the upcoming events online
    return [
      {street: "Av larraona 1", postal: parseInt("08030"), city: "Barcelona",},
      {street: "Av larraona 2", postal: parseInt("08030"), city: "Barcelona",},
      {street: "Av larraona 3", postal: parseInt("08030"), city: "Barcelona",},
    ]
  }
  getEvents(): Evento[]{

    // Search for events
    return [
      {day: new Date(2021, 7, 30), url: "../../assets/imgs/eventimg1.png", title: "Seguridad e Higiene", place: "Lorem ipsum", available: true,phone: 999333939},
      {day: new Date(2021, 7, 31), url: "../../assets/imgs/eventimg2.png", title: "Listo para comer", place: "Lorem ipsum", available: false,phone: 999333939 },
      {day: new Date(2021, 8, 4),  url: "../../assets/imgs/eventimg3.png", title: "Cocina Veggie", place: "Lorem ipsum", available: true,phone: 999333939 }
    ]
  }
  getNews(): News[]{
    return [
      {id:1, description: "Disfruta de nestras nuevas Pizzas. Pronto en tu supermercado más cercano", url:"../../assets/imgs/pizzanovedad.png"  },
      {id:2, description: "Para compartir con quien tu quieras, nuevos chips de Batata. Pronto en tu supermercado más cercano", url:"../../assets/imgs/chipsbatata.png"  },
      {id:3, description: "Lo mejor para tu piel, pronto en tu supermercado más cercano. Gel de manos.", url:"../../assets/imgs/geldemans.png"  },
    ]
  }
  getDeliveryCost(): number {
      // Search for the cost of the delivery
      return 2.5;
  }


}
