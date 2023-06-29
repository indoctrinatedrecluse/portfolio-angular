import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  iconPath : string;
  iconAlt : string;
  componentHome: string = "app-home";
  componentAbout: string = "app-about";
  componentProjects: string = "app-projects";
  componentSkills: string = "app-skills";
  componentContact: string = "app-contact";
  timeoutDuration: number;

  constructor() {
    this.iconPath = "./assets/header/navbar-logo.png";
    this.iconAlt = "AM";
    this.timeoutDuration = 700;
  }

  ngOnInit(): void {
    this.display(this.componentHome);
  }

  display(component: string): void {
    for (var element of (document.getElementsByClassName("overseer") as any)) {
      element.className = "overseer component-hidden";
      console.log(element);
    }
    (document.getElementById("loader-principal") as any).classList.remove("loader-hidden");
    (document.getElementById("loader-principal") as any).classList.add("loader-visible");
    setTimeout(function () {
      (document.getElementById("loader-principal") as any).classList.remove("loader-visible");
      (document.getElementById("loader-principal") as any).classList.add("loader-hidden");
      document.getElementsByTagName(component)[0].className = "overseer component-visible";
    }, this.timeoutDuration);
  }
}
