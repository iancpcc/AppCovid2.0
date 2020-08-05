import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private roles:LoginService) { }
rol=''
  ngOnInit(): void {

    this.rol=this.roles.obtenerRol();
      console.log('roles',this.roles.obtenerRol());


  }

}
