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

  //Servicios Empleados
  obtenerEmpleado(){
    return this.http.get<RespuestaEmpleados>(`${this.url}/listaUsuariosByIdPerfil/4`);
  }
  
  obtenerEmpleadoxID(idEmpleado: number){
    return this.http.get(`${this.url}/usuario/${idEmpleado}`).pipe(
      map(res=>res["data"]
      )
    );
  }

actualizarEmpleado(empleado:EmpleadoModel,idEmpleado:number){
  
  return this.http.put(`${this.url}/actualizarUsuario/${idEmpleado}`,empleado);
}
  registrarEmpleado(empleado:EmpleadoModel){
   return this.http.post(`${this.url}/agregarUsuarioByIdPerfil/4`,empleado);
  }
  eliminarEmpleado(id:number){
    return this.http.delete<void>(`${this.url}/eliminarUsuario/${id}`)
    
   }
   //Servicios Administradores
   obtenerAdministradores(){
    return this.http.get<RespuestaEmpleados>(`${this.url}/listaUsuariosByIdPerfil/3`);

  }
  actualizarAdministradores(empleado:EmpleadoModel,idEmpleado:number){
    return this.http.put(`${this.url}/actualizarUsuario/${idEmpleado}`,empleado);
  }
    registrarAdministradores(empleado:EmpleadoModel){
     return this.http.post(`${this.url}/agregarUsuarioByIdPerfil/3`,empleado);
    }
    eliminarAdministradores(id:number){
      return this.http.delete<void>(`${this.url}/eliminarUsuario/${id}`)
      
     }




}
