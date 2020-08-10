import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { EmployeesService } from '../../services/empleados/employees.service';
import { Router } from '@angular/router';
import { EmpleadoModel } from '../../models/empleado.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmployeesComponent } from '../employees/employee.component';
import { Empleado } from '../../interfaces/empleado.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

cargando=true;
constructor(private adminservice:LoginService,
  private empleado:EmployeesService,
  private router:Router,
  private empleadosMethods:EmployeesComponent) { 

}

admin:EmpleadoModel
date:any
rol:any
//Contraseña
confirmText=''
coinciden:boolean=true;
  ngOnInit() {
    this.admin=new EmpleadoModel();
    this.adminservice.getUserData()
    .then(res=>{      
        this.admin=res;
        this.cargando=false;
        
       });

  }
}
