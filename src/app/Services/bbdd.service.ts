import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductCard2PageModule } from '../common/product-card2/product-card2.module';
import { Delivery } from '../models/delivery';
import { Place } from '../models/place';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BBDDService {

  name: string = "BBDD working";
  nombreProducto = "good";

  private filtro:string='hey';
  mysubject=new Subject<string>();

  //################### COMPRAR(COMPONENTE PRODUCTOS) ############################
  private ProductsInCart: Product[] = [];
  ProductsInCartObs: BehaviorSubject<any> = new BehaviorSubject([]);

  private ProductsInCartReady: Product[] = [];
  ProductsInCartReadyObs: BehaviorSubject<any> = new BehaviorSubject([]);

  private DeliveryInfo : Delivery;

  
  private PagesNames = {
    login: "Login",
  }

  constructor() {
  }

  //##################################################################
  //###########  METODOS UTILIZADOS EN EL FILTRO ############## 
  //##################################################################
  SetValue(sonFilter:string){
    this.filtro=sonFilter;
    this.mysubject.next(this.filtro);
  }
  returnSubject(){
    return this.mysubject;
  }
  //##################################################################
  //###########  METODOS UTILIZADOS EN DELIVERY ############## 
  //##################################################################
  getDelivery(){
    return this.DeliveryInfo;
  }
  setDelivery(delivery: Delivery){
    this.DeliveryInfo= delivery;
  }
  //##################################################################
  //###########  METODOS UTILIZADOS EN PRODUCTOS ############## 
  //##################################################################
  getProductsInCart() {
    return this.ProductsInCartObs.asObservable();
  }
  resetProduct(){
    this.ProductsInCart= [];
    this.UpdateProductList();
  } 
  UpdateProductList() {
    this.ProductsInCartObs.next(this.ProductsInCart);
  }
  //Metodo que agrega un producto al carrito
  AddProductCart(product: Product)
   {   
    console.log("Soy addProductCart el metodo activado")
    try {
      let alreadyAddedIndex = this.ProductsInCart.findIndex(e =>
         e.name == product.name);
      if (alreadyAddedIndex > -1) {
        //Establecemos en 1 la cantidad
        this.ProductsInCart[alreadyAddedIndex].quantity += 1;
        //Establecemos el precio del producto
        this.ProductsInCart[alreadyAddedIndex].price = this.ProductsInCart[alreadyAddedIndex].originalprice;
      }
      else {
        this.ProductsInCart.push(product);
      }
      this.ProductsInCartObs.next(this.ProductsInCart); 
      return 1
    }
    catch {
      return 0;
    }
  }
  //Decrementar la cantidad de un producto en especifico
  DecrementQuantity(product: Product) {
    console.log("bajar cantidad");
    let productIndex = this.ProductsInCart.findIndex(producto => producto == product);
    this.ProductsInCart[productIndex].quantity -= 1;
    this.DecrementPrice(product); 
    this.UpdateProductList();
  }
  //Incrementar la cantidad de un producto en especifico
  IncrementQuantity(product: Product) {
    console.log("subir cantidad");
    let productIndex = this.ProductsInCart.findIndex(producto => producto == product);
    this.ProductsInCart[productIndex].quantity += 1;
    this.IncrementPrice(product); 
    this.UpdateProductList();
  }
  //Metodo para incrementar los precios del producto
  IncrementPrice(product: Product) {
    console.log("incrementar precio");
    let productIndex = this.ProductsInCart.findIndex(producto => producto == product);
    this.ProductsInCart[productIndex].price += this.ProductsInCart[productIndex].originalprice;
    this.UpdateProductList();
  }
  //metodo para bajar los precios de un producto
  DecrementPrice(product: Product) {
    console.log("bajar precio");
    let productIndex = this.ProductsInCart.findIndex(producto => producto == product);
    this.ProductsInCart[productIndex].price -= this.ProductsInCart[productIndex].originalprice;
    //this.UpdateProductList();
  }

  //Este metodo funciona perfectamente
  DeleteProductFromCart(product: Product) {
    console.log("bajar producto(bote de basura)");
    this.ProductsInCart = this.ProductsInCart.filter(producto => producto != product);
    this.UpdateProductList();
  }

  //##################################################################
  //###########  METODOS UTILIZADOS EN LISTO PARA COMER ############## 
  //##################################################################
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  AddProductCartReady(product: Product)  {   
    console.log("Adding new product to the Ready cart")
    try {
      let alreadyAddedIndex = this.ProductsInCartReady.findIndex(e => e.name == product.name);
      if (alreadyAddedIndex > -1) {
        this.ProductsInCartReady[alreadyAddedIndex].quantity += 1;
      }
      else {
        this.ProductsInCartReady.push(product);
      }
      this.UpdateProductReadyList();
      console.log("products in cart", this.ProductsInCartReady.length);
      return 1
    }
    catch (error) {
      console.log("Error adding the new product: " + error)
      return 0;
    }
  }
  UpdateProductReadyList() {
    this.ProductsInCartReadyObs.next(this.ProductsInCartReady);
  }
  DecrementQuantityReady(product: Product) {
    let productIndex = this.ProductsInCartReady.findIndex(producto => producto == product);
    this.ProductsInCartReady[productIndex].quantity -= 1;
    console.log(this.ProductsInCartReady);
    this.UpdateProductReadyList();
  }
  DeleteProductCartReady(product: Product) {
    this.ProductsInCartReady = this.ProductsInCartReady.filter(producto => producto != product);
    this.UpdateProductReadyList();
  }
  getProductsReadyInCart() {
    return this.ProductsInCartReadyObs.asObservable();
  }
  resetProductReady(){
    this.ProductsInCartReady= [];
    this.UpdateProductReadyList();
  }
  PageName(number: number) {
    return this.PageName[number];
  }
}
