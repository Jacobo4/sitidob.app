import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

/*=============
Forms
===============*/
import { FormsModule }   from '@angular/forms';

/*=============
Routing
===============*/
import { AppRoutingModule } from './app-routing.module';

/*=============
Firebase
===============*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


/*=============
Services
===============*/

import { StudentsService } from './services/students.service';
import { AuthService } from './services/auth.service';

/*=============
Font awesomw for icons
===============*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/*=============
Animations
===============*/

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*=============
Components
===============*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore (database)
    AngularFireAuthModule, // auth
    AngularFireStorageModule,  // storage (to storage images,videos, etc)

    FontAwesomeModule,

    BrowserAnimationsModule

  ],
  providers: [StudentsService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
