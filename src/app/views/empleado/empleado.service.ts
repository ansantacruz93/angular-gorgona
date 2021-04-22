import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  getAllEmpleados(): Observable<any> {
    return this.http.get<any[]>( 'http://localhost:8081/empleados/employees');
  }

  borrarEmpleado(idEmpleado: number): Observable<any> {
    return this.http.delete<any[]>( 'http://localhost:8081/empleados/employees/' + idEmpleado);
  }

  crearEmpleado(request: any): Observable<any>{
    return this.http.post<any[]>( 'http://localhost:8081/empleados/employees/', request);
  }

}
