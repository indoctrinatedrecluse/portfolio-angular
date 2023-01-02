import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Experience } from "./interfaces/experience";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  httpResponse: any;
  activeTab: number;
  experiences: Experience[];
  logoAltString: string;

  constructor(private http:HttpClient) {
    this.experiences = [];
    this.activeTab = 0;
    this.httpResponse = "";
    this.logoAltString = "";
  }

  ngOnInit(): void {
    const url: string = "assets/skills/experiences.json";
    this.http.get(url).subscribe((response) => {
      this.httpResponse = response;
      for (var item of this.httpResponse) {
        this.experiences.push(item);
      }
    });
  }
}
