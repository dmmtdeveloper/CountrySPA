import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './pages/aboutPage/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from '../shared/Components/search-box/search-box.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
