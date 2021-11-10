import { SearchProductsService } from 'src/app/Services/search-products.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.page.html',
  styleUrls: ['./gracias.page.scss'],
})
export class GraciasPage implements OnInit {

  @Input() height: number;
  style: string = "height:100%; width:100%;";
  buttonStyle="";
  asignarColor:number;
  img_app="";
  img_dona="../../../assets/imgs/logo_mercadona.png";
  img_mango="../../../assets/vestidos/mango_logo2.jpg";
  img_miquel="../../../assets/imgs/miquelAlimentacio.jpg";
  constructor(private search:SearchProductsService,private router:Router) {}
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

}
