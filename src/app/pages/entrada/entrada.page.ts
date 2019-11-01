import { ManageDataService } from './../../services/manage-data.service';
import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {

  bodegas: any = [];
  productos: any = [];
  data: any = {};

  constructor(private nav: NavController, private manageDataService: ManageDataService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.bodegas = this.manageDataService.getAllBodegas();
  }

  onCargar() {
    this.productos = this.manageDataService.getAllProductosEntrada();
  }

  onProcesar() {
    this.alertController.create({
      header: 'Entrada',
      subHeader: 'Cargada',
      message: 'Al Inventario...!',
      buttons: ['Aceptar']
    }).then((alert) => {
      alert.present();
      alert.onDidDismiss().then(() => {
        this.nav.navigateRoot('home');
      });
    });
  }

  onCancelar() {
    this.productos = [];
    this.data = {};
  }

}
