import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  ListaCompras:{}[]=[]

  constructor() { }

  ngOnInit() {
    this.ListaCompras[this.ListaCompras.length] = {date: "21/08/03",place: "Calle Esteve Terradas", estado:"Pendiente"};
    this.ListaCompras[this.ListaCompras.length] = {date: "22/08/03",place: "Calle Esteve Terradas", estado:"Recogida"};
    this.ListaCompras[this.ListaCompras.length] = {date: "23/08/03",place: "Calle Esteve Terradas", estado:"Pendiente"};
    

    /*
    Obtain the data to fill the list
    */
  }

}
