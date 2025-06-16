import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
  standalone: false,
})
export class MisDatosComponent implements OnInit {

  @Input() usuario: string = '';
  form: FormGroup;
  animarCampos = false;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      nivel: [''],
      fechaNacimiento: ['']
    });
  }

  ngOnInit() {
    this.animarCampos = true;
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
