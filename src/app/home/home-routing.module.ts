import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/*=============
Components
===============*/
import { HomeComponent } from "./home.component";
import { AdminComponent } from "./admin/admin.component";




const routes: Routes = [

  { path: '',   component: AdminComponent},
  // { path: '',   component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
