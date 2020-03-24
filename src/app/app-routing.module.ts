import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";
import { TeachersComponent } from "./grades/teachers/teachers.component";
// import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';


const routes: Routes = [
  // { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',   component: HomeComponent},
  { path: 'grades/teachers',   component: TeachersComponent},
  { path: '',   component: LoginComponent},

  // { path: 'grades/teachers', component: grades/teachers/TeachersComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: 'home',
  //   component: HomeComponent,
  //   redirectTo: '/',
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
