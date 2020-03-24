import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicked: boolean = false;


  options = [
    {
      name: 'home'
    },
    {
      name: 'Teachers'
    },
    {
      name: 'Students'
    }
  ]
  constructor(private router: Router) {
  }


  ngOnInit(): void {


  }


  handleClick() {
    this.clicked = this.clicked === true ? false : true;
  }
}
