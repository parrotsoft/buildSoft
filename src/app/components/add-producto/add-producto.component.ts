import { ManageDataService } from './../../services/manage-data.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss'],
})
export class AddProductoComponent implements OnInit {

  data: any = {};
  unidades: any = [];

  constructor(public modalController: ModalController, private manageDataService: ManageDataService) { }

  ngOnInit() {
    this.unidades = this.manageDataService.getUnidades();
  }

  onAgregar() {
    this.manageDataService.addProducto(this.data);
    this.modalController.dismiss({
      reload: true
    });
  }

  onCancelar() {
    this.modalController.dismiss();
  }

}
