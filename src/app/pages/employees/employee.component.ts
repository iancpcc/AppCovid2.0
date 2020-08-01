import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeesService } from '../../services/service.index';
import { Empleado } from 'src/app/interfaces/empleado.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeesComponent implements OnInit {

constructor(private router:Router,private empleados:EmployeesService) { }
persons: Empleado[] = [];
buscando=false;
cargando=true;
  ngOnInit() {
    this.cargarEmpleados();
}
buscarUsuario(termino:string){

  this.buscando=true;
  
  if(termino.length<=0){
    this.persons=[];
 this.cargarEmpleados();
  }
  else{
    var lista=this.persons;
   const a= lista.filter(res=>{
     if(res.cedulaUsuario.includes(termino))
      return res;
    })
    this.persons=a;
    this.buscando=false;
  }
  
}

 cargarEmpleados(){
 this.empleados.obtenerEmpleado()
  .subscribe(ep=>{
    this.persons.push(...ep.ListaUsuariosByIdPerfil);
    this.cargando=false;
    this.buscando=false;
  })

  

 
}

deleteEmployee(id:number){
  //console.log("id",id);
  Swal.fire({
    title: 'Estas Seguro?',
    text: "No podras revertir el cambio!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar!'
  }).then((result) => {
    if (result.value) {
      this.empleados.eliminarEmpleado(id).subscribe(res=>{
        if(res!=null){

          Swal.fire(
            'Borrado!',
            'Se ha borrado el registro',
            'success'
          )
          this.persons=[];
          this.cargando=true;
          this.cargarEmpleados();

        }
      },error=>{
        Swal.fire({
          title: 'Error',
          text: 'Ocurrio un problema al eliminar el registro',
          icon: 'error',
          timer: 1000
        });

      }
      
      
      );
    }
    
})
   
}
  

}
