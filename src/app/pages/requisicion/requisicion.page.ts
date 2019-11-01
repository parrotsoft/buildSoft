import { ManageDataService } from './../../services/manage-data.service';
import { AddProductoComponent } from './../../components/add-producto/add-producto.component';
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavController, AlertController } from '@ionic/angular';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-requisicion',
  templateUrl: './requisicion.page.html',
  styleUrls: ['./requisicion.page.scss'],
})
export class RequisicionPage implements OnInit {

  centroCosto: string;
  productos: any = [];

  constructor(public modalController: ModalController, public loadingCtrl: LoadingController,
    private nav: NavController, private manageDataService: ManageDataService, private alertController: AlertController) { }

  ngOnInit() {
    this.centroCosto = this.manageDataService.getCentroCostos().filter(
      (row) => row.id == JSON.parse(localStorage.getItem('usuario')).centroCosto
    )[0].description;
  }

  onAddProducto() {
    this.modalController.create({
      component: AddProductoComponent
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(() => {
        this.getAllProductos();
      });
    });
  }

  getAllProductos() {
    this.productos = this.manageDataService.getAllProductos();
  }

  onProcesar() {
    this.alertController.create({
      header: 'Requisición',
      subHeader: 'Enviada',
      message: 'Pronto responderemos!',
      buttons: ['Aceptar']
    }).then((alert) => {
      alert.present();
      alert.onDidDismiss().then(() => {
        this.nav.navigateRoot('home');
      });
    });
  }
}
