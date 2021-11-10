import { SearchProductsService } from './../../Services/search-products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartPageRoutingModule } from './Cart-routing.module';
import { ModalController, NavController } from '@ionic/angular';
import { RecogidaPage } from '../recogida/recogida.page';
import { PopoverController } from '@ionic/angular';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { Product } from 'src/app/models/product';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-Cart>',
  templateUrl: 'Cart.page.html',
  styleUrls: ['Cart.page.scss']
})

export class CartPage implements OnInit, OnDestroy {
  rootPage = RecogidaPage;
  ProductList: Product[];
  ProductListObserver: Subscription;
  asignarColor:number;
  button_tramitar:string="";
  button_mas_menos="";
  
  constructor(private search:SearchProductsService,public router: Router,public modalController: ModalController,
    private popoverController: PopoverController,private bbddService: BBDDService) {
  }
  ngOnInit() {
    this.ProductListObserver = this.bbddService.getProductsInCart().subscribe(Data => {
      this.ProductList = Data;  
    });
    console.log(this.ProductList);

    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();
  }

  DesignarStylo(){
    if(this.asignarColor==1){
      //stylo mango
      this.button_tramitar="btnTramitar-mango";
      this.button_mas_menos="btnIcon-mango";
    }else if(this.asignarColor==2){
      //stylo dona
      this.button_tramitar="btnTramitar";
      this.button_mas_menos="btnIcon";
    }else if(this.asignarColor==3){
      //stylo miquel
      this.button_tramitar="btnTramitar-miquel";
      this.button_mas_menos="btnIcon-miquel";
    }
  }

  ngOnDestroy() {
    this.ProductListObserver.unsubscribe();
  }

  DecrementQuantity(product: Product) {
    this.bbddService.DecrementQuantity(product);
    console.log("soy decrement");
  }

  //metodo que se activa dar al boton (+) de la lista de productos
  IncrementQuantity(product: Product) {
    console.log("Boton de sumar clikado");
    this.bbddService.AddProductCart(product);
  }
  
  DecrementPrice(product: Product) {
    console.log("bajar precio");
    this.bbddService.DecrementQuantity(product);
  }

  IncrementPrice(product: Product) {
    this.bbddService.IncrementQuantity(product);
    console.log("subir precio");
  }

  //metodo que activa el bote de la basura
  DeleteProductFromCart(product: Product) {
    this.bbddService.DeleteProductFromCart(product);
    console.log("soy delete");
  }



  AnyProduct() {
    try {
      return (this.ProductList.length > 0 ? true : false)
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  ShowProductInfo() {
    console.log("moving to the Details");
    this.router.navigateByUrl("/recogida");
    // this.presentModal();
    // this.presentPopover();

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RecogidaPage,
      componentProps: { name: "example" }
    });
    return await modal.present();
  }
  async presentPopover() {
    const popover = await this.popoverController.create({
      component: RecogidaPage,
      translucent: true,
      animated: true,
      cssClass: `'`
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
