import { Component, OnInit } from '@angular/core';

enum Status {
  'closed',
  'wip',
  'future'
}

class Project {
  private readonly id: number;
  public readonly status: string;
  public title: string;
  public description: string;
  public beginning: Date;
  public ending: Date;

  constructor(status: string, title: string, description: string) {
    this.status = status;
    this.title = title;
    this.description = description;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.page.html',
  styleUrls: ['projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: Project[] = [
    new Project(Status[0], 'Feedbacksystem', 'A ticket system for my university that was developped by and for students'),
    new Project(Status[0], 'My Name Brand', 'CI/CD for my portfolio page')

  ];

  constructor() {

  }

  ngOnInit(): void {
      
  }
}
