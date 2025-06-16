import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

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

export class HomePage implements OnInit {
  segmentValue: string = 'mis-datos';
  usuario: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state && nav.extras.state['usuario']) {
      this.usuario = nav.extras.state['usuario'];
      console.log('Usuario recibido:', this.usuario);
    } else {
      console.warn('No se recibió usuario por navegación');
      this.usuario = 'Invitado';
    }
  }
}