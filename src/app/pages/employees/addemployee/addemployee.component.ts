import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/service.index';
import { EmpleadoModel } from '../../../models/empleado.model';
import { EmployeesComponent } from '../employee.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private empleadoservice:EmployeesService,
    private empleadosMethods:EmployeesComponent,
    private router:Router
    
    ) { }

nuevoempleado:EmpleadoModel
id=0
titulo='Formulario de Registro'
accion='insert'
ep="ep"
  ngOnInit(): void {
  }

  insertarEmpleado(event:EmpleadoModel){
    console.log('empleado',event);
    
    Swal.fire({
      allowOutsideClick:false,
      title: 'Insertando',
      text: 'Espere Porfavor..',
      icon: 'info',
      // confirmButtonText: 'Cool'
    })

    Swal.showLoading();
    this.empleadoservice.registrarEmpleado(event)
        .subscribe(
          
          res=>{
            
        if(res!=null){
          Swal.close();
          this.empleadosMethods.messagePopup('success');
          this.router.navigate(['/empleados']);
          return;
        }
        Swal.close();
        this.empleadosMethods.messagePopup('error');
       }
       ,error=>{
        const sms=error['error'].error
        if(sms){

          this.empleadosMethods.messagePopup('custom',sms);
        }
        else{
          this.empleadosMethods.messagePopup('custom',"Ha ocurrido un error");
        }
      })

    }
    
}
  


