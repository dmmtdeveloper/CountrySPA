import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/homePage/home-page.component';
import { AboutPageComponent } from './pages/aboutPage/about-page.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { SearchBoxComponent } from '../shared/Components/search-box/search-box.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
