import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.model';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  
constructor(private router:Router,private empleados:EmployeesService) { }
persons: Empleado[] = [];
buscando=false;
cargando=true;
idPerson=0;
  ngOnInit() {
    this.cargarEmpleados();
}

cargarEmpleados(){
  this.empleados.obtenerAdministradores()
   .subscribe(ep=>{
     
     this.persons.push(...ep.ListaUsuariosByIdPerfil);
     
     this.cargando=false;
     this.buscando=false;
   })

  }
  Options(event:string){
    
    if(event=='edit'){
     this.router.navigate([`/administrador/${this.idPerson}`])
    }
    else{
      this.deleteEmployee(this.idPerson);
    }
  
    
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
        this.empleados.eliminarAdministradores(id).subscribe(res=>{
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
 

}
