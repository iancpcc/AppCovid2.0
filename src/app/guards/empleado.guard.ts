import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/service.index';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoGuard implements CanActivate {
  constructor(private auth:LoginService) { }
  canActivate():boolean{
    if(this.auth.obtenerRol()=='RoleEmployee'){ 
      return false;
    }
    return true
    
  }
  
}
