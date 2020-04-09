import { Component, OnInit } from '@angular/core';
import { StudentsService }   from '../../services/students.service';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'grades-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],

})
export class TeachersComponent implements OnInit {
  students$: Observable<any[]>;
  students:any;
  clicked = false;

  constructor(private studentsService: StudentsService) {
    /*
    NOTE: El metodo subscribe es de los observables. Lo que hace es que se "subscribe"
    al observable que está retornando getStudents(), es decir, esta "observando" cambios en el observador(getStudents());
    */
    this.students$ = this.studentsService.getStudents().pipe(
      // NOTE: El primer map es de rxjs, el segundo map es el de Array.prototype.map()
      map(data => data.map((student) => student.lastname)),
      // tap(data => console.log('proebas', data)),
    );

    this.students$.subscribe({
      next: (e) => this.students = e,
      error: (error) => console.log('Error en observable', error),
      complete: () => console.log('complete')
    });

  }

  ngOnInit(): void {
    // async function pruebas() {
    //   await this.students
    //   console.log(this.students)
    // }

    // setTimeout(()=> console.log(this.students),2000)

  }

  onClick(): void {

  }

}
