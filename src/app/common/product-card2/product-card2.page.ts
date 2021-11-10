import { Component, Input, OnInit } from '@angular/core';
import { proxyInputs } from '@ionic/angular/directives/proxies-utils';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-product-card2',
  templateUrl: './product-card2.page.html',
  styleUrls: ['./product-card2.page.scss'],
})
export class ProductCard2Page implements OnInit {
  
  liked: boolean=false;
  @Input() news:News;

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.liked=!this.liked
  }


}
