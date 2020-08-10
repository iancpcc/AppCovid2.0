import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, PagenofoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  
exports: [
    HeaderComponent,
    SidebarComponent
]
})
export class SharedModule { }
