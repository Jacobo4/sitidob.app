import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

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

import { StudentsService } from './services/students.service'

/*=============
Font awesomw for icons
===============*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/*=============
Components
===============*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore (database)
    AngularFireAuthModule, // auth
    AngularFireStorageModule,  // storage (to storage images,videos, etc)

    FontAwesomeModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
