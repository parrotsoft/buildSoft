import { centrosCosto, unidadesMedida, productos, bodegas, productosEntrada, productosBodega1, productosBodega2, productosBodega3, tipoSalida, productosSalida } from './../data/data';
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

  getAllProductosEntrada() {
    return productosEntrada;
  }

  getAllProductosBodega1() {
    return productosBodega1;
  }

  getAllProductosBodega2() {
    return productosBodega2;
  }

  getAllProductosBodega3() {
    return productosBodega3;
  }

  getAllTipoSalida() {
    return tipoSalida;
  }

  getAllProductosSalida() {
    return productosSalida;
  }

  addProductoSalida(data: any) {
    productosSalida.push(data);
  }

}