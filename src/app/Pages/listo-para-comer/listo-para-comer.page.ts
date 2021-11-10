import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ListSelectableItemsComponent } from 'src/app/common/list-selectable-items/list-selectable-items.component';
import { BBDDService } from 'src/app/Services/bbdd.service';

@Component({
  selector: 'app-listo-para-comer',
  templateUrl: './listo-para-comer.page.html',
  styleUrls: ['./listo-para-comer.page.scss'],
})
export class ListoParaComerPage implements OnInit {

  /*ProductInCartBool es una variable que la utiliza sinram para crear el boton de tramitar pedido
  cuando el usuario clique una opcion de producto en la ventana modal */
  ProductInCartBool = false;

  /*En el html hay 2 ion-rows que tiene unos labels con el contenido "Pizzas a tu gusto" y "Bebidas ambos
  ion-rows tienen un metodo presentmodal que es el metodo asíncrono que esta abajo en esta clase,este metodo
  recibe un numero como parametro que se envia desde el html que segun vi:son 0 y 1,para que diras tu? 
  si te fijas en el metodo prsentmodal el crea un modalcontroller que recibe como parametros una componente de angular 
  en este caso ListSelectableItemsComponente y el segundo parametro es un objeto y si ves simran en el titlepages 
  envia o los comentarios de bebidas,bebida o pizzas,pizza depende el indice de array que le enviaron desde el metodo
  en el html*/
  TitlePages=['Pizzas', 'Bebidas'];
  FilterPages=['pizza', 'bebida'];

  /*Adam si te preguntas que es modalcontroller te informo que es un componente de ionic
  aqui te dejo el enlace: https://ionicframework.com/docs/v3/api/components/modal/ModalController/  para que
  te lo veas si quieres.
  este componente tiene un metodo create() que se encarga de crear una nueva ventana modal*/

  constructor(private modalController: ModalController, private bbddService: BBDDService) { }

  ngOnInit() {
    /* Esto quizas sea mas dificil de que lo entiendas sino has revisado bien las observables
    pero trataré de explicarte lo en palabras humanos y no con cosas.
    bbddservice es Netflix y tu el usuario que se suscribe a este servicio ofrecido por BBDDSERVICE
    al suscribirte este componente esta siempre en alerta por si pasa un cambio en la lista de "listo para comer",es decir,
    hasta que el usuario no clique una opcion de la pantalla modal el componente no se actualiza y no te mostrará el boton*/
    this.bbddService.getProductsReadyInCart().subscribe(data => {
      this.ProductInCartBool = data.length > 0 ? true : false;
    })
  }

  async presentModal(IndexTitle: number) {
    const modal = await this.modalController.create({
      component: ListSelectableItemsComponent,
      componentProps:{'TitlePage': this.TitlePages[IndexTitle],"FilterName": this.FilterPages[IndexTitle]}
    });
    return await modal.present();
  }

}
