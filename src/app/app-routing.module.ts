import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";

// import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: '',   component: LoginComponent},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'grades',
    loadChildren: () => import('./grades/grades.module').then(m => m.GradesModule)
  },

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
