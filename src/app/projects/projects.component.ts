import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Project } from "./interfaces/project";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProjectsComponent implements OnInit {

  httpResponse: any;
  projects: Project[];
  cardImageAlt: string;
  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = false;
  exitAllowedFlag: boolean = false;
  exitMessage: string;
  exitUrl: string;

  constructor(private http: HttpClient, private config: NgbCarouselConfig) {
    this.projects = [];
    this.httpResponse = "";
    this.cardImageAlt = "PROJECT";
    this.exitMessage = "";
    this.exitUrl = "";
    config.interval = 8000;
  }

  ngOnInit(): void {
    const url: string = "assets/projects/projects.json";
    this.http.get(url).subscribe((response) => {
      this.httpResponse = response;
      for (var item of this.httpResponse) {
        this.projects.push(item);
      }
    });
  }

  launchModal (url: string, privacy: boolean) {
    console.log("Entered click event");
    console.log(url);
    console.log(privacy);
    if (url === "") {
      this.exitMessage = "This project is not hosted on a server or version control forum. Please contact me for a private copy of code if possible!";
      this.exitAllowedFlag = false;
    } else if (privacy) {
      this.exitMessage = "This project is not open source. Please contact me for a private copy of source if possible, but you are free to check the demo!";
      this.exitAllowedFlag = true;
    } else {
      this.exitMessage = "You are exiting my portfolio website. Please confirm below this is indeed your intention!";
      this.exitAllowedFlag = true;
    }
    this.exitUrl = url;
    document.getElementsByClassName("modal-body")[0].innerHTML = this.exitMessage;
    console.log(this.exitMessage);
    console.log(this.exitAllowedFlag);
    console.log("Exited click event");
  }
}
