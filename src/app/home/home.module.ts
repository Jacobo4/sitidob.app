import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*=============
Firebase
===============*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

/*=============
Forms
===============*/
import { FormsModule }   from '@angular/forms';

/*=============
Routing
===============*/
import { HomeRoutingModule } from './home-routing.module';

/*=============
Components
===============*/

import { HomeComponent } from './home.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireFunctionsModule,
  ]
})
export class HomeModule { }
