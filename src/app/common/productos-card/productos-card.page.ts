import { SearchProductsService } from 'src/app/Services/search-products.service';
import { CartPageModule } from '../../Pages/cartTab/Cart.module';
import { LoginPage } from './../../Pages/login/login.page';
import { Component, Input, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { Product } from 'src/app/models/product';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-productos-card',
  templateUrl: './productos-card.page.html',
  styleUrls: ['./productos-card.page.scss'],
})
export class ProductosCardPage implements OnInit {

  //el decorador input esta recibiendo los nombres de la lista del componente products.page.ts
  @Input() producto: Product;

  //PLANTILLA DE PROPIEDADES DE UN PRODUCTO
  text1 = "Adidas Originals";
  text2 = "The Original and Best";  
  text3 = "25,00$";
  Img = "ImgProducto";
  URL = "http://localhost:8100/assets/img/tomates.png";

  asignarColor:number;
  button_plus:string="";
  text_name:string="";
  
  constructor(private search:SearchProductsService,private bbddService: BBDDService,private router: Router,public toastController: ToastController){
  }

  ngOnInit() {
    //console.log("product recevied", this.producto)
    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();
  }
  DesignarStylo(){
    if(this.asignarColor==1){
      //stylo mango
      this.button_plus="buttonplus-mango";
      this.text_name="text1-mango";
    }else if(this.asignarColor==2){
      //stylo dona
      this.button_plus="buttonplus";
      this.text_name="text1";
    }else if(this.asignarColor==3){
      //stylo miquel
      this.button_plus="buttonplus-miquel";
      this.text_name="text1-miquel";
    }
  }
  //con esto agregamos un producto a la lista que esta en el servicio(que luego la usas en el carrito)
  AddProductToCart() {
    this.bbddService.AddProductCart(this.producto);
    this.presentToast();
  }
  //metodo que se encarga de navegar a otra la pagina /info-producto y le pasa el producto como parametro
  showProductDetails() {
    let navigationExtras: NavigationExtras = {
      queryParams: {'product': JSON.stringify(this.producto)}
    };
    console.log(this.producto)
    this.router.navigate(["/info-producto"], navigationExtras)
  }
  //Este metodo nos envia un toast a nuestra pagina informandonos de producto añadido
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Producto añadido',duration: 500,cssClass:'buttonplus', position: 'top'});
    toast.present();
  }

}
