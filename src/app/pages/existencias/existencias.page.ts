import { ManageDataService } from './../../services/manage-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencias',
  templateUrl: './existencias.page.html',
  styleUrls: ['./existencias.page.scss'],
})
export class ExistenciasPage implements OnInit {

  productos: any = [];
  bodegas: any = [];
  bodega: number;

  constructor(private manageDataService: ManageDataService) { }

  ngOnInit() {
    this.bodegas = this.manageDataService.getAllBodegas();
  }

  onCargar() {
    switch (Number(this.bodega)) {
      case 1:
        this.productos = this.manageDataService.getAllProductosBodega1();
        break;
      case 2:
        this.productos = this.manageDataService.getAllProductosBodega2();
        break;
      case 3:
        this.productos = this.manageDataService.getAllProductosBodega3();
        break;
    }
  }

}
