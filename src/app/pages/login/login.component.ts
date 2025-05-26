import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
  IonFooter, 
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonModal,
    IonTitle,
    IonToolbar,
    IonFooter
  ],
})
export class LoginComponent {
  @ViewChild(IonModal) modal!: IonModal;

  message = 'Inicio de sesión de prueba';
  name!: string;
  password: string = '';

  constructor(private router: Router) {} 

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Bienvenido, ${event.detail.data}!`;
    }
  }

  irAlHome() {
    this.router.navigate(['/home']);
  }
}
