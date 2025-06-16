import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';

@NgModule({
  declarations: [
    MisDatosComponent,
    ExperienciaLaboralComponent,
    CertificacionesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    MisDatosComponent,
    ExperienciaLaboralComponent,
    CertificacionesComponent
  ]
})
export class ComponentsModule {}