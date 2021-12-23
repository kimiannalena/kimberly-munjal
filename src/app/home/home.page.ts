import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  inputContent: string;
  visitCount: number = 0;
  aktuellerKeks: string = localStorage.getItem("personal_keks")
  keks: string = 'meinPersönlicherKeks';


  constructor() {
    this.inputContent = 'Glass Card'
  }

  ngOnInit(): void {
    if (this.aktuellerKeks == this.keks) {
      console.log(this.visitCount);
      
    } else {
      localStorage.setItem("personal_keks", this.keks);
      this.visitCount = Number(this.visitCount) + 1;
    }
  }
}
