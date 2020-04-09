import { Component, OnInit,  NgZone } from '@angular/core';


/*=============
Router
===============*/
import { Router }   from '@angular/router';

/*=============
Services
===============*/
import { AuthService }   from '../../../services/auth.service';

/*=============
Icons
===============*/
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


// TODO: 1. Los campos de email los tengo que formatear debidamente, si tiene un espacio a final, no funciona

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Icons
  iconGoogle = faGoogle;
  public user = {
    email: '',
    password: ''
  }


  // TODO: Saber para que putas sirve NgZone
  constructor(private router: Router, private authService: AuthService, private ngZone: NgZone) { }

  ngOnInit(): void {

  }


  onLoginWithUser():void{
    this.authService.loginWithEmail(this.user.email, this.user.password).then( credential => this.router.navigate(['home']) )
  }

  OnLoginWithGoogle():void{
    this.authService.loginWithGoogle().then( credential => this.ngZone.run(() => this.router.navigate(['home']) ))
  }

}
