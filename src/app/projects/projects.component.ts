import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Project } from "./interfaces/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private http: HttpClient) {
    this.projects = [];
  }

  ngOnInit(): void {
  }
}
