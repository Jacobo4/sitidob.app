import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  // registerUser() {}
  // loginEmailUser() {}

  public loginWithGoogle() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  public logout() {
    this.afsAuth.auth.signOut();
  }

}
