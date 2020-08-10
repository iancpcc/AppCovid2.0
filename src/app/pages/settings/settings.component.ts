import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { EmployeesService } from '../../services/empleados/employees.service';
import { Router } from '@angular/router';
import { EmployeesComponent } from '../employees/employee.component';
import { EmpleadoModel } from '../../models/empleado.model';
import { Empleado } from '../../interfaces/empleado.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  cargando=true;
constructor(private adminservice:LoginService,
  private empleado:EmployeesService,
  private router:Router,
  private empleadosMethods:EmployeesComponent) { 

}

admin:EmpleadoModel
adminpass:EmpleadoModel
// nuevoAdmin:EmpleadoModel
date:any
rol:any
//Contraseña
confirmText=''
coinciden:boolean=true;
  ngOnInit() {
    this.admin=new EmpleadoModel();
    this.adminpass=new EmpleadoModel();
    // this.nuevoAdmin=new EmpleadoModel();

    this.obtenerAdministrador();

  }

 async obtenerAdministrador(){
    var id:number;
    await this.adminservice.getUserData()
   .then(res=>{      
       id=res.idUsuario;
       
      });
      this.empleado.obtenerEmpleadoxID(id)
      .subscribe((ep:Empleado)=>{
        this.admin.apellidosUsuario=ep.apellidosUsuario;
        this.admin.nombresUsuario=ep.nombresUsuario;
        this.admin.telefonoUsuario=ep.telefonoUsuario;
        this.admin.cedulaUsuario=ep.cedulaUsuario;
        this.admin.direccionUsuario=ep.direccionUsuario;
        this.admin.user=ep.user;
        this.admin.correoUsuario=ep.correoUsuario;
        this.admin.idUsuario=ep.idUsuario;
        
        this.adminpass.apellidosUsuario=ep.apellidosUsuario;
        this.adminpass.nombresUsuario=ep.nombresUsuario;
        this.adminpass.telefonoUsuario=ep.telefonoUsuario;
        this.adminpass.cedulaUsuario=ep.cedulaUsuario;
        this.adminpass.direccionUsuario=ep.direccionUsuario;
        this.adminpass.user=ep.user;
        this.adminpass.correoUsuario=ep.correoUsuario;
        this.adminpass.idUsuario=ep.idUsuario;
        this.adminpass.password="";
        

        this.cargando=false;

      })

    this.rol=this.adminservice.obtenerRol();
    console.log('rol',this.rol);

  }

  editUserAdmin(form:NgForm){
    
    if (this.validarForm(form) )
    {
      Swal.fire({
        allowOutsideClick:false,
        title: 'Actualizando',
        text: 'Espere Porfavor..',
        icon: 'info',
        // confirmButtonText: 'Cool'
      })
      
      Swal.showLoading();
    console.log('admin a editar:',this.admin);

    this.empleado.actualizarEmpleado(this.admin,this.admin.idUsuario).subscribe(res=>
      {
      if(res!=null){
        Swal.close();
      this.empleadosMethods.messagePopup("successedit");
       this.router.navigate(['/settings']);
       this.obtenerAdministrador();
       return;
     }
     Swal.close();
     this.empleadosMethods.messagePopup('error');
      },(error:any)=>{ //Error
        console.log('errpr',error);
        const sms=error['error'].error
        if(sms){

          this.empleadosMethods.messagePopup('custom',sms);
        }
        else{
          this.empleadosMethods.messagePopup('custom',"Ha ocurrido un error");
        }
      });

    }

  }

  editPassAdmin(form:NgForm){

    // console.log('admin a editar:',form);
    
    if (this.validarForm(form) && this.validarContraseñas(form) )
    {
      
      Swal.fire({
        allowOutsideClick:false,
        title: 'Actualizando',
        text: 'Espere Porfavor..',
        icon: 'info',
        // confirmButtonText: 'Cool'
      })
      
      Swal.showLoading();
    console.log('pass a editar:',this.adminpass);
    this.empleado.actualizarEmpleado(this.adminpass,this.adminpass.idUsuario).subscribe(res=>
      {
      if(res!=null){
        Swal.close();
      this.empleadosMethods.messagePopup("success");
       this.router.navigate(['/profile']);
       return;
     }
     Swal.close();
     this.empleadosMethods.messagePopup('error');
      },(error:any)=>{ //Error
        console.log('errpr',error);
        const sms=error['error'].error
        if(sms){

          this.empleadosMethods.messagePopup('custom',sms);
        }
        else{
          this.empleadosMethods.messagePopup('custom',"Ha ocurrido un error");
        }
      });

    }

    

  }

  evaluarPass(pass:string){
    if(pass.length!=0){
      
      if(this.adminpass.password !=pass  )
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
      
      if(form.controls['confirm'].value ==this.adminpass.password ){
        return true;
      }

      return false;
    }
    

}
