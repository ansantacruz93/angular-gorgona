
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { PrimecomponentsModule } from './prime/primecomponents.module';
import { CommonPageComponent } from '../layout/common-page/common-page.component';
import { LoginComponent } from './login/login.component';
import { CxFieldComponent } from './componets/cx-field/cx-field.component';
import { CxCheckBoxComponent } from './componets/cx-check-box/cx-check-box.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { InvalidFromMessageComponent } from './invalid-from-message/invalid-from-message.component';



@NgModule({
  declarations: [
    CommonPageComponent,
    CardComponent,
    FormComponent,
    LoginComponent,
    CxFieldComponent,
    CxCheckBoxComponent,
    EmpleadoComponent,
    CrearEmpleadoComponent,
    InvalidFromMessageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    PrimecomponentsModule,
    HttpClientModule,
  ],
  exports: [
    CommonPageComponent,
  ],
  providers: [
    HttpClientModule,
  ]
})
export class SharedModule { }
