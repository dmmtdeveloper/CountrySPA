import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/home-page.component';
import { AboutPageComponent } from './shared/pages/aboutPage/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
