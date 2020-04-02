import { Component, OnInit,  NgZone } from '@angular/core';

/*=============
Services
===============*/
import { AuthService }   from '../../../services/auth.service';

/*=============
Router
===============*/
import { Router }   from '@angular/router';

/*=============
Icons
===============*/
import { faGoogle } from '@fortawesome/free-brands-svg-icons';




@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Icons
  iconGoogle = faGoogle;
  // TODO: Saber para que putas sirve NgZone
  constructor(private router: Router, private authService: AuthService, private _ngZone: NgZone) { }

  ngOnInit(): void {

  }

  loginWithGoogle(){
    this.authService.loginWithGoogle().then( credential => this._ngZone.run(() => this.router.navigate(['home'])) )
  }

}
