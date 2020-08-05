import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../services/service.index';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private auth:LoginService) { }
  canActivate():boolean{
    if(this.auth.obtenerRol()=='MainAdmin'){ 
      return true;
    }
    return false
    
  }
}
