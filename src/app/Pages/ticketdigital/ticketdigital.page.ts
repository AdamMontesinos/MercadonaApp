import { SearchProductsService } from 'src/app/Services/search-products.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-ticketdigital',
  templateUrl: './ticketdigital.page.html',
  styleUrls: ['./ticketdigital.page.scss'],
})
export class TicketdigitalPage implements OnInit {

  asignarColor:number;
  buttonStyle="";
  img_app="";
  img_dona="../../../assets/imgs/logo_mercadona.png";
  img_mango="../../../assets/vestidos/mango_logo2.jpg";
  img_miquel="../../../assets/imgs/miquelAlimentacio.jpg";

  constructor(private search:SearchProductsService,private router:Router) { }

  ngOnInit() {
    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();
  }

  RegresarAHome(){
    if(this.asignarColor==1){
      this.router.navigate(["/login/mango"]);
    }else if(this.asignarColor==2){
      this.router.navigate(["/login/dona"]);
    }else if(this.asignarColor==3){
      this.router.navigate(["/login/miquel"]);
    }
  }
  DesignarStylo(){
    if(this.asignarColor==1){
      this.buttonStyle="btnTramitar-mango";
      this.img_app=this.img_mango;
    }else if(this.asignarColor==2){
      this.buttonStyle="btnTramitar";
      this.img_app=this.img_dona;
    }else if(this.asignarColor==3){
      this.buttonStyle="btnTramitar-miquel";
      this.img_app=this.img_miquel;
    }
  }

  VolverHome(){
    const navigationExtras: NavigationExtras = { state: { prova: "prova" } };
    this.router.navigate(["/login"], navigationExtras)
    console.log("De vuelta al inicio");
  }

}
