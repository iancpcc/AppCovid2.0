import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employee.component';
import { ReportsComponent } from './reports/reports.component';
import { HotmapComponent } from '../components/hotmap/hotmap.component';
import { LoginGuard } from '../guards/login.guard';
import { MapboxComponent } from '../components/mapbox/mapbox.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminsComponent } from './admins/admins.component';
import { EditemployeeComponent } from './employees/editemployee/editemployee.component';
import { AddemployeeComponent } from './employees/addemployee/addemployee.component';
import { EditadminComponent } from './admins/editadmin/editadmin.component';
import { AddadminComponent } from './admins/addadmin/addadmin.component';
import { RolesGuard } from '../guards/roles.guard';
import { SettingsComponent } from './settings/settings.component';



const pagesRoutes: Routes = [
  { path: '', component: PagesComponent,canActivate:[LoginGuard],
  children:[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empleados', component: EmployeesComponent },
  { path: 'empleado/:id', component: EditemployeeComponent },
  { path: 'empleado', component: AddemployeeComponent },
  { path: 'administradores', component: AdminsComponent,canActivate:[RolesGuard] },
  { path: 'administrador/:id', component: EditadminComponent,canActivate:[RolesGuard] },
  { path: 'administrador', component: AddadminComponent,canActivate:[RolesGuard] },
  { path: 'reportes', component: ReportsComponent },
  { path: 'mapbox', component: MapboxComponent },
  { path: 'heatmap', component: HotmapComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '',redirectTo:'/dashboard',pathMatch:'full' },

  ]
}


];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);










