import { Router } from '@angular/router';
import { EmpleadoService } from './../empleado/empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent implements OnInit {


  submitted: boolean = false;
  public empleadoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private empleadosService: EmpleadoService, private router: Router) {
  this.empleadoForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName:  ['', [Validators.required]],
    emailId:   ['', [Validators.required, Validators.email]],
    telefono:  ['', [Validators.required]],
    direccion: ['', [Validators.required]],
  });
   }

  ngOnInit(): void {
  }



  onSubmit(){
    this.submitted = true;
    if (!this.empleadoForm.invalid) {
      let request = { ...this.empleadoForm.getRawValue() };
      this.empleadosService.crearEmpleado(request).subscribe(
        (response) =>{
          this.router.navigate(['empleados']);
        },

        (error) => {

        }

      );
    }
  }

  onCancel(): void {
    this.router.navigate(['empleados']);
  }
  get f(): any {
    return this.empleadoForm.controls;
  }

}
