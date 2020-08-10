import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from '../../../models/empleado.model';
import { EmployeesService } from '../../../services/empleados/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesComponent } from '../../employees/employee.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {

  constructor(private empleadoservice:EmployeesService,
    private rutaActiva: ActivatedRoute,
    private empleadosMethods:EmployeesComponent,
    private router:Router
    ) { }

    nuevoempleado:EmpleadoModel
    id=0
    titulo='Formulario de Actualización'
    accion='update'
    ad="ad"
    cargando=true;
    ngOnInit(): void {
    this.id= +this.rutaActiva.snapshot.paramMap.get('id')
    if(this.id>0){
      this.empleadoservice.obtenerEmpleadoxID(this.id)
      .subscribe(res=>{
        this.nuevoempleado=res;
        this.nuevoempleado.administrador=true;
        this.nuevoempleado.password='';
        this.cargando=false;
      }
      )
    }
  }

  actualizar(event:EmpleadoModel){
              
                Swal.fire({
                  allowOutsideClick:false,
                  title: 'Actualizando',
                  text: 'Espere Porfavor..',
                })
      
                Swal.showLoading();
              this.empleadoservice.actualizarAdministradores(event,event.idUsuario).subscribe(res=>
                {
                  if(res!=null){
                    Swal.close();
                    this.empleadosMethods.messagePopup("successedit");
                    this.router.navigate(['/administradores']);
                    return;
                  }
                  Swal.close();
                  this.empleadosMethods.messagePopup('error');
                },error=>{
                  const sms=error['error'].error
                  this.empleadosMethods.messagePopup('custom',sms);
                });
              }
          

}
