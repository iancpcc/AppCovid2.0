import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/service.index';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  constructor(private auth:LoginService, private router:Router) { }
  canActivate():boolean{
    
    if(this.auth.estaAutenticado()){ 
      this.router.navigate(['/dashboard'])
      return false
    }
    return true;
    
  }
  
}
