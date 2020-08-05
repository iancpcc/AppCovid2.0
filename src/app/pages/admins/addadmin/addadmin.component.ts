import { Component, OnInit } from '@angular/core';
import { EmployeesComponent } from '../../employees/employee.component';
import { EmployeesService } from '../../../services/service.index';
import { Router } from '@angular/router';
import { EmpleadoModel } from '../../../models/empleado.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  constructor(private empleadoservice:EmployeesService,
    private empleadosMethods:EmployeesComponent,
    private router:Router
    
    ) { }

nuevoempleado:EmpleadoModel
id=0
titulo='Formulario de Registro'
accion='insert'
ad="ad"
  ngOnInit(): void {
  }

  insertarEmpleado(event:EmpleadoModel){
    Swal.fire({
      allowOutsideClick:false,
      title: 'Insertando',
      text: 'Espere Porfavor..',
      icon: 'info',
      // confirmButtonText: 'Cool'
    })

    Swal.showLoading();
    this.empleadoservice.registrarAdministradores(event)
        .subscribe(
         
           
          res=>{
           
        if(res!=null){
          Swal.close();
          this.empleadosMethods.messagePopup('success');
          this.router.navigate(['/administradores']);
          return;
        }
        Swal.close();
        this.empleadosMethods.messagePopup('error');
       }
       ,error=>{
         console.log('error',error);
         
        this.empleadosMethods.messagePopup('custom',"Cedula o Correo Repetidos");
      })

    }

}
