import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-empleado1',
  templateUrl: './empleado1.page.html',
  styleUrls: ['./empleado1.page.scss'],
})
export class Empleado1Page implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
     duration: 500,cssClass:'buttonplus', position: 'top'});
    toast.present();
  }

}
