import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loadingCtrl: LoadingController) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      clave: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  async ingresar() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('usuario')?.value;

      const loading = await this.loadingCtrl.create({
        message: 'Ingresando...',
        spinner: 'circles',
        duration: 1500,
        cssClass: 'custom-loading'
      });

      await loading.present();

      setTimeout(() => {
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: usuario
          }
        }; 
        this.router.navigate(['/home'], navigationExtras);
      }, 1500);

    } else {
      alert('Completa correctamente los campos.');
    }
  }
}
