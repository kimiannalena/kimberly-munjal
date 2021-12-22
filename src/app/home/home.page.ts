import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  inputContent: string;
  visitCount: number = Number(localStorage.getItem("page_view"));


  constructor() {
    this.inputContent = 'Glass Card'
  }

  ngOnInit(): void {
    if (this.visitCount) {
      this.visitCount = Number(this.visitCount) + 1;
      localStorage.setItem("page_view", String(this.visitCount));
    } else {
      this.visitCount = 1;
      localStorage.setItem("page_view", String(1));
    }
  }
}
