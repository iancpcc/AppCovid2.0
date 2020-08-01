import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { EmployeesService } from '../../services/empleados/employees.service';
import { Router } from '@angular/router';
import { EmpleadoModel } from '../../models/empleado.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

cargando=true;
constructor(private adminservice:LoginService,
  private empleado:EmployeesService,
  private router:Router) { 

}

admin:EmpleadoModel

  ngOnInit() {
    this.admin=new EmpleadoModel();
   this.adminservice.getUserData()
   .then(res=>{      
       this.admin=res;
       this.cargando=false;
   });

  }

}
