import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MapsComponent } from './maps/maps.component';
//Graficas y mapas
import { ReportsComponent } from './reports/reports.component';
import { ComponentesModule } from '../components/componentes.module';
import { MaintenanceComponent } from './employees/maintenance/maintenance.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminsComponent } from './admins/admins.component';
import { EmployeesComponent } from './employees/employee.component';
import { AddemployeeComponent } from './employees/addemployee/addemployee.component';
import { EditemployeeComponent } from './employees/editemployee/editemployee.component';
import { AddadminComponent } from './admins/addadmin/addadmin.component';
import { EditadminComponent } from './admins/editadmin/editadmin.component';


@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent, 
    MapsComponent,
    ReportsComponent,
    MaintenanceComponent,
    ProfileComponent,
    AdminsComponent,
    EmployeesComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    AddadminComponent,
    EditadminComponent
    
  ],
    exports: [
      DashboardComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    ComponentesModule

  ]
})
export class PagesModule { }
