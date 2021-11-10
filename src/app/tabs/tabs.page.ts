import { SearchProductsService } from './../Services/search-products.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BBDDService } from '../Services/bbdd.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  NumberProductsInCart:number=0;
  NumberProductsInCartObs: Subscription;
  asignarColor:number;
  diseno_iconos="";

  constructor(private search:SearchProductsService,private router: Router,
    private bbddService: BBDDService) { }
    ngOnInit() {
      this.NumberProductsInCartObs = this.bbddService.getProductsInCart().subscribe(Data => {
        if(Data) this.NumberProductsInCart = Data.length;
        else this.NumberProductsInCart=0;
      });

      this.asignarColor=this.search.ReturnConfg();
      this.DesignarStylo();
    }

    DesignarStylo(){
      if(this.asignarColor==1){
        //stylo mango
        this.diseno_iconos="tab-mango";
        //this.text_name="text1-mango";
      }else if(this.asignarColor==2){
        //stylo dona
        this.diseno_iconos="tab-selected";
        //this.text_name="text1";
      }else if(this.asignarColor==3){
        //stylo miquel
        this.diseno_iconos="tab-miquel";
        //this.text_name="text1-miquel";
      }
    }

    ngOnDestroy() {
      this.NumberProductsInCartObs.unsubscribe();
    }

}
