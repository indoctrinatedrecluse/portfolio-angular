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
  loaderContext: any;
  timeoutDuration: number;

  constructor(private http:HttpClient) {
    this.experiences = [];
    this.activeTab = 0;
    this.httpResponse = "";
    this.logoAltString = "";
    this.loaderContext = "";
    this.timeoutDuration = 700;
  }

  ngOnInit(): void {
    this.loaderContext = $('#skills-loader').detach();
    const url: string = "assets/skills/experiences.json";
    this.http.get(url).subscribe((response) => {
      this.httpResponse = response;
      for (var item of this.httpResponse) {
        this.experiences.push(item);
      }
    });
    this.manageTab(this.activeTab);
  }

  manageTab(index: number) {
    var details = $('#details').detach();
    $('#skills-inner').append(this.loaderContext);
    this.activeTab = index;
    var context = this;
    setTimeout(function () {
      (document.getElementById("skills-loader") as any).classList.add("loader-hidden");
      context.loaderContext = $('#skills-loader').detach();
      $('#skills-inner').append(details);
    }, this.timeoutDuration);
  }
}
