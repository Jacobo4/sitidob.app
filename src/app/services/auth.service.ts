import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  registerUser() {}
  loginEmailUser() {}
  //
  loginWithGoogle() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afsAuth.auth.signOut();
  }

}
