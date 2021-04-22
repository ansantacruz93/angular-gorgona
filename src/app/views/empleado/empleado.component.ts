import { Router } from '@angular/router';
import { EmpleadoService } from './empleado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  empleados: any[]
  idEmpleadoBorrar: number = null;



  constructor(private empleadoService: EmpleadoService, private router: Router) {
    this.getAllEmpleados();
  }

  ngOnInit(): void {
  }

  crearEmpleado(): void{
    this.router.navigate( [ 'crearEmpleado' ] );
  }

  receiveMessageBorrar($event) {
    this.idEmpleadoBorrar = $event
    this.empleadoService.borrarEmpleado(this.idEmpleadoBorrar).subscribe(
      (response) => {
        this.idEmpleadoBorrar = null;
        this.getAllEmpleados();
      },

      (error) =>{
        alert('Ocurrio un error, vuelva a intentar')
      }
    );
  }

  private getAllEmpleados(): void {
    this.empleadoService.getAllEmpleados().subscribe(
      (response) => {
        this.empleados = response;
      },
      (error) => {

      }
    );
  }

}
