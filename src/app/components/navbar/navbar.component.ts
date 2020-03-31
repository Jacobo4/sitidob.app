import { Component, OnInit } from '@angular/core';
import { faHome, faSchool } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*=============
  Icons
  ===============*/
  iconHome = faHome;
  iconGrades = faSchool;
}
