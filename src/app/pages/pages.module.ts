import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employee.component';
import { MapsComponent } from './maps/maps.component';
//Graficas y mapas
import { ReportsComponent } from './reports/reports.component';
import { ComponentesModule } from '../components/componentes.module';
import { MaintenanceComponent } from './employees/maintenance/maintenance.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent, 
    EmployeesComponent, 
    MapsComponent,
    ReportsComponent,
    MaintenanceComponent,
    ProfileComponent
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
