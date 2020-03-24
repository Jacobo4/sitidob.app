import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/*=============
Components
===============*/
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
