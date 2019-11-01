import { SelectProductoComponent } from './../../components/select-producto/select-producto.component';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { ManageDataService } from './../../services/manage-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.page.html',
  styleUrls: ['./salida.page.scss'],
})
export class SalidaPage implements OnInit {

  productos: any = [];
  bodegas: any = [];
  tipoSalida: any = [];
  data: any = {};

  constructor(private manageDataService: ManageDataService, public modalController: ModalController,
    private alertController: AlertController, private nav: NavController) { }

  ngOnInit() {
    this.bodegas = this.manageDataService.getAllBodegas();
    this.tipoSalida = this.manageDataService.getAllTipoSalida();
  }

  onAgregar() {
    this.modalController.create({
      component: SelectProductoComponent,
      componentProps: {
        bodega: this.data.bodega
      }
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(() => {
        this.getAllProductosSalida();
      });
    });
  }

  getAllProductosSalida() {
    this.productos = this.manageDataService.getAllProductosSalida();
  }

  onProcesar() {
    this.alertController.create({
      header: 'Salida',
      subHeader: 'Procesada',
      message: 'Gracias!',
      buttons: ['Aceptar']
    }).then((alert) => {
      alert.present();
      alert.onDidDismiss().then(() => {
        this.nav.navigateRoot('home');
      });
    });
  }

}
