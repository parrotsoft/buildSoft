import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { ManageDataService } from './../../services/manage-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-producto',
  templateUrl: './select-producto.component.html',
  styleUrls: ['./select-producto.component.scss'],
})
export class SelectProductoComponent implements OnInit {

  productos: any = [];
  bodega;

  constructor(private manageDataService: ManageDataService, public modalController: ModalController, private alertController: AlertController,
    public toastController: ToastController) { }

  ngOnInit() {
    switch (this.bodega) {
      case 'Bodega 1':
        this.productos = this.manageDataService.getAllProductosBodega1();
        break;
      case 'Bodega 2':
        this.productos = this.manageDataService.getAllProductosBodega2();
        break;
      case 'Bodega 3':
        this.productos = this.manageDataService.getAllProductosBodega3();
        break;
    }
  }

  onCancelar() {
    this.modalController.dismiss();
  }

  onAdd(data: any) {
    this.alertController.create({
      header: 'Cantidad',
      inputs: [{
        name: 'cantidad',
        type: 'number',
        placeholder: 'Digite la cantidad'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Agregar',
          handler: (evt) => {
            if (evt.cantidad <= data.cantidad) {
              data.pedido = evt.cantidad;
              this.manageDataService.addProductoSalida(data);
              this.modalController.dismiss();
            } else {
              this.toastController.create({
                message: 'Por favor verificar la cantidad, es superior a las existencias!',
                duration: 2000
              }).then((toast) => {
                toast.present();
              });
            }
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

}
