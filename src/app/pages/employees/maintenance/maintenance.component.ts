import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//Interfaces
import { EmployeesService } from '../../../services/service.index';
import { EmpleadoModel } from '../../../models/empleado.model';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(private empleadoservice:EmployeesService,
    private rutaActiva: ActivatedRoute) { }
    nuevoempleado:EmpleadoModel
    id=0
    action='insert'
     ngOnInit(): void {
    this.id= +this.rutaActiva.snapshot.paramMap.get('id')
    if(this.id>0){
      this.empleadoservice.obtenerEmpleadoxID(this.id)
      .subscribe(res=>{
        this.nuevoempleado=res;
      }
      )
      this.action='update'
    }

    
  
  }


      
      
  
}
