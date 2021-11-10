import { SearchProductsService } from './../../Services/search-products.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Place } from 'src/app/models/place';
import { TimeDelivery } from 'src/app/models/timeDelivery';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-recogida',
  templateUrl: './recogida.page.html',
  styleUrls: ['./recogida.page.scss'],
})
export class RecogidaPage {
  // Variable initialized onInit of the component
  lista_tipo_recogida: string[];
  lista_matricula: string[];
  DeliveryLocations: Place[];
  DeliveryHours: TimeDelivery[];
  // Variable representing the id of
  // the selected paramters among the available ones
  SelectedDeliveryLocId: number;
  SelectedDeliveryHourId: number;
  SelectedDeliveryType: String;
  SelectedMatricula: String;

  asignarColor:number;
  button_trami_reco:string="";
  bordes:string="";
  
  constructor(private search:SearchProductsService,
              private bbddService: BBDDService,
              private companyService: CompanyService,
              private router: Router,
              private alertController: AlertController) {
  }
  ngOnInit(){
    this.initSetup();
    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();
  }

  DesignarStylo(){
    if(this.asignarColor==1){
      //stylo mango
      this.button_trami_reco="btnTramitar-mango";
      this.bordes="borde_mango";
    }else if(this.asignarColor==2){
      //stylo dona
      this.button_trami_reco="btnTramitar";
      this.bordes="borde";
    }
    else if(this.asignarColor==3){
      //stylo miquel
      this.button_trami_reco="btnTramitar-miquel";
      this.bordes="borde_miquel";
    }
  }

  /**
   * Method used to initialize the variables of this component
   * @variables `lista_tipo_recogida` `lista_matricula` `DeliverHours` `DeliveryLocations`
   */
  initSetup(){
    this.lista_tipo_recogida = ["Parking", "Click and Collect"];
    this.lista_matricula = ["3376MKD"];
    this.companyService.getDeliveryLocation().then(data => { this.DeliveryLocations = data })
    this.DeliveryHours = this.companyService.getDeliveryHour();
  }
  /**
   * @check if the required information is provided.
   * @output Present alert to the user 
   * @output Update the delivery information and lead to the next payment page
   */
  clickBtnContinuar() {
    if (!(this.SelectedDeliveryHourId > -1 && this.SelectedDeliveryLocId > -1)) {
      this.presentAlert();
    }
    else {
      this.setDeliveryInfo();
      this.router.navigate(["/payout"]);
    }
  }
  /**
   * This method presents an alert to the user indicating the missing data
   * @output ``Los campos con * son obligatorios``
   */
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      message: 'Los campos con * son obligatorios',
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
      type: "compra"
    })
  }

  Servicio: string;

  CambioParking(dato: string){
    console.log("Hola");
    console.log(dato);
    this.search.AsignarValor(dato);
  }

  /**
   * TEst environment
   */
  PopoverOptions= {
    cssClass: 'alert',
    translucent: true
  }
}


