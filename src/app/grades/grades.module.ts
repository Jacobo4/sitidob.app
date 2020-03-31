import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*=============
Routing
===============*/
import { GradesRoutingModule } from './grades-routing.module';

/*=============
Components
===============*/
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';



@NgModule({
  declarations: [StudentsComponent, TeachersComponent],
  imports: [
    CommonModule,
    GradesRoutingModule,

  ]
})

export class GradesModule { }
