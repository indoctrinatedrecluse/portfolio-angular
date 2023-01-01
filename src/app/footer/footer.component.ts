import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Link } from './interfaces/link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  iconPath: string;
  iconAlt: string;
  socials: Link[];
  httpResponse: any;

  constructor(private http: HttpClient) {
    this.iconPath = "./assets/footer/social-media.png";
    this.iconAlt = "->";
    this.socials = [];
    this.httpResponse = "";
  }

  ngOnInit(): void {
    const url: string = "assets/footer/socials.json";
    this.http.get(url).subscribe((response) => {
      this.httpResponse = response;
      for (var item of this.httpResponse) {
        this.socials.push(item);
      }
    });
  }
}
