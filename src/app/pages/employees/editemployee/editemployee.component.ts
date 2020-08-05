import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/service.index';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoModel } from '../../../models/empleado.model';
import { EmployeesComponent } from '../employee.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  constructor(private empleadoservice:EmployeesService,
    private rutaActiva: ActivatedRoute,
    private empleadosMethods:EmployeesComponent,
    private router:Router
    ) { }

    nuevoempleado:EmpleadoModel
    id=0
    titulo='Formulario de Actualizacion'
    accion='update'
    ep="ep"
    cargando=true;

    ngOnInit(): void {
    this.id= +this.rutaActiva.snapshot.paramMap.get('id')
    if(this.id>0){
      this.empleadoservice.obtenerEmpleadoxID(this.id)
      .subscribe(res=>{
        this.nuevoempleado=res;
        this.nuevoempleado.password='';
        this.nuevoempleado.administrador=false;
        this.cargando=false;

      }
      )
    }
  }

  actualizar(event:EmpleadoModel){
    console.log('object',event);
    
      Swal.fire({
        allowOutsideClick:false,
        title: 'Actualizando',
        text: 'Espere Porfavor..',
        icon: 'info',
        // confirmButtonText: 'Cool'
      })
      
      Swal.showLoading();
    this.empleadoservice.actualizarEmpleado(event,event.idUsuario).subscribe(res=>
      {
      if(res!=null){
        Swal.close();
      this.empleadosMethods.messagePopup("success");
       this.router.navigate(['/empleados']);
       return;
     }
     Swal.close();
     this.empleadosMethods.messagePopup('error');
      },(error:any)=>{
        const sms=error['error'].error
        this.empleadosMethods.messagePopup('custom',sms);
      });
  }

}
