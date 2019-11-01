import { centrosCosto, unidadesMedida, productos, bodegas } from './../data/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {

  constructor() { }

  getCentroCostos() {
    return centrosCosto;
  }

  getUnidades() {
    return unidadesMedida;
  }

  addProducto(data: any) {
    productos.push(data);
  }

  getAllProductos() {
    return productos;
  }

  getAllBodegas() {
    return bodegas;
  }

}