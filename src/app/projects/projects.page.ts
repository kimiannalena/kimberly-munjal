import { TaggedTemplateExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

enum Status {
  'closed',
  'wip',
  'future'
}

class Tag {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

class Project {
  private readonly id: number;
  public readonly status: string;
  public title: string;
  public description: string;
  public beginning: Date;
  public ending: Date;
  public tags?: Tag[];

  constructor(status: string, title: string, description: string, beginning?: Date, ending?: Date, tags?: Tag[]) {
    this.status = status;
    this.title = title;
    this.description = description;
    this.beginning = beginning;
    this.ending = ending;
    this.tags = tags;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.page.html',
  styleUrls: ['projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: Project[] = [
    new Project(Status[0], 'MosChat', 'A chat system that is used by pharmacies within their website as an iFrame.', new Date(2022, 25, 2), new Date(2022, ), [new Tag('F19')]),
    new Project(Status[0], 'MosPython', 'Python API to nest JSONs - Proof of Concept', new Date(2022, 2, 1), new Date(2022, 2, 26), [new Tag('F19')]),
    new Project(Status[0], 'Feedbacksystem', 'A ticket system for my university that was developped by and for students.', new Date(2020, 8, 1), new Date(2021, 5, 31), [new Tag('THM')]),
    new Project(Status[0], 'Digital Business Card', 'CI/CD for my portfolio page', new Date(2021, 6, 9), new Date(), [new Tag('Personal')]),

  ];

  constructor() {

  }

  ngOnInit(): void {

  }
}
