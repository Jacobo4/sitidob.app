import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TeachersComponent } from "./teachers/teachers.component";



const routes: Routes = [

  { path: 'teachers',   component: TeachersComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
