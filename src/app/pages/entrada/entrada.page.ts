import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  onProcesar() {
    this.nav.navigateRoot('home');
  }

}
