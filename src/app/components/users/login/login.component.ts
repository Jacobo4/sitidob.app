import { Component, OnInit } from '@angular/core';

import { AuthService }   from '../../../services/auth.service';


@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  loginWithGoogle(){
    this.authService.loginWithGoogle();
  }

}
