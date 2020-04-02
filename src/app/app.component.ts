import { Component } from '@angular/core';

/*=============
Routing
===============*/
import { RouterOutlet } from '@angular/router';
import { slideRigth } from './route-animations'; //Animation
import { Router }   from '@angular/router';


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
  private isLogged: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        this.isLogged = true;
        this.router.navigate(['home'])
      }else{
        console.log('asd');
        this.router.navigate([''])
        this.isLogged = false;
      }
      // auth == true ? console.log('esta') : console.log('no esta');
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    //Retorna true si se cumplen las condiciones, es decir, hubo un cambio en la ruta
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
