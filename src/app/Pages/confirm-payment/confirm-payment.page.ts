import { SearchProductsService } from 'src/app/Services/search-products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BBDDService } from 'src/app/Services/bbdd.service';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.page.html',
  styleUrls: ['./confirm-payment.page.scss'],
})
export class ConfirmPaymentPage implements OnInit {
  loading:any;

  cardNumber:number;  
  month:number;  
  year:number;  
  CVV:number;  
  route: any;

  buttonStyle="";
  asignarColor:number;

  constructor(private search:SearchProductsService,
              private router: Router,
              private loadingCtrl: LoadingController,
              private bbddService: BBDDService,
              private alertController: AlertController
              ) { }
              
  ngOnInit() {
    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();
  }

  DesignarStylo(){
    if(this.asignarColor==1){
      //stylo mango
      this.buttonStyle="btnTramitar-mango";
    }else if(this.asignarColor==2){
      //stylo dona
      this.buttonStyle="btnTramitar";
    }else if(this.asignarColor==3){
      //stylo dona
      this.buttonStyle="btnTramitar-miquel";
    }
  }

  async showLoading() {  
    this.loading = await this.loadingCtrl.create({  
    message: 'Realizando la transacción...'   
    });  
    this.loading.present();  
    await this.fakeWaiting();
    this.loading.dismiss();  
 }   
  async fakeWaiting() {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, 2000);
    });
  }
  async clickBtnConfirm(){
    // The payment is done here
    console.log(this.year, this.month, this.cardNumber, this.CVV)
    if(! (this.year && this.month && this.CVV && this.cardNumber) ){
      this.presentAlert();
    }
    else{
      await this.showLoading();
      this.bbddService.getDelivery().type=="compra" ? this.bbddService.resetProduct():this.bbddService.resetProductReady();
      if (this.search.getValor() == 'Parking') {
        this.router.navigate(['ticketdigital']);
      } else {
        this.router.navigate(['gracias']);
      }
    }
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      cssClass: 'alert',
      message: 'Todos los campos son obligatorios',
      buttons: ['OK']
    });
    await alert.present();
  }

}
