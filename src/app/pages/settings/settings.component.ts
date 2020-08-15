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

cedulaValida:boolean;
correoValido:boolean;
usuarioValido:boolean;
  ngOnInit() {
    this.admin=new EmpleadoModel();
    this.adminpass=new EmpleadoModel();
    this.obtenerAdministrador();
    this.cedulaValida=true;
      this.correoValido=true;
      this.usuarioValido=true;

  }
  validarCedula(cedula:string){
     
    var cedula =  cedula.trim();
          var digitoVerificador =cedula.charAt(9);
          var cedulaArray =[cedula.charAt(0),cedula.charAt(1),cedula.charAt(2),cedula.charAt(3),cedula.charAt(4),cedula.charAt(5),cedula.charAt(6),cedula.charAt(7),cedula.charAt(8)];
          var coeficientes=[2,1,2,1,2,1,2,1,2];

          var suma=0;
          for (var i =0;i<=8;i++){
          var multi = coeficientes[i]* parseInt( cedulaArray[i]);
          if(multi >=10){
          multi=multi-9;
                        }
          suma=suma+multi;
          }

          var superior =suma - (suma%10) + 10;
          var digitoResultado=superior-suma;

          if(digitoResultado.toString() == digitoVerificador){
            return true;
          }
          else{
        return false;
          }
  }

  existeCedula(cedula:string){
    if(cedula.length==10){
      this.empleado.cedulaExistente(cedula)
      .subscribe((resp:any)=>{
        const resExiste=resp.existe;
        const resID=resp.ID;
        console.log('object',resp);
        
        if(!resExiste && resID==0  || resID==this.admin.idUsuario){
          console.log('cedula',this.cedulaValida);
          this.cedulaValida=true;
        
        }
        else{
          
          this.cedulaValida=false;
          console.log('cedula',this.cedulaValida);

        }
        
      })
      
    }
    
  }

  existeCorreo(correo:string){
    if(correo.length>=5){
      this.empleado.correoExistente(correo)
      .subscribe((resp:any)=>{
        const resExiste=resp.existe;
        const resID=resp.ID;
        if(!resExiste && resID==0 || resID==this.admin.idUsuario){
        this.correoValido=true;
        }
        else{
        this.correoValido=false;

        }
        
      })
      
    }
    
  }

  existeUsuario(username:string){
    if(username.length>=4){
      this.empleado.userNameExistente(username)
      .subscribe((resp:any)=>{
        const resExiste=resp.existe;
        const resID=resp.ID;
        if(!resExiste && resID==0 || resID==this.admin.idUsuario){
        this.usuarioValido=true;
        }
        else{
        this.usuarioValido=false;

        }
        
      })
      
    }
    
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
    this.empleado.actualizarEmpleado(this.admin,this.admin.idUsuario).subscribe(res=>
      {
      if(res!=null){
        Swal.close();
      this.empleadosMethods.messagePopup("successedit");
       this.router.navigate(['/settings']);
       this.obtenerAdministrador();
       location.reload();
       return;
     }
     Swal.close();
     this.empleadosMethods.messagePopup('error');
      },(error:any)=>{ //Error
        const sms=error['error'].error
        if(sms){

          this.empleadosMethods.messagePopup('custom',sms);
        }
        else{
          this.empleadosMethods.messagePopup('custom',"Ha ocurrido un error");
        }
      });

    }
    else{
      this.empleadosMethods.messagePopup("custom","Campos Vacios o Repetidos")
    }

  }

  editPassAdmin(form:NgForm){

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
    this.empleado.actualizarEmpleado(this.adminpass,this.adminpass.idUsuario).subscribe(res=>
      {
      if(res!=null){
        Swal.close();
      this.empleadosMethods.messagePopup("custom","Contraseña Actualizada, Inicie Sesion!!");
      
      this.adminservice.logout();
      setTimeout(function(){},2000); 
      this.router.navigate(["/login"]);
      console.log('paso ates de sperar');
      return;
     }
     Swal.close();
     this.empleadosMethods.messagePopup('error');
      },(error:any)=>{ //Error
        const sms=error['error'].error
        if(sms){

          this.empleadosMethods.messagePopup('custom',sms);
        }
        else{
          this.empleadosMethods.messagePopup('custom',"Ha ocurrido un error, Intente mas tarde");
        }
      });

    }
    else{
      this.empleadosMethods.messagePopup("custom","Contraseñas no Coinciden")
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
