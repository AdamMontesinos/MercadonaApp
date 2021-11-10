import { SearchProductsService } from './../../Services/search-products.service';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecogidaPage } from '../recogida/recogida.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  asignarColor:number;
  diseno_menu:string="";
  diseno_buscador:string="";
 

  constructor(private search:SearchProductsService,private bbdd:BBDDService){ 
    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();  
    console.log(this.asignarColor); 
  }

  DesignarStylo(){
    if(this.asignarColor==1){
      //stylo mango
      this.diseno_menu="tab-selected-mango";
      this.diseno_buscador="searchBarProducts-mango";
    }else if(this.asignarColor==2){
      //stylo dona
      this.diseno_menu="tab-selected";
      this.diseno_buscador="searchBarProducts";
    }else if(this.asignarColor==3){
      //stylo miquel
      this.diseno_menu="tab-selected-miquel";
      this.diseno_buscador="searchBarProducts-miquel";
    }
  }

  Buscar(event){
    this.bbdd.SetValue(event.detail.value);
    console.log(event.detail.value);
  }
  
}

