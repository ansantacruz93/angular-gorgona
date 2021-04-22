import { CrearEmpleadoComponent } from './views/crear-empleado/crear-empleado.component';
import { EmpleadoComponent } from './views/empleado/empleado.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardComponent } from './views/card/card.component';
import { FormComponent } from './views/form/form.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'empleados', component: EmpleadoComponent, canActivate: [AuthGuard]},
  { path: 'crearEmpleado', component: CrearEmpleadoComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports:
  [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
