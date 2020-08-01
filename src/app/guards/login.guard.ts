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
    
    if(this.auth.estaAutenticado()){ 
      // console.log('Guard',this.auth.estaAutenticado());
      return true }
      this.router.navigate(['/login'])
    return false;
    
  }
  
}
