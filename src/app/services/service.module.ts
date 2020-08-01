import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { CiudadanosService } from './ciudadanos/ciudadanos.service';
import { EmployeesService } from './empleados/employees.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    LoginService,
    CiudadanosService,
    EmployeesService,
   
  ]
})
export class ServiceModule { }
