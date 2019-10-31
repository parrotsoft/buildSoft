import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss'],
})
export class AddProductoComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  onAgregar() {
    this.modalController.dismiss();
  }

  onCancelar() {
    this.modalController.dismiss();
  }

}
