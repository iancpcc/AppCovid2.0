import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/service.index';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth:LoginService, private router:Router) { }
  canActivate():boolean{
    
    if(this.auth.estaAutenticado() && this.auth.existeRol()){ 
      return true 
    }
    this.auth.logout();
    this.router.navigate(['/login'])
    return false;
    
  }
  
}
