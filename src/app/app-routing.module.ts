import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
import { LogoutGuard } from './guards/logout.guard';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate:[LogoutGuard] },
  { path: '**', component: PagenofoundComponent },
 ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes,{useHash:true})],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
export const APP_ROUTES=RouterModule.forRoot(routes,{useHash:true});
