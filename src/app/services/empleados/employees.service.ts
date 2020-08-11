import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Url Principal
import { url_services } from 'src/app/config/config';
//Modelos
import { EmpleadoModel } from '../../models/empleado.model';
import { RespuestaEmpleados } from 'src/app/interfaces/empleado.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { 
    this.leerToken();
  }
  private url=`${url_services}`
  userToken:string
  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken=localStorage.getItem('token')
    }
    else{
      this.userToken='';
    }
    return this.userToken;
  }

  //Servicios Empleados
  obtenerEmpleado(){
    return this.http.get<RespuestaEmpleados>(`${this.url}/listaUsuariosByIdPerfil/4`,{headers:this.getHeader()});
  }
  
  obtenerEmpleadoxID(idEmpleado: number){
    return this.http.get(`${this.url}/usuario/${idEmpleado}`).pipe(
      map(res=>res["data"]
      )
    );
  }

actualizarEmpleado(empleado:EmpleadoModel,idEmpleado:number){
  
  return this.http.put(`${this.url}/actualizarUsuario/${idEmpleado}`,empleado,{headers:this.getHeader()});
}
  registrarEmpleado(empleado:EmpleadoModel){
   return this.http.post(`${this.url}/agregarUsuarioByIdPerfil/4`,empleado,{headers:this.getHeader()});
  }
  eliminarEmpleado(id:number){
    return this.http.delete<void>(`${this.url}/eliminarUsuario/${id}`,{headers:this.getHeader()})
    
   }
   //Servicios Administradores
    async obtenerAdministradores(){
      return await this.http.get<RespuestaEmpleados>(`${this.url}/listaUsuariosByIdPerfil/3`,{headers:this.getHeader()}).toPromise();
  }

 

  actualizarAdministradores(empleado:EmpleadoModel,idEmpleado:number){
    return this.http.put(`${this.url}/actualizarUsuario/${idEmpleado}`,empleado,{headers:this.getHeader()});
  }
    registrarAdministradores(empleado:EmpleadoModel){
     return this.http.post(`${this.url}/agregarUsuarioByIdPerfil/3`,empleado,{headers:this.getHeader()});
    }
    eliminarAdministradores(id:number){
      return this.http.delete<void>(`${this.url}/eliminarUsuario/${id}`,{headers:this.getHeader()})
      
     }

     cedulaExistente(cedula:string){
      return  this.http.get(`${this.url}/existcedula/${cedula}`)
      .pipe(
        map((res:any)=>{
          return res.data;
        })
      );
     }

     correoExistente(correo:string){
      return  this.http.get(`${this.url}/existcorreo/${correo}`)
      .pipe(
        map((res:any)=>{
          return res.data;
        })
      );

     }

     userNameExistente(username:string){
      return  this.http.get(`${this.url}/existusuario/${username}`)
      .pipe(
        map((res:any)=>{
          return res.data;
        })
      );

     }

     getHeader(){
      if(this.userToken){
        const header=  new HttpHeaders({
          'Content-Type':'application/json',
          Authorization:'Bearer ' +this.userToken
        
        });
        return header;
      }
  
    }


}
