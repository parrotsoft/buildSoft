import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  onOpenView(view: number) {
    switch (view) {
      case 1:
        this.nav.navigateRoot('requisicion');
        break;
      case 2:
        this.nav.navigateRoot('entrada');
        break;
      case 3:
        this.nav.navigateRoot('salida');
        break;
      case 4:
        this.nav.navigateRoot('existencias');
        break;
      case 5:
        this.nav.navigateRoot('login');
        break;
    }
  }

}
