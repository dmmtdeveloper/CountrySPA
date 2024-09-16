import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/homePage/home-page.component';
import { AboutPageComponent } from './pages/aboutPage/about-page.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
