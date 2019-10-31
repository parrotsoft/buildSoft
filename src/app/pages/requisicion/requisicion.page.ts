import { AddProductoComponent } from './../../components/add-producto/add-producto.component';
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-requisicion',
  templateUrl: './requisicion.page.html',
  styleUrls: ['./requisicion.page.scss'],
})
export class RequisicionPage implements OnInit {

  constructor(public modalController: ModalController, public loadingCtrl: LoadingController,
    private nav: NavController) { }

  ngOnInit() {
  }

  onAddProducto() {
    this.modalController.create({
      component: AddProductoComponent
    }).then((modal) => {
      modal.present();
    });
  }

  onProcesar() {
    this.nav.navigateRoot('home');
  }
}
