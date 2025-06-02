import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      clave: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  ingresar() {
    if (this.loginForm.valid) {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: this.loginForm.get('usuario')?.value
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      alert('Datos inválidos. Verifica los campos.');
    }
  }
}
