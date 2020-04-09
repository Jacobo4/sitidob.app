import { Component, OnInit } from '@angular/core';

import { AngularFireFunctions } from '@angular/fire/functions';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public email:string;
  public role:string;

  constructor(private fns: AngularFireFunctions) { }

  ngOnInit(): void {
  }

  public addAdminRole(){
    // console.log(this.email)
    const jacobo = this.fns.httpsCallable('addRole');
    jacobo({role: this.role, email: this.email }).subscribe(result => console.log(result))
  }

}
