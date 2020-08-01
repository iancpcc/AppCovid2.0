import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Url Principal
import { url_services } from 'src/app/config/config';
//Modelos
import { EmpleadoModel } from '../../models/empleado.model';
import { RespuestaEmpleados } from 'src/app/interfaces/empleado.model';
import { Empleado } from '../../interfaces/empleado.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }
  private url=`${url_services}`
  obtenerEmpleado(){
    return this.http.get<RespuestaEmpleados>(`${this.url}/listaUsuariosByIdPerfil/4`);
  }
  obtenerAdministradores(){
    return this.http.get<RespuestaEmpleados>(`${this.url}/listaUsuariosByIdPerfil/3`);
  }
  obtenerEmpleadoxID(idEmpleado: number){
    return this.http.get<Empleado>(`${this.url}/usuario/${idEmpleado}`).pipe(
      map(res=>res["data"]
      )
    );
  }

actualizarEmpleado(empleado:EmpleadoModel,idEmpleado:number){
  console.log('empleado a actualizar', empleado);
  
  return this.http.put(`${this.url}/actualizarUsuario/${idEmpleado}`,empleado);
}
  registrarEmpleado(empleado:EmpleadoModel){
   return this.http.post(`${this.url}/agregarUsuarioByIdPerfil/4`,empleado);
  }
  eliminarEmpleado(id:number){
    return this.http.delete<void>(`${this.url}/eliminarUsuario/${id}`)
    .pipe();
    
   }
}
