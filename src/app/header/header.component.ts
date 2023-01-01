import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  iconPath : string;
  iconAlt : string;

  constructor() {
    this.iconPath = "./assets/header/navbar-logo.png";
    this.iconAlt = "AM";
  }

  ngOnInit(): void {
  }
}
