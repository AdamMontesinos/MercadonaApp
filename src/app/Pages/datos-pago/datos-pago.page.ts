import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-pago',
  templateUrl: './datos-pago.page.html',
  styleUrls: ['./datos-pago.page.scss'],
})
export class DatosPagoPage  {
  title:string;

  constructor() {
    this.title="Realizar el pago";
   }

}
