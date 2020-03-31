import { Injectable } from '@angular/core';

/*=============
Firebase
===============*/
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


import 'firebase/firestore';

export interface StudentInterface {
  name: string,
  lastname: string,
  age: string
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentsCollection: AngularFirestoreCollection<StudentInterface>;
  students$: Observable<StudentInterface[]>;

  constructor(private db: AngularFirestore) {
    this.studentsCollection = db.collection<StudentInterface>('students');
    this.students$ = this.studentsCollection.valueChanges();
  }

  public getStudents() {
    return this.students$;
  }
}
