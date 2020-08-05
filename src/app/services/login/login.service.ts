import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EmpleadoModel } from '../../models/empleado.model';
import { UsuarioModel } from '../../models/usuario.model';
import { url_services } from '../../config/config';

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
           
           if(rol[0]=='Administrador' || rol[1]=='Administrador') 
           {
            console.log('rol',rol);
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
        `${this.url}/user/info`
        ,{headers:header}
        ).toPromise();
      
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
  localStorage.setItem('roldeUsuario',rol);
}

obtenerRol(){
 const rol= localStorage.getItem('roldeUsuario');
 if(rol){
  return rol;
 }
  return '';
}

existeRol(){
 const rol= localStorage.getItem('roldeUsuario');

  if(isNull(rol)){
    return false;
}
return true;
}

}
