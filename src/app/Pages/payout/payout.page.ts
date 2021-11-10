import { SearchProductsService } from './../../Services/search-products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from 'src/app/models/delivery';
import { Place } from 'src/app/models/place';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { CompanyService } from 'src/app/Services/company.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.page.html',
  styleUrls: ['./payout.page.scss'],
})
export class PayoutPage implements OnInit {
  /**User object */
  user: User;
  /** Street name*/ 
  street:string;
  /** Postal code of the city*/ 
  postal:string;
  /** City Name */
  city: string;
  /**Phone number for the delivery */
  phone:number;
  /**Estimated time of the delivery */
  time:string;

  /**Delivery Object */
  DeliveryInfo:Delivery;
  /**List of the products to sell */
  Products:Product[];
  /** Total price of the products to sell */
  totalPriceProducts:number=0;
  /** Total purchase price (including transport) */
  totalPrice: number=0;

  /**boolean representing if editable number or not */
  numberEditable:boolean=false;
  /**boolean representing if address editable or not  */
  addressEditable:boolean = false;
  route: any;

  asignarColor:number;
  diseno_lapiz_logo:string="";
  diseno_telefono_logo:string="";
  diseno_furgoneta_logo:string="";
  btn_tramita="";

  constructor(
    private search:SearchProductsService,
    private userService: UserService, 
    private router: Router,
    private bbddService: BBDDService) { }

  ngOnInit() {
    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();
    this.user=this.userService.getUser();
    this.phone = this.user.telephone ? this.user.telephone : 0;

    this.setDeliveryInfo();
    this.getProducts();
    this.totalPriceProducts = this.Products.map((product)=>{return product.price})
                              .reduce((acc,current)=>{return acc+current});
    this.totalPrice= this.totalPriceProducts + this.DeliveryInfo.cost;
  }

  DesignarStylo(){
    if(this.asignarColor==1){
      //stylo mango main-color material-icons-outlined
      this.diseno_lapiz_logo="main-color-mango material-icons-outlined";
      this.diseno_telefono_logo="material-icons-outlined main-color-mango";
      this.diseno_furgoneta_logo="material-icons main-color-mango";
      this.btn_tramita="btnTramitar-mango"
    }else if(this.asignarColor==2){
      //stylo dona
      this.diseno_lapiz_logo="main-color material-icons-outlined";
      this.diseno_telefono_logo="material-icons-outlined main-color";
      this.diseno_furgoneta_logo="material-icons main-color";
      this.btn_tramita="btnTramitar";
    }else if(this.asignarColor==3){
      //stylo miquel
      this.diseno_lapiz_logo="main-color-miquel material-icons-outlined";
      this.diseno_telefono_logo="material-icons-outlined main-color-miquel";
      this.diseno_furgoneta_logo="material-icons main-color-miquel";
      this.btn_tramita="btnTramitar-miquel"
    }
  }
  /**
   * Initialize the variable of this componentes
   * @variables `DeliveryInfo` `street` `time` `postal` `city`
   */
  setDeliveryInfo(){
    this.DeliveryInfo = this.bbddService.getDelivery();
    this.street= this.DeliveryInfo.location.street;
    this.time= this.DeliveryInfo.time.day.toString() + " ag. de " + this.DeliveryInfo.time.mintime.toString() + " - " + this.DeliveryInfo.time.maxtime.toString();
    this.postal= this.DeliveryInfo.location.postal.toString();
    this.city= this.DeliveryInfo.location.city;
  }  
  /**
  * Gets the products from the appropriate cart
  * @switch `type`
  * @case `normal shopping`
  * @case `ready to eat`
  */
  
  getProducts(){
    if(this.DeliveryInfo.type=="compra"){
      this.bbddService.getProductsInCart().subscribe(data=>{
        this.Products= data;
      })
    }
    else {
      this.bbddService.getProductsReadyInCart().subscribe(data=>{
        this.Products= data;
      })
    }
  }
  /**
   * Toggle if the phone number input is editable 
   */
  toggleNumber(){
    console.log("before")
    this.numberEditable=!this.numberEditable;
  }
  /**
   * Saves the phone number and the delivery object.
   * @output Redirect to confirmation page
   */

  clickBtnTramitar(){
    this.phone ? this.DeliveryInfo.phone=this.phone: "" ;
    this.bbddService.setDelivery(this.DeliveryInfo);
    this.router.navigate(["/confirm-payment"])
  }

}
