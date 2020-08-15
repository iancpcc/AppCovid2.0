import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeesService } from '../../services/service.index';
import { Empleado } from 'src/app/interfaces/empleado.model';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
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
idPerson=0;
  ngOnInit() {
    this.cargarEmpleados();
}


Options(event:string){
  
  
  if(event=='edit'){
   this.router.navigate([`/empleado/${this.idPerson}`])
  }
  else{
    this.deleteEmployee(this.idPerson);
  }

  
}

getPerson(event:number){
  
this.idPerson=event;
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
  Swal.fire({
    title: 'Estas Seguro?',
    text: "No podras revertir el cambio!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar!',


  }
  )
  .then((result) => {

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
          Swal.close();

        }
      },error=>{
        Swal.close();
        Swal.fire({
          title: 'Error',
          text: 'Ocurrio un problema al eliminar el registro',
          icon: 'error',
          timer: 1000
        });
    });
  }
      
   
})

}
public messagePopup(type:string,message?:string){
  switch (type) {
  case 'success':
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Registro agregado con exito',
    showConfirmButton: false,
    timer: 1500
  });
  break;
  case 'successedit':
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Registro actualizado con exito',
    showConfirmButton: false,
    timer: 1500
  });
  break;

  case 'error':
    Swal.fire({
      title: 'Registro Fallido',
      text: 'Revise los campos',
      icon: 'error',
      timer: 1000
    });
    break;
    case 'custom':
      Swal.fire({
        title: message,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        showConfirmButton: false,
        timer: 1000,
        icon: 'warning'
      })
      break;
   
      default:
      break;
                }
    
  }


}
