import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
//paginas
import { LoginComponent } from './login/login.component';
import { PagesModule } from './pages/pages.module';
//Formularios
import { FormsModule } from '@angular/forms';
//Servicios
import { ServiceModule } from './services/service.module';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { LoginGuard } from './guards/login.guard';
import { EmployeesComponent } from './pages/employees/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule,
    // NoopAnimationsModule,
    
  ],
  providers:    [ DatePipe,LoginGuard,EmployeesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
