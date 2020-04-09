import { Component, OnInit } from '@angular/core';

/*=============
Router
===============*/
import { Router }   from '@angular/router';

/*=============
Services
===============*/
import { AuthService }   from '../../../services/auth.service';

@Component({
  selector: 'users-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  public onRegisterUser(){
    this.authService.registerUser(this.user.email, this.user.password);
  }

}
