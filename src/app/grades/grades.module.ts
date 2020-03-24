import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';



@NgModule({
  declarations: [StudentsComponent, TeachersComponent],
  imports: [
    CommonModule
  ]
})
export class GradesModule { }
