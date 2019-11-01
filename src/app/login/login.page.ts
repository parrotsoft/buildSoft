import { ManageDataService } from './../services/manage-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  centrosCosto: any = []; 

  constructor( private fb: FormBuilder, public loadingCtrl: LoadingController, private nav: NavController, 
    public alertController: AlertController, private manageDataService: ManageDataService) { }

  ngOnInit() {
    this.buildForm();
    this.centrosCosto = this.manageDataService.getCentroCostos();
  }

  private buildForm(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(4) ]],
      centroCosto: ['', [Validators.required ]],
    });
  }

  onLogin(): void {
    localStorage.setItem('usuario', JSON.stringify(this.formLogin.value));
    this.nav.navigateRoot('home');
  }

  loadDev() {
    this.formLogin.get('username').setValue('lopezarizamiguel@gmail.com');
    this.formLogin.get('password').setValue('Mla1043605421');
  }

}
