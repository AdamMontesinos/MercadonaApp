import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/models/product';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { SearchProductsService } from 'src/app/Services/search-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  /*Obtienes el primer elemento en el documento con class = "ion-searchbar"
  comentario escrito por Jonathan XD*/
  searchbar = document.querySelector('ion-searchbar');
  /*Productos disponibles es la lista receptora que recibe la lista que viene del servicio*/
  productosDisponibles: any[];
  textoBuscar="";
  constructor(private bbddService: BBDDService,private searchProductsService: SearchProductsService){
    console.log("product page created");
    /*Esto lo dejó simran(linea de abajo) al parecer es una linea no util ya que lanza el metodo handleinput
    que no se lanzará nunca porque dejó la linea comentada*/
    //this.searchbar.addEventListener('ionInput', handleInput);
  }
  ngOnInit() {
    /*Se ha suscrito a la observable para recibir todos los productos que estan en la lista del servicio con 
    nombre ProductsList*/
    
    this.searchProductsService.getProducts().subscribe(data => this.productosDisponibles = data);
    
    console.log(this.productosDisponibles);
    this.bbddService.returnSubject().subscribe(data=>{
      this.textoBuscar=data;
    });
  }
}
