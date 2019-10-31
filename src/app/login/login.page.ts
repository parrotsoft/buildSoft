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

  constructor( private fb: FormBuilder, public loadingCtrl: LoadingController, private nav: NavController, public alertController: AlertController) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(4) ]],
    });
  }

  onLogin(): void {
    this.nav.navigateRoot('home');
  }

  loadDev() {
    this.formLogin.get('username').setValue('lopezarizamiguel@gmail.com');
    this.formLogin.get('password').setValue('Mla1043605421');
  }

}
