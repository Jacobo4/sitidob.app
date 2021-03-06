import { Component, OnInit } from '@angular/core';
import { faHome, faSchool } from '@fortawesome/free-solid-svg-icons';


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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout();
  }
}
