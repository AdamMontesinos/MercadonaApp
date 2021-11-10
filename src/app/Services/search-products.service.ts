import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,Operator } from 'rxjs';
import { Product } from '../models/product';
var p="";
import * as listadeVestidos from 'src/assets/json/dresses.json';
import * as listadeFrutas from 'src/assets/json/fruits.json';
import * as iconlist from 'src/assets/json/iconos.json';
@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {
  /*Tipo de configuracion de sass:
  OPCION 1: mango 
  OPCION 2: dona 
  OPCION 3: miquel 
  por defecto sera dona solo lo cambias por mango y ya esta*/
  stylo_de_sass='';

  /*En este servicio tenemos 2 lista que son subjects es decir un gestor de eventos que 
  va emitiendo datos o actualizandolos mejor dicho a traves del metodo next
  ProductsList es la lista que se utiliza en el componente productos luego en la linea 33 si te fijas lanzas 
  esos datos actualizados para que aquellos componentes que estan suscritos se enteren que ha pasado algo eso 
  es lo que hace el metodo next(datos) que recibe una lista de datos en este caso la lista ProductsList esto lo 
  hace el metodo UpdateProductLists*/
  private ProductsList: any[]=[];
  ProductListObs: BehaviorSubject<any> = new BehaviorSubject([]);
  private ProductsListReady: Product[];
  ProductListReadyObs: BehaviorSubject<any> = new BehaviorSubject([]);
  private IconList: any[]=[];
  IconListObs: BehaviorSubject<any> = new BehaviorSubject([]);
  //Almacenamos la lista de postres en la postres
  Postres: any = listadeVestidos; //Productos
  Postres2: any = listadeFrutas; //Productos
  Postres3: any = listadeFrutas; //Productos

  Icons: any = iconlist; //Iconos
  index=0;

  constructor() {
    //this.ReturnConfg();

    this.CargarIconos();
    this.UpdateIconList();

    //PRODUCT_LIST_READY SON LOS PRODUCTOS QUE SALEN EN LISTO PARA COMER DE MUESTRA
    this.ProductsListReady = [
      {id: 5, name: "pizza1", description: "The original and the best", url: "../../assets/imgs/tomates.png", price: 10, originalprice: 10, quantity: 1, type:"pizza" },
      {id: 6, name: "pizza2", description: "The original and the best", url: "../../assets/imgs/tomates.png", price: 20, originalprice: 20, quantity: 1, type:"pizza" },
      {id: 7, name: "pizza3", description: "The original and the best", url: "../../assets/imgs/tomates.png", price: 30, originalprice: 30, quantity: 1, type:"pizza" },
      {id: 8, name: "pizza4", description: "The original and the best", url: "../../assets/imgs/tomates.png", price: 30, originalprice: 30, quantity: 1, type:"pizza" },
      {id: 9, name: "bebida1", description: "The original and the best", url: "../../assets/imgs/tomates.png", price: 10, originalprice: 10, quantity: 1, type:"bebida" },
      {id: 10, name: "bebida2", description: "The original and the best", url: "../../assets/imgs/tomates.png", price: 20, originalprice: 20, quantity: 1, type:"bebida" },
      {id: 11, name: "bebida3", description: "The original and the best", url: "../../assets/imgs/tomates.png", price: 30, originalprice: 30, quantity: 1, type:"bebida" },
      {id: 12, name: "bebida4", description: "The original and the best", url: "../../assets/imgs/tomates.png", price: 30, originalprice: 30, quantity: 1, type:"bebida" },
    ]
    this.UpdateProductListReady();
  }
  
  styloActual(dato:string){
    this.stylo_de_sass=dato;
  }

  ReturnConfg(){
    if(this.stylo_de_sass=='mango'){
        return 1;
    }else if(this.stylo_de_sass=='dona'){
        return 2;
    }else if(this.stylo_de_sass=='miquel'){
        return 3;
    }
  }

  getStyloSass(){
    return this.stylo_de_sass;
  }
  
  CargarProductos(){
      //postres son vestidos
      if(this.stylo_de_sass=='mango'){
        const relevo: any=[];
        for (let index = 0; index < this.Postres.length; index++) {
          const element = this.Postres[index];
          relevo.push(element);
          //this.ProductsList=relevo;
          this.UpdateProductList(relevo);
        }
      }else if(this.stylo_de_sass=='dona'){
        const relevo2: any=[];
        for (let index = 0; index < this.Postres2.length; index++) {
          const element = this.Postres2[index];
          relevo2.push(element);
          this.UpdateProductList(relevo2);
        }
      }else if(this.stylo_de_sass=='miquel'){
        const relevo3: any=[];
        for (let index = 0; index < this.Postres3.length; index++) {
          const element = this.Postres3[index];
          relevo3.push(element);
          this.UpdateProductList(relevo3);
        }
      }      
  }

  ///////////////////////////////////////////////////////////Comprobar
  CargarIconos(){
    for (let index = 0; index < this.Icons.length; index++) {
      const element = this.Icons[index];
      this.IconList.push(element);
    }
  }
  ////////////////////////////////////////////////////////////Comprobar
  
  /////////////////////////////////////////////ParkingOCollect

  Valor : string;

  AsignarValor(dato: string) {
    this.Valor=dato;
  }

  getValor() {
    return this.Valor;
  }

  ////////////////////////////////////////////

  UpdateProductList(lista:any) {
      this.ProductListObs.next(lista);
  }

  getProducts() {
    //este metodo retorna nuestro subject(que es una observable para que los componentes se suscriban)
    return this.ProductListObs.asObservable();
  }

  UpdateProductListReady() {
    this.ProductListReadyObs.next(this.ProductsListReady);
  }

  getProductsReady() {
    return this.ProductListReadyObs.asObservable();
  }

  UpdateIconList() {
    this.IconListObs.next(this.IconList);
  }

  getIcons() {
    return this.IconListObs.asObservable();
  }
  
}
