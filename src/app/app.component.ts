import { Component } from '@angular/core';


/*=============
Router
===============*/
import { Router }   from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { slideRigth } from './route-animations'; //Animation


/*=============
Services
===============*/
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideRigth,
  ]
})

export class AppComponent {
  public isLogged: boolean = false;

  constructor(private router:Router, private authService: AuthService) {

    this.authService.isAuth().subscribe(
      auth => {
      if (auth) {
        this.isLogged = true;
        this.router.navigate(['home']);
        // console.log('loguea', auth);

      }else{
        // console.log('noLoguea');
        this.router.navigate(['']);
        this.isLogged = false;
      }
    });

  }

  prepareRoute(outlet: RouterOutlet) {
    //Retorna true si se cumplen las condiciones, es decir, hubo un cambio en la ruta
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
