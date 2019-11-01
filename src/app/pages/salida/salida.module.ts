import { SelectProductoComponent } from './../../components/select-producto/select-producto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalidaPage } from './salida.page';

const routes: Routes = [
  {
    path: '',
    component: SalidaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalidaPage, SelectProductoComponent],
  entryComponents: [ SelectProductoComponent ]
})
export class SalidaPageModule {}
