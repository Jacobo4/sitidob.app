import { Component } from '@angular/core';
import { faHome, faSchool } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /*=============
  Icons
  ===============*/
  iconHome = faHome;
  iconGrades = faSchool;
}
