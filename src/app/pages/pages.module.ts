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
import { ProfileComponent } from './profile/profile.component';
import { AdminsComponent } from './admins/admins.component';
import { EmployeesComponent } from './employees/employee.component';
import { AddemployeeComponent } from './employees/addemployee/addemployee.component';
import { EditemployeeComponent } from './employees/editemployee/editemployee.component';
import { AddadminComponent } from './admins/addadmin/addadmin.component';
import { EditadminComponent } from './admins/editadmin/editadmin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent, 
    MapsComponent,
    ReportsComponent,
    ProfileComponent,
    AdminsComponent,
    EmployeesComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    AddadminComponent,
    EditadminComponent,
    SettingsComponent
    
  ],
    exports: [
     
  ],
  imports: [
    SharedModule,
    CommonModule,
    PAGES_ROUTES,
    FormsModule,
    ComponentesModule,
    NgbModule

  ]
})
export class PagesModule { }
