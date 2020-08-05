import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from '../services/service.index';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';

declare function init_plugins();
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public usuario:UsuarioModel
roles=3;
  constructor( private router:Router,
    private login:LoginService
    
   ) {
     
    
    }

   ngOnInit(): void {
     init_plugins() ;
    this.usuario=new UsuarioModel;
    }
  
    ingresar(form:NgForm){
      if(form.invalid){return}
      Swal.fire({
        allowOutsideClick:false,
        title: 'Validando',
        text: 'Espere Porfavor..',
        icon: 'info',
        // confirmButtonText: 'Cool'
      })
      
      Swal.showLoading();
      this.login.auth(this.usuario)
      .subscribe((res:string[])=>{
      let cantidadRoles=res.length;
      console.log('roles 1',res);
      
        if(cantidadRoles==1){
        this.login.guardarRol('MainAdmin')
        this.router.navigateByUrl('/dashboard');
        Swal.close();
        }
        else if(cantidadRoles>1){
          this.login.guardarRol('SecondaryAdmin')
          this.router.navigateByUrl('/dashboard');
          Swal.close();
          }
        else{
          Swal.fire({
            allowOutsideClick:false,
            title: 'Error!',
            text: 'Usuario o Contraseña Incorrectos',
            icon: 'error',
            // confirmButtonText: 'Cool'
          })
        }
      },error=>{
        Swal.fire({
          allowOutsideClick:false,
          title: 'Error!',
          text: 'No se obtuvo respuesta del servidor',
          icon: 'error',
          // confirmButtonText: 'Cool'
        })
   
      }
      )
    }
  

  }
