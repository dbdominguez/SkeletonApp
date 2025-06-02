import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-out', style({ transform: 'translateX(0)' }))
      ]),
    ])
  ]
})

export class HomePage {

  usuario: string = '';
  form: FormGroup;
  animarCampos = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.usuario = nav.extras.state['usuario'];
    }

    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      nivel: [''],
      fechaNacimiento: ['']
    });
  }

  limpiar() {
    this.form.reset();
    this.animarCampos = false;
    setTimeout(() => this.animarCampos = true, 10);
  }

  async mostrar() {
    const nombre = this.form.get('nombre')?.value || '';
    const apellido = this.form.get('apellido')?.value || '';
  
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: `Su nombre es ${nombre} ${apellido}`,
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
