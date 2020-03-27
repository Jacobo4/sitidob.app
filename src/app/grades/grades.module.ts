import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*=============
Routing
===============*/
import { GradesRoutingModule } from './grades-routing.module';

/*=============
Firebase
===============*/
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ]
})

export class GradesModule { }
