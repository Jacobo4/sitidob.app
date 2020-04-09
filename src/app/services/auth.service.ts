import { Injectable } from '@angular/core';

/*=============
Auth firebase
===============*/
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

/*=============
Rxjs
===============*/
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  // NOTE: Validar si esta logueado o no
  public isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }


  public registerUser(email:string, password:string) {
    return this.afsAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  // NOTE: Login with the username or with the email
  public loginWithEmail(email:string, password:string) {
    return this.afsAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public loginWithGoogle() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public logout() {
    this.afsAuth.auth.signOut();
  }

  public getUser(){
    return this.isAuth().subscribe(credentials => console.log(credentials))
  }

}
