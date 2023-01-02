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

  constructor(private http: HttpClient, private config: NgbCarouselConfig) {
    this.carouselAltString = "AM";
    this.photos = [];
    this.links = {
      "usc": "https://www.usc.edu/",
      "msidc": "https://www.microsoft.com/en-in/msidc",
      "dig": "https://www.digite.com/"
    };
    this.httpResponse = "";
    config.interval = 4000;
    config.animation = false;
    config.keyboard = false;
    config.pauseOnFocus = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    const url1: string = "assets/about/photos.json";
    this.http.get(url1).subscribe((response) => {
      this.httpResponse = response;
      for (var item of this.httpResponse) {
        this.photos.push(item);
      }
    });
  }
}
