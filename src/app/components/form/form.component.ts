import { Component, OnInit, Input, Output,EventEmitter, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmpleadoModel } from '../../models/empleado.model';
import { DatePipe } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
 
})
export class FormComponent implements OnInit {

@Input() nuevoEmpleado?:EmpleadoModel
@Input() id?:number
@Input() action:string
@Input() title:string
@Input() origen:string

option=true;
@Output() salidaEmpleado=new EventEmitter<EmpleadoModel>();

coinciden:boolean=true;
confirmText=''
tipoUsuario=''
checked=false
// fechanuevo:any
constructor( private router:Router,
    private pipe:DatePipe) { }

  ngOnInit(): void {
    console.log('actioon',this.action);
    if(this.action=='insert'){
      this.checked=true;
      this.nuevoEmpleado=new EmpleadoModel();
    }

    var fechanuevo = new Date(this.nuevoEmpleado.fechaNacimiento); 
    var day = fechanuevo.getDate();
    var monthIndex = fechanuevo.getMonth();
    var year = fechanuevo.getFullYear();
    this.date={ year:year,month:monthIndex+1,day:day+1 };
    // console.log('esto llega:',this.nuevoEmpleado);
    
  }
   date: NgbDateStruct ;
  cancelar(){
    if(this.origen=='ep')
   {
    this.router.navigateByUrl('/empleados')
   }
  else{
    this.router.navigateByUrl('/administradores')

  }
}
activatePassInput(){
  this.checked=!this.checked;
  console.log('atributo',this.checked);

}

evaluarPass(pass:string){
  if(pass.length!=0){
    
    if(this.nuevoEmpleado.password !=pass  )
      {
    this.coinciden=false
    return;
    }
    this.coinciden=true
  }

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
  
    public postEmpleado(form:NgForm){
      // console.log('checked',this.checked);
     
      if (this.validarForm(form) )
      {
        var newfecha=this.date.year+'-'+this.date.month+'-'+this.date.day;
        this.nuevoEmpleado.fechaNacimiento=newfecha;
        if(this.nuevoEmpleado.administrador){
          this.nuevoEmpleado.administrador=1;
        }
        else{
          this.nuevoEmpleado.administrador=0;
        }
        console.log('esto se emmite:',this.nuevoEmpleado);
        
        if(!this.checked){
          this.salidaEmpleado.emit(this.nuevoEmpleado);
        }
        else {
          if( this.validarContraseñas(form)){
            this.salidaEmpleado.emit(this.nuevoEmpleado);
          }
        }
    
          }
    else{
      this.messagePopup("custom","Campos vacios ")
    }

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

  }

