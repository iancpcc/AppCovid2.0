import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/service.index';
import { EmployeesService } from '../../services/empleados/employees.service';
import { Empleado } from '../../interfaces/empleado.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
    private login:LoginService,
    private empleado:EmployeesService,

    // private roles:LoginComponent
    ) {}
roles=''
usuario:string
  ngOnInit(): void {
  this.roles=this.login.obtenerRol();
  this.obtenerAdministrador();

  }
  async obtenerAdministrador(){
    var id:number;
    await this.login.getUserData()
   .then(res=>{      
       id=res.idUsuario;
      
      });
      
      this.empleado.obtenerEmpleadoxID(id)
      .subscribe((ep:Empleado)=>{
        this.usuario=ep.user;
        

      })


  }

  salir(){
    this.login.logout();
    this.router.navigate(["/login"]);
  }

}
