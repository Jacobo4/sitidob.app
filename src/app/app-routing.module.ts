import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent }    from './components/users/login/login.component';
import { ProfileComponent }  from './components/users/profile/profile.component'
import { RegisterComponent }  from './components/users/register/register.component'

const routes: Routes = [
  { path: '', component: LoginComponent, data:{ animation: 'slideLeft' }},
  { path: 'register', component: RegisterComponent, data:{ animation: 'slideRigth' }},
  { path: 'profile', component: ProfileComponent },
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
