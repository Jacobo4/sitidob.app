import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';



/*===========
Firebase
============*/
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';


@Component({
  selector: 'grades-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  students: Observable<any[]>;

  clicked = false;

  constructor(private router: Router, firestore: AngularFirestore) {

    this.students = firestore.collection('students').valueChanges();

    console.log('la vuelta rara', this.students)
    this.students.forEach(element => {

      // let student = {
      //   name: element.map((x)=>x.name),
      //   lastname: element.map((x)=>x.lastname),
      //   age: element.map((x)=>x.age),
      // };
      //
      // let jacobo = element.map((x)=> x.name);

      console.log('estudiantes',element);
      // console.log(jacobo);

    });




  }



  ngOnInit(): void {
  }

  onClick(): void {
    this.clicked = true;
  }

}
