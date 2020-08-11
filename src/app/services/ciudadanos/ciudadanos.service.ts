import { Injectable } from '@angular/core';


//Operator
import { map } from 'rxjs/operators';
import { url_services } from 'src/app/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaCiudadanos } from '../../interfaces/ciudadanos';
@Injectable({
  providedIn: 'root'
})
export class CiudadanosService {
  
  private url=`${url_services}`

  constructor(private http:HttpClient) { this.leerToken() }
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
  getHeader(){
    if(this.userToken){
      const header=  new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer ' +this.userToken
      
      });
      return header;
    }

  }
   obtenerCoordenadasCiudadanos(){
     try {
       
       return  this.http.get<RespuestaCiudadanos>(`${this.url}/listaUsuariosByIdPerfil/2`,{headers:this.getHeader()})
         .pipe(
           map(res => res.ListaUsuariosByIdPerfil.filter(r => r.ubicacionGeografica != null)
   
           ),
           map(ListaUsuariosByIdPerfil => ListaUsuariosByIdPerfil.map(geo => geo.ubicacionGeografica
           )
           ),
           map(
             ubi => ubi.map(coor => coor.coordinates.filter(res => res != null)
             )
           )
         )
     } catch (error) {
       console.log('Service',error);
       
     }  
    }

    obtenerTotales(){
      return this.http.get(`${this.url}/totalesUsuariosByIdPerfil/2`)
    }


    obtenerMeses(){
      return this.http.get(`${this.url}/totalesRegistrosUltimos6Meses`).pipe(map
        (res=>res['TotalesCiudadanos']))
    }

    
    obtenerTotalesPorMes(){
      return this.http.get(`${this.url}/totalesRegistrosUltimos6Meses`).pipe(map
        (res=>res['TotalesCiudadanos']))
    }

    
}
