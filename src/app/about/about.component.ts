import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";
import { Photo } from "./interfaces/photo";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [NgbCarouselConfig]
})
export class AboutComponent implements OnInit {

  carouselAltString: string;
  httpResponse: any;
  photos: Photo[];
  showNavigationArrows: boolean = false;
  showNavigationIndicators: boolean = false;
  links: any;
  timeoutDuration: number;
  componentProjects: string = "app-projects";
  componentSkills: string = "app-skills";

  constructor(private http: HttpClient, private config: NgbCarouselConfig) {
    this.carouselAltString = "AM";
    this.photos = [];
    this.links = {
      "usc": "https://www.usc.edu/",
      "msidc": "https://www.microsoft.com/en-in/msidc",
      "dig": "https://www.digite.com/"
    };
    this.httpResponse = "";
    this.timeoutDuration = 700;
    config.interval = 4000;
    config.animation = false;
    config.keyboard = false;
    config.pauseOnFocus = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    const url: string = "assets/about/photos.json";
    this.http.get(url).subscribe((response) => {
      this.httpResponse = response;
      for (var item of this.httpResponse) {
        this.photos.push(item);
      }
    });
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
