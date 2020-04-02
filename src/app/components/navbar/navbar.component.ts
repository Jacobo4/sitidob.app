import { Component, OnInit } from '@angular/core';
import { faHome, faSchool } from '@fortawesome/free-solid-svg-icons';


/*=============
Routing
===============*/
import { Router }   from '@angular/router';


/*=============
Services
===============*/
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //Icons
  iconHome = faHome;
  iconGrades = faSchool;

  constructor(private rotuer: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout();
  }
}
