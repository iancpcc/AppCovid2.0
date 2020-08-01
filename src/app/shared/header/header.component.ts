import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/service.index';
declare function init_plugins() 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private login:LoginService) { 
  }

  ngOnInit(): void {
  }

  salir(){

    this.router.navigate(["/login"]);
    this.login.logout();

  }

}
