import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { SearchProductsService } from 'src/app/Services/search-products.service';
import {HeaderPage} from '../header/header.page'
@Component({
  selector: 'app-list-selectable-items',
  templateUrl: './list-selectable-items.component.html',
  styleUrls: ['./list-selectable-items.component.scss'],
})
export class ListSelectableItemsComponent implements OnInit {

  @Input() TitlePage: string;
  @Input() FilterName: string;

  
  ProductList: Product[]=[];
  ProductListObserver: Subscription;

  ProductListCartObserver: Subscription;
  ProductListCart: Product[]=[]; // Products in the cart

  constructor(private modalController: ModalController, 
    private bbddService: BBDDService, 
    private searchProuctsService: SearchProductsService) {
  }

  ngOnInit() {
    this.ProductListObserver =  this.searchProuctsService.getProductsReady().subscribe(Data => {
      
      this.ProductList = Data.filter( elemento => elemento.type == this.FilterName)
      
    });

    this.ProductListCartObserver = this.bbddService.getProductsReadyInCart().subscribe(data=>{
      this.ProductListCart=data;      
    });

    
  }

  ngOnDestroy() {
    this.ProductListObserver.unsubscribe();
    this.ProductListCartObserver.unsubscribe();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  checkifInCart(product: Product) {
    /**
     * Check if the product is already added in the cart
     */
    try {
      return this.ProductListCart.includes(product) ? true : false;
    }
    catch {
      return false;
    }
  }
  
  onClicka( product:Product) {
    /**
     * Adds or remomves the  product form the cart
     * @param product product to be added/removed
     * 
    */
    let checkbox = <HTMLInputElement>  document.getElementById(product.id.toString());

    if(!checkbox.checked) {this.bbddService.AddProductCartReady(product)}
    else {this.bbddService.DeleteProductCartReady(product)}

    /* 
    To delete

    console.log("before" + checkbox.checked)

    checkbox.checked=!checkbox.checked
    checkbox = <HTMLInputElement>  document.getElementById(product.id.toString());
    console.log("after" + checkbox.checked)
    
    */

  }

  onClick(event, product: Product) {
    /**
     * Use if the ion-checkbox is used, not recommended
     */
    console.log(event.srcElement.checked)
    if(event.srcElement.checked) // event return false if current state is true
    {
      this.bbddService.AddProductCartReady(product);
    }
    else {
      this.bbddService.DeleteProductCartReady(product);
    } 

    // console.log(typeof(event))
    // console.log(event); // oppostite of the real value
    // // document.getElementById(product.id.toString()).setAttribute("checked", "true");
    // console.log(event.srcElement.checked); // oppostite of the real value
    // console.log(event);
   
    // check.onclick = ()=>{check.attributes.getNamedItem("color").nodeValue ="dark"; console.log("helsadf")}
    // check.onclick(event);

    console.log(product)
  }

}
