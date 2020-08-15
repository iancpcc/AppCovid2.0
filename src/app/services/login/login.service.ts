import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EmpleadoModel } from '../../models/empleado.model';
import { UsuarioModel } from '../../models/usuario.model';
import { url_services } from '../../config/config';

import * as CryptoJS from 'crypto-js';
//Operator
import { map, catchError } from 'rxjs/operators';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url=`${url_services}`
  userToken:string

 

  constructor(private http:HttpClient ) {
    this.leerToken();
  }
  Encriptar(texto: string) {
    try {
      return CryptoJS.AES.encrypt(texto, 'WeBmUnIcIpIo.*').toString();
      
    } catch (error) {
      console.error(error);
      
    }
}
  Desencriptar(texto: string) {
    try {
      
      var data = CryptoJS.AES.decrypt(texto, 'WeBmUnIcIpIo.*');
      return data.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error(error);
    }
}

  auth(usuario:UsuarioModel){
    
      return this.http.post(`${this.url}/login`,usuario)
       .pipe(
         map((resp:any)=>{
           if(resp['access_token']){

             this.guardarToken(resp['access_token'])
              return resp.roles;
           }
           return [];
          }
         ),
         map(rol=>{
           
           if(rol[0]=='Administrador' || rol[1]=='Administrador' || rol[0]=='Empleado' || rol[1]=='Empleado') 
           {
            return rol;
          }
          this.logout();
          return [];
         })
          
        

       )
      };

  logout(){
   localStorage.removeItem('token');
   localStorage.removeItem('expira');
   localStorage.removeItem('roldeUsuario');
 }
 
  async getUserData(){
  
     if(this.userToken){
      const header=  new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer ' +this.userToken
      
      });
      
      let user:EmpleadoModel
      const data=  await this.http.get(
        `${this.url}/user/info`,{headers:header}).toPromise();
      
        user=data['data'];
        return  user;
    }
 
 
 }
 
 private guardarToken(idToken:string){
 this.userToken=idToken
 localStorage.setItem('token',idToken);
 let tiempo=new Date();
 tiempo.setSeconds(7200);
 localStorage.setItem('expira',tiempo.getTime().toString())
 }
 
 leerToken(){
   if(localStorage.getItem('token')){
     this.userToken=localStorage.getItem('token')
   }
   else{
     this.userToken='';
   }
   return this.userToken;
 }
 
 estaAutenticado():boolean{
   var token=localStorage.getItem('token');
   if (isNull(token)) {
     return false;
   }
 
   const time=Number(localStorage.getItem('expira'));
   const expiraDate=new Date();
   expiraDate.setTime(time);

   
   if(expiraDate> new Date() ){
   return  true;
   }
   localStorage.removeItem('expira')
   localStorage.removeItem('token')
   localStorage.removeItem('roldeUsuario')
   return false;
 
 }

 guardarRol(rol:string){
  localStorage.setItem('roldeUsuario',this.Encriptar(rol));
}

obtenerRol(){
  var  rol= localStorage.getItem('roldeUsuario');
  rol=this.Desencriptar(rol);
 if(rol){
  return rol;
 }
  return '';
}

existeRol(){
 var rol= localStorage.getItem('roldeUsuario');
 rol=this.Desencriptar(rol);
  if(isNull(rol)){
    return false;
}
return true;
}

}
