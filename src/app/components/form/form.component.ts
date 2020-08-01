import { Component, OnInit, Input, OnChanges } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeesService } from '../../services/service.index';
import { EmpleadoModel } from '../../models/empleado.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
 
})
export class FormComponent implements OnInit,OnChanges {

@Input() nuevoEmpleado:EmpleadoModel
@Input() id=0
@Input() action='update'
cargando=true;
coinciden:boolean=true;
confirmText=''
title="Formulario de Actualizacion"
constructor(private empleado:EmployeesService, private router:Router,
    private pipe:DatePipe) { }

  ngOnInit(): void {
    this.nuevoEmpleado=new EmpleadoModel();
    if(this.action=='insert'){
    this.cargando=false;
    this.title="Formulario de Registro"
    }
  }
  ngOnChanges(){
    
    if(this.nuevoEmpleado != undefined)
    this.cargando=false;
  }

  
evaluarPass(pass:string){

if(this.nuevoEmpleado.password !=pass  )
  {
this.coinciden=false
return;
}
this.coinciden=true

}
  validarForm(form:NgForm){

    if(form.invalid){
      return false
    }
    return true;
    }

    validarContraseñas(form:NgForm){
      console.log('form',form.controls['confirm'].value);
      
      if(form.controls['confirm'].value ==this.nuevoEmpleado.password ){
        return true;
      }
      return false;

    }

  public fecha(fecha:string,format:string){
      var date = new Date(fecha); // had to remove the colon (:) after the T in order to make it work
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    if(format=='-')
    {
      var myFormattedDate = day+"-"+(monthIndex+1)+"-"+year;

    }
    else{
      var myFormattedDate = day+"/"+(monthIndex+1)+"/"+year;

    }
  return myFormattedDate;  
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
  
    public postEmpleado(form:NgForm){

      if (this.validarForm(form))
      {
        console.log('fecha',  this.nuevoEmpleado.fechaNacimiento);
          if(this.action=='insert' && this.validarContraseñas(form)){
        this.empleado.registrarEmpleado(this.nuevoEmpleado)
        .subscribe(
          res=>{
        if(res!=null){
          this.messagePopup('success');
          this.router.navigate(['/empleados']);
          return;
        }
        this.messagePopup('error');
       },error=>{
        this.messagePopup('custom',"Cedula o Correo Repetidos");
      }
      )
      return;
    
      }
   
    else if(this.action=='update'){
      console.log('Entro al update');
      
    this.empleado.actualizarEmpleado(this.nuevoEmpleado,this.id).subscribe(res=>
      {
      if(res!=null){
      this.messagePopup("success");
       this.router.navigate(['/empleados']);
       return;
     }
     this.messagePopup('error');
      },error=>{
        this.messagePopup('custom','Cedula o Correo existentes');
      });

    }
    
  }
    else{
      this.messagePopup("custom","Campos vacios ")
    }

  }

  cancelar(){
    this.router.navigateByUrl('/empleados')
  }

}
