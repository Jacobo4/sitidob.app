import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*=============
Routing
===============*/
import { AppRoutingModule } from './app-routing.module';


/*=============
Modules
===============*/
import { HomeModule } from './home/home.module';

/*=============
Firebase
===============*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

/*=============
Font awesomw for icons
===============*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/*=============
Components
===============*/
import { AppComponent } from './app.component';




const firebaseConfig = {
  apiKey: "AIzaSyDH0TYdb7JvyW9_54L_RebKPvfzcC8v8uM",
  authDomain: "sitidob.firebaseapp.com",
  databaseURL: "https://sitidob.firebaseio.com",
  projectId: "sitidob",
  storageBucket: "sitidob.appspot.com",
  messagingSenderId: "918174807512",
  appId: "1:918174807512:web:6933ef74efafd844ef6ead",
  measurementId: "G-K5LG9ZPBBG"
};



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HomeModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,  // storage

    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
