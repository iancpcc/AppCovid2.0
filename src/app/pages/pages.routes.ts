import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employee.component';
import { ReportsComponent } from './reports/reports.component';
import { HotmapComponent } from '../components/hotmap/hotmap.component';
import { LoginGuard } from '../guards/login.guard';
import { MapboxComponent } from '../components/mapbox/mapbox.component';
import { ProfileComponent } from './profile/profile.component';
import { MaintenanceComponent } from './employees/maintenance/maintenance.component';
import { AdminsComponent } from './admins/admins.component';



const pagesRoutes: Routes = [
  { path: '', component: PagesComponent,canActivate:[LoginGuard],
  children:[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empleados', component: EmployeesComponent },
  { path: 'empleado/:id', component: MaintenanceComponent },
  { path: 'empleado', component: MaintenanceComponent },
  { path: 'administradores', component: AdminsComponent },
  { path: 'reportes', component: ReportsComponent },
  { path: 'mapbox', component: MapboxComponent },
  { path: 'heatmap', component: HotmapComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '',redirectTo:'/dashboard',pathMatch:'full' },

  ]
}


];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);










