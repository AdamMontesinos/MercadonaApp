import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchProductsService } from 'src/app/Services/search-products.service';

@Component({
  selector: 'app-gracias2',
  templateUrl: './gracias2.page.html',
  styleUrls: ['./gracias2.page.scss'],
})
export class Gracias2Page implements OnInit {

  @Input() height: number;
  style: string = "height:100%; width:100%;";
  buttonStyle="";
  asignarColor:number;
  constructor(private router:Router,private search:SearchProductsService) { }
  ngOnInit() {
    this.asignarColor=this.search.ReturnConfg();
    this.DesignarStylo();
  }
  RegresarAHome(){
    if(this.asignarColor==1){
      this.router.navigate(["/login/mango"]);
    }else if(this.asignarColor==2){
      this.router.navigate(["/login/dona"]);
    }
  }
  DesignarStylo(){
    if(this.asignarColor==1){      
      this.buttonStyle="btnTramitar-mango";
    }else if(this.asignarColor==2){
      this.buttonStyle="btnTramitar";
    }
  }

}
