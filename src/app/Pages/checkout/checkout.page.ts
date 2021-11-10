import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from 'src/app/models/place';
import { Product } from 'src/app/models/product';
import { TimeDelivery } from 'src/app/models/timeDelivery';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  // List of all the prodcuts in the cart and a listener of it
  ProductList: Product[]; 
  ProductListObserver: Subscription;
  // Possible delivery hours and the id of each one
  DeliveryHours: TimeDelivery[]=[];
  SelectedDeliveryHourId: number;
  // Possible delivery locations and the id of each one
  DeliveryLocations: Place[]=[];
  SelectedDeliveryLocId: number;
  // Total price of the selected products
  TotalPrice: number=0;

  constructor(private bbddService: BBDDService,
              private companyService: CompanyService,
              private router: Router,
              private alertController: AlertController,
  ) { }
  ngOnInit() {
    this.initSetup();
  }
  /** Destroys the subscriptions for product list   */
  ngOnDestroy(){
    this.ProductListObserver.unsubscribe();
  }
  /**
   * Method used to initialize the variables of this component
   * @variables `ProductList` `TotalPrice` `DeliverHours` `DeliveryLocations`
   */
  initSetup(){
    this.ProductListObserver = this.bbddService.getProductsReadyInCart()
    .subscribe(data => { 
      this.ProductList = data; 
      this.TotalPrice= this.ProductList.map( val => {return val.price}).reduce((acc, current) => {return acc+current} )
    });

  this.DeliveryHours = this.companyService.getDeliveryHour();
  this.companyService.getDeliveryLocation().then(data => this.DeliveryLocations = data );
  }
  /**
   * @check if the required information is provided.
   * @output Present alert to the user 
   * @output Update the delivery information and lead to the next page
   */
  async payOut(){
    if (!(this.SelectedDeliveryHourId>-1 && this.SelectedDeliveryLocId>-1)) {
      this.presentAlert();
     }
    else {
      this.setDeliveryInfo();
      this.router.navigate(["/payout"])
    }
  }
  /**
   * This method presents an alert to the user indicating the missing data
   * @output ``Los campos con * son obligatorios``
   */
  async presentAlert(){
    const alert = await this.alertController.create({
      cssClass: 'alert',
      message: 'Los campos con <b>*</b> son obligatorios',
      buttons: ['OK']
    });
    await alert.present();
  }
  /**
   * This method sets the information of delivery in bbddService
   * @parameters updated: `location` `time` `cost` `type`
   */
  setDeliveryInfo() {
    this.bbddService.setDelivery({
      location: this.DeliveryLocations[this.SelectedDeliveryLocId],
      time: this.DeliveryHours[this.SelectedDeliveryHourId],
      cost: this.companyService.getDeliveryCost(),
      type: "listo"
    })
  }
}