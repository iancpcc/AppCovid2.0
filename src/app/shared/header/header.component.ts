import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/service.index';
import { LoginComponent } from 'src/app/login/login.component';
declare function init_plugins() 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
    private login:LoginService,
    // private roles:LoginComponent
    ) {}
roles=''
  ngOnInit(): void {
  this.roles=this.login.obtenerRol();
  }

  salir(){

    this.router.navigate(["/login"]);
    this.login.logout();

  }

}
